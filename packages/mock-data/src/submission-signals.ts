import type { Submission } from "./types";

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export type SignalUrgency = "low" | "medium" | "high";

/** A group of submissions that share the same establishment + category. */
export interface GroupedSignal {
  /** Stable key for React rendering */
  id: string;
  establishmentId: string;
  establishmentName: string;
  category: string;
  city: string;
  region: string;
  /** Total number of raw submissions in this group */
  evidenceCount: number;
  urgency: SignalUrgency;
  /**
   * The most recently submitted item in the group — used to show a "last seen"
   * date without surfacing individual citizen data.
   */
  latestSubmittedAt: string;
  /**
   * Short excerpts from the first answer of up to 3 recent submissions.
   * Gives the reviewer a quick flavour of what's being reported.
   */
  recentExamples: string[];
  /** ISO-8601 string for the earliest submission in the 7-day rolling window */
  windowStart: string;
}

/** A city-level hotspot derived from grouped signals. */
export interface HotspotSignal {
  id: string;
  city: string;
  region: string;
  /** Total evidence count across all signals in this city */
  totalEvidence: number;
  urgency: SignalUrgency;
  /** The establishment with the most submissions in this city */
  topEstablishmentName: string;
  /** The category that appears most frequently in this city */
  dominantCategory: string;
  /** Signal IDs that feed into this hotspot */
  signalIds: string[];
}

// ---------------------------------------------------------------------------
// Urgency thresholds
// ---------------------------------------------------------------------------
// These numbers reflect the small-scale mock dataset (8 submissions total).
// In a real deployment you would tune them against actual volumes.

const URGENCY_HIGH_THRESHOLD = 3; // 3+ submissions in the window → high
const URGENCY_MED_THRESHOLD = 2; // 2 submissions → medium

function computeUrgency(count: number): SignalUrgency {
  if (count >= URGENCY_HIGH_THRESHOLD) return "high";
  if (count >= URGENCY_MED_THRESHOLD) return "medium";
  return "low";
}

// ---------------------------------------------------------------------------
// Time-window helper
// ---------------------------------------------------------------------------

/**
 * Returns the ISO start of a rolling window that ends "now".
 * `days = 7` → last-7-day window (prototype default).
 */
function rollingWindowStart(days: number): Date {
  const d = new Date();
  d.setDate(d.getDate() - days);
  d.setHours(0, 0, 0, 0);
  return d;
}

// ---------------------------------------------------------------------------
// Core grouping: submissions → GroupedSignal[]
// ---------------------------------------------------------------------------

/**
 * Groups `submissions` by (establishmentId, category) within a rolling
 * `windowDays`-day window.  Submissions outside the window still appear but
 * are counted separately from the urgency window so the analyst always sees
 * them in the queue.
 *
 * Only groups with 1+ submission are returned (every individual submission
 * forms a signal so the analyst can see the full picture).
 */
export function groupSubmissionsIntoSignals(
  submissions: Submission[],
  windowDays = 7
): GroupedSignal[] {
  const windowStart = rollingWindowStart(windowDays);

  // Bucket by "establishmentId::category"
  const buckets = new Map<
    string,
    {
      subs: Submission[];
      windowSubs: Submission[];
    }
  >();

  for (const sub of submissions) {
    const key = `${sub.establishmentId}::${sub.category}`;
    if (!buckets.has(key)) {
      buckets.set(key, { subs: [], windowSubs: [] });
    }
    const bucket = buckets.get(key)!;
    bucket.subs.push(sub);
    if (new Date(sub.submittedAt) >= windowStart) {
      bucket.windowSubs.push(sub);
    }
  }

  const signals: GroupedSignal[] = [];

  for (const [key, { subs, windowSubs }] of buckets.entries()) {
    // Sort bucket by date descending
    const sorted = [...subs].sort(
      (a, b) =>
        new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );

    const first = sorted[0]!;
    const evidenceCount = subs.length;

    // Urgency is based on how many arrived in the rolling window
    const windowCount = windowSubs.length > 0 ? windowSubs.length : evidenceCount;
    const urgency = computeUrgency(windowCount);

    // Pull a short excerpt from the first answer of up to 3 recent items
    const recentExamples: string[] = sorted.slice(0, 3).map((s) => {
      const firstAnswer = s.answers[0];
      if (!firstAnswer) return "";
      const raw = `${firstAnswer.label}: ${firstAnswer.value}`;
      return raw.length > 80 ? `${raw.slice(0, 78)}…` : raw;
    });

    signals.push({
      id: key,
      establishmentId: first.establishmentId,
      establishmentName: first.establishmentName,
      category: first.category,
      city: first.city,
      region: first.region,
      evidenceCount,
      urgency,
      latestSubmittedAt: first.submittedAt,
      recentExamples: recentExamples.filter(Boolean),
      windowStart: windowStart.toISOString(),
    });
  }

  // Sort: high urgency first, then by evidenceCount desc
  const urgencyWeight: Record<SignalUrgency, number> = {
    high: 0,
    medium: 1,
    low: 2,
  };
  signals.sort((a, b) => {
    const diff = urgencyWeight[a.urgency] - urgencyWeight[b.urgency];
    if (diff !== 0) return diff;
    return b.evidenceCount - a.evidenceCount;
  });

  return signals;
}

// ---------------------------------------------------------------------------
// Hotspot derivation: GroupedSignal[] → HotspotSignal[]
// ---------------------------------------------------------------------------

/**
 * Aggregates grouped signals by city to produce geographic hotspot cards.
 * Only cities with 2+ total evidence items are surfaced.
 */
export function deriveHotspots(signals: GroupedSignal[]): HotspotSignal[] {
  // Bucket by city
  const cityBuckets = new Map<
    string,
    {
      city: string;
      region: string;
      signals: GroupedSignal[];
      totalEvidence: number;
    }
  >();

  for (const sig of signals) {
    if (!cityBuckets.has(sig.city)) {
      cityBuckets.set(sig.city, {
        city: sig.city,
        region: sig.region,
        signals: [],
        totalEvidence: 0,
      });
    }
    const bucket = cityBuckets.get(sig.city)!;
    bucket.signals.push(sig);
    bucket.totalEvidence += sig.evidenceCount;
  }

  const hotspots: HotspotSignal[] = [];

  for (const bucket of cityBuckets.values()) {
    if (bucket.totalEvidence < 2) continue;

    // Top establishment: signal with highest evidenceCount
    const topSignal = [...bucket.signals].sort(
      (a, b) => b.evidenceCount - a.evidenceCount
    )[0]!;

    // Dominant category: most frequent by evidenceCount
    const catTotals = new Map<string, number>();
    for (const sig of bucket.signals) {
      catTotals.set(sig.category, (catTotals.get(sig.category) ?? 0) + sig.evidenceCount);
    }
    let dominantCategory = "";
    let maxCat = 0;
    for (const [cat, total] of catTotals.entries()) {
      if (total > maxCat) {
        maxCat = total;
        dominantCategory = cat;
      }
    }

    const urgency = computeUrgency(bucket.totalEvidence);

    hotspots.push({
      id: `hotspot::${bucket.city}`,
      city: bucket.city,
      region: bucket.region,
      totalEvidence: bucket.totalEvidence,
      urgency,
      topEstablishmentName: topSignal.establishmentName,
      dominantCategory,
      signalIds: bucket.signals.map((s) => s.id),
    });
  }

  // Sort hotspots: high urgency first, then by totalEvidence desc
  const urgencyWeight: Record<SignalUrgency, number> = {
    high: 0,
    medium: 1,
    low: 2,
  };
  hotspots.sort((a, b) => {
    const diff = urgencyWeight[a.urgency] - urgencyWeight[b.urgency];
    if (diff !== 0) return diff;
    return b.totalEvidence - a.totalEvidence;
  });

  return hotspots;
}

// ---------------------------------------------------------------------------
// Summary counts (for trailing badges)
// ---------------------------------------------------------------------------

export interface SignalSummary {
  total: number;
  high: number;
  medium: number;
  low: number;
}

export function summariseSignals(signals: GroupedSignal[]): SignalSummary {
  return signals.reduce(
    (acc, s) => {
      acc.total += 1;
      acc[s.urgency] += 1;
      return acc;
    },
    { total: 0, high: 0, medium: 0, low: 0 }
  );
}
