import { ActivityIndicator, Pressable, View } from "react-native";
import { Card, Button } from "heroui-native";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import type { Establishment } from "../types";
import { statusStyles } from "../lib/constants";
import { useI18n } from "@/hooks/useI18n";

type Props = {
  selected: Establishment;
  onPress?: () => void;
};

export function SelectedEstablishmentCard({ selected, onPress }: Props) {
  const { t } = useI18n();

  const statusLabel =
    selected.status === "verified"
      ? t("map.statusVerified")
      : selected.status === "watch"
        ? t("map.statusWatchlist")
        : selected.status === "new"
          ? t("map.statusNew")
          : t("map.statusPriority");

  const score = selected.overallScore;
  const scoreText = score !== undefined ? score.toFixed(1) : "—";

  let scoreBg = "bg-neutral-100 dark:bg-neutral-800";
  let scoreTextColor = "text-neutral-500 dark:text-neutral-400";

  if (score !== undefined) {
    if (score >= 7) {
      scoreBg = "bg-green-500";
      scoreTextColor = "text-neutral-900";
    } else if (score >= 4) {
      scoreBg = "bg-yellow-500";
      scoreTextColor = "text-neutral-900";
    } else {
      scoreBg = "bg-red-500";
      scoreTextColor = "text-neutral-900";
    }
  }

  const categories = [
    {
      key: "bribery",
      label: t("audit.categoryBribery") || "Bribery",
      value: selected.scoreCategories?.bribery ?? 0,
    },
    {
      key: "hygiene",
      label: t("audit.categoryHygiene") || "Hygiene",
      value: selected.scoreCategories?.hygiene ?? 0,
    },
    {
      key: "waitTime",
      label: t("audit.categoryWaitTime") || "Wait Time",
      value: selected.scoreCategories?.waitTime ?? 0,
    },
    {
      key: "equipment",
      label: t("audit.categoryEquipment") || "Equipment",
      value: selected.scoreCategories?.equipment ?? 0,
    },
    {
      key: "staff",
      label: t("audit.categoryStaff") || "Staff",
      value: selected.scoreCategories?.staff ?? 0,
    },
  ];

  const isLoading = selected.name === "Loading establishment...";

  return (
    <Pressable onPress={onPress} className="absolute bottom-4 left-4 right-4">
      <Card className="rounded-2xl bg-background/90 px-4 py-3">
        {/* Top row & overallScore */}
        <View className="flex-row items-center justify-between">
          <View className="flex-1 mr-3">
            <View className="flex-row items-center gap-1.5 flex-wrap">
              <Text variant="smallBold" className="text-foreground">
                {selected.name}
              </Text>
              {!isLoading && (
                <View
                  className={`rounded-full px-2 py-0.5 ${statusStyles[selected.status]}`}
                >
                  <Text variant="xsBold" className={statusStyles[selected.status]}>
                    {statusLabel}
                  </Text>
                </View>
              )}
            </View>
            {/* Second row */}
            <Text variant="xs" className="text-muted mt-0.5">
              {selected.city} • {selected.category}
            </Text>
            {/* Social proof row */}
            {!isLoading && (
              <View className="flex-row items-center gap-3 mt-1">
                <View className="flex-row items-center gap-1">
                  <Icon name="chatbubble" size={12} className="text-muted" />
                  <Text variant="xs" className="text-muted">
                    {selected.reviews} {selected.reviews === 1 ? "review" : "reviews"}
                  </Text>
                </View>
                {selected.recentSignal ? (
                  <View className="flex-row items-center gap-1">
                    <Icon name="alert-circle" size={12} className="text-orange-500" />
                    <Text variant="xs" className="text-orange-500" numberOfLines={1}>
                      {selected.recentSignal}
                    </Text>
                  </View>
                ) : null}
              </View>
            )}
            {/* Loading spinner */}
            {isLoading && (
              <View className="flex-row items-center gap-2 mt-1">
                <ActivityIndicator size="small" className="text-muted" />
                <Text variant="xs" className="text-muted">
                  {selected.city}
                </Text>
              </View>
            )}
          </View>

          {/* Large colored circle/badge for overallScore */}
          {!isLoading && (
            <View
              className={`w-12 h-12 rounded-full items-center justify-center ${scoreBg}`}
            >
              <Text
                variant="smallBold"
                className={`${scoreTextColor} text-center font-bold`}
              >
                {scoreText}
              </Text>
            </View>
          )}
        </View>

        {/* Category breakdown (mini-bars) */}
        {!isLoading && selected.scoreCategories && (
          <View className="flex-row flex-wrap justify-between mt-3">
            {categories.map((cat) => {
              let barColor = "bg-red-500";
              if (cat.value >= 7) {
                barColor = "bg-green-500";
              } else if (cat.value >= 4) {
                barColor = "bg-yellow-500";
              }

              return (
                <View
                  key={cat.key}
                  className="w-[48%] flex-row items-center justify-between py-1"
                >
                  <Text
                    variant="xs"
                    className="text-foreground/75 flex-1 mr-1.5"
                    numberOfLines={1}
                  >
                    {cat.label}
                  </Text>
                  <View className="w-14 h-1.5 bg-foreground/10 rounded-full overflow-hidden">
                    <View
                      className={`h-full ${barColor}`}
                      style={{ width: `${(cat.value / 10) * 100}%` }}
                    />
                  </View>
                </View>
              );
            })}
          </View>
        )}

        <Button
          variant="primary"
          onPress={onPress}
          className="mt-3"
          isDisabled={isLoading}
        >
          <Button.Label>
            {isLoading ? "Loading..." : t("map.review")}
          </Button.Label>
        </Button>
      </Card>
    </Pressable>
  );
}
