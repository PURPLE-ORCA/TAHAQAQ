import { Shield } from "lucide-react";
import { Text } from "@/components/ui/text";

interface DashboardHeaderProps {
  date: string;
  title: string;
  description: string;
}

export function DashboardHeader({ date, title, description }: DashboardHeaderProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#006020]/20 bg-gradient-to-br from-[#006020] via-[#006020] to-[#00A040] p-6 text-white shadow-[0_12px_40px_rgba(0,96,32,0.12)] md:p-8">
      <div className="absolute right-0 top-0 -mr-16 -mt-16 size-64 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 -mb-12 size-48 rounded-full bg-[#F2C94C]/10 blur-2xl" />

      <div className="relative z-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-2xl space-y-3.5">
          <div className="flex items-center gap-2.5">
            <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 font-mono text-[10px] font-semibold tracking-[0.18em] text-white/90 backdrop-blur-md">
              {date}
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-[#00A040]/30 bg-[#00A040]/40 px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-white">
              <span className="size-1.5 animate-pulse rounded-full bg-[#7cfd8f]" />
              all systems operational
            </span>
          </div>

          <div className="space-y-1">
            <Text as="h1" variant="h3" className="text-3xl font-semibold tracking-tight text-white">
              {title}
            </Text>
            <Text as="p" className="max-w-xl text-sm leading-relaxed text-white/85 md:text-base">
              {description}
            </Text>
          </div>
        </div>

        <div className="flex shrink-0 items-center">
          <img
            src="/mascotExplaining.png"
            alt="Tahaqaq mascot"
            className="size-28 object-contain drop-shadow-lg md:size-32"
          />
        </div>
      </div>
    </div>
  );
}
