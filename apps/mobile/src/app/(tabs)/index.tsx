import { Pressable, View, ScrollView } from "react-native";
import { router } from "expo-router";
import { Text } from "@/components/ui/text";
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
    <SafeScreen safeArea="top" className="bg-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-2 pb-2">
          <Text variant="title">TAHAQAQ</Text>
          <View className="flex-row items-center gap-3">
            <Pressable className="relative h-10 w-10 items-center justify-center rounded-full bg-card border border-border/50">
              <Icon name="notifications-outline" size={20} className="text-foreground" />
              <View className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-danger" />
            </Pressable>
            <Pressable onPress={() => router.push("/profile")}>
              <View className="h-10 w-10 items-center justify-center rounded-full border-2 border-primary bg-secondary">
                <Text variant="xsBold" className="text-primary">U</Text>
              </View>
            </Pressable>
          </View>
        </View>

        {/* Welcome */}
        <View className="px-6 pt-3 pb-5">
          <Text variant="subtitle">Welcome back 👋</Text>
        </View>

        {/* Recent Activity */}
        <View className="px-6">
          <View className="flex-row items-center justify-between mb-3">
            <Text variant="large">Recent activity</Text>
            <Pressable>
              <Text variant="xs" className="text-primary font-semibold">See all</Text>
            </Pressable>
          </View>

          <View className="gap-3">
            {MOCK_REPORTS.map((report, i) => (
              <ReportCard key={i} {...report} />
            ))}
          </View>

          {/* Summary */}
          <View className="mt-5 rounded-2xl border border-border/50 bg-card p-4">
            <View className="flex-row items-center gap-3">
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <Icon name="stats-chart-outline" size={20} className="text-primary" />
              </View>
              <View className="flex-1">
                <Text variant="smallBold">Your reports</Text>
                <Text variant="xs" className="text-muted">
                  3 submitted · 1 verified · 1 pending
                </Text>
              </View>
              <Icon name="chevron-forward" size={16} className="text-muted" />
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <Pressable
        onPress={() => router.push("/(tabs)/map")}
        className="absolute bottom-24 right-6 h-14 w-14 items-center justify-center rounded-2xl bg-primary shadow-lg"
        style={{ shadowColor: "#00a040", shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 8, elevation: 8 }}
      >
        <Icon name="add" size={28} className="text-white" />
      </Pressable>
    </SafeScreen>
  );
}
