import { View, TextInput, Pressable, ScrollView, Keyboard } from "react-native";
import { initialWindowMetrics } from "react-native-safe-area-context";
import { Card } from "heroui-native";
import { Text } from "@/components/ui/text";
import { Icon } from "@/components/ui/icon";
import { useI18n } from "@/hooks/useI18n";
import { getDistanceInMeters } from "../lib/mapUtils";
import { statusStyles } from "../lib/constants";
import type { Establishment } from "../types";

type Props = {
  searchQuery: string;
  searchResults: Establishment[];
  isSearching: boolean;
  showRedOnly: boolean;
  toggleRedOnly: () => void;
  handleSearch: (query: string) => void;
  selectEstablishment: (id: string) => void;
  clearSearch: () => void;
  setIsSearching: (val: boolean) => void;
  cameraCenter?: { latitude: number; longitude: number };
};

export function EstablishmentSearch({
  searchQuery,
  searchResults,
  isSearching,
  showRedOnly,
  toggleRedOnly,
  handleSearch,
  selectEstablishment,
  clearSearch,
  setIsSearching,
  cameraCenter,
}: Props) {
  const { t } = useI18n();
  const topOffset = (initialWindowMetrics?.insets.top ?? 0) + 16;

  const formatDistance = (est: Establishment) => {
    if (!cameraCenter) return "";
    const dist = getDistanceInMeters(
      cameraCenter.latitude,
      cameraCenter.longitude,
      est.coordinates.latitude,
      est.coordinates.longitude,
    );
    return t("map.distance", { distance: Math.round(dist).toString() });
  };

  return (
    <View
      className="absolute left-6 right-6 z-50 gap-2"
      style={{ top: topOffset }}
    >
      {/* Click outside backdrop to dismiss results */}
      {isSearching && (
        <Pressable
          className="absolute -left-[500px] -right-[500px] -top-[1000px] -bottom-[1000px] bg-transparent"
          onPress={() => {
            setIsSearching(false);
            Keyboard.dismiss();
          }}
        />
      )}

      {/* Search Input Bar */}
      <Card className="flex-row items-center bg-background/95 border border-border/30 rounded-2xl px-4 py-2.5 shadow-lg gap-3">
        <Icon name="search" size={20} className="text-foreground/50" />
        <TextInput
          className="flex-1 text-sm font-medium text-foreground p-0 m-0 text-left"
          value={searchQuery}
          onChangeText={handleSearch}
          placeholder={t("map.searchPlaceholder")}
          placeholderTextColor="rgba(255, 255, 255, 0.4)"
          autoCorrect={false}
          autoCapitalize="none"
          onFocus={() => setIsSearching(true)}
        />
        {searchQuery.length > 0 && (
          <Pressable onPress={clearSearch} className="p-1 active:opacity-60">
            <Icon name="close-circle" size={20} className="text-foreground/50" />
          </Pressable>
        )}
      </Card>

      {/* Urgent Only Filter */}
      {isSearching && searchQuery.trim().length > 0 && (
        <View className="flex-row">
          <Pressable
            onPress={toggleRedOnly}
            className={`flex-row items-center rounded-full px-3 py-1.5 gap-1.5 ${
              showRedOnly
                ? "bg-red-500"
                : "bg-background/80 border border-border/30"
            }`}
          >
            <Text
              variant="xsBold"
              className={showRedOnly ? "text-white" : "text-muted"}
            >
              🔴 Urgent only
            </Text>
          </Pressable>
        </View>
      )}

      {/* Results Dropdown */}
      {isSearching && searchQuery.trim().length > 0 && (
        <Card className="bg-background/95 border border-border/30 rounded-2xl overflow-hidden shadow-2xl max-h-[300px]">
          <ScrollView keyboardShouldPersistTaps="handled">
            {searchResults.length === 0 ? (
              <View className="py-6 px-4 items-center justify-center">
                <Icon name="search-outline" size={24} className="text-muted mb-2" />
                <Text variant="small" className="text-muted text-center">
                  {`No establishments match '${searchQuery}'`}
                </Text>
                <Text variant="xs" className="text-muted/60 text-center mt-1">
                  Try searching by name, category, or city
                </Text>
              </View>
            ) : (
              searchResults.slice(0, 8).map((est) => {
                const distanceStr = formatDistance(est);
                return (
                  <Pressable
                    key={est.id}
                    className="px-4 py-3 flex-row items-center justify-between active:bg-accent/10 border-b border-border/10"
                    onPress={() => {
                      selectEstablishment(est.id);
                      Keyboard.dismiss();
                    }}
                  >
                    <View className="flex-1 gap-1 items-start pr-2">
                      <Text variant="smallBold" className="text-foreground">
                        {est.name}
                      </Text>
                      <Text variant="xs" className="text-muted">
                        {est.category} · {est.city}
                      </Text>
                    </View>
                    <View className="items-end gap-1 shrink-0">
                      {distanceStr ? (
                        <Text variant="xs" className="text-accent font-semibold">
                          {distanceStr}
                        </Text>
                      ) : null}
                      {est.overallScore !== undefined && (
                        <View className={`rounded-full w-8 h-8 items-center justify-center ${
                          est.overallScore >= 7 ? "bg-green-500" :
                          est.overallScore >= 4 ? "bg-yellow-500" : "bg-red-500"
                        }`}>
                          <Text variant="xsBold" className={
                            est.overallScore >= 4 && est.overallScore < 7
                              ? "text-neutral-900" : "text-white"
                          }>
                            {est.overallScore.toFixed(1)}
                          </Text>
                        </View>
                      )}
                      <View className={`rounded-full px-2 py-0.5 ${statusStyles[est.status]}`}>
                        <Text variant="xsBold" className={statusStyles[est.status]} style={{ fontSize: 9 }}>
                          {est.status.toUpperCase()}
                        </Text>
                      </View>
                    </View>
                  </Pressable>
                );
              })
            )}
          </ScrollView>
        </Card>
      )}
    </View>
  );
}
