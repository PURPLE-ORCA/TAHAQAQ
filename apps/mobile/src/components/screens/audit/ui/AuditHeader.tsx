import { View } from "react-native";
import { Button, Surface, Typography } from "heroui-native";
import { router } from "expo-router";
import { useI18n } from "@/hooks/useI18n";

interface AuditHeaderProps {
  step: number;
}

export function AuditHeader({ step }: AuditHeaderProps) {
  const { t } = useI18n();

  const STEP_LABELS = [
    "Location",
    "Categories",
    "Details",
    "Comment",
    "Review",
    "Done",
  ];
  const visibleSteps = STEP_LABELS.slice(0, 5);

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

      <View>
        <View className="flex-row w-full items-start justify-between">
          {visibleSteps.map((label, index) => {
            const number = index + 1;
            const isActive = step === number;
            const isCompleted = step > number;

            return (
              <View key={label} className="flex-1 items-center relative">
                {/* Connecting Line */}
                {index < 4 && (
                  <View
                    className={`absolute left-1/2 w-full h-0.5 ${
                      isCompleted ? "bg-accent" : "bg-border"
                    }`}
                    style={{ top: 15, zIndex: -1 }}
                  />
                )}

                {/* Circle Container */}
                <View className="h-8 items-center justify-center">
                  {isActive ? (
                    <View className="size-8 rounded-full items-center justify-center border border-accent bg-transparent">
                      <View className="size-6 rounded-full items-center justify-center bg-accent">
                        <Typography
                          type="body-xs"
                          weight="bold"
                          className="text-accent-foreground"
                        >
                          {number}
                        </Typography>
                      </View>
                    </View>
                  ) : isCompleted ? (
                    <View className="size-7 rounded-full items-center justify-center bg-accent">
                      <Typography
                        type="body-xs"
                        weight="bold"
                        className="text-accent-foreground"
                      >
                        ✓
                      </Typography>
                    </View>
                  ) : (
                    <View className="size-7 rounded-full items-center justify-center border border-border bg-background">
                      <Typography
                        type="body-xs"
                        weight="semibold"
                        color="muted"
                      >
                        {number}
                      </Typography>
                    </View>
                  )}
                </View>

                {/* Label */}
                <Typography
                  type="body-xs"
                  weight={isActive ? "semibold" : "medium"}
                  color={isActive ? "default" : "muted"}
                  className="mt-2 text-center"
                  numberOfLines={1}
                >
                  {label}
                </Typography>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
}
