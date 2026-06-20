import { View } from "react-native";
import { Card } from "heroui-native";
import { Text } from "@/components/ui/text";
import type { Establishment } from "../types";
import { statusStyles } from "../lib/constants";
import { useI18n } from "@/hooks/useI18n";

type Props = {
  selected: Establishment;
};

export function SelectedEstablishmentCard({ selected }: Props) {
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
    <Card className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 px-4 py-3">
      <View className="flex-row items-center justify-between">
        <View>
          <Text variant="smallBold">{selected.name}</Text>
          <Text variant="xs" className="text-muted">
            {selected.city} • {selected.category}
          </Text>
        </View>
        <View
          className={`rounded-full px-3 py-1 ${statusStyles[selected.status]}`}
        >
          <Text variant="xsBold" className={statusStyles[selected.status]}>
            {statusLabel}
          </Text>
        </View>
      </View>
    </Card>
  );
}
