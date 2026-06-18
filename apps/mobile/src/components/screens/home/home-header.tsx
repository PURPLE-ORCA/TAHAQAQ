import { View } from "react-native";
import { router } from "expo-router";
import { Avatar, PressableFeedback, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";

export function HomeHeader() {
  return (
    <View className="flex-row items-center justify-between">
      <Typography type="h3" weight="bold">Welcome back 👋</Typography>
      <View className="flex-row items-center gap-3">
        <PressableFeedback className="relative size-10 items-center justify-center rounded-full">
          <Icon
            name="notifications-outline"
            size={20}
            className="text-foreground"
          />
          <View className="absolute right-1.5 top-1.5 size-2 rounded-full bg-danger" />
        </PressableFeedback>
        <PressableFeedback onPress={() => router.push("/profile")}>
          <Avatar size="md" color="accent">
            <Avatar.Fallback>U</Avatar.Fallback>
          </Avatar>
        </PressableFeedback>
      </View>
    </View>
  );
}
