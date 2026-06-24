import { View } from "react-native";
import { Button, Label } from "heroui-native";
import { useI18n } from "@/hooks/useI18n";
import { STAR_VALUES } from "../types";

interface HygieneDetailProps {
  hygieneRating: number;
  setHygieneRating: (rating: number) => void;
}

export function HygieneDetail({
  hygieneRating,
  setHygieneRating,
}: HygieneDetailProps) {
  const { t } = useI18n();
  return (
    <View className="gap-3">
      <Label>{t("audit.rating")}</Label>
      <View className="flex-row flex-wrap gap-2">
        {STAR_VALUES.map((value) => {
          const isSelected = hygieneRating === value;
          return (
            <Button
              key={value}
              variant={isSelected ? "primary" : "secondary"}
              size="sm"
              className="rounded-full"
              onPress={() => setHygieneRating(value)}
            >
              <Button.Label>{value}★</Button.Label>
            </Button>
          );
        })}
      </View>
    </View>
  );
}
