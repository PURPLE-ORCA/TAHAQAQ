import { AlertTriangle, CheckCircle2, Info } from "lucide-react";

import { dashboardInsights, type DashboardInsight } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";

import { DashboardCard } from "./dashboard-card";

const insightStyles: Record<DashboardInsight["type"], string> = {
  warning: "border-[#F2C94C]/35 bg-[#fff8e2] text-[#584400]",
  success: "border-[#00A040]/20 bg-[#eef6ea] text-[#006020]",
  info: "border-[#006020]/15 bg-[#f4fcef] text-[#006020]",
};

function InsightIcon({ type }: { type: DashboardInsight["type"] }) {
  const iconClass = "size-4 fill-current";

  switch (type) {
    case "warning":
      return <AlertTriangle className={iconClass} />;
    case "success":
      return <CheckCircle2 className={iconClass} />;
    case "info":
    default:
      return <Info className={iconClass} />;
  }
}

export function DashboardInsights() {
  return (
    <DashboardCard
      title="Operational insights"
      hasGoldAccent
      trailing={
        <Text as="span" variant="xs" className="font-mono uppercase tracking-[0.25em]">
          3 signals
        </Text>
      }
    >
      <div className="flex flex-col gap-3">
        {dashboardInsights.map((insight) => (
          <div key={insight.id} className={`rounded-2xl border p-4 shadow-sm ${insightStyles[insight.type]}`}>
            <div className="flex items-start gap-3">
              <div className="rounded-xl bg-white/70 p-2.5 text-current shadow-sm">
                <InsightIcon type={insight.type} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-4">
                  <Text as="span" variant="small" className="font-semibold text-foreground">
                    {insight.title}
                  </Text>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {insight.time}
                  </span>
                </div>
                <Text as="p" variant="muted" className="mt-1 text-xs leading-5">
                  {insight.description}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
