"use client";

import { useState } from "react";

import { AppContentHeader } from "@/components/layout/app/app-content-header";
import { AppShell } from "@/components/layout/app/app-shell";

import { SettingsIdentitySection } from "./settings-identity-section";
import { SettingsLocaleSection } from "./settings-locale-section";
import { SettingsPhotoSection } from "./settings-photo-section";
import { SettingsSaveBar } from "./settings-save-bar";
import { SettingsSecuritySection } from "./settings-security-section";

export function SettingsPage() {
  const [dirty, setDirty] = useState(false);

  return (
    <AppShell>
      <AppContentHeader title="Settings" />

      <div className="mx-auto">
        <SettingsPhotoSection onDirtyChange={() => setDirty(true)} />
        <SettingsIdentitySection onDirtyChange={() => setDirty(true)} />
        <SettingsLocaleSection onDirtyChange={() => setDirty(true)} />
        <SettingsSecuritySection />
        <SettingsSaveBar dirty={dirty} onDiscard={() => setDirty(false)} />
      </div>

    </AppShell>
  );
}
