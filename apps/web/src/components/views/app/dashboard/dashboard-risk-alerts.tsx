"use client";

import React, { useMemo } from "react";
import { establishments, reports } from "@tahaqaq/mock-data";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "./dashboard-card";

type AlertLevel = "red" | "amber" | "green";

interface EstablishmentWithAlert {
  id: string;
  name: string;
  category: string;
  city: string;
  complaints: number;
  overallScore: number;
  recentSignal: string;
  level: AlertLevel;
  snippet: string | null;
}

export function DashboardRiskAlerts() {
  const { sortedAlerts, redCount, amberCount } = useMemo(() => {
    // Process all establishments to compute level, snippet, and counts
    let rCount = 0;
    let aCount = 0;

    const mapped = establishments.map((est) => {
      // Logic: Red if overallScore < 4 or complaints >= 8.
      // Amber if overallScore <= 5.9 or complaints >= 4.
      // Green otherwise.
      let level: AlertLevel = "green";
      if (est.overallScore < 4 || est.complaints >= 8) {
        level = "red";
        rCount++;
      } else if (est.overallScore <= 5.9 || est.complaints >= 4) {
        level = "amber";
        aCount++;
      }

      // Get first report per establishment from reports array for snippet
      const report = reports.find((r) => r.establishmentId === est.id);
      const snippet = report
        ? report.story.length > 100
          ? `${report.story.substring(0, 100)}...`
          : report.story
        : null;

      return {
        ...est,
        level,
        snippet,
      };
    });

    // Sort: red first, then amber, then green. Within level, by complaints descending.
    const levelWeight: Record<AlertLevel, number> = { red: 0, amber: 1, green: 2 };
    
    const sorted = mapped.sort((a, b) => {
      const diff = levelWeight[a.level] - levelWeight[b.level];
      if (diff !== 0) return diff;
      return b.complaints - a.complaints;
    });

    return {
      sortedAlerts: sorted,
      redCount: rCount,
      amberCount: aCount,
    };
  }, []);

  const top8Alerts = useMemo(() => {
    return sortedAlerts.slice(0, 8);
  }, [sortedAlerts]);

  const trailingText = `${redCount} 🔴 · ${amberCount} 🟡`;

  return (
    <DashboardCard
      title="Risk alerts"
      hasGoldAccent
      trailing={
        <Text as="span" className="font-mono text-[11px] text-muted-foreground font-semibold">
          {trailingText}
        </Text>
      }
    >
      <div className="flex flex-col gap-3">
        {top8Alerts.map((est) => {
          const bgClass =
            est.level === "red"
              ? "bg-red-50 dark:bg-red-950/10 border-l-red-500 border-y-red-100 border-r-red-100 dark:border-red-950/20"
              : est.level === "amber"
              ? "bg-amber-50 dark:bg-amber-950/10 border-l-amber-500 border-y-amber-100 border-r-amber-100 dark:border-amber-950/20"
              : "bg-green-50 dark:bg-green-950/10 border-l-green-500 border-y-green-100 border-r-green-100 dark:border-green-950/20";

          return (
            <div
              key={est.id}
              className={`rounded-xl border border-l-4 p-3.5 flex flex-col gap-2 transition-all hover:translate-x-0.5 ${bgClass}`}
            >
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <Text as="span" className="font-bold text-sm text-foreground">
                  {est.name}
                </Text>
                <Text as="span" variant="muted" className="text-xs">
                  {est.category} · {est.city}
                </Text>
              </div>

              <div className="flex flex-wrap items-center gap-2 mt-0.5">
                <span
                  className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm ${
                    est.level === "red"
                      ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                      : est.level === "amber"
                      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300"
                      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                  }`}
                >
                  {est.level === "red" && "🔴 critical"}
                  {est.level === "amber" && "🟡 watch"}
                  {est.level === "green" && "🟢 stable"}
                </span>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-white/70 dark:bg-black/25 text-muted-foreground border border-border/30">
                  {est.complaints} {est.complaints === 1 ? "complaint" : "complaints"}
                </span>

                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold font-mono border ${
                    est.overallScore >= 7
                      ? "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-400 dark:border-emerald-900/30"
                      : est.overallScore >= 4
                      ? "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/20 dark:text-amber-400 dark:border-amber-900/30"
                      : "bg-rose-50 text-rose-700 border-rose-200 dark:bg-rose-950/20 dark:text-rose-400 dark:border-rose-900/30"
                  }`}
                >
                  score: {est.overallScore.toFixed(1)}/10
                </span>
              </div>

              {est.snippet && (
                <Text
                  as="p"
                  className="text-xs italic text-muted-foreground leading-relaxed pl-2 border-l border-border/40 mt-1"
                >
                  &ldquo;{est.snippet}&rdquo;
                </Text>
              )}
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
}
