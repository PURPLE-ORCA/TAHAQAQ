import type { ReactNode } from "react";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

interface DashboardCardProps {
  title: string;
  trailing?: ReactNode;
  children: ReactNode;
  hasGoldAccent?: boolean;
  className?: string;
}

export function DashboardCard({ title, trailing, children, hasGoldAccent = false, className }: DashboardCardProps) {
  return (
    <section
      className={cn(
        "rounded-2xl border border-border/50 bg-white p-5 shadow-[0_8px_30px_rgba(0,96,32,0.03)] dark:bg-card/40 transition-all hover:shadow-[0_8px_30px_rgba(0,96,32,0.06)]",
        hasGoldAccent && "border-t-[3px] border-t-[#F2C94C] pt-4.5",
        className
      )}
    >
      <div className="flex items-center justify-between gap-4 border-b border-border/30 pb-3 mb-4">
        <Text as="span" className="font-mono text-[11px] text-[#006020] dark:text-[#a1f6a4] font-semibold tracking-wider">
          {title}
        </Text>
        {trailing}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
}

