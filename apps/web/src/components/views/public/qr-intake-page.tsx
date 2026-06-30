"use client";

import { useState } from "react";

import {
  qrIntakeCategories,
  qrIntakeSeverityOptions,
  qrIntakeWhenOptions,
  type Establishment,
  type QrEstablishmentContext,
} from "@tahaqaq/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type DisplayEstablishment = Pick<
  Establishment,
  "id" | "name" | "category" | "address" | "city" | "status" | "recentSignal"
> & {
  summaryLabel: string;
  intakeBanner: string;
};

type QrIntakePageProps = {
  establishmentId: string;
  context: QrEstablishmentContext | null;
};

function statusLabel(status: Establishment["status"]) {
  switch (status) {
    case "priority":
      return "أولوية";
    case "verified":
      return "موثق";
    case "watch":
      return "قيد المتابعة";
    case "new":
      return "جديد";
    default:
      return "تجريبي";
  }
}

export function QrIntakePage({ establishmentId, context }: QrIntakePageProps) {
  const displayEstablishment: DisplayEstablishment = context
    ? {
        ...context.establishment,
        summaryLabel: context.summaryLabel,
        intakeBanner: context.intakeBanner,
      }
    : {
        id: establishmentId,
        name: "مرفق غير معروف",
        category: "مسار تجريبي",
        address: "سيتم ضبط العنوان من رمز الاستجابة",
        city: "غير محدد",
        status: "new",
        recentSignal: "يمكنك متابعة الإدخال كنسخة تجريبية",
        summaryLabel: "إدخال عام · بدون ربط",
        intakeBanner: "وضع تجريبي جاهز للمتابعة",
      };

  const [selectedCategory, setSelectedCategory] = useState(
    qrIntakeCategories[0]?.id ?? ""
  );
  const [selectedWhen, setSelectedWhen] = useState(qrIntakeWhenOptions[1]?.id ?? "");
  const [selectedSeverity, setSelectedSeverity] = useState(
    qrIntakeSeverityOptions[1]?.id ?? ""
  );
  const [submitted, setSubmitted] = useState(false);

  return (
    <main
      className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,rgba(0,160,64,0.16),transparent_28%),linear-gradient(180deg,#f4fcef_0%,#eef6ea_100%)] px-4 py-6 text-right text-foreground"
      dir="rtl"
      lang="ar"
    >
      <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(0,96,32,0.1),transparent)]" />
      <div className="absolute -end-16 top-20 h-40 w-40 rounded-full bg-tertiary/20 blur-3xl" />
      <div className="absolute -start-12 bottom-24 h-52 w-52 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-md items-center justify-center">
        <section className="w-full rounded-[2rem] border border-outline-variant/70 bg-white/92 p-4 shadow-[0_24px_70px_rgba(0,96,32,0.12)] backdrop-blur-sm sm:p-5">
          <div className="flex items-center justify-between gap-3">
            <div className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              مسار إدخال جديد
            </div>
            <div className="rounded-full border border-outline-variant/70 bg-surface-container-low px-3 py-1 text-xs font-medium text-on-surface-variant">
              v1.1
            </div>
          </div>

          <div className="mt-4 rounded-[1.75rem] border border-outline-variant/70 bg-[linear-gradient(180deg,#ffffff_0%,#f6fbf3_100%)] p-4 shadow-[0_10px_30px_rgba(0,96,32,0.08)]">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xs font-medium tracking-wide text-on-surface-variant">
                  {displayEstablishment.summaryLabel}
                </p>
                <h1 className="text-2xl font-semibold leading-tight text-on-surface">
                  {displayEstablishment.name}
                </h1>
                <p className="text-sm leading-6 text-on-surface-variant">
                  {displayEstablishment.address}
                </p>
              </div>
              <div className="shrink-0 rounded-2xl border border-primary/20 bg-primary/10 px-3 py-2 text-center">
                <div className="text-[10px] font-medium text-on-surface-variant">
                  {statusLabel(displayEstablishment.status)}
                </div>
                <div className="mt-1 text-sm font-semibold text-primary">
                  {displayEstablishment.city}
                </div>
              </div>
            </div>

            <Separator className="my-4 bg-outline-variant/70" />

            <div className="rounded-2xl border border-outline-variant/70 bg-surface-container-low px-3 py-3">
              <p className="text-[11px] font-medium text-on-surface-variant">
                إشارة سريعة
              </p>
              <p className="mt-1 text-sm leading-6 text-on-surface">
                {displayEstablishment.recentSignal}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {["منظم", "خاص", "بدون حساب"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-outline-variant/70 bg-white px-2 py-2 text-xs font-medium text-on-surface-variant shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl border border-secondary/15 bg-secondary/5 p-3">
              <p className="text-xs font-medium text-secondary">
                {displayEstablishment.intakeBanner}
              </p>
              <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                نلتقط التفاصيل بشكل قصير ومنظم حتى تكون المراجعة أوضح وأسرع.
              </p>
            </div>
          </div>

          <div className="mt-4">
            <div className="flex items-center justify-between text-xs font-medium text-on-surface-variant">
              <span>التعريف</span>
              <span>التفاصيل</span>
              <span>المراجعة</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-surface-container">
              <div
                className="h-full rounded-full bg-primary transition-all duration-300"
                style={{ width: submitted ? "100%" : "66%" }}
              />
            </div>
            <p className="mt-2 text-xs leading-5 text-on-surface-variant">
              الخطوة 2 من 3. المسار مصمم لالتقاط الوقائع الأساسية فقط.
            </p>
          </div>

          {submitted && (
            <div className="mt-4 rounded-[1.5rem] border border-primary/20 bg-primary/10 p-4">
              <p className="text-sm font-semibold text-primary">تم استلام الإدخال</p>
              <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                هذه نسخة تجريبية فقط. لا يوجد حفظ دائم، ولا حساب مطلوب، ولا مشاركة علنية.
              </p>
            </div>
          )}

          <form
            className={cn("mt-4 space-y-4", submitted && "pointer-events-none opacity-80")}
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-on-surface">
                ما نوع الملاحظة؟
              </legend>
              <p className="text-xs leading-5 text-on-surface-variant">
                اختر تصنيفًا أوليًا يساعد على توجيه الإدخال بشكل أدق.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {qrIntakeCategories.map((category) => {
                  const active = selectedCategory === category.id;
                  return (
                    <Button
                      key={category.id}
                      type="button"
                      variant={active ? "default" : "outline"}
                      size="sm"
                      className={cn(
                        "h-auto min-h-16 justify-start whitespace-normal rounded-2xl px-3 py-2 text-right leading-5 shadow-sm",
                        active
                          ? "border-primary/20 bg-primary text-primary-foreground"
                          : "border-outline-variant/80 bg-white text-on-surface"
                      )}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      <span className="block">
                        <span className="block text-sm font-semibold">
                          {category.label}
                        </span>
                        <span className="mt-1 block text-[11px] font-normal leading-4 opacity-80">
                          {category.helper}
                        </span>
                      </span>
                    </Button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-on-surface">
                ماذا حدث؟
              </legend>
              <Textarea
                dir="rtl"
                className="min-h-28 rounded-2xl border-outline-variant/80 bg-white px-4 py-3 text-right leading-6 shadow-sm placeholder:text-on-surface-variant/60"
                placeholder="اكتب وصفًا قصيرًا ومباشرًا لما حصل"
                rows={4}
              />
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-on-surface">
                متى حدث ذلك؟
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {qrIntakeWhenOptions.map((option) => {
                  const active = selectedWhen === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={cn(
                        "rounded-2xl border px-3 py-3 text-right shadow-sm transition-colors",
                        active
                          ? "border-primary/20 bg-primary/10 text-primary"
                          : "border-outline-variant/80 bg-white text-on-surface"
                      )}
                      onClick={() => setSelectedWhen(option.id)}
                    >
                      <span className="block text-sm font-semibold">{option.label}</span>
                      <span className="mt-1 block text-[11px] leading-4 text-on-surface-variant">
                        {option.helper}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-on-surface">
                ما مستوى الحساسية؟
              </legend>
              <div className="grid grid-cols-3 gap-2">
                {qrIntakeSeverityOptions.map((option) => {
                  const active = selectedSeverity === option.id;
                  return (
                    <button
                      key={option.id}
                      type="button"
                      className={cn(
                        "rounded-2xl border px-3 py-3 text-right shadow-sm transition-colors",
                        active
                          ? "border-secondary/20 bg-secondary/10 text-secondary"
                          : "border-outline-variant/80 bg-white text-on-surface"
                      )}
                      onClick={() => setSelectedSeverity(option.id)}
                    >
                      <span className="block text-sm font-semibold">{option.label}</span>
                      <span className="mt-1 block text-[11px] leading-4 text-on-surface-variant">
                        {option.helper}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="space-y-2">
              <legend className="text-sm font-medium text-on-surface">
                ملاحظة قصيرة
              </legend>
              <Input
                dir="rtl"
                className="h-12 rounded-2xl border-outline-variant/80 bg-white px-4 text-right shadow-sm placeholder:text-on-surface-variant/60"
                placeholder="اختياري"
              />
            </fieldset>

            <div className="rounded-[1.5rem] border border-outline-variant/70 bg-surface-container-low p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 size-9 shrink-0 rounded-full bg-secondary/10" />
                <div>
                  <p className="text-sm font-semibold text-on-surface">خصوصية افتراضية</p>
                  <p className="mt-1 text-sm leading-6 text-on-surface-variant">
                    لا نحتاج إلى حساب، ولا نعرض اسمك، ولا نحفظ شيئًا خارج هذه النسخة
                    التجريبية.
                  </p>
                </div>
              </div>
            </div>

            <Button
              className="h-12 w-full rounded-2xl text-base font-semibold shadow-[0_14px_26px_rgba(0,160,64,0.22)]"
              type="submit"
            >
              {submitted ? "تم الاستلام" : "إرسال الإدخال"}
            </Button>
          </form>
        </section>
      </div>
    </main>
  );
}
