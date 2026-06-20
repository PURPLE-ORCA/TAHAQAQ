import { View } from "react-native";
import { Image } from "expo-image";
import { Card, Button, Typography } from "heroui-native";
import { manDraftingReviewVector } from "@tahaqaq/assets/vectors";
import { useI18n } from "@/hooks/useI18n";

export function DraftReviewCard() {
  const { t } = useI18n();

  return (
    <Card variant="secondary" className="overflow-hidden">
      <View className="flex-row items-center">
        <View className="flex-1 gap-1">
          <Typography type="h6">{t("home.gotDraft")}</Typography>
          <Typography type="body-sm">{t("home.reviewDraftDesc")}</Typography>
          <Button variant="primary" size="sm" className="self-start">
            <Button.Label>{t("home.reviewDrafts")}</Button.Label>
          </Button>
        </View>
        <Image
          source={manDraftingReviewVector}
          style={{ width: 100, height: 100 }}
          contentFit="contain"
        />
      </View>
    </Card>
  );
}
