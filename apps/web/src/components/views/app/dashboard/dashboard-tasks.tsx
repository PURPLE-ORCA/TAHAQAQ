import { CheckIcon, CircleIcon, PlusIcon } from "lucide-react";

import { dashboardTasks, type DashboardTask } from "@/components/data/dashboard";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

import { DashboardCard } from "./dashboard-card";

const priorityStyles: Record<DashboardTask["priority"], string> = {
  high: "bg-[#ffdad6] text-[#ba1a1a] border-[#ba1a1a]/10",
  medium: "bg-[#eef6ea] text-[#006020] border-[#006020]/10",
  low: "bg-[#f4fcef] text-[#584400] border-[#E0C080]/20",
};

export function DashboardTasks() {
  return (
    <DashboardCard
      title="Task queue"
      hasGoldAccent
      trailing={
        <Button variant="ghost" size="sm">
          <PlusIcon className="size-4" />
          <Text as="span" variant="small">
            New
          </Text>
        </Button>
      }
    >
      <ul className="flex flex-col gap-2">
        {dashboardTasks.map((task) => (
          <TaskRow key={task.id} task={task} />
        ))}
      </ul>
    </DashboardCard>
  );
}

interface TaskRowProps {
  task: DashboardTask;
}

function TaskRow({ task }: TaskRowProps) {
  return (
    <li className="group flex items-center gap-3 rounded-2xl border border-border/40 bg-white px-3 py-3 transition-colors hover:border-[#006020]/20">
      <button
        type="button"
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
          task.done
            ? "border-[#006020]/30 bg-[#eef6ea] text-[#006020]"
            : "border-[#006020]/25 text-transparent"
        }`}
        aria-label="Toggle task"
      >
        {task.done ? <CheckIcon className="size-3" /> : <CircleIcon className="size-3" />}
      </button>

      <div className="min-w-0 flex-1">
        <Text as="span" variant="small" className={task.done ? "text-muted-foreground line-through" : "text-foreground"}>
          {task.title}
        </Text>

        <div className="mt-1 flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-[#e9f0e4] px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] text-[#006020]">
            {task.project}
          </span>
          <span className={`rounded-full border px-2 py-0.5 font-mono text-[10px] tracking-[0.18em] ${priorityStyles[task.priority]}`}>
            {task.priority}
          </span>
        </div>
      </div>

      <span className="shrink-0 rounded-full bg-muted px-2.5 py-1 text-[10px] font-semibold tracking-[0.12em] text-muted-foreground">
        {task.due}
      </span>
    </li>
  );
}
