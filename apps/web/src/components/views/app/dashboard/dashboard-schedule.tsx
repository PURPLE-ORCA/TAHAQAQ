import type { DashboardScheduleItem } from "@/components/data/dashboard";
import { dashboardSchedule } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "@/components/views/app/dashboard/dashboard-card";

export function DashboardSchedule() {
  return (
    <DashboardCard
      title="Today's schedule"
      trailing={
        <Text as="span" variant="xs" className="font-mono uppercase tracking-[0.25em]">
          4 events
        </Text>
      }
    >
      <ul className="mt-3 flex flex-col gap-2">
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
    <li className="flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
      <div className="flex w-12 flex-col items-center">
        <Text as="span" variant="small" className="font-mono">
          {event.time}
        </Text>
      </div>
      <span className={`size-1.5 rounded-full ${event.color}`} />
      <div className="min-w-0 flex-1">
        <Text as="span" variant="small" className="truncate">
          {event.title}
        </Text>
        <Text as="span" variant="muted" className="truncate text-xs">
          {event.subtitle}
        </Text>
      </div>
    </li>
  );
}
