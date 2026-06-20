import { View } from "react-native";
import { Text } from "@/components/ui/text";
import { establishments, statusStyles } from "./lib/constants";
import { useI18n } from "@/hooks/useI18n";

export function MapUnavailableFallback() {
  const { t } = useI18n();

  const getStatusLabel = (status: string) => {
    if (status === "verified") return t("map.statusVerified");
    if (status === "watch") return t("map.statusWatchlist");
    if (status === "new") return t("map.statusNew");
    return t("map.statusPriority");
  };

  return (
    <View className="flex-1 items-center justify-center gap-3 rounded-[28px] border border-border bg-surface px-5 py-8">
      <Text variant="large" className="text-center">
        {t("map.unavailableTitle")}
      </Text>
      <Text variant="small" className="text-center text-muted">
        {t("map.unavailableDesc")}
      </Text>
      <View className="mt-2 gap-2 self-stretch">
        {establishments.slice(0, 3).map((item) => (
          <View
            key={item.id}
            className="flex-row items-center justify-between rounded-2xl border border-border bg-background px-4 py-3"
          >
            <View className="flex-1 pr-3">
              <Text variant="smallBold">{item.name}</Text>
              <Text variant="xs" className="text-muted">
                {item.city} • {item.category}
              </Text>
            </View>
            <View
              className={`rounded-full px-3 py-1 ${statusStyles[item.status]}`}
            >
              <Text variant="xsBold" className={statusStyles[item.status]}>
                {getStatusLabel(item.status)}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
