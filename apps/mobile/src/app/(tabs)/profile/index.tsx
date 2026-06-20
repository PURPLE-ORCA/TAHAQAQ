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

export default function ProfileScreen() {
  const router = useRouter();
  const howItWorksRef = useRef<AppBottomSheetModalRef>(null);
  const privacyRef = useRef<AppBottomSheetModalRef>(null);
  const termsRef = useRef<AppBottomSheetModalRef>(null);

  return (
    <SafeScreen safeArea="top" scrollable contentClassName="gap-5 pb-10">
      <ProfileHeader />

      <Separator />

      <Surface className="gap-3">
        <SectionHeader title="Account" />
        <SettingsRow
          icon="pencil-outline"
          title="Edit Profile"
          subtitle="Update your personal info"
          onPress={() => {}}
        />
        <SettingsRow
          icon="document-text-outline"
          title="My Reports"
          subtitle="8 submitted"
          onPress={() => {}}
        />
        <SettingsRow
          icon="notifications-outline"
          title="Notifications"
          subtitle="3 new"
          onPress={() => {}}
          isLast
        />
      </Surface>

      <View className="py-2" />

      <Surface className="gap-3">
        <SectionHeader title="Setting" />
        <SettingsRow
          icon="settings-outline"
          title="Settings"
          subtitle="App preferences and language"
          onPress={() => {}}
        />
        <SettingsRow
          icon="moon-outline"
          title="Appearance"
          subtitle="Dark mode, theme"
          onPress={() => router.push('/profile/appearance')}
          isLast
        />
      </Surface>

      <Separator />

      <Surface className="gap-3">
        <SectionHeader title="General" />
        <SettingsRow
          icon="help-circle-outline"
          title="How TAHAQAQ Works"
          subtitle="Learn how it works"
          onPress={() => howItWorksRef.current?.present()}
        />
        <SettingsRow
          icon="shield-checkmark-outline"
          title="Privacy Policy"
          subtitle="Your data is safe"
          onPress={() => privacyRef.current?.present()}
        />
        <SettingsRow
          icon="document-text-outline"
          title="Terms & Conditions"
          subtitle="Usage terms"
          onPress={() => termsRef.current?.present()}
        />
        <SettingsRow
          icon="chatbubble-outline"
          title="Contact Us"
          subtitle="Get in touch with support"
          onPress={() => {}}
        />
        <SettingsRow
          icon="information-circle-outline"
          title="About TAHAQAQ"
          subtitle="v1.0"
          onPress={() => {}}
        />
        <SettingsRow
          icon="log-out-outline"
          title="Sign Out"
          variant="danger"
          onPress={() => {}}
          isLast
        />
      </Surface>

      <View className="py-2" />

      <Surface className="gap-3">
        <SectionHeader title="FAQ" />
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
