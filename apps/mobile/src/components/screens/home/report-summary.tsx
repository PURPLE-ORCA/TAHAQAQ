import { View } from "react-native";
import { Card, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";

export function ReportSummary() {
  return (
    <Card variant="secondary">
      <View className="flex-row items-center gap-3">
        <Icon name="stats-chart-outline" size={20} className="text-accent" />
        <View className="flex-1">
          <Typography type="body-sm" weight="semibold">
            Your reports
          </Typography>
          <Typography type="body-xs" color="muted">
            3 submitted · 1 verified · 1 pending
          </Typography>
        </View>
        <Icon name="chevron-forward" size={16} className="text-muted" />
      </View>
    </Card>
  );
}
