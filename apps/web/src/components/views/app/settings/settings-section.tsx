import type { ReactNode } from "react";

import { Text } from "@/components/ui/text";

interface SettingsSectionProps {
  title: string;
  children: ReactNode;
}

export function SettingsSection({ title, children }: SettingsSectionProps) {
  return (
    <section className="mt-4">
      <Text as="h2" variant="h5" className="text-base">
        {title}
      </Text>
      <div className="mt-4 flex flex-col gap-4">{children}</div>
    </section>
  );
}
