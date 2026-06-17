import { ArrowRightIcon } from "lucide-react";

import type { DashboardShortcut } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";

interface DashboardShortcutsProps {
  items: DashboardShortcut[];
}

export function DashboardShortcuts({ items }: DashboardShortcutsProps) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {items.map((item) => (
        <button
          key={item.label}
          type="button"
          className="group flex items-center justify-between gap-2 rounded-lg border border-border/60 bg-background/40 px-3.5 py-2.5 text-start transition-colors hover:border-foreground/40 hover:bg-background/60"
        >
          <Text as="span" variant="small">
            {item.label}
          </Text>
          <ArrowRightIcon className="size-3.5 opacity-50 transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5 group-hover:opacity-90" />
        </button>
      ))}
    </div>
  );
}
