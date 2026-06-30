import { Layers, Clock, CheckCircle2, Activity, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { dashboardMetrics, type DashboardMetric } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";

function MetricIcon({ iconName }: { iconName: DashboardMetric["iconName"] }) {
  const baseClass = "size-5 text-[#006020] fill-[#006020]/15 dark:text-[#a1f6a4] dark:fill-[#a1f6a4]/10";
  switch (iconName) {
    case "layers":
      return <Layers className={baseClass} />;
    case "clock":
      return <Clock className={baseClass} />;
    case "check-circle":
      return <CheckCircle2 className={baseClass} />;
    case "activity":
    default:
      return <Activity className={baseClass} />;
  }
}

function TrendBadge({ trend, change }: { trend: DashboardMetric["trend"]; change: string }) {
  if (trend === "up") {
    return (
      <div className="flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold bg-[#eef6ea] text-[#00A040] dark:bg-[#00A040]/10 dark:text-[#7cfd8f] border border-[#00A040]/10">
        <TrendingUp className="size-3 fill-none" />
        <span>{change}</span>
      </div>
    );
  }
  if (trend === "down") {
    return (
      <div className="flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[10px] font-bold bg-[#ffdad6] text-[#ba1a1a] dark:bg-[#ba1a1a]/10 dark:text-[#ffdad6] border border-[#ba1a1a]/10">
        <TrendingDown className="size-3 fill-none" />
        <span>{change}</span>
      </div>
    );
  }
  return (
    <div className="flex items-center gap-0.5 rounded px-1.5 py-0.5 font-mono text-[10px] font-medium bg-muted text-muted-foreground border border-border/30">
      <Minus className="size-3 fill-none" />
      <span>{change}</span>
    </div>
  );
}

export function DashboardFacts() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {dashboardMetrics.map((metric) => (
        <div
          key={metric.label}
          className="rounded-2xl border border-border/50 bg-white p-5 shadow-[0_8px_30px_rgba(0,96,32,0.02)] dark:bg-card/40 hover:border-[#006020]/25 transition-all"
        >
          <div className="flex items-center justify-between gap-4">
            <Text as="span" className="font-mono text-muted-foreground font-semibold tracking-wider text-[11px]">
              {metric.label}
            </Text>
            <div className="rounded-lg bg-[#e9f0e4] dark:bg-[#2b322a] p-1.5">
              <MetricIcon iconName={metric.iconName} />
            </div>
          </div>

          <div className="mt-3 flex items-baseline gap-2">
            <Text as="h3" variant="h3" className="font-bold tracking-tight text-foreground dark:text-white">
              {metric.value}
            </Text>
          </div>

          <div className="mt-2.5 flex items-center justify-between gap-2 border-t border-border/20 pt-2.5">
            <TrendBadge trend={metric.trend} change={metric.change} />
            <Text as="span" className="text-[10px] text-muted-foreground font-mono">
              {metric.sub}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
}
