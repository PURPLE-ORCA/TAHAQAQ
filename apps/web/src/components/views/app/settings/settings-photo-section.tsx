import { UploadIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

import { SettingsSection } from "./settings-section";

interface SettingsPhotoSectionProps {
  onDirtyChange: () => void;
}

export function SettingsPhotoSection({ onDirtyChange }: SettingsPhotoSectionProps) {
  return (
    <SettingsSection title="Photo">
      <div className="flex items-center gap-5">
        <div className="size-20 shrink-0 rounded-full bg-linear-to-br from-primary/40 to-primary/10 ring-1 ring-border/60" />
        <div className="flex flex-1 flex-col gap-2">
          <div className="flex items-center gap-2">
            <Button size="sm" variant="outline" type="button" onClick={onDirtyChange}>
              <UploadIcon />
              Upload
            </Button>
            <Button size="sm" variant="ghost" type="button" onClick={onDirtyChange}>
              Remove
            </Button>
          </div>
          <Text variant="muted" className="text-xs">
            Recommended: 400×400 PNG, JPG, or SVG.
          </Text>
        </div>
      </div>
    </SettingsSection>
  );
}
