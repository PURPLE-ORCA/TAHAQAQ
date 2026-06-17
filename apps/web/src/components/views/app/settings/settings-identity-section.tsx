import { AtSignIcon } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Input } from "@/components/ui/input";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";

import { SettingsSection } from "./settings-section";

interface SettingsIdentitySectionProps {
  onDirtyChange: () => void;
}

export function SettingsIdentitySection({ onDirtyChange }: SettingsIdentitySectionProps) {
  return (
    <SettingsSection title="Identity">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="p-name">Display name</FieldLabel>
          <Input id="p-name" defaultValue="Sean Brydon" onChange={onDirtyChange} />
        </Field>

        <Field>
          <FieldLabel htmlFor="p-handle">Handle</FieldLabel>
          <InputGroup>
            <InputGroupAddon>
              <AtSignIcon className="size-3.5 opacity-60" />
            </InputGroupAddon>
            <InputGroupInput
              id="p-handle"
              defaultValue="seancassiere"
              onChange={onDirtyChange}
            />
          </InputGroup>
        </Field>

        <Field>
          <FieldLabel htmlFor="p-bio">Bio</FieldLabel>
          <Textarea
            id="p-bio"
            rows={3}
            placeholder="Designer, engineer, generally indoors."
            onChange={onDirtyChange}
          />
          <FieldDescription>Up to 240 characters.</FieldDescription>
        </Field>
      </FieldGroup>
    </SettingsSection>
  );
}
