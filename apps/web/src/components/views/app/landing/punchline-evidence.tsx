import { Text } from "@/components/ui/text";

export function PunchlineEvidence() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"Small reports become usable patterns."}
      </Text>
      <Text className="text-muted-foreground text-base leading-relaxed mt-4">
        {"Once submissions share the same structure, TAHAQAQ can group repeats, flag spikes, route cases, and generate reports that teams can actually act on."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
