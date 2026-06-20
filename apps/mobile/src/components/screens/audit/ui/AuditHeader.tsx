import { View } from "react-native";
import { Button, Surface, Typography } from "heroui-native";
import { router } from "expo-router";
import { useI18n } from "@/hooks/useI18n";

interface AuditHeaderProps {
  step: number;
}

export function AuditHeader({ step }: AuditHeaderProps) {
  const { t } = useI18n();

  const STEPS = [
    t("audit.step1"),
    t("audit.step2"),
    t("audit.step3"),
    t("audit.step4"),
    t("audit.step5"),
    t("audit.step6"),
  ];

  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between gap-3">
        <View className="gap-1">
          <Typography type="h2" weight="semibold">
            {t("audit.title")}
          </Typography>
          <Typography type="body-sm" color="muted">
            {t("audit.followFlow")}
          </Typography>
        </View>
        <Button
          variant="secondary"
          size="sm"
          onPress={() => router.replace("/(tabs)/map")}
        >
          <Button.Label>{t("audit.backToMap")}</Button.Label>
        </Button>
      </View>

      <Surface className="rounded-3xl p-4">
        <View className="gap-2">
          <Typography type="body-xs" color="muted">
            {t("audit.progress")}
          </Typography>
          <View className="flex-row flex-wrap gap-2">
            {STEPS.map((item, index) => {
              const number = index + 1;
              const isActive = step === number;
              const isCompleted = step > number;
              return (
                <Surface
                  key={item}
                  className={`rounded-full px-3 py-1 ${
                    isActive
                      ? "bg-accent"
                      : isCompleted
                        ? "bg-accent/10"
                        : "bg-background"
                  }`}
                >
                  <Typography
                    type="body-xs"
                    weight="semibold"
                    className={
                      isActive ? "text-accent-foreground" : "text-foreground"
                    }
                  >
                    {number}. {item}
                  </Typography>
                </Surface>
              );
            })}
          </View>
        </View>
      </Surface>
    </View>
  );
}
