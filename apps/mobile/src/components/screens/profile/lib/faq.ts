import { useI18n } from "@/hooks/useI18n";

export function useFaqItems() {
  const { t } = useI18n();

  return [
    {
      value: "q1",
      question: t("faq.q1Question"),
      answer: t("faq.q1Answer"),
    },
    {
      value: "q2",
      question: t("faq.q2Question"),
      answer: t("faq.q2Answer"),
    },
    {
      value: "q3",
      question: t("faq.q3Question"),
      answer: t("faq.q3Answer"),
    },
    {
      value: "q4",
      question: t("faq.q4Question"),
      answer: t("faq.q4Answer"),
    },
  ];
}
