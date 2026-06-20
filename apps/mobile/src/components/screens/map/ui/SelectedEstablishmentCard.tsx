import { Pressable, View } from "react-native";
import { Card, Button } from "heroui-native";
import { Text } from "@/components/ui/text";
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

  return (
    <Pressable onPress={onPress} className="absolute bottom-4 left-4 right-4">
      <Card className="rounded-2xl bg-background/90 px-4 py-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
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
        <Button
          variant="primary"
          onPress={onPress}
          className="mt-3"
          isDisabled={selected.name === "Loading establishment..."}
        >
          <Button.Label>
            {selected.name === "Loading establishment..."
              ? "Loading..."
              : t("map.review")}
          </Button.Label>
        </Button>
      </Card>
    </Pressable>
  );
}
