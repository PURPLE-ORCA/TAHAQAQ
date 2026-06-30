import { establishments } from "./establishments";
import type { Establishment } from "./types";

export type QrIntakeCategory = {
  id: string;
  label: string;
  helper: string;
};

export type QrIntakeChoice = {
  id: string;
  label: string;
  helper: string;
};

export type QrEstablishmentContext = {
  establishment: Establishment;
  summaryLabel: string;
  intakeBanner: string;
};

export const qrIntakeCategories: QrIntakeCategory[] = [
  {
    id: "service-delay",
    label: "تأخر الخدمة",
    helper: "انتظار طويل أو توقف مفاجئ",
  },
  {
    id: "procedure-clarity",
    label: "غموض الإجراء",
    helper: "خطوة غير واضحة أو متبدلة",
  },
  {
    id: "staff-conduct",
    label: "أسلوب التعامل",
    helper: "نبرة، توجيه، أو حضور",
  },
  {
    id: "document-issue",
    label: "مشكلة في المستند",
    helper: "طلب غير متوقع أو ملاحظة على الورق",
  },
  {
    id: "facility-issue",
    label: "مشكلة في المرفق",
    helper: "نظافة، تجهيز، أو تشغيل",
  },
  {
    id: "other",
    label: "أخرى",
    helper: "سياق مختلف يحتاج وصفًا مختصرًا",
  },
];

export const qrIntakeWhenOptions: QrIntakeChoice[] = [
  {
    id: "today",
    label: "اليوم",
    helper: "حدثت الآن أو قبل ساعات قليلة",
  },
  {
    id: "yesterday",
    label: "أمس",
    helper: "خلال آخر أربع وعشرين ساعة",
  },
  {
    id: "this-week",
    label: "هذا الأسبوع",
    helper: "خلال الأيام السبعة الماضية",
  },
];

export const qrIntakeSeverityOptions: QrIntakeChoice[] = [
  {
    id: "light",
    label: "خفيفة",
    helper: "ملاحظة محدودة لكنها تستحق التسجيل",
  },
  {
    id: "medium",
    label: "متوسطة",
    helper: "تأثير واضح على التجربة أو المسار",
  },
  {
    id: "high",
    label: "عالية",
    helper: "بحاجة إلى متابعة أسرع",
  },
];

export function getQrEstablishmentContext(
  establishmentId: string
): QrEstablishmentContext | null {
  const establishment = establishments.find((item) => item.id === establishmentId);

  if (!establishment) {
    return null;
  }

  return {
    establishment,
    summaryLabel: `${establishment.category} · ${establishment.city}`,
    intakeBanner:
      establishment.status === "priority"
        ? "مسار أولوية للمراجعة الداخلية"
        : establishment.status === "new"
          ? "نقطة تجريبية جديدة على المسار"
          : "إدخال منظم لمراجعة أدق",
  };
}
