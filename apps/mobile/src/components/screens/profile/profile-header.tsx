import { View } from "react-native";
import { Avatar, Surface, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";

export const ProfileHeader = () => (
  <Surface className="items-center gap-3 py-4">
    <View className="relative">
      <Avatar size="lg" color="accent" className="size-20">
        <Avatar.Fallback>MT</Avatar.Fallback>
      </Avatar>
      <View className="absolute -right-0.5 -bottom-0.5 size-7 items-center justify-center rounded-full bg-surface border-2 border-background">
        <Icon name="camera-outline" size={14} className="text-foreground" />
      </View>
    </View>
    <View className="items-center gap-0.5">
      <Typography type="h4" weight="semibold">
        Mohammed Tah
      </Typography>
      <Typography type="body-sm" color="muted">
        mohammed@email.co
      </Typography>
    </View>
  </Surface>
);
