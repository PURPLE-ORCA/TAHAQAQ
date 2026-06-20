import { View } from "react-native";
import { Card, Chip, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { useI18n } from "@/hooks/useI18n";

export type ReportStatus = "verified" | "pending" | "resolved";

export type ReportCardProps = {
  facilityName: string;
  description: string;
  timeAgo: string;
  evidence: "text" | "photo+gps" | "photo+gps+ai";
  status: ReportStatus;
};

const statusColors: Record<ReportStatus, "success" | "warning" | "default"> = {
  verified: "success",
  pending: "warning",
  resolved: "default",
};

export function ReportCard({
  facilityName,
  description,
  timeAgo,
  evidence,
  status,
}: ReportCardProps) {
  const { t } = useI18n();

  const statusLabel =
    status === "verified"
      ? t("home.statusVerified")
      : status === "pending"
        ? t("home.statusPending")
        : t("home.statusResolved");

  const evidenceLabel =
    evidence === "text"
      ? t("home.evidenceTextOnly")
      : evidence === "photo+gps"
        ? t("home.evidencePhotoGps")
        : t("home.evidencePhotoGpsAi");

  return (
    <Card>
      <View className="gap-3">
        {/* Header: facility + status */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2 flex-1">
            <Icon name="business-outline" size={16} className="text-accent" />
            <Typography
              type="body-sm"
              weight="semibold"
              numberOfLines={1}
              className="flex-1"
            >
              {facilityName}
            </Typography>
          </View>
          <Chip size="sm" variant="secondary" color={statusColors[status]}>
            <Chip.Label>{statusLabel}</Chip.Label>
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
            {evidenceLabel}
          </Typography>
        </View>
      </View>
    </Card>
  );
}
