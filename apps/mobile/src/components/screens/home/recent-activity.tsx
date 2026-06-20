import { View } from "react-native";
import { PressableFeedback, Typography } from "heroui-native";
import { ReportCard, type ReportCardProps } from "./report-card";
import { useI18n } from "@/hooks/useI18n";

const MOCK_REPORTS: ReportCardProps[] = [
  {
    facilityName: "CHU Hassan II",
    description: "Long wait times in emergency",
    timeAgo: "2h ago",
    evidence: "photo+gps",
    status: "verified",
  },
  {
    facilityName: "Clinique Al Azhar",
    description: "Missing medication in pharmacy",
    timeAgo: "5h ago",
    evidence: "text",
    status: "pending",
  },
  {
    facilityName: "CHU Mohammed V",
    description: "Cleanliness issue in ward 3",
    timeAgo: "1d ago",
    evidence: "photo+gps+ai",
    status: "resolved",
  },
];

export function RecentActivity() {
  const { t } = useI18n();

  return (
    <View className="gap-3">
      <View className="flex-row items-center justify-between">
        <Typography type="h3">{t("home.recentActivity")}</Typography>
        <PressableFeedback>
          <Typography type="body-xs" weight="semibold" className="text-accent">
            {t("home.seeAll")}
          </Typography>
        </PressableFeedback>
      </View>

      {MOCK_REPORTS.map((report, i) => (
        <ReportCard key={i} {...report} />
      ))}
    </View>
  );
}
