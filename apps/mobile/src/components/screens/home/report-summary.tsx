import { View, I18nManager } from "react-native";
import { Card, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { useI18n } from "@/hooks/useI18n";

export function ReportSummary() {
  const { t } = useI18n();

  return (
    <Card variant="secondary">
      <View className="flex-row items-center gap-3">
        <Icon name="stats-chart-outline" size={20} className="text-accent" />
        <View className="flex-1">
          <Typography type="body-sm" weight="semibold">
            {t("home.yourReports")}
          </Typography>
          <Typography type="body-xs" color="muted">
            {t("home.reportsSummary", {
              submitted: 3,
              verified: 1,
              pending: 1,
            })}
          </Typography>
        </View>
        <Icon name={I18nManager.isRTL ? "chevron-back" : "chevron-forward"} size={16} className="text-muted" />
      </View>
    </Card>
  );
}
