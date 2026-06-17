import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

interface SettingsSaveBarProps {
  dirty: boolean;
  onDiscard: () => void;
}

export function SettingsSaveBar({ dirty, onDiscard }: SettingsSaveBarProps) {
  return (
    <div className="mt-8">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-3">
        <Text variant="xs">
          {dirty ? "Unsaved changes" : "All saved"}
        </Text>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" type="button" disabled={!dirty} onClick={onDiscard}>
            Discard
          </Button>
          <Button size="sm" type="button" disabled={!dirty}>
            Save changes
          </Button>
        </div>
      </div>
    </div>
  );
}
