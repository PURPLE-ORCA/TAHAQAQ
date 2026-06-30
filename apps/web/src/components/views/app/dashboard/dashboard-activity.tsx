import { CheckCircle2, Clock, Info, AlertTriangle } from "lucide-react";
import { dashboardActivities, type DashboardActivity } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "./dashboard-card";

function ActivityIcon({ status }: { status: DashboardActivity["status"] }) {
  const sizeClass = "size-4.5";
  switch (status) {
    case "success":
      return <CheckCircle2 className={`${sizeClass} text-[#00A040] fill-[#00A040]/20`} />;
    case "warning":
      return <AlertTriangle className={`${sizeClass} text-[#F2C94C] fill-[#F2C94C]/20`} />;
    case "pending":
      return <Clock className={`${sizeClass} text-[#E0C080] fill-[#E0C080]/20`} />;
    case "info":
    default:
      return <Info className={`${sizeClass} text-[#006020] fill-[#006020]/20`} />;
  }
}

export function DashboardActivityFeed() {
  return (
    <DashboardCard
      title="Activity feed"
      trailing={
        <Text as="span" className="font-mono text-[11px] text-muted-foreground tracking-[0.12em]">
          live
        </Text>
      }
    >
      <div className="relative pl-4 border-l border-border/60 ml-2.5 my-2 space-y-5">
        {dashboardActivities.map((act) => (
          <div key={act.id} className="relative flex items-start gap-3.5 group">
            {/* Timeline dot */}
            <div className="absolute -left-[27px] top-0.5 rounded-full bg-white dark:bg-background p-0.5 z-10">
              <ActivityIcon status={act.status} />
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-baseline justify-between gap-4">
                <Text as="span" variant="small" className="font-medium text-foreground dark:text-white leading-tight">
                  {act.event}
                </Text>
                <span className="shrink-0 font-mono text-[10px] text-muted-foreground">
                  {act.time}
                </span>
              </div>
              <Text as="p" className="text-xs text-muted-foreground/80 mt-0.5">
                by <span className="font-medium text-foreground/80 dark:text-white/80">{act.actor}</span>
              </Text>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
}
