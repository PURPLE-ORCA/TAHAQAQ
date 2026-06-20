import { View } from "react-native";
import { Accordion, Separator, Surface, Typography } from "heroui-native";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { ProfileHeader } from "@/components/screens/profile/profile-header";
import { SettingsRow } from "@/components/screens/profile/settings-row";
import { SectionHeader } from "@/components/screens/profile/section-header";
import { faqItems } from "@/components/screens/profile/lib/faq";

export default function ProfileScreen() {
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
          onPress={() => {}}
          isLast
        />
      </Surface>

      <Separator />

      <Surface className="gap-3">
        <SectionHeader title="General" />
        <SettingsRow
          icon="chatbubble-outline"
          title="Contact Us"
          subtitle="Get in touch with support"
          onPress={() => {}}
        />
        <SettingsRow
          icon="document-outline"
          title="Terms & Condition"
          onPress={() => {}}
        />
        <SettingsRow
          icon="lock-closed-outline"
          title="Privacy Policy"
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
    </SafeScreen>
  );
}
