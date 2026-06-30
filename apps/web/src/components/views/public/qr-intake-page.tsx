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
      /*
       * Always render the civic off-white surface (#f4fcef) regardless of
       * system dark-mode preference. This is a public QR-landing page and
       * must stay on the light civic palette at all times.
       */
      className="min-h-screen px-4 pb-12 pt-8 text-right"
      style={{
        background: "#f4fcef",
        color: "#161d16",
        colorScheme: "light",
      }}
      dir="rtl"
      lang="ar"
    >
      <div className="mx-auto w-full max-w-md space-y-8">

        {/* ── Establishment summary ─────────────────────────── */}
        <header className="space-y-1">
          {/* summaryLabel: plain text, no uppercase, no wide tracking */}
          <p className="text-xs font-medium text-on-surface-variant">
            {displayEstablishment.summaryLabel}
          </p>
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-0.5">
              <h1 className="text-2xl font-semibold leading-tight text-on-surface">
                {displayEstablishment.name}
              </h1>
              <p className="text-sm text-on-surface-variant">
                {displayEstablishment.address}
              </p>
            </div>
            <span className="mt-0.5 shrink-0 rounded-md bg-surface-container px-2.5 py-1 text-xs font-medium text-on-surface-variant">
              {statusLabel(displayEstablishment.status)}
              {" · "}
              {displayEstablishment.city}
            </span>
          </div>

          <Separator className="mt-4" />

          <p className="pt-3 text-sm leading-6 text-on-surface-variant">
            {displayEstablishment.intakeBanner}
            {" "}
            نلتقط التفاصيل بشكل قصير ومنظم حتى تكون المراجعة أوضح وأسرع.
          </p>
        </header>

        {/* ── Progress ──────────────────────────────────────── */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs text-on-surface-variant">
            <span>الخطوة 2 من 3</span>
            <span>{submitted ? "اكتملت" : "التفاصيل"}</span>
          </div>
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-container">
            <div
              className="h-full rounded-full bg-primary transition-all duration-500"
              style={{ width: submitted ? "100%" : "66%" }}
            />
          </div>
        </div>

        {/* ── Success banner ────────────────────────────────── */}
        {submitted && (
          <div className="rounded-xl bg-primary/8 px-4 py-3">
            <p className="text-sm font-semibold text-primary">تم استلام الإدخال</p>
            <p className="mt-0.5 text-sm leading-6 text-on-surface-variant">
              هذه نسخة تجريبية فقط. لا يوجد حفظ دائم، ولا حساب مطلوب، ولا مشاركة علنية.
            </p>
          </div>
        )}

        {/* ── Form ─────────────────────────────────────────── */}
        <form
          className={cn("space-y-7", submitted && "pointer-events-none opacity-75")}
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          {/* Category */}
          <fieldset className="space-y-3">
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
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={active}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-right text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "border-primary/30 bg-primary/8 text-primary"
                        : "border-outline-variant/60 bg-surface-container-low text-on-surface hover:bg-surface-container"
                    )}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <span className="block font-semibold">{category.label}</span>
                    <span className="mt-0.5 block text-[11px] leading-4 opacity-70">
                      {category.helper}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* What happened */}
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-on-surface">ماذا حدث؟</legend>
            <Textarea
              dir="rtl"
              className="min-h-28 rounded-xl border-outline-variant/60 bg-white px-4 py-3 text-right leading-6 placeholder:text-on-surface-variant/60"
              placeholder="اكتب وصفًا قصيرًا ومباشرًا لما حصل"
              rows={4}
            />
          </fieldset>

          {/* When */}
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-on-surface">متى حدث ذلك؟</legend>
            <div className="grid grid-cols-3 gap-2">
              {qrIntakeWhenOptions.map((option) => {
                const active = selectedWhen === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    aria-pressed={active}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-right text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "border-primary/30 bg-primary/8 text-primary"
                        : "border-outline-variant/60 bg-surface-container-low text-on-surface hover:bg-surface-container"
                    )}
                    onClick={() => setSelectedWhen(option.id)}
                  >
                    <span className="block font-semibold">{option.label}</span>
                    <span className="mt-0.5 block text-[11px] leading-4 text-on-surface-variant">
                      {option.helper}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Severity */}
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
                    aria-pressed={active}
                    className={cn(
                      "rounded-xl border px-3 py-3 text-right text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      active
                        ? "border-secondary/30 bg-secondary/8 text-secondary"
                        : "border-outline-variant/60 bg-surface-container-low text-on-surface hover:bg-surface-container"
                    )}
                    onClick={() => setSelectedSeverity(option.id)}
                  >
                    <span className="block font-semibold">{option.label}</span>
                    <span className="mt-0.5 block text-[11px] leading-4 text-on-surface-variant">
                      {option.helper}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          {/* Short note */}
          <fieldset className="space-y-2">
            <legend className="text-sm font-medium text-on-surface">ملاحظة قصيرة</legend>
            <Input
              dir="rtl"
              className="h-12 rounded-xl border-outline-variant/60 bg-white px-4 text-right placeholder:text-on-surface-variant/60"
              placeholder="اختياري"
            />
          </fieldset>

          {/* Privacy note */}
          <p className="text-xs leading-5 text-on-surface-variant">
            <span className="font-medium text-on-surface">خصوصية افتراضية. </span>
            لا نحتاج إلى حساب، ولا نعرض اسمك، ولا نحفظ شيئًا خارج هذه النسخة التجريبية.
          </p>

          <Button
            className="h-12 w-full rounded-xl text-base font-semibold"
            type="submit"
          >
            {submitted ? "تم الاستلام" : "إرسال الإدخال"}
          </Button>
        </form>
      </div>
    </main>
  );
}
