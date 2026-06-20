import { View, I18nManager } from "react-native";
import { PressableFeedback, Typography } from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { SettingsRowProps } from "./types";

export function SettingsRow({
  icon,
  title,
  subtitle,
  onPress,
  variant = "default",
}: SettingsRowProps) {
  const isDanger = variant === "danger";

  return (
    <PressableFeedback onPress={onPress}>
      <View className="flex-row items-center gap-2">
        <View className="size-11 items-center justify-center rounded-xl">
          <Icon
            name={icon as any}
            size={20}
            className={isDanger ? "text-danger" : "text-foreground"}
          />
        </View>

        <View className="flex-1 gap-0.5" style={{ writingDirection: I18nManager.isRTL ? "rtl" : "ltr", textAlign: I18nManager.isRTL ? "right" : "left" } as any}>
          <Typography
            type="body"
            weight="medium"
            className={isDanger ? "text-danger" : ""}
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography type="body-xs" color="muted">
              {subtitle}
            </Typography>
          )}
        </View>

        {isDanger ? (
          <Icon name="log-out-outline" size={18} className="text-danger" />
        ) : (
          <Icon
            name={I18nManager.isRTL ? "chevron-back-outline" : "chevron-forward-outline"}
            size={18}
            className="text-muted"
          />
        )}
      </View>
    </PressableFeedback>
  );
}
