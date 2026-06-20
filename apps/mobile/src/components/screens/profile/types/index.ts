export type SettingsRowProps = {
  icon: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
  isLast?: boolean;
  variant?: "default" | "danger";
};
