import { ScrollView, View } from "react-native";
import { Typography } from "heroui-native";
import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
} from "@/components/ui/bottom-sheet";
import { useI18n } from "@/hooks/useI18n";

export function HowItWorksSheet({
  triggerRef,
}: {
  triggerRef: React.RefObject<AppBottomSheetModalRef | null>;
}) {
  const { t } = useI18n();

  return (
    <AppBottomSheetModal ref={triggerRef} title={t("about.howItWorksTitle")}>
      <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
        <View className="gap-5 py-2">
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.step1")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.step1Desc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.step2")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.step2Desc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.step3")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.step3Desc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.step4")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.step4Desc")}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </AppBottomSheetModal>
  );
}
