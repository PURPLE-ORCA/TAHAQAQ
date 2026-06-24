import { useRef } from "react";
import { View } from "react-native";
import { PressableFeedback, Typography } from "heroui-native";
import { PostCard } from "./post-card";
import { SEED_POSTS } from "./seed-posts";
import {
  AppBottomSheetModal,
  type AppBottomSheetModalRef,
} from "@/components/ui/bottom-sheet";
import { useI18n } from "@/hooks/useI18n";

const INITIAL_COUNT = 3;

export function RecentActivity() {
  const { t } = useI18n();
  const sheetRef = useRef<AppBottomSheetModalRef>(null);

  const visiblePosts = SEED_POSTS.slice(0, INITIAL_COUNT);

  return (
    <View className="gap-3">
      {/* Header */}
      <View className="flex-row items-center justify-between">
        <Typography type="h3">{t("home.recentActivity")}</Typography>
        <PressableFeedback onPress={() => sheetRef.current?.present()}>
          <Typography type="body-xs" weight="semibold" className="text-accent">
            {t("home.seeAll")}
          </Typography>
        </PressableFeedback>
      </View>

      {/* Initial posts */}
      {visiblePosts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}

      {/* Bottom Sheet — full feed */}
      <AppBottomSheetModal
        ref={sheetRef}
        title={t("home.recentActivity")}
        snapPoints={["85%"]}
      >
        <View className="gap-3">
          {SEED_POSTS.map((post) => (
            <PostCard key={post.id} {...post} />
          ))}
        </View>
      </AppBottomSheetModal>
    </View>
  );
}
