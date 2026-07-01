import { Text } from "@/components/ui/text";

export function PunchlineDiagnosis() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-14">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"المشكلة ليست في تقديم البلاغ. المشكلة هي ما يحدث بعد ذلك."}
      </Text>
      <Text className="text-muted-foreground text-base leading-relaxed mt-4">
        {"يحاول الناس بالفعل توثيق شكاويهم. لكن الخلل يكمن في المتابعة: حيث تضيع القضية، أو تتأخر، أو تُدفن. تسجل TAHAQAQ الحالة مرة واحدة، وتتحقق منها، ثم ترسلها عبر مسار واحد واضح."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
