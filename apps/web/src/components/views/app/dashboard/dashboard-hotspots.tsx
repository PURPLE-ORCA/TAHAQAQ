"use client";

import { useMemo } from "react";
import { MapPin, Repeat, Layers } from "lucide-react";
import {
  groupSubmissionsIntoSignals,
  deriveHotspots,
  type GroupedSignal,
  type HotspotSignal,
  type SignalUrgency,
} from "@tahaqaq/mock-data";
import type { Submission } from "@tahaqaq/mock-data";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "./dashboard-card";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Severity badge (shared visual language with old component)
// ---------------------------------------------------------------------------

function SeverityBadge({ severity }: { severity: SignalUrgency }) {
  const styles: Record<SignalUrgency, string> = {
    high: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-900/35",
    medium:
      "bg-[#fff8e2] dark:bg-amber-950/20 text-[#584400] dark:text-amber-400 border border-[#F2C94C]/35 dark:border-amber-900/35",
    low: "bg-[#eef6ea] dark:bg-emerald-950/20 text-[#006020] dark:text-emerald-400 border border-[#00A040]/20 dark:border-emerald-900/35",
  };

  return (
    <span
      className={cn(
        "rounded-full px-2 py-0.5 text-[9px] font-bold font-mono tracking-[0.08em] border",
        styles[severity]
      )}
    >
      {severity}
    </span>
  );
}

// ---------------------------------------------------------------------------
// Repeat-offender cards derived from GroupedSignal[]
// (replaces old report-based repeat offender logic)
// ---------------------------------------------------------------------------

function RepeatOffenderCard({ signal }: { signal: GroupedSignal }) {
  const latestExample = signal.recentExamples[0] ?? null;
  return (
    <div className="rounded-xl border border-border/40 bg-white dark:bg-card/25 p-3.5 shadow-sm transition-colors hover:border-[#006020]/25">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Text
            as="span"
            variant="small"
            className="font-semibold text-foreground dark:text-white block"
          >
            {signal.establishmentName}
          </Text>
          {latestExample && (
            <Text
              as="p"
              variant="muted"
              className="mt-1 text-xs italic leading-normal line-clamp-2"
            >
              &ldquo;{latestExample}&rdquo;
            </Text>
          )}
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <SeverityBadge severity={signal.urgency} />
          <span className="text-[10px] font-mono text-muted-foreground font-medium">
            {signal.evidenceCount}{" "}
            {signal.evidenceCount === 1 ? "submission" : "submissions"}
          </span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Category cluster cards
// ---------------------------------------------------------------------------

interface CategoryCluster {
  id: string;
  establishmentName: string;
  category: string;
  evidenceCount: number;
  urgency: SignalUrgency;
}

function CategoryClusterCard({ item }: { item: CategoryCluster }) {
  return (
    <div className="rounded-xl border border-border/40 bg-white dark:bg-card/25 p-3.5 shadow-sm transition-colors hover:border-[#006020]/25">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Text
            as="span"
            variant="small"
            className="font-semibold text-foreground dark:text-white block"
          >
            {item.establishmentName}
          </Text>
          <span className="inline-flex items-center gap-1 mt-1 rounded bg-[#eef6ea] dark:bg-[#2b322a] px-1.5 py-0.5 text-[10px] font-mono font-medium text-[#006020] dark:text-[#a1f6a4]">
            {item.category}
          </span>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <SeverityBadge severity={item.urgency} />
          <span className="text-[10px] font-mono text-muted-foreground font-medium">
            {item.evidenceCount}{" "}
            {item.evidenceCount === 1 ? "submission" : "submissions"}
          </span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hotspot card
// ---------------------------------------------------------------------------

function HotspotCard({ hotspot }: { hotspot: HotspotSignal }) {
  return (
    <div className="rounded-xl border border-border/40 bg-white dark:bg-card/25 p-3.5 shadow-sm transition-colors hover:border-[#006020]/25">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <Text
            as="span"
            variant="small"
            className="font-semibold text-foreground dark:text-white block"
          >
            {hotspot.city}
          </Text>
          <Text as="p" variant="muted" className="mt-1 text-xs">
            top risk:{" "}
            <span className="font-medium text-foreground/80 dark:text-white/80">
              {hotspot.topEstablishmentName}
            </span>
          </Text>
          <Text as="p" variant="muted" className="mt-0.5 text-xs">
            dominant category:{" "}
            <span className="font-medium text-foreground/80 dark:text-white/80">
              {hotspot.dominantCategory}
            </span>
          </Text>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          <SeverityBadge severity={hotspot.urgency} />
          <span className="text-[10px] font-mono text-muted-foreground font-medium">
            {hotspot.totalEvidence} evidence
          </span>
          <span className="text-[10px] font-mono text-muted-foreground font-medium">
            {hotspot.signalIds.length}{" "}
            {hotspot.signalIds.length === 1 ? "signal" : "signals"}
          </span>
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function EmptyRow({ message }: { message: string }) {
  return (
    <div className="rounded-xl border border-border/30 bg-muted/20 py-3 px-4 text-center">
      <Text as="p" variant="muted" className="text-xs">
        {message}
      </Text>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

interface DashboardHotspotsProps {
  submissions: Submission[];
}

export function DashboardHotspots({ submissions }: DashboardHotspotsProps) {
  const { repeatOffenders, categoryClusters, hotspots, totalPatterns } =
    useMemo(() => {
      const signals = groupSubmissionsIntoSignals(submissions);
      const derivedHotspots = deriveHotspots(signals);

      // Repeat offenders: signals where same establishment appears 2+ times
      // across categories — here we just use high/medium urgency signals
      const repeatOff = signals
        .filter((s) => s.evidenceCount >= 2)
        .slice(0, 3);

      // Category clusters: unique (establishment, category) pairs
      // — already what each GroupedSignal is; show top 3 by evidence
      const catClusters: CategoryCluster[] = signals.slice(0, 3).map((s) => ({
        id: s.id,
        establishmentName: s.establishmentName,
        category: s.category,
        evidenceCount: s.evidenceCount,
        urgency: s.urgency,
      }));

      const total =
        repeatOff.length + catClusters.length + derivedHotspots.length;

      return {
        repeatOffenders: repeatOff,
        categoryClusters: catClusters,
        hotspots: derivedHotspots.slice(0, 3),
        totalPatterns: total,
      };
    }, [submissions]);

  return (
    <DashboardCard
      title="hotspot detection"
      trailing={
        <Text
          as="span"
          className="font-mono text-[11px] text-[#006020] dark:text-[#a1f6a4] tracking-[0.12em] font-semibold"
        >
          {totalPatterns} {totalPatterns === 1 ? "pattern" : "patterns"} found
        </Text>
      }
    >
      {/* Source label distinguishing grouped signals from raw submissions */}
      <div className="flex items-center gap-2 rounded-2xl border border-[#006020]/12 bg-[#f8fcf5] px-3 py-2 text-xs text-muted-foreground mb-5">
        <Layers className="size-4 text-[#006020] shrink-0" />
        <span>
          derived from grouped signals — not raw submission counts
        </span>
      </div>

      <div className="flex flex-col gap-5">
        {/* Repeat offenders */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Repeat className="size-4 text-[#006020] dark:text-[#a1f6a4]" />
            <Text
              as="span"
              variant="small"
              className="font-semibold text-foreground/90 tracking-[0.08em]"
            >
              repeat signals
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            {repeatOffenders.length === 0 ? (
              <EmptyRow message="no repeat signals in current view" />
            ) : (
              repeatOffenders.map((signal) => (
                <RepeatOffenderCard key={signal.id} signal={signal} />
              ))
            )}
          </div>
        </div>

        <hr className="border-border/30" />

        {/* Category clusters */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Layers className="size-4 text-[#006020] dark:text-[#a1f6a4]" />
            <Text
              as="span"
              variant="small"
              className="font-semibold text-foreground/90 tracking-[0.08em]"
            >
              category clusters
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            {categoryClusters.length === 0 ? (
              <EmptyRow message="no category clusters in current view" />
            ) : (
              categoryClusters.map((item) => (
                <CategoryClusterCard key={item.id} item={item} />
              ))
            )}
          </div>
        </div>

        <hr className="border-border/30" />

        {/* Geographic hotspots */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="size-4 text-[#006020] dark:text-[#a1f6a4]" />
            <Text
              as="span"
              variant="small"
              className="font-semibold text-foreground/90 tracking-[0.08em]"
            >
              geographic hotspots
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            {hotspots.length === 0 ? (
              <EmptyRow message="no geographic hotspots in current view" />
            ) : (
              hotspots.map((hotspot) => (
                <HotspotCard key={hotspot.id} hotspot={hotspot} />
              ))
            )}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}
