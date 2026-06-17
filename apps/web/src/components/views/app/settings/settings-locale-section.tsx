import {
  Field,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { SettingsSection } from "./settings-section";

interface SettingsLocaleSectionProps {
  onDirtyChange: () => void;
}

export function SettingsLocaleSection({ onDirtyChange }: SettingsLocaleSectionProps) {
  return (
    <SettingsSection title="Locale">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="p-email">Email</FieldLabel>
          <Input id="p-email" type="email" defaultValue="sean@cal.com" readOnly />
        </Field>

        <Field>
          <FieldLabel htmlFor="p-lang">Language</FieldLabel>
          <Select defaultValue="en" onValueChange={onDirtyChange}>
            <SelectTrigger id="p-lang" className="w-full">
              <SelectValue placeholder="Select language" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Español</SelectItem>
              <SelectItem value="fr">Français</SelectItem>
              <SelectItem value="de">Deutsch</SelectItem>
              <SelectItem value="ja">日本語</SelectItem>
            </SelectContent>
          </Select>
        </Field>

        <Field>
          <FieldLabel htmlFor="p-tz">Timezone</FieldLabel>
          <Select defaultValue="utc-5" onValueChange={onDirtyChange}>
            <SelectTrigger id="p-tz" className="w-full">
              <SelectValue placeholder="Select timezone" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="utc-8">Pacific (UTC−8)</SelectItem>
              <SelectItem value="utc-5">Eastern (UTC−5)</SelectItem>
              <SelectItem value="utc">UTC</SelectItem>
              <SelectItem value="utc+1">Central European (UTC+1)</SelectItem>
              <SelectItem value="utc+9">Japan (UTC+9)</SelectItem>
            </SelectContent>
          </Select>
        </Field>
      </FieldGroup>
    </SettingsSection>
  );
}
