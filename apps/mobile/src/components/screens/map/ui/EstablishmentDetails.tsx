import { View } from "react-native";
import { Text } from "@/components/ui/text";
import type { Establishment } from "../types";
import { statusStyles } from "../lib/constants";
import { useI18n } from "@/hooks/useI18n";

type Props = {
  selected: Establishment;
};

export function EstablishmentDetails({ selected }: Props) {
  const { t } = useI18n();

  const statusLabel =
    selected.status === "verified"
      ? t("map.statusVerified")
      : selected.status === "watch"
        ? t("map.statusWatchlist")
        : selected.status === "new"
          ? t("map.statusNew")
          : t("map.statusPriority");

  return (
    <View className="gap-4">
      <View className="flex-row flex-wrap gap-2">
        <View
          className={`rounded-full px-3 py-1 ${statusStyles[selected.status]}`}
        >
          <Text variant="xsBold" className={statusStyles[selected.status]}>
            {statusLabel}
          </Text>
        </View>
        <View className="rounded-full bg-background px-3 py-1">
          <Text variant="xsBold">{selected.city}</Text>
        </View>
        <View className="rounded-full bg-background px-3 py-1">
          <Text variant="xsBold">{selected.category}</Text>
        </View>
      </View>

      <View className="gap-2 rounded-3xl border border-border bg-background p-4">
        <View className="flex-row items-center justify-between">
          <Text variant="smallBold">{t("map.whyThisPlace")}</Text>
          <Text variant="xs" className="text-muted">
            {selected.recentSignal}
          </Text>
        </View>
        <Text variant="small" className="text-muted">
          {t("map.seedDataNote")}
        </Text>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 rounded-3xl border border-border bg-background p-4">
          <Text variant="xs" className="text-muted">
            {t("map.reviews")}
          </Text>
          <Text variant="large">{selected.reviews}</Text>
        </View>
        <View className="flex-1 rounded-3xl border border-border bg-background p-4">
          <Text variant="xs" className="text-muted">
            {t("map.complaints")}
          </Text>
          <Text variant="large">{selected.complaints}</Text>
        </View>
      </View>
    </View>
  );
}
