import { Text } from "@/components/ui/text";
import mascotDelegating from "@tahaqaq/assets/mascot/mascotDelegating.png";

export function AuditFlow() {
  return (
    <section id="audit-flow" className="max-w-5xl mx-auto text-center px-4 py-8">

      <div className="max-w-3xl mx-auto">
        <Text variant="h2" className="text-foreground font-semibold leading-tight">
          {"كيف يصل البلاغ إلى الجهة المناسبة؟"}
        </Text>
        <Text className="text-muted-foreground text-base leading-relaxed mt-4">
          {"لا يكفي أن يصل البلاغ. الأهم أن يتم التحقق منه ثم توجيهه إلى المسار الصحيح."}
        </Text>
        <div className="w-16 h-px bg-primary/30 mx-auto" />
      </div>
            <div className="mx-auto max-w-4xl flex justify-center">
        <img
          alt="كائن ورقي يفوّض ويوجه البلاغات"
          className="h-auto w-full max-w-2xl object-contain"
          src={mascotDelegating.src}
        />
      </div>
    </section>
  );
}