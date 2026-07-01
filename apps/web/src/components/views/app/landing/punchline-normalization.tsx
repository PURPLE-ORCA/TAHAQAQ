import { Text } from "@/components/ui/text";

export function PunchlineNormalization() {
  return (
    <section className="max-w-3xl mx-auto text-center px-4 py-2">
      <Text variant="h2" className="text-foreground font-semibold leading-tight">
        {"جعل تقديم البلاغ سهلاً بما يكفي ليحدث."}
      </Text>
      <Text className="text-muted-foreground text-base leading-relaxed mt-4">
        {"امسح رمز الاستجابة السريعة (QR)، املأ نموذجاً قصيراً، واترك أثراً. يظل الجهد المطلوب من المواطن بسيطاً لتصل المزيد من الإشارات الواقعية إلى النظام بدلاً من أن تموت عند نقطة الإحباط."}
      </Text>
      <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
    </section>
  );
}
