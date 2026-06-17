import { CalendarIcon } from "lucide-react";

import { dashboardFacts } from "@/components/data/dashboard";
import { Text } from "@/components/ui/text";

export function DashboardFacts() {
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {dashboardFacts.map((fact) => (
        <FactCard key={fact.label} label={fact.label} value={fact.value} sub={fact.sub} />
      ))}
    </div>
  );
}

interface FactCardProps {
  label: string;
  value: string;
  sub: string;
}

function FactCard({ label, value, sub }: FactCardProps) {
  return (
    <div className="rounded-xl border border-border/60 bg-background/40 p-4">
      <div className="flex items-center justify-between gap-4">
        <Text as="span" variant="xs" className="font-mono uppercase tracking-[0.25em]">
          {label}
        </Text>
        <CalendarIcon className="size-3.5 opacity-40" />
      </div>
      <Text as="h3" variant="h3" className="mt-2">
        {value}
      </Text>
      <Text as="p" variant="muted" className="mt-1 text-xs">
        {sub}
      </Text>
    </div>
  );
}
