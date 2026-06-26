import { Text } from "@/components/ui/text";

export function PunchlineNormalization() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"The normalization of citizens."}
      </Text>
      <Text className="text-muted-foreground text-base leading-relaxed mt-4">
        {"When bribery becomes routine, silence becomes complicity. TAHAQAQ turns auditing into a habit — not a heroic act, just three taps and a photo. The barrier between 'seeing' and 'reporting' disappears."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
