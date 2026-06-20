import { View } from "react-native";
import { router } from "expo-router";
import {
  PressableFeedback,
  Separator,
  Surface,
  Typography,
} from "heroui-native";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { Icon } from "@/components/ui/icon";
import {
  useThemePreference,
  type ThemePreference,
} from "@/hooks/use-theme-preference";

export default function AppearanceScreen() {
  const { theme, setTheme } = useThemePreference();

  const options: Array<{
    label: string;
    value: ThemePreference;
    subtitle: string;
  }> = [
    {
      label: "Light",
      value: "light",
      subtitle: "Always use light mode",
    },
    {
      label: "Dark",
      value: "dark",
      subtitle: "Always use dark mode",
    },
    {
      label: "System",
      value: "system",
      subtitle: "Matches your device settings",
    },
  ];

  const handleSelect = (value: ThemePreference) => {
    setTheme(value);
  };

  return (
    <SafeScreen safeArea="top" scrollable contentClassName="gap-5 pb-10">
      {/* Header Row */}
      <View className="flex-row items-center gap-3 py-2">
        <PressableFeedback onPress={() => router.back()}>
          <View className="size-10 items-center justify-center rounded-xl bg-surface border border-border">
            <Icon
              name="chevron-back-outline"
              size={20}
              className="text-foreground"
            />
          </View>
        </PressableFeedback>
        <Typography type="h3" weight="bold">
          Appearance
        </Typography>
      </View>

      <Separator />

      <Surface className="gap-3">
        {options.map((option) => {
          const isSelected = theme === option.value;
          return (
            <PressableFeedback
              key={option.value}
              onPress={() => handleSelect(option.value)}
            >
              <View className="flex-row items-center justify-between py-3 px-1">
                <View className="flex-1 gap-0.5">
                  <Typography type="body" weight="medium">
                    {option.label}
                  </Typography>
                  <Typography type="body-xs" color="muted">
                    {option.subtitle}
                  </Typography>
                </View>
                {isSelected && (
                  <Icon
                    name="checkmark-outline"
                    size={22}
                    className="text-accent"
                  />
                )}
              </View>
            </PressableFeedback>
          );
        })}
      </Surface>
    </SafeScreen>
  );
}
