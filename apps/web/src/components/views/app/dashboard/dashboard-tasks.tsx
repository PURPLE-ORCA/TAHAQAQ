import { CheckIcon, CircleIcon, PlusIcon } from "lucide-react";

import { dashboardTasks, type DashboardTask } from "@/components/data/dashboard";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { DashboardCard } from "@/components/views/app/dashboard/dashboard-card";

export function DashboardTasks() {
  return (
    <DashboardCard
      title="Today's tasks"
      trailing={
        <Button variant="ghost" size="sm">
          <PlusIcon className="size-4" />
          <Text as="span" variant="small">
            New
          </Text>
        </Button>
      }
    >
      <ul className="mt-3 flex flex-col">
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
    <li className="group flex items-center gap-3 rounded-md px-2 py-2 transition-colors">
      <button
        type="button"
        className={`flex size-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
          task.done
            ? "border-foreground/30 bg-foreground/10 text-foreground"
            : "border-foreground/30 text-transparent"
        }`}
        aria-label="Toggle"
      >
        {task.done ? <CheckIcon className="size-3" /> : <CircleIcon className="size-3" />}
      </button>
      <span className="flex-1 truncate">
        <Text as="span" variant="small" className={task.done ? "text-muted-foreground line-through" : ""}>
          {task.title}
        </Text>
      </span>
      <span className="rounded bg-foreground px-1.5 py-0.5 font-mono uppercase tracking-[0.2em]">
        <Text as="span" variant="xs">
          {task.project}
        </Text>
      </span>
      <span className="w-16 text-end font-mono uppercase tracking-[0.2em] text-muted-foreground/70">
        <Text as="span" variant="xs">
          {task.due}
        </Text>
      </span>
    </li>
  );
}
