import type { DashboardScheduleItem } from "@/components/data/dashboard";
import { dashboardSchedule } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";

import { DashboardCard } from "./dashboard-card";

export function DashboardSchedule() {
  return (
    <DashboardCard
      title="Schedule"
      hasGoldAccent
      trailing={
        <Text as="span" className="font-mono text-[11px] tracking-[0.12em]">
          4 events
        </Text>
      }
    >
      <ul className="flex flex-col gap-2">
        {dashboardSchedule.map((event) => (
          <ScheduleRow key={event.time} event={event} />
        ))}
      </ul>
    </DashboardCard>
  );
}

interface ScheduleRowProps {
  event: DashboardScheduleItem;
}

function ScheduleRow({ event }: ScheduleRowProps) {
  return (
    <li className="flex items-center gap-3 rounded-2xl border border-border/40 bg-white px-3 py-3 transition-colors hover:border-[#006020]/20">
      <div className="flex w-16 shrink-0 flex-col items-center rounded-xl bg-[#eef6ea] px-2 py-2 text-center">
        <Text as="span" variant="small" className="font-mono text-[#006020]">
          {event.time}
        </Text>
      </div>
      <span className={`size-2.5 shrink-0 rounded-full ${event.color}`} />
      <div className="min-w-0 flex-1">
        <Text as="span" variant="small" className="block truncate font-medium text-foreground">
          {event.title}
        </Text>
        <Text as="p" variant="muted" className="truncate text-xs">
          {event.subtitle}
        </Text>
      </div>
    </li>
  );
}
