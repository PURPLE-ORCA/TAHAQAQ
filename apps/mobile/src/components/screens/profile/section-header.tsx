import { I18nManager } from "react-native";
import { Typography } from "heroui-native";

const rtlClass = I18nManager.isRTL ? "text-right" : "";

export const SectionHeader = ({ title }: { title: string }) => (
  <Typography
    type="body-xs"
    weight="semibold"
    color="muted"
    className={`uppercase tracking-wider ${rtlClass}`}
  >
    {title}
  </Typography>
);
