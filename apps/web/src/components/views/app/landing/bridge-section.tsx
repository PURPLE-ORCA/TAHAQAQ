import { Text } from "@/components/ui/text";

export function BridgeSection() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14 bg-transparent">
      <Text
        as="h2"
        variant="h2"
        className="text-foreground font-semibold leading-tight"
      >
        Two Sides. One Platform.
      </Text>
      <Text
        as="p"
        className="text-muted-foreground text-base leading-relaxed mt-4"
      >
        Citizens document what they see. The INPPLC reviews, verifies, and acts.
        Every report closes the gap between observation and accountability.
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
