import { I18nManager, ScrollView, View } from "react-native";
import { Typography } from "heroui-native";
import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
} from "@/components/ui/bottom-sheet";
import { useI18n } from "@/hooks/useI18n";

const rtlClass = I18nManager.isRTL ? "text-right" : "";

export function TermsSheet({
  triggerRef,
}: {
  triggerRef: React.RefObject<AppBottomSheetModalRef | null>;
}) {
  const { t } = useI18n();

  return (
    <AppBottomSheetModal ref={triggerRef} title={t("about.termsTitle")}>
      <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
        <View
          className="gap-5 py-2"
          style={{ writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
        >
          <View className="gap-1">
            <Typography type="body" weight="semibold" className={rtlClass}>
              {t("about.voluntarySubmissions")}
            </Typography>
            <Typography type="body-sm" color="muted" className={rtlClass}>
              {t("about.voluntarySubmissionsDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold" className={rtlClass}>
              {t("about.limitationLiability")}
            </Typography>
            <Typography type="body-sm" color="muted" className={rtlClass}>
              {t("about.limitationLiabilityDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold" className={rtlClass}>
              {t("about.abusePolicy")}
            </Typography>
            <Typography type="body-sm" color="muted" className={rtlClass}>
              {t("about.abusePolicyDesc")}
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold" className={rtlClass}>
              {t("about.contentLicense")}
            </Typography>
            <Typography type="body-sm" color="muted" className={rtlClass}>
              {t("about.contentLicenseDesc")}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </AppBottomSheetModal>
  );
}
