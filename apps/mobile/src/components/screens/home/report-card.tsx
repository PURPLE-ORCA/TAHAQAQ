import { View } from "react-native";
import { Card, Chip, Typography } from "heroui-native";
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
            <Typography type="body-sm" weight="semibold" numberOfLines={1} className="flex-1">
              {facilityName}
            </Typography>
          </View>
          <Chip size="sm" variant="secondary" color={badge.color}>
            <Chip.Label>{badge.label}</Chip.Label>
          </Chip>
        </View>

        {/* Description */}
        <Typography type="body" color="default">
          {description}
        </Typography>

        {/* Footer: time + evidence */}
        <View className="flex-row items-center gap-2">
          <Typography type="body-xs" color="muted">
            {timeAgo}
          </Typography>
          <Typography type="body-xs" color="muted">
            ·
          </Typography>
          <Typography type="body-xs" color="muted">
            {evidenceLabels[evidence]}
          </Typography>
        </View>
      </View>
    </Card>
  );
}
