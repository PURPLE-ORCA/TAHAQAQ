import { ArrowRightIcon, Database, FileText, KeyRound, Plus, Users } from "lucide-react";

import type { DashboardShortcut } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";

type ShortcutIconName = DashboardShortcut["iconName"];

const shortcutIcons: Record<ShortcutIconName, typeof Plus> = {
  plus: Plus,
  "file-text": FileText,
  key: KeyRound,
  users: Users,
  database: Database,
};

interface DashboardShortcutsProps {
  items: DashboardShortcut[];
}

export function DashboardShortcuts({ items }: DashboardShortcutsProps) {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => {
        const Icon = shortcutIcons[item.iconName];

        return (
          <button
            key={item.label}
            type="button"
            className="group flex h-full flex-col justify-between rounded-2xl border border-border/50 bg-white p-4 text-left shadow-[0_8px_30px_rgba(0,96,32,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#006020]/20 hover:shadow-[0_10px_32px_rgba(0,96,32,0.08)]"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1.5">
                <Text as="span" variant="small" className="block font-semibold text-foreground">
                  {item.label}
                </Text>
                <Text as="span" variant="muted" className="block max-w-xs text-xs leading-5">
                  {item.description}
                </Text>
              </div>

              <div className="rounded-2xl bg-[#e9f0e4] p-2.5 text-[#006020] transition-colors group-hover:bg-[#006020] group-hover:text-white">
                <Icon className="size-4 fill-current" />
              </div>
            </div>

            <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#006020]/70">
              open
              <ArrowRightIcon className="size-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
        );
      })}
    </div>
  );
}
