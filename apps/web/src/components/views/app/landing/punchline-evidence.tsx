import { Text } from "@/components/ui/text";
import mascotComposing from "@tahaqaq/assets/mascot/mascotComposing.png";

export function PunchlineEvidence() {
  return (
    <section className="max-w-5xl mx-auto text-center px-4">
      <div className="mx-auto mb-8 max-w-4xl flex justify-center">
        <img
          alt="كائن ورقي يقوم بالتركيب والكتابة"
          className="h-auto w-full max-w-2xl object-contain"
          src={mascotComposing.src}
        />
      </div>
      <div className="max-w-3xl mx-auto">
        <Text variant="h2" className="text-foreground font-semibold leading-tight">
          {"البلاغات الصغيرة تتحول إلى أنماط قابلة للاستخدام."}
        </Text>
        <Text className="text-muted-foreground text-base leading-relaxed mt-4">
          {"بمجرد أن تشترك الطلبات المقدمة في الهيكل نفسه، يمكن لمنصة TAHAQAQ تجميع البلاغات المتكررة، ورصد الارتفاعات المفاجئة، وتوجيه الحالات، وإصدار تقارير يمكن لفرق العمل اتخاذ إجراءات فعلية بناءً عليها."}
        </Text>
        <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
      </div>
    </section>
  );
}
