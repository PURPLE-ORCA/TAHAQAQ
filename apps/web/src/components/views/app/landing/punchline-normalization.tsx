import { Text } from "@/components/ui/text";

export function PunchlineNormalization() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"Make reporting light enough to happen."}
      </Text>
      <Text className="text-muted-foreground text-base leading-relaxed mt-4">
        {"Scan QR, fill a short form, leave a trace. Citizen effort stays low so more real-world signals reach the system instead of dying at the point of frustration."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
