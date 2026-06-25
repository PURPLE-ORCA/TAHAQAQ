import { useRef } from "react";
import { I18nManager, View } from "react-native";
import { useRouter } from "expo-router";
import { Accordion, Separator, Surface, Typography } from "heroui-native";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { ProfileHeader } from "@/components/screens/profile/profile-header";
import { SettingsRow } from "@/components/screens/profile/settings-row";
import { SectionHeader } from "@/components/screens/profile/section-header";
import { useFaqItems } from "@/components/screens/profile/lib/faq";
import { HowItWorksSheet } from "@/components/screens/profile/about/how-it-works-sheet";
import { PrivacySheet } from "@/components/screens/profile/about/privacy-sheet";
import { TermsSheet } from "@/components/screens/profile/about/terms-sheet";
import { AppBottomSheetModalRef } from "@/components/ui/bottom-sheet";
import { useAuthActions } from "@convex-dev/auth/react";
import { useI18n } from "@/hooks/useI18n";

export default function ProfileScreen() {
  const router = useRouter();
  const { t } = useI18n();
  const { signOut } = useAuthActions();
  const faqItems = useFaqItems();
  const howItWorksRef = useRef<AppBottomSheetModalRef>(null);
  const privacyRef = useRef<AppBottomSheetModalRef>(null);
  const termsRef = useRef<AppBottomSheetModalRef>(null);

  return (
    <SafeScreen safeArea="top" scrollable contentClassName="gap-2 pb-10">
      <ProfileHeader />

      <Surface className="gap-3">
        <SectionHeader title={t("profile.account")} />
        <SettingsRow
          icon="pencil"
          title={t("profile.editProfile")}
          subtitle={t("profile.updateYourPersonalInfo")}
          onPress={() => {}}
        />
        <SettingsRow
          icon="document-text"
          title={t("profile.myReports")}
          subtitle={t("profile.submittedCount", { count: 8 })}
          onPress={() => {}}
        />
        <SettingsRow
          icon="notifications"
          title={t("profile.notifications")}
          subtitle={t("profile.newCount", { count: 3 })}
          onPress={() => {}}
          isLast
        />
      </Surface>

      <Surface className="gap-3">
        <SectionHeader title={t("profile.setting")} />
        <SettingsRow
          icon="globe"
          title={t("settings.language")}
          subtitle={t("settings.appPreferences")}
          onPress={() => router.push("/profile/language")}
        />
        <SettingsRow
          icon="moon"
          title={t("settings.appearance")}
          subtitle={t("profile.darkModeTheme")}
          onPress={() => router.push("/profile/appearance")}
          isLast
        />
      </Surface>

      <Surface className="gap-3">
        <SectionHeader title={t("profile.general")} />
        <SettingsRow
          icon="help-circle"
          title={t("about.howItWorks")}
          subtitle={t("about.learnHowItWorks")}
          onPress={() => howItWorksRef.current?.present()}
        />
        <SettingsRow
          icon="shield-checkmark"
          title={t("about.privacyPolicy")}
          subtitle={t("about.yourDataIsSafe")}
          onPress={() => privacyRef.current?.present()}
        />
        <SettingsRow
          icon="document-text"
          title={t("about.terms")}
          subtitle={t("about.usageTerms")}
          onPress={() => termsRef.current?.present()}
        />
        <SettingsRow
          icon="chatbubble"
          title={t("about.contactUs")}
          subtitle={t("about.getInTouch")}
          onPress={() => {}}
        />
        <SettingsRow
          icon="information-circle"
          title={t("about.aboutTahaqaq")}
          subtitle={t("profile.version")}
          onPress={() => {}}
        />
        <SettingsRow
          icon="log-out"
          title={t("about.signOut")}
          variant="danger"
          onPress={async () => {
            await signOut();
            router.replace("/onboarding");
          }}
          isLast
        />
      </Surface>

      <Surface className="gap-3">
        <SectionHeader title={t("profile.faq")} />
        <Accordion>
          {faqItems.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Trigger
                style={{ writingDirection: I18nManager.isRTL ? "rtl" : "ltr" }}
              >
                <Typography type="body" weight="medium" className="flex-1">
                  {item.question}
                </Typography>
                <Accordion.Indicator />
              </Accordion.Trigger>
              <Accordion.Content>
                <Typography type="body-sm" color="muted">
                  {item.answer}
                </Typography>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion>
      </Surface>

      <HowItWorksSheet triggerRef={howItWorksRef} />
      <PrivacySheet triggerRef={privacyRef} />
      <TermsSheet triggerRef={termsRef} />
    </SafeScreen>
  );
}
