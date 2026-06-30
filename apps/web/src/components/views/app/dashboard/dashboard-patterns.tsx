"use client";

import { useMemo } from "react";
import { Repeat, Layers, MapPin } from "lucide-react";
import { establishments, reports } from "@tahaqaq/mock-data";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "./dashboard-card";
import { cn } from "@/lib/utils";

const CATEGORY_LABELS: Record<string, string> = {
  hygiene: "hygiene",
  staff: "staff",
  equipment: "equipment",
  bribery: "bribery",
  wait_time: "wait time",
};

export function DashboardPatterns() {
  const { repeatOffenders, categoryClusters, geographicHotspots, totalPatterns } = useMemo(() => {
    // Group reports by establishmentId
    const reportsByEst: Record<string, typeof reports> = {};
    reports.forEach((r) => {
      if (!reportsByEst[r.establishmentId]) {
        reportsByEst[r.establishmentId] = [];
      }
      reportsByEst[r.establishmentId].push(r);
    });

    // 1. Repeat Offenders: Same establishment with 3+ reports
    const allRepeatOffenders = Object.entries(reportsByEst)
      .map(([estId, estReports]) => {
        const establishment = establishments.find((e) => e.id === estId);
        const story = estReports[0]?.story || "";
        const latestReportSnippet =
          story.length > 90 ? `${story.slice(0, 90).trim()}...` : story;

        let severity: "high" | "medium" | "low" = "low";
        if (estReports.length >= 10) {
          severity = "high";
        } else if (estReports.length >= 5) {
          severity = "medium";
        }

        return {
          id: estId,
          name: establishment ? establishment.name : estId,
          count: estReports.length,
          latestReportSnippet,
          severity,
        };
      })
      .filter((item) => item.count >= 3)
      .sort((a, b) => b.count - a.count);

    // 2. Category Clusters: Same complaint category repeated at one institution (2+ reports)
    const allCategoryClusters: {
      id: string;
      establishmentId: string;
      establishmentName: string;
      category: string;
      categoryLabel: string;
      count: number;
      severity: "high" | "medium" | "low";
    }[] = [];

    establishments.forEach((est) => {
      const estReports = reportsByEst[est.id] || [];
      const catCounts: Record<string, number> = {};
      estReports.forEach((r) => {
        r.categories.forEach((cat) => {
          catCounts[cat] = (catCounts[cat] || 0) + 1;
        });
      });

      Object.entries(catCounts).forEach(([cat, count]) => {
        if (count >= 2) {
          let severity: "high" | "medium" | "low" = "low";
          if (count >= 10) {
            severity = "high";
          } else if (count >= 5) {
            severity = "medium";
          }

          allCategoryClusters.push({
            id: `${est.id}-${cat}`,
            establishmentId: est.id,
            establishmentName: est.name,
            category: cat,
            categoryLabel: CATEGORY_LABELS[cat] || cat,
            count,
            severity,
          });
        }
      });
    });
    allCategoryClusters.sort((a, b) => b.count - a.count);

    // 3. Geographic Hotspots: Cities with disproportionate complaints (> 15)
    const cityData: Record<
      string,
      { establishments: typeof establishments; totalComplaints: number }
    > = {};
    establishments.forEach((est) => {
      if (!cityData[est.city]) {
        cityData[est.city] = { establishments: [], totalComplaints: 0 };
      }
      cityData[est.city].establishments.push(est);
      cityData[est.city].totalComplaints += est.complaints;
    });

    const allGeographicHotspots = Object.entries(cityData)
      .map(([cityName, data]) => {
        const topEst = data.establishments.reduce(
          (max, est) => (est.complaints > max.complaints ? est : max),
          data.establishments[0]
        );

        let severity: "high" | "medium" | "low" = "low";
        if (data.totalComplaints >= 100) {
          severity = "high";
        } else if (data.totalComplaints >= 50) {
          severity = "medium";
        }

        return {
          cityName,
          totalComplaints: data.totalComplaints,
          topEstablishment: topEst ? topEst.name : "N/A",
          severity,
        };
      })
      .filter((item) => item.totalComplaints > 15)
      .sort((a, b) => b.totalComplaints - a.totalComplaints);

    const total =
      allRepeatOffenders.length +
      allCategoryClusters.length +
      allGeographicHotspots.length;

    return {
      repeatOffenders: allRepeatOffenders.slice(0, 3),
      categoryClusters: allCategoryClusters.slice(0, 3),
      geographicHotspots: allGeographicHotspots.slice(0, 3),
      totalPatterns: total,
    };
  }, []);

  return (
    <DashboardCard
      title="Pattern detection"
      trailing={
        <Text
          as="span"
          className="font-mono text-[11px] text-[#006020] dark:text-[#a1f6a4] tracking-[0.12em] font-semibold"
        >
          {totalPatterns} {totalPatterns === 1 ? "pattern" : "patterns"} found
        </Text>
      }
    >
      <div className="flex flex-col gap-5">
        {/* Repeat Offenders */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Repeat className="size-4 text-[#006020] dark:text-[#a1f6a4]" />
            <Text as="span" variant="small" className="font-semibold text-foreground/90 tracking-[0.08em]">
              Repeat offenders
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            {repeatOffenders.length === 0 ? (
              <div className="rounded-xl border border-border/30 bg-muted/20 py-3 px-4 text-center">
                <Text as="p" variant="muted" className="text-xs">
                  No repeat offenders detected
                </Text>
              </div>
            ) : (
              repeatOffenders.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border/40 bg-white dark:bg-card/25 p-3.5 shadow-sm transition-colors hover:border-[#006020]/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <Text as="span" variant="small" className="font-semibold text-foreground dark:text-white block">
                        {item.name}
                      </Text>
                      {item.latestReportSnippet && (
                        <Text as="p" variant="muted" className="mt-1 text-xs italic leading-normal line-clamp-2">
                          &ldquo;{item.latestReportSnippet}&rdquo;
                        </Text>
                      )}
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <SeverityBadge severity={item.severity} />
                      <span className="text-[10px] font-mono text-muted-foreground font-medium">
                        {item.count} reports
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <hr className="border-border/30" />

        {/* Category Clusters */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Layers className="size-4 text-[#006020] dark:text-[#a1f6a4]" />
            <Text as="span" variant="small" className="font-semibold text-foreground/90 tracking-[0.08em]">
              Category clusters
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            {categoryClusters.length === 0 ? (
              <div className="rounded-xl border border-border/30 bg-muted/20 py-3 px-4 text-center">
                <Text as="p" variant="muted" className="text-xs">
                  No category clusters detected
                </Text>
              </div>
            ) : (
              categoryClusters.map((item) => (
                <div
                  key={item.id}
                  className="rounded-xl border border-border/40 bg-white dark:bg-card/25 p-3.5 shadow-sm transition-colors hover:border-[#006020]/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <Text as="span" variant="small" className="font-semibold text-foreground dark:text-white block">
                        {item.establishmentName}
                      </Text>
              <span className="inline-flex items-center gap-1 mt-1 rounded bg-[#eef6ea] dark:bg-[#2b322a] px-1.5 py-0.5 text-[10px] font-mono font-medium text-[#006020] dark:text-[#a1f6a4]">
                {item.categoryLabel}
              </span>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <SeverityBadge severity={item.severity} />
                      <span className="text-[10px] font-mono text-muted-foreground font-medium">
                        {item.count} reports
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        <hr className="border-border/30" />

        {/* Geographic Hotspots */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <MapPin className="size-4 text-[#006020] dark:text-[#a1f6a4]" />
            <Text as="span" variant="small" className="font-semibold text-foreground/90 tracking-[0.08em]">
              Geographic hotspots
            </Text>
          </div>
          <div className="flex flex-col gap-2">
            {geographicHotspots.length === 0 ? (
              <div className="rounded-xl border border-border/30 bg-muted/20 py-3 px-4 text-center">
                <Text as="p" variant="muted" className="text-xs">
                  No geographic hotspots detected
                </Text>
              </div>
            ) : (
              geographicHotspots.map((item) => (
                <div
                  key={item.cityName}
                  className="rounded-xl border border-border/40 bg-white dark:bg-card/25 p-3.5 shadow-sm transition-colors hover:border-[#006020]/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <Text as="span" variant="small" className="font-semibold text-foreground dark:text-white block">
                        {item.cityName}
                      </Text>
                      <Text as="p" variant="muted" className="mt-1 text-xs">
                      top risk: <span className="font-medium text-foreground/80 dark:text-white/80">{item.topEstablishment}</span>
                      </Text>
                    </div>
                    <div className="flex flex-col items-end gap-1.5 shrink-0">
                      <SeverityBadge severity={item.severity} />
                      <span className="text-[10px] font-mono text-muted-foreground font-medium">
                        {item.totalComplaints} complaints
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </DashboardCard>
  );
}

function SeverityBadge({ severity }: { severity: "high" | "medium" | "low" }) {
  const styles = {
    high: "bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-400 border border-red-200/50 dark:border-red-900/35",
    medium: "bg-[#fff8e2] dark:bg-amber-950/20 text-[#584400] dark:text-amber-400 border border-[#F2C94C]/35 dark:border-amber-900/35",
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
