import { ScrollView, View } from "react-native";
import { Typography } from "heroui-native";
import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
} from "@/components/ui/bottom-sheet";
import { useI18n } from "@/hooks/useI18n";

export function PrivacySheet({
  triggerRef,
}: {
  triggerRef: React.RefObject<AppBottomSheetModalRef | null>;
}) {
  const { t } = useI18n();

  return (
    <AppBottomSheetModal ref={triggerRef} title={t("about.privacyTitle")}>
      <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
        <View className="gap-5 py-2">
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.anonymousAudits")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.anonymousAuditsDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.aiProcessing")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.aiProcessingDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.noTracking")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.noTrackingDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.purposeOfData")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.purposeOfDataDesc")}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </AppBottomSheetModal>
  );
}
