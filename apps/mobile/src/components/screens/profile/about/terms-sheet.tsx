import { ScrollView, View } from "react-native";
import { Typography } from "heroui-native";
import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
} from "@/components/ui/bottom-sheet";
import { useI18n } from "@/hooks/useI18n";

export function TermsSheet({
  triggerRef,
}: {
  triggerRef: React.RefObject<AppBottomSheetModalRef | null>;
}) {
  const { t } = useI18n();

  return (
    <AppBottomSheetModal ref={triggerRef} title={t("about.termsTitle")}>
      <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
        <View className="gap-5 py-2">
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.voluntarySubmissions")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.voluntarySubmissionsDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.limitationLiability")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.limitationLiabilityDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.abusePolicy")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.abusePolicyDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              {t("about.contentLicense")}
            </Typography>
            <Typography type="body-sm" color="muted">
              {t("about.contentLicenseDesc")}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </AppBottomSheetModal>
  );
}
