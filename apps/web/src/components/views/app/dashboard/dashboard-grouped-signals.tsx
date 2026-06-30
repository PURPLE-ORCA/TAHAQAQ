"use client";

import React, { useMemo } from "react";
import { Activity, AlertTriangle, CheckCircle2, ChevronRight } from "lucide-react";
import {
  groupSubmissionsIntoSignals,
  summariseSignals,
  type GroupedSignal,
  type SignalUrgency,
} from "@tahaqaq/mock-data";
import type { Submission } from "@tahaqaq/mock-data";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "./dashboard-card";
import { cn } from "@/lib/utils";

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------

const URGENCY_STYLES: Record<
  SignalUrgency,
  {
    card: string;
    badge: string;
    badgeText: string;
    icon: string;
    label: string;
  }
> = {
  high: {
    card: "bg-red-50 dark:bg-red-950/10 border-l-red-500 border-y-red-100 border-r-red-100 dark:border-red-950/20",
    badge:
      "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300",
    badgeText: "🔴 high urgency",
    icon: "text-red-500 dark:text-red-400",
    label: "high",
  },
  medium: {
    card: "bg-amber-50 dark:bg-amber-950/10 border-l-amber-500 border-y-amber-100 border-r-amber-100 dark:border-amber-950/20",
    badge:
      "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    badgeText: "🟡 medium urgency",
    icon: "text-amber-500 dark:text-amber-400",
    label: "medium",
  },
  low: {
    card: "bg-green-50 dark:bg-green-950/10 border-l-green-500 border-y-green-100 border-r-green-100 dark:border-green-950/20",
    badge:
      "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
    badgeText: "🟢 low urgency",
    icon: "text-emerald-600 dark:text-emerald-400",
    label: "low",
  },
};

function formatRelativeDate(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffMs = now.getTime() - d.getTime();
  const diffH = Math.floor(diffMs / (1000 * 60 * 60));
  if (diffH < 1) return "less than an hour ago";
  if (diffH < 24) return `${diffH}h ago`;
  const diffD = Math.floor(diffH / 24);
  if (diffD === 1) return "yesterday";
  return `${diffD} days ago`;
}

function SignalCard({ signal }: { signal: GroupedSignal }) {
  const styles = URGENCY_STYLES[signal.urgency];

  return (
    <div
      className={cn(
        "rounded-xl border border-l-4 p-3.5 flex flex-col gap-2 transition-all hover:translate-x-0.5",
        styles.card
      )}
    >
      {/* Header row */}
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
        <Text as="span" className="font-bold text-sm text-foreground">
          {signal.establishmentName}
        </Text>
        <Text as="span" variant="muted" className="text-xs">
          {signal.category} · {signal.city}
        </Text>
      </div>

      {/* Badge row */}
      <div className="flex flex-wrap items-center gap-2 mt-0.5">
        <span
          className={cn(
            "inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm",
            styles.badge
          )}
        >
          {styles.badgeText}
        </span>

        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/70 dark:bg-black/25 text-muted-foreground border border-border/30">
          {signal.evidenceCount}{" "}
          {signal.evidenceCount === 1 ? "submission" : "submissions"}
        </span>

        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium text-muted-foreground border border-border/20 bg-white/60 dark:bg-black/20">
          last seen {formatRelativeDate(signal.latestSubmittedAt)}
        </span>
      </div>

      {/* Recent examples */}
      {signal.recentExamples.length > 0 && (
        <div className="flex flex-col gap-1 mt-1">
          {signal.recentExamples.map((ex, i) => (
            <Text
              key={i}
              as="p"
              className="text-xs italic text-muted-foreground leading-relaxed pl-2 border-l border-border/40"
            >
              &ldquo;{ex}&rdquo;
            </Text>
          ))}
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Label that distinguishes raw submissions from grouped signals
// ---------------------------------------------------------------------------

function SourceLabel() {
  return (
    <div className="flex items-center gap-2 rounded-2xl border border-[#006020]/12 bg-[#f8fcf5] px-3 py-2 text-xs text-muted-foreground">
      <Activity className="size-4 text-[#006020] shrink-0" />
      <span>
        grouped from raw submissions — each card represents a unique
        establishment + category pair
      </span>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Empty state
// ---------------------------------------------------------------------------

function EmptySignals({ hasFilters }: { hasFilters: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border/50 bg-[#f8fcf5] py-10 text-center">
      <CheckCircle2 className="size-8 text-[#006020] opacity-40" />
      <Text as="p" className="text-sm font-semibold text-foreground">
        no signals detected
      </Text>
      <Text as="p" className="text-xs text-muted-foreground">
        {hasFilters
          ? "no submissions match the active filters"
          : "the queue is clear — no grouped signals to display"}
      </Text>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

interface DashboardGroupedSignalsProps {
  submissions: Submission[];
}

export function DashboardGroupedSignals({
  submissions,
}: DashboardGroupedSignalsProps) {
  const { signals, summary } = useMemo(() => {
    const sigs = groupSubmissionsIntoSignals(submissions);
    return { signals: sigs, summary: summariseSignals(sigs) };
  }, [submissions]);

  const top8 = signals.slice(0, 8);
  const hasFilters = submissions.length < 8; // rough proxy; page passes filtered list

  const trailingText = `${summary.high} 🔴 · ${summary.medium} 🟡 · ${summary.low} 🟢`;

  return (
    <DashboardCard
      title="grouped signals"
      hasGoldAccent
      trailing={
        <Text
          as="span"
          className="font-mono text-[11px] text-muted-foreground font-semibold"
        >
          {trailingText}
        </Text>
      }
    >
      <div className="flex flex-col gap-3">
        <SourceLabel />

        {/* Summary strip */}
        <div className="grid grid-cols-3 gap-2">
          {(
            [
              { key: "high", icon: AlertTriangle, label: "high", color: "text-red-500" },
              { key: "medium", icon: AlertTriangle, label: "medium", color: "text-amber-500" },
              { key: "low", icon: CheckCircle2, label: "low", color: "text-emerald-600" },
            ] as const
          ).map(({ key, icon: Icon, label, color }) => (
            <div
              key={key}
              className="rounded-xl border border-border/40 bg-[#f8fcf5] px-3 py-2.5 flex flex-col gap-1"
            >
              <div className="flex items-center gap-1.5">
                <Icon className={cn("size-3.5", color)} />
                <span className="text-[10px] font-medium text-muted-foreground">
                  {label}
                </span>
              </div>
              <span className="text-xl font-semibold text-foreground">
                {summary[key]}
              </span>
            </div>
          ))}
        </div>

        {/* Signal cards */}
        {top8.length === 0 ? (
          <EmptySignals hasFilters={hasFilters} />
        ) : (
          top8.map((signal) => (
            <SignalCard key={signal.id} signal={signal} />
          ))
        )}

        {signals.length > 8 && (
          <button
            type="button"
            className="flex items-center justify-center gap-1 rounded-xl border border-border/30 bg-[#f8fcf5] py-2 text-xs text-muted-foreground hover:border-[#006020]/25 hover:text-[#006020] transition-colors"
          >
            <ChevronRight className="size-3.5" />
            {signals.length - 8} more signals
          </button>
        )}
      </div>
    </DashboardCard>
  );
}
