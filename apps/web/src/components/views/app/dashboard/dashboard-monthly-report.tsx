"use client";

import { useMemo } from "react";
import {
  FileText,
  BarChart3,
  MapPin,
  Tag,
  AlertTriangle,
  CheckCircle2,
  Layers,
  Calendar,
  Filter,
} from "lucide-react";
import {
  groupSubmissionsIntoSignals,
  deriveHotspots,
  summariseSignals,
  type SignalUrgency,
} from "@tahaqaq/mock-data";
import type { Submission, SubmissionFilters } from "@tahaqaq/mock-data";
import { getActiveFilterChips, hasActiveFilters, dateRangeOptions } from "@tahaqaq/mock-data";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "./dashboard-card";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Scope banner — shows which geography + date window is active
// ---------------------------------------------------------------------------

interface ReportScopeProps {
  filters: SubmissionFilters;
  submissionCount: number;
}

function ReportScope({ filters, submissionCount }: ReportScopeProps) {
  const chips = getActiveFilterChips(filters);
  const isFiltered = hasActiveFilters(filters);

  const dateLabel =
    filters.dateRange === "all"
      ? "all time"
      : (dateRangeOptions.find((o) => o.key === filters.dateRange)?.label ?? filters.dateRange);

  const geoLabel = [filters.city, filters.region]
    .filter(Boolean)
    .join(", ") || "all regions";

  return (
    <div className="rounded-2xl border border-[#006020]/15 bg-gradient-to-r from-[#006020]/5 to-[#00A040]/3 p-4">
      <div className="flex flex-wrap items-start gap-4">
        {/* Generated badge */}
        <div className="flex items-center gap-2">
          <span className="size-2 animate-pulse rounded-full bg-[#00A040]" />
          <span className="font-mono text-[10px] font-semibold tracking-[0.12em] text-[#006020]">
            report scope
          </span>
        </div>

        {/* Scope chips */}
        <div className="flex flex-wrap items-center gap-2">
          <ScopeChip icon={Calendar} label="period" value={dateLabel} />
          <ScopeChip icon={MapPin} label="geography" value={geoLabel} />
          {filters.category && (
            <ScopeChip icon={Tag} label="category" value={filters.category.toLowerCase()} />
          )}
          {filters.establishment && (
            <ScopeChip icon={Layers} label="establishment" value={filters.establishment.toLowerCase()} />
          )}
          {!isFiltered && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-border/40 bg-white/70 px-2.5 py-1 font-mono text-[10px] text-muted-foreground">
              <Filter className="size-3 opacity-60" />
              no active filters — showing all data
            </span>
          )}
        </div>

        {/* Submission count */}
        <span className="ml-auto font-mono text-[11px] font-semibold text-[#006020]">
          {submissionCount} {submissionCount === 1 ? "submission" : "submissions"} in scope
        </span>
      </div>
    </div>
  );
}

function ScopeChip({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#006020]/20 bg-[#eef6ea] px-2.5 py-1 text-[11px] text-[#006020]">
      <Icon className="size-3 opacity-70" />
      <span className="font-medium tracking-[0.04em]">{label}</span>
      <span className="text-[#006020]/50">·</span>
      <span>{value}</span>
    </span>
  );
}

// ---------------------------------------------------------------------------
// Stat tile (total submissions + signal breakdown)
// ---------------------------------------------------------------------------

interface StatTileProps {
  label: string;
  value: number | string;
  sub?: string;
  accent?: "green" | "amber" | "red" | "default";
}

function StatTile({ label, value, sub, accent = "default" }: StatTileProps) {
  const accentClasses: Record<NonNullable<StatTileProps["accent"]>, string> = {
    green: "border-l-[#00A040] bg-[#eef6ea]",
    amber: "border-l-amber-400 bg-amber-50",
    red: "border-l-red-400 bg-red-50",
    default: "border-l-border bg-white",
  };

  return (
    <div
      className={cn(
        "rounded-xl border border-border/40 border-l-4 p-3.5 flex flex-col gap-1",
        accentClasses[accent]
      )}
    >
      <span className="font-mono text-[10px] font-semibold tracking-[0.1em] text-muted-foreground">
        {label}
      </span>
      <span className="text-2xl font-bold text-foreground">{value}</span>
      {sub && (
        <span className="text-[10px] text-muted-foreground font-mono">{sub}</span>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Category bar (top categories by submission count)
// ---------------------------------------------------------------------------

interface CategoryRow {
  category: string;
  count: number;
  pct: number;
}

function CategoryBar({ row, rank }: { row: CategoryRow; rank: number }) {
  return (
    <div className="flex items-center gap-3">
      <span className="w-4 shrink-0 font-mono text-[10px] font-bold text-muted-foreground/60">
        {rank}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2 mb-1">
          <span className="text-xs font-medium text-foreground truncate">{row.category.toLowerCase()}</span>
          <span className="shrink-0 font-mono text-[10px] font-semibold text-muted-foreground">
            {row.count} ({row.pct}%)
          </span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-[#e9f0e4]">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#006020] to-[#00A040] transition-all"
            style={{ width: `${row.pct}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Signal urgency row
// ---------------------------------------------------------------------------

const URGENCY_CONFIG: Record<
  SignalUrgency,
  { label: string; dot: string; badge: string; badgeText: string }
> = {
  high: {
    label: "high urgency",
    dot: "bg-red-500",
    badge: "bg-red-50 text-red-700 border-red-200/50",
    badgeText: "requires immediate review",
  },
  medium: {
    label: "medium urgency",
    dot: "bg-amber-400",
    badge: "bg-amber-50 text-amber-700 border-amber-200/50",
    badgeText: "monitor closely",
  },
  low: {
    label: "low urgency",
    dot: "bg-emerald-500",
    badge: "bg-[#eef6ea] text-[#006020] border-[#00A040]/20",
    badgeText: "routine",
  },
};

function SignalUrgencyRow({
  urgency,
  count,
  total,
}: {
  urgency: SignalUrgency;
  count: number;
  total: number;
}) {
  const cfg = URGENCY_CONFIG[urgency];
  const pct = total > 0 ? Math.round((count / total) * 100) : 0;

  return (
    <div className="flex items-center gap-3 py-2 border-b border-border/20 last:border-0">
      <span className={cn("size-2 rounded-full shrink-0", cfg.dot)} />
      <span className="flex-1 text-xs font-medium text-foreground">{cfg.label}</span>
      <span
        className={cn(
          "rounded-full border px-2 py-0.5 text-[10px] font-medium font-mono",
          cfg.badge
        )}
      >
        {cfg.badgeText}
      </span>
      <span className="w-8 text-right font-mono text-xs font-bold text-foreground">
        {count}
      </span>
      <span className="w-8 text-right font-mono text-[10px] text-muted-foreground">
        {pct}%
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Hotspot summary row
// ---------------------------------------------------------------------------

function HotspotRow({
  city,
  evidence,
  dominantCategory,
  urgency,
  rank,
}: {
  city: string;
  evidence: number;
  dominantCategory: string;
  urgency: SignalUrgency;
  rank: number;
}) {
  const cfg = URGENCY_CONFIG[urgency];

  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-border/20 last:border-0">
      <span className="w-4 shrink-0 font-mono text-[10px] font-bold text-muted-foreground/60">
        {rank}
      </span>
      <div className="flex-1 min-w-0">
        <span className="block text-xs font-semibold text-foreground">{city.toLowerCase()}</span>
        <span className="text-[10px] text-muted-foreground font-mono">
          dominant: {dominantCategory.toLowerCase()}
        </span>
      </div>
      <span className={cn("rounded-full border px-2 py-0.5 text-[9px] font-bold font-mono", cfg.badge)}>
        {urgency}
      </span>
      <span className="font-mono text-xs font-bold text-foreground w-12 text-right">
        {evidence} ev.
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function ReportEmpty() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border/50 bg-[#f8fcf5] py-12 text-center">
      <CheckCircle2 className="size-8 text-[#006020] opacity-40" />
      <Text as="p" className="text-sm font-semibold text-foreground">
        no data in scope
      </Text>
      <Text as="p" className="text-xs text-muted-foreground">
        adjust the filters above to include submissions in this view
      </Text>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

interface DashboardMonthlyReportProps {
  submissions: Submission[];
  filters: SubmissionFilters;
}

export function DashboardMonthlyReport({
  submissions,
  filters,
}: DashboardMonthlyReportProps) {
  const report = useMemo(() => {
    const signals = groupSubmissionsIntoSignals(submissions);
    const summary = summariseSignals(signals);
    const hotspots = deriveHotspots(signals);

    // Top categories by raw submission count
    const catCounts = new Map<string, number>();
    for (const s of submissions) {
      catCounts.set(s.category, (catCounts.get(s.category) ?? 0) + 1);
    }
    const total = submissions.length;
    const topCategories: CategoryRow[] = [...catCounts.entries()]
      .map(([category, count]) => ({
        category,
        count,
        pct: total > 0 ? Math.round((count / total) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);

    // Top hotspots (up to 5)
    const topHotspots = hotspots.slice(0, 5);

    return { signals, summary, topCategories, topHotspots, total };
  }, [submissions]);

  const isEmpty = report.total === 0;

  // Report generation timestamp (client-side, prototype only)
  const generatedAt = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <DashboardCard
      title="monthly report"
      hasGoldAccent
      trailing={
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] text-muted-foreground">
            generated {generatedAt}
          </span>
          <span className="rounded-full bg-[#006020]/8 px-2 py-0.5 font-mono text-[10px] font-semibold text-[#006020]">
            prototype
          </span>
        </div>
      }
    >
      <div className="flex flex-col gap-5">
        {/* Source note */}
        <div className="flex items-center gap-2 rounded-2xl border border-[#006020]/12 bg-[#f8fcf5] px-3 py-2 text-xs text-muted-foreground">
          <FileText className="size-4 text-[#006020] shrink-0" />
          <span>
            derived from filtered submissions and grouped signals — reflects the active scope below
          </span>
        </div>

        {/* Scope banner */}
        <ReportScope filters={filters} submissionCount={report.total} />

        {isEmpty ? (
          <ReportEmpty />
        ) : (
          <>
            {/* ── Section 1: totals ─────────────────────────────────────────── */}
            <div>
              <SectionHeader icon={BarChart3} label="submission totals" />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                <StatTile
                  label="total submissions"
                  value={report.total}
                  sub="in selected scope"
                  accent="green"
                />
                <StatTile
                  label="grouped signals"
                  value={report.summary.total}
                  sub="unique est. × category pairs"
                  accent="default"
                />
                <StatTile
                  label="high urgency"
                  value={report.summary.high}
                  sub="signals needing review"
                  accent="red"
                />
                <StatTile
                  label="low urgency"
                  value={report.summary.low}
                  sub="routine signals"
                  accent="green"
                />
              </div>
            </div>

            {/* ── Section 2: signal breakdown ───────────────────────────────── */}
            <div>
              <SectionHeader icon={AlertTriangle} label="signal urgency breakdown" />
              <div className="rounded-xl border border-border/40 bg-white p-4 shadow-sm">
                {(["high", "medium", "low"] as SignalUrgency[]).map((u) => (
                  <SignalUrgencyRow
                    key={u}
                    urgency={u}
                    count={report.summary[u]}
                    total={report.summary.total}
                  />
                ))}
                {report.summary.total === 0 && (
                  <p className="py-2 text-center text-xs text-muted-foreground">
                    no signals detected in this scope
                  </p>
                )}
              </div>
            </div>

            {/* ── Section 3: top categories ─────────────────────────────────── */}
            <div>
              <SectionHeader icon={Tag} label="top categories" />
              {report.topCategories.length === 0 ? (
                <p className="rounded-xl border border-border/30 bg-muted/20 px-4 py-3 text-center text-xs text-muted-foreground">
                  no categories in scope
                </p>
              ) : (
                <div className="rounded-xl border border-border/40 bg-white p-4 shadow-sm flex flex-col gap-3">
                  {report.topCategories.map((row, i) => (
                    <CategoryBar key={row.category} row={row} rank={i + 1} />
                  ))}
                </div>
              )}
            </div>

            {/* ── Section 4: top hotspots ───────────────────────────────────── */}
            <div>
              <SectionHeader icon={MapPin} label="top geographic hotspots" />
              {report.topHotspots.length === 0 ? (
                <p className="rounded-xl border border-border/30 bg-muted/20 px-4 py-3 text-center text-xs text-muted-foreground">
                  no hotspots detected — insufficient evidence concentration
                </p>
              ) : (
                <div className="rounded-xl border border-border/40 bg-white p-4 shadow-sm">
                  {report.topHotspots.map((h, i) => (
                    <HotspotRow
                      key={h.id}
                      rank={i + 1}
                      city={h.city}
                      evidence={h.totalEvidence}
                      dominantCategory={h.dominantCategory}
                      urgency={h.urgency}
                    />
                  ))}
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </DashboardCard>
  );
}

// ---------------------------------------------------------------------------
// Internal: section header
// ---------------------------------------------------------------------------

function SectionHeader({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2 mb-3">
      <Icon className="size-4 text-[#006020]" />
      <Text
        as="span"
        variant="small"
        className="font-semibold text-foreground/90 tracking-[0.08em]"
      >
        {label}
      </Text>
    </div>
  );
}
