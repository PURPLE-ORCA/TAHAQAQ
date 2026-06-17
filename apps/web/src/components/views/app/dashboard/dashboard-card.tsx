import type { ReactNode } from "react";

import { Text } from "@/components/ui/text";

interface DashboardCardProps {
  title: string;
  trailing?: ReactNode;
  children: ReactNode;
}

export function DashboardCard({ title, trailing, children }: DashboardCardProps) {
  return (
    <section className="rounded-xl border border-border/60 bg-background/40 p-4">
      <div className="flex items-center justify-between gap-4">
        <Text as="span" variant="xs">
          {title}
        </Text>
        {trailing}
      </div>
      {children}
    </section>
  );
}
