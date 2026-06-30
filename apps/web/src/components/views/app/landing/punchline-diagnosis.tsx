import { Text } from "@/components/ui/text";

export function PunchlineDiagnosis() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"Problem is not reporting. Problem is what happens next."}
      </Text>
      <Text className="text-muted-foreground text-base leading-relaxed mt-4">
        {"People already try to leave a trace. What breaks is follow-up: the case gets lost, delayed, or buried. TAHAQAQ captures it once, verifies it, and sends it down one clear path."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
