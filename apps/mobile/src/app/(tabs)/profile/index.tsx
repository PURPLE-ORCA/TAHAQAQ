import { useRef } from "react";
import { View } from "react-native";
import { useRouter } from "expo-router";
import { Accordion, Separator, Surface, Typography } from "heroui-native";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { ProfileHeader } from "@/components/screens/profile/profile-header";
import { SettingsRow } from "@/components/screens/profile/settings-row";
import { SectionHeader } from "@/components/screens/profile/section-header";
import { faqItems } from "@/components/screens/profile/lib/faq";
import { HowItWorksSheet } from "@/components/screens/profile/about/how-it-works-sheet";
import { PrivacySheet } from "@/components/screens/profile/about/privacy-sheet";
import { TermsSheet } from "@/components/screens/profile/about/terms-sheet";
import { AppBottomSheetModalRef } from "@/components/ui/bottom-sheet";
import { useI18n } from "@/hooks/useI18n";

export default function ProfileScreen() {
  const router = useRouter();
  const { t } = useI18n();
  const howItWorksRef = useRef<AppBottomSheetModalRef>(null);
  const privacyRef = useRef<AppBottomSheetModalRef>(null);
  const termsRef = useRef<AppBottomSheetModalRef>(null);

  return (
    <SafeScreen safeArea="top" scrollable contentClassName="gap-5 pb-10">
      <ProfileHeader />

      <Separator />

      <Surface className="gap-3">
        <SectionHeader title={t("profile.account")} />
        <SettingsRow
          icon="pencil-outline"
          title={t("profile.editProfile")}
          subtitle={t("profile.updateYourPersonalInfo")}
          onPress={() => {}}
        />
        <SettingsRow
          icon="document-text-outline"
          title={t("profile.myReports")}
          subtitle={t("profile.submittedCount", { count: 8 })}
          onPress={() => {}}
        />
        <SettingsRow
          icon="notifications-outline"
          title={t("profile.notifications")}
          subtitle={t("profile.newCount", { count: 3 })}
          onPress={() => {}}
          isLast
        />
      </Surface>

      <View className="py-2" />

      <Surface className="gap-3">
        <SectionHeader title={t("profile.setting")} />
        <SettingsRow
          icon="globe-outline"
          title={t("settings.language")}
          subtitle={t("settings.appPreferences")}
          onPress={() => router.push("/profile/language")}
        />
        <SettingsRow
          icon="moon-outline"
          title={t("settings.appearance")}
          subtitle={t("profile.darkModeTheme")}
          onPress={() => router.push("/profile/appearance")}
          isLast
        />
      </Surface>

      <Separator />

      <Surface className="gap-3">
        <SectionHeader title={t("profile.general")} />
        <SettingsRow
          icon="help-circle-outline"
          title={t("about.howItWorks")}
          subtitle={t("about.learnHowItWorks")}
          onPress={() => howItWorksRef.current?.present()}
        />
        <SettingsRow
          icon="shield-checkmark-outline"
          title={t("about.privacyPolicy")}
          subtitle={t("about.yourDataIsSafe")}
          onPress={() => privacyRef.current?.present()}
        />
        <SettingsRow
          icon="document-text-outline"
          title={t("about.terms")}
          subtitle={t("about.usageTerms")}
          onPress={() => termsRef.current?.present()}
        />
        <SettingsRow
          icon="chatbubble-outline"
          title={t("about.contactUs")}
          subtitle={t("about.getInTouch")}
          onPress={() => {}}
        />
        <SettingsRow
          icon="information-circle-outline"
          title={t("about.aboutTahaqaq")}
          subtitle={t("profile.version")}
          onPress={() => {}}
        />
        <SettingsRow
          icon="log-out-outline"
          title={t("about.signOut")}
          variant="danger"
          onPress={() => {}}
          isLast
        />
      </Surface>

      <View className="py-2" />

      <Surface className="gap-3">
        <SectionHeader title={t("profile.faq")} />
        <Accordion>
          {faqItems.map((item) => (
            <Accordion.Item key={item.value} value={item.value}>
              <Accordion.Trigger>
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
