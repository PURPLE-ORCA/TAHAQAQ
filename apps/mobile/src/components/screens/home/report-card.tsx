import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";

export type ReportStatus = "verified" | "pending" | "resolved";

export type ReportCardProps = {
  facilityName: string;
  description: string;
  timeAgo: string;
  evidence: "text" | "photo+gps" | "photo+gps+ai";
  status: ReportStatus;
};

const statusConfig: Record<
  ReportStatus,
  { label: string; bg: string; text: string; dot: string }
> = {
  verified: {
    label: "verified",
    bg: "bg-success/15",
    text: "text-success",
    dot: "bg-success",
  },
  pending: {
    label: "pending",
    bg: "bg-[#C4A76C]/15",
    text: "text-[#C4A76C]",
    dot: "bg-[#C4A76C]",
  },
  resolved: {
    label: "resolved",
    bg: "bg-[#818CF8]/15",
    text: "text-[#818CF8]",
    dot: "bg-[#818CF8]",
  },
};

const evidenceLabels: Record<ReportCardProps["evidence"], string> = {
  text: "text only",
  "photo+gps": "photo + GPS",
  "photo+gps+ai": "photo + GPS + AI",
};

export function ReportCard({
  facilityName,
  description,
  timeAgo,
  evidence,
  status,
}: ReportCardProps) {
  const badge = statusConfig[status];

  return (
    <View className="rounded-2xl border border-border/50 bg-card p-4 gap-3">
      {/* Header row: facility + status */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center gap-2 flex-1">
          <View className="h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Icon name="business-outline" size={16} className="text-primary" />
          </View>
          <Text variant="smallBold" className="flex-1" numberOfLines={1}>
            {facilityName}
          </Text>
        </View>
        <View className="flex-row items-center gap-1.5 rounded-full px-2.5 py-1 ml-2">
          <View className={`h-1.5 w-1.5 rounded-full ${badge.dot}`} />
          <Text variant="xsBold" className={badge.text}>
            {badge.label}
          </Text>
        </View>
      </View>

      {/* Description */}
      <Text variant="default" className="text-foreground/90">
        {description}
      </Text>

      {/* Footer: time + evidence */}
      <View className="flex-row items-center gap-2">
        <Text variant="xs" className="text-muted">
          {timeAgo}
        </Text>
        <View className="h-1 w-1 rounded-full bg-muted/40" />
        <Text variant="xs" className="text-muted">
          {evidenceLabels[evidence]}
        </Text>
      </View>
    </View>
  );
}
