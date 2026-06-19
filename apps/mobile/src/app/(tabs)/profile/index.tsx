import { View } from "react-native";
import {
  Avatar,
  Button,
  Typography,
  Separator,
  PressableFeedback,
  Accordion,
  Surface,
} from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { SafeScreen } from "@/components/layout/SafeScreen";

/* ─── Data ─── */

const faqItems = [
  {
    value: "q1",
    question: "How do I report an issue?",
    answer:
      "Navigate to the report screen from the home tab, fill in the details about the civic issue you've observed, attach photos or evidence, and submit. Your report will be sent to the relevant authorities.",
  },
  {
    value: "q2",
    question: "Are reports anonymous?",
    answer:
      "Yes, all reports are anonymous by default. Your identity is never shared with the public or the facility being reported. Only verified administrators can access reporter details for follow-up.",
  },
  {
    value: "q3",
    question: "How are reports verified?",
    answer:
      "Reports go through an automated verification process that includes photo authenticity checks, GPS location validation, and cross-referencing with existing reports. Our AI-assisted system helps ensure accuracy.",
  },
  {
    value: "q4",
    question: "Can I edit my report?",
    answer:
      "You can edit your report within 24 hours of submission while it's still in draft or pending status. Once verified or resolved, edits are no longer available to maintain data integrity.",
  },
];

type SettingsRowProps = {
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  isLast?: boolean;
  variant?: "default" | "danger";
};

/* ─── Settings Row ─── */

function SettingsRow({
  icon,
  title,
  subtitle,
  onPress,
  isLast,
  variant = "default",
}: SettingsRowProps) {
  const isDanger = variant === "danger";

  return (
    <PressableFeedback onPress={onPress}>
      <View
        className={`flex-row items-center gap-4 py-3.5 ${!isLast ? "border-b border-outline-variant/30" : ""}`}
      >
        <View
          className={`size-11 items-center justify-center rounded-xl ${isDanger ? "bg-danger/10" : "bg-surface-secondary"}`}
        >
          <Icon
            name={icon as any}
            size={20}
            className={isDanger ? "text-danger" : "text-foreground"}
          />
        </View>

        <View className="flex-1 gap-0.5">
          <Typography
            type="body"
            weight="medium"
            className={isDanger ? "text-danger" : ""}
          >
            {title}
          </Typography>
          {subtitle ? (
            <Typography type="body-xs" color="muted">
              {subtitle}
            </Typography>
          ) : null}
        </View>

        {isDanger ? (
          <Icon name="log-out-outline" size={18} className="text-danger" />
        ) : (
          <Icon name="chevron-forward-outline" size={18} className="text-muted" />
        )}
      </View>
    </PressableFeedback>
  );
}

/* ─── Section Header ─── */

function SectionHeader({ title }: { title: string }) {
  return (
    <Typography
      type="body-xs"
      weight="semibold"
      color="muted"
      className="uppercase tracking-wider"
    >
      {title}
    </Typography>
  );
}

/* ─── Profile Screen ─── */

export default function ProfileScreen() {
  return (
    <SafeScreen safeArea="top" scrollable contentClassName="gap-5 pb-10">
      {/* ── Profile Header ── */}
      <Surface className="items-center gap-3 py-4">
        <View className="relative">
          <Avatar size="lg" color="accent" className="size-20">
            <Avatar.Fallback>MT</Avatar.Fallback>
          </Avatar>
          <View className="absolute -right-0.5 -bottom-0.5 size-7 items-center justify-center rounded-full bg-surface border-2 border-background">
            <Icon name="camera-outline" size={14} className="text-foreground" />
          </View>
        </View>
        <View className="items-center gap-0.5">
          <Typography type="h4" weight="semibold">
            Mohammed Tah
          </Typography>
          <Typography type="body-sm" color="muted">
            mohammed@email.co
          </Typography>
        </View>
      </Surface>

      <Separator />

      {/* ── Account ── */}
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

      {/* ── Settings ── */}
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

      {/* ── General ── */}
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

      {/* ── FAQ ── */}
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
