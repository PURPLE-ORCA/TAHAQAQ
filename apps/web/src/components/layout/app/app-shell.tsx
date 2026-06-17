import { cn } from "@/lib/utils";

interface AppShellProps {
  children: React.ReactNode;
  className?: string;
}

export function AppShell({ children, className }: AppShellProps) {
  return (
    <div className={cn("flex flex-col gap-6 p-6", className)}>
      {children}
    </div>
  );
}
