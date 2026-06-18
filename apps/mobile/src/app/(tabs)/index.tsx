import { View } from "react-native";
import { router } from "expo-router";
import { PressableFeedback, Separator } from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { HomeHeader } from "@/components/screens/home/home-header";
import { DraftReviewCard } from "@/components/screens/home/draft-review-card";
import { RecentActivity } from "@/components/screens/home/recent-activity";
import { ReportSummary } from "@/components/screens/home/report-summary";

export default function HomeScreen() {
  return (
    <View className="flex-1">
      <SafeScreen safeArea="top" scrollable contentClassName="gap-5">
        <HomeHeader />
        <DraftReviewCard />
        <Separator />
        <RecentActivity />
        <ReportSummary />
      </SafeScreen>

      {/* FAB — outside scroll, always fixed */}
      <View className="absolute bottom-2 right-6">
        <PressableFeedback
          onPress={() => router.push("/(tabs)/map")}
          className="size-14 items-center justify-center rounded-full bg-accent"
        >
          <Icon name="add" size={28} className="text-white" />
        </PressableFeedback>
      </View>
    </View>
  );
}
