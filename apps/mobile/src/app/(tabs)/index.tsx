import { View } from "react-native";
import { router } from "expo-router";
import { Avatar, Card, PressableFeedback, Separator, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { SafeScreen } from "@/components/layout/SafeScreen";
import {
  ReportCard,
  type ReportCardProps,
} from "@/components/screens/home/report-card";

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

export default function HomeScreen() {
  return (
    <SafeScreen safeArea="top" scrollable contentClassName="gap-5">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <Typography type="h1">TAHAQAQ</Typography>
        <View className="flex-row items-center gap-3">
          <PressableFeedback className="relative h-10 w-10 items-center justify-center rounded-full bg-card border border-border/50">
            <Icon name="notifications-outline" size={20} className="text-foreground" />
            <View className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
          </PressableFeedback>
          <PressableFeedback onPress={() => router.push("/profile")}>
            <Avatar size="md" color="accent">
              <Avatar.Fallback>U</Avatar.Fallback>
            </Avatar>
          </PressableFeedback>
        </View>
      </View>

      {/* Welcome */}
      <Typography type="h2">Welcome back 👋</Typography>

      <Separator />

      {/* Recent Activity */}
      <View className="gap-3">
        <View className="flex-row items-center justify-between">
          <Typography type="h3">Recent activity</Typography>
          <PressableFeedback>
            <Typography type="body-xs" weight="semibold" className="text-accent">See all</Typography>
          </PressableFeedback>
        </View>

        {MOCK_REPORTS.map((report, i) => (
          <ReportCard key={i} {...report} />
        ))}
      </View>

      {/* Summary */}
      <Card variant="secondary">
        <View className="flex-row items-center gap-3">
          <Icon name="stats-chart-outline" size={20} className="text-primary" />
          <View className="flex-1">
            <Typography type="body-sm" weight="semibold">Your reports</Typography>
            <Typography type="body-xs" color="muted">
              3 submitted · 1 verified · 1 pending
            </Typography>
          </View>
          <Icon name="chevron-forward" size={16} className="text-muted" />
        </View>
      </Card>

      {/* Floating Action Button */}
      <PressableFeedback
        onPress={() => router.push("/(tabs)/map")}
        className="absolute bottom-24 right-6 h-14 w-14 items-center justify-center rounded-2xl bg-primary"
      >
        <Icon name="add" size={28} className="text-white" />
      </PressableFeedback>
    </SafeScreen>
  );
}
