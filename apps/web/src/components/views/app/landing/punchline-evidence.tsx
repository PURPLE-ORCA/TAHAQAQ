import { Text } from "@/components/ui/text";

export function PunchlineEvidence() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"They said the evidence was missing. So we built the evidence engine."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
