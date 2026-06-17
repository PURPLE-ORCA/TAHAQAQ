import { Text } from "@/components/ui/text";

interface DashboardHeaderProps {
  date: string;
  title: string;
  description: string;
}

export function DashboardHeader({ date, title, description }: DashboardHeaderProps) {
  return (
    <div className="space-y-2">
      <Text as="span" variant="xs" className="font-mono uppercase tracking-[0.3em] text-muted-foreground">
        {date}
      </Text>
      <Text as="h1" variant="h2">
        {title}
      </Text>
      <Text as="p" variant="muted" className="max-w-xl">
        {description}
      </Text>
    </div>
  );
}
