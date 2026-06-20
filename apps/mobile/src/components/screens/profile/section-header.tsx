import { Typography } from "heroui-native";

export const SectionHeader = ({ title }: { title: string }) => (
  <Typography
    type="body-xs"
    weight="semibold"
    color="muted"
    className="uppercase tracking-wider"
  >
    {title}
  </Typography>
);
