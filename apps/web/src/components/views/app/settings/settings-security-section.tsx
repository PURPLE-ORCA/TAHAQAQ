import type { ReactNode } from "react";

import { KeyRoundIcon, ShieldCheckIcon, TrashIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

import { SettingsSection } from "./settings-section";

export function SettingsSecuritySection() {
  return (
    <SettingsSection title="Security">
      <SecurityRow
        icon={<ShieldCheckIcon className="size-4" />}
        title="Two-factor authentication"
        description="Authenticator app · enabled"
        cta="Manage"
      />
      <SecurityRow
        icon={<KeyRoundIcon className="size-4" />}
        title="Active sessions"
        description="3 devices · last active 2 minutes ago"
        cta="Review"
      />
      <SecurityRow
        destructive
        icon={<TrashIcon className="size-4" />}
        title="Delete account"
        description="Permanently remove your account and personal data."
        cta="Delete"
      />
    </SettingsSection>
  );
}

interface SecurityRowProps {
  icon: ReactNode;
  title: string;
  description: string;
  cta: string;
  destructive?: boolean;
}

function SecurityRow({ icon, title, description, cta, destructive }: SecurityRowProps) {
  return (
    <div
      className={`flex items-center gap-4 rounded-lg border p-3.5 ${
        destructive ? "border-destructive/40 bg-destructive/3" : "border-border/60 bg-background/3"
      }`}
    >
      <div
        className={`flex size-8 shrink-0 items-center justify-center rounded-md ${
          destructive ? "bg-destructive/10 text-destructive" : "bg-foreground/5"
        }`}
      >
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <Text variant="small" className="font-medium">
          {title}
        </Text>
        <Text variant="muted" className="mt-0.5 text-xs">
          {description}
        </Text>
      </div>
      <Button
        variant={destructive ? "outline" : "ghost"}
        size="sm"
        type="button"
        className={destructive ? "border-destructive/40 text-destructive hover:bg-destructive/10" : ""}
      >
        {cta}
      </Button>
    </div>
  );
}
