import { Text } from "@/components/ui/text";

export function PunchlineDiagnosis() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"Corruption leaves no trace."}
      </Text>
      <Text className="text-muted-foreground text-base leading-relaxed mt-4">
        {"No paper trail. No digital record. TAHAQAQ creates the trace — photos, GPS, timestamps, metadata. Every citizen audit is evidence that can't be denied."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
