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
import { useI18n } from "@/hooks/useI18n";

type LanguageOption = {
  label: string;
  value: string;
  subtitle: string;
};

export default function LanguageScreen() {
  const { t, locale, setLocale, isRTL } = useI18n();

  const options: LanguageOption[] = [
    {
      label: t("language.arabic"),
      value: "ar",
      subtitle: "العربية",
    },
    {
      label: t("language.french"),
      value: "fr",
      subtitle: "Français",
    },
    {
      label: t("language.english"),
      value: "en",
      subtitle: "English",
    },
  ];

  const handleSelect = (value: string) => {
    if (value === locale) return;
    setLocale(value);

    // RTL change requires app restart
    const wasRTL = locale === "ar";
    const nowRTL = value === "ar";
    if (wasRTL !== nowRTL) {
      // Show restart alert
      import("react-native").then(({ Alert }) => {
        Alert.alert(t("language.title"), t("language.restartRequired"), [
          { text: t("common.ok") },
        ]);
      });
    }
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
          {t("language.title")}
        </Typography>
      </View>

      <Separator />

      <Surface className="gap-3">
        {options.map((option) => {
          const isSelected = locale === option.value;
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
