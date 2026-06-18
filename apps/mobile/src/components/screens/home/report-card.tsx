import { View } from "react-native";
import { Card, Chip } from "heroui-native";
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
  { label: string; color: "success" | "warning" | "default" }
> = {
  verified: { label: "verified", color: "success" },
  pending: { label: "pending", color: "warning" },
  resolved: { label: "resolved", color: "default" },
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
    <Card>
      <View className="gap-3">
        {/* Header: facility + status */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2 flex-1">
            <Icon name="business-outline" size={16} className="text-primary" />
            <Text variant="smallBold" className="flex-1" numberOfLines={1}>
              {facilityName}
            </Text>
          </View>
          <Chip size="sm" variant="secondary" color={badge.color}>
            <Chip.Label>{badge.label}</Chip.Label>
          </Chip>
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
          <Text variant="xs" className="text-muted">
            ·
          </Text>
          <Text variant="xs" className="text-muted">
            {evidenceLabels[evidence]}
          </Text>
        </View>
      </View>
    </Card>
  );
}
