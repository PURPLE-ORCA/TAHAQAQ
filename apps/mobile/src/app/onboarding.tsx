import { router } from "expo-router";
import { Image } from "expo-image";
import { Button, Typography } from "heroui-native";
import { View } from "react-native";
import { womenHoldingEqualityVector } from "@tahaqaq/assets/vectors";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { Icon } from "@/components/ui/icon";
import { useI18n } from "@/hooks/useI18n";

export default function OnboardingScreen() {
  const { t } = useI18n();

  return (
    <SafeScreen>
      <View className="flex-1 justify-between">
        <Image
          source={womenHoldingEqualityVector}
          contentFit="contain"
          style={{ width: "100%", height: 500 }}
          className="self-center"
        />

        <View className="gap-4">
          <Typography type="h2" weight="bold" className="text-4xl">
            {t("onboarding.title")}{" "}
            <Typography type="h2" className="text-4xl font-bold text-[#00a040]">
              {t("onboarding.confidence")}
            </Typography>
          </Typography>

          <Typography type="body" className="text-muted">
            {t("onboarding.description")}
          </Typography>
        </View>

        <View className="px-18">
          <Button
            variant="primary"
            size="md"
            className=" justify-between"
            onPress={() => router.push("/login")}
          >
            <Button.Label>{t("onboarding.getStarted")}</Button.Label>
            <View className="bg-background rounded-full p-1">
              <Icon name="chevron-forward" size={14} />
            </View>
          </Button>
        </View>
      </View>
    </SafeScreen>
  );
}
