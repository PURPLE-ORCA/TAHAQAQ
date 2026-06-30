"use client";

import { useMemo, useState } from "react";
import { CalendarDays, Building2, MapPin, FileText, Layers3 } from "lucide-react";

import { analystSubmissions, type Submission, type SubmissionReviewStatus } from "@tahaqaq/mock-data";

import { DashboardCard } from "./dashboard-card";
import { Text } from "@/components/ui/text";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const statusStyles: Record<
  SubmissionReviewStatus,
  { label: string; className: string; dotClassName: string }
> = {
  new: {
    label: "new",
    className: "border-[#F2C94C]/35 bg-[#fff8e2] text-[#584400]",
    dotClassName: "bg-[#F2C94C]",
  },
  reviewed: {
    label: "reviewed",
    className: "border-[#006020]/15 bg-[#eef6ea] text-[#006020]",
    dotClassName: "bg-[#00A040]",
  },
  grouped: {
    label: "grouped",
    className: "border-[#00A040]/15 bg-[#f4fcef] text-[#006020]",
    dotClassName: "bg-[#86d98a]",
  },
  exported: {
    label: "exported",
    className: "border-[#bdcab9] bg-[#ffffff] text-[#3e4a3d]",
    dotClassName: "bg-[#6d7b6b]",
  },
};

function formatSubmittedAt(submittedAt: string) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(submittedAt));
}

function buildQueueCounts(submissions: Submission[]) {
  return submissions.reduce(
    (acc, item) => {
      acc[item.reviewStatus] += 1;
      return acc;
    },
    { new: 0, reviewed: 0, grouped: 0, exported: 0 }
  );
}

export function DashboardSubmissionQueue() {
  const submissions = useMemo(
    () =>
      [...analystSubmissions].sort(
        (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
      ),
    []
  );
  const counts = useMemo(() => buildQueueCounts(submissions), [submissions]);
  const [activeSubmissionId, setActiveSubmissionId] = useState<string | null>(null);

  const activeSubmission = useMemo(
    () => submissions.find((submission) => submission.id === activeSubmissionId) ?? null,
    [activeSubmissionId, submissions]
  );

  const summaryItems: Array<{ key: SubmissionReviewStatus; value: number; label: string }> = [
    { key: "new", value: counts.new, label: "new" },
    { key: "reviewed", value: counts.reviewed, label: "reviewed" },
    { key: "grouped", value: counts.grouped, label: "grouped" },
    { key: "exported", value: counts.exported, label: "exported" },
  ];

  return (
    <>
      <DashboardCard
        title="Incoming submissions"
        hasGoldAccent
        trailing={
          <Text as="span" className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground">
            sorted by newest
          </Text>
        }
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-2.5 md:grid-cols-4">
            {summaryItems.map((item) => {
              const tone = statusStyles[item.key];

              return (
                <div
                  key={item.key}
                  className="rounded-2xl border border-border/40 bg-[#f8fcf5] px-3 py-2.5 shadow-[0_8px_20px_rgba(0,96,32,0.03)]"
                >
                  <div className="flex items-center gap-2">
                    <span className={cn("size-2.5 rounded-full", tone.dotClassName)} />
                    <Text as="span" className="text-[11px] font-medium tracking-[0.08em] text-muted-foreground">
                      {item.label}
                    </Text>
                  </div>
                  <div className="mt-1 flex items-end justify-between gap-2">
                    <Text as="span" className="text-2xl font-semibold tracking-tight text-foreground">
                      {item.value}
                    </Text>
                    <Text as="span" className="text-[10px] font-mono tracking-[0.12em] text-muted-foreground">
                      items
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-2 rounded-2xl border border-[#006020]/12 bg-[#f8fcf5] px-3 py-2 text-xs text-muted-foreground">
            <Layers3 className="size-4 text-[#006020]" />
            <span>linked to establishment records, ready for triage</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {submissions.map((submission) => (
              <SubmissionRow
                key={submission.id}
                submission={submission}
                onOpen={() => setActiveSubmissionId(submission.id)}
              />
            ))}
          </div>
        </div>
      </DashboardCard>

      <Sheet open={activeSubmission !== null} onOpenChange={(open) => !open && setActiveSubmissionId(null)}>
        <SheetContent side="right" className="w-full border-l border-border/40 bg-[#f8fcf5] p-0 sm:max-w-2xl">
          {activeSubmission && <SubmissionDrawer submission={activeSubmission} />}
        </SheetContent>
      </Sheet>
    </>
  );
}

function SubmissionRow({
  submission,
  onOpen,
}: {
  submission: Submission;
  onOpen: () => void;
}) {
  const tone = statusStyles[submission.reviewStatus];
  const previewAnswers = submission.answers.slice(0, 2);

  return (
    <button
      type="button"
      onClick={onOpen}
      className="group w-full rounded-2xl border border-border/50 bg-white px-4 py-4 text-left shadow-[0_8px_24px_rgba(0,96,32,0.03)] transition-all hover:-translate-y-0.5 hover:border-[#006020]/20 hover:shadow-[0_12px_28px_rgba(0,96,32,0.08)]"
    >
      <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-start gap-3">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#e9f0e4] text-[#006020]">
              <Building2 className="size-5" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <Text as="span" className="truncate font-semibold text-foreground">
                  {submission.establishmentName}
                </Text>
                <span className="inline-flex items-center rounded-full border border-[#006020]/12 bg-[#f4fcef] px-2 py-0.5 text-[10px] font-medium tracking-[0.08em] text-[#006020]">
                  {submission.category}
                </span>
              </div>

              <div className="mt-1.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="size-3.5 text-[#006020]" />
                  {submission.city}
                </span>
                <span className="text-muted-foreground/60">·</span>
                <span>{submission.region}</span>
                <span className="text-muted-foreground/60">·</span>
                <span>{submission.place}</span>
              </div>
            </div>
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {previewAnswers.map((answer) => (
              <span
                key={`${submission.id}-${answer.label}`}
                className="inline-flex items-center gap-1 rounded-full border border-border/40 bg-[#f8fcf5] px-2.5 py-1 text-[11px] text-muted-foreground"
              >
                <span className="font-medium text-foreground">{answer.label}</span>
                <span className="text-muted-foreground/70">•</span>
                <span className="truncate">{answer.value}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-start gap-3 lg:flex-col lg:items-end">
          <div className="flex items-center gap-1.5 rounded-full border border-border/40 bg-[#f8fcf5] px-2.5 py-1 text-[11px] text-muted-foreground">
            <CalendarDays className="size-3.5 text-[#006020]" />
            {formatSubmittedAt(submission.submittedAt)}
          </div>
          <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.08em]", tone.className)}>
            <span className={cn("size-2 rounded-full", tone.dotClassName)} />
            {tone.label}
          </span>
        </div>
      </div>
    </button>
  );
}

function SubmissionDrawer({ submission }: { submission: Submission }) {
  return (
    <div className="flex h-full flex-col">
      <SheetHeader className="space-y-3 border-b border-border/40 px-6 py-6">
        <div className="flex flex-wrap items-center gap-2">
          <SheetTitle className="text-2xl font-semibold tracking-tight text-foreground">
            {submission.establishmentName}
          </SheetTitle>
          <span className={cn("inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium tracking-[0.08em]", statusStyles[submission.reviewStatus].className)}>
            <span className={cn("size-2 rounded-full", statusStyles[submission.reviewStatus].dotClassName)} />
            {statusStyles[submission.reviewStatus].label}
          </span>
        </div>
        <SheetDescription className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
          <span>{submission.category}</span>
          <span className="text-muted-foreground/60">·</span>
          <span>{submission.city}</span>
          <span className="text-muted-foreground/60">·</span>
          <span>{submission.region}</span>
          <span className="text-muted-foreground/60">·</span>
          <span>{submission.place}</span>
        </SheetDescription>
      </SheetHeader>

      <div className="flex-1 overflow-y-auto px-6 py-6">
        <div className="grid gap-3 sm:grid-cols-2">
          <MetaCard label="submitted at" value={formatSubmittedAt(submission.submittedAt)} />
          <MetaCard label="review status" value={submission.reviewStatus} />
          <MetaCard label="establishment" value={submission.establishmentName} />
          <MetaCard label="linked category" value={submission.category} />
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center gap-2">
            <FileText className="size-4 text-[#006020]" />
            <Text as="h3" className="text-sm font-semibold tracking-[0.08em] text-foreground">
              Structured answers
            </Text>
          </div>

          <div className="space-y-3">
            {submission.answers.map((answer) => (
              <div key={`${submission.id}-${answer.label}`} className="rounded-2xl border border-border/40 bg-white px-4 py-3">
                <Text as="span" className="text-[11px] font-medium tracking-[0.08em] text-muted-foreground">
                  {answer.label}
                </Text>
                <Text as="p" className="mt-1 text-sm leading-6 text-foreground">
                  {answer.value}
                </Text>
              </div>
            ))}
          </div>
        </div>

        {submission.note && (
          <div className="mt-6 rounded-2xl border border-[#F2C94C]/30 bg-[#fff8e2] px-4 py-3">
            <Text as="span" className="text-[11px] font-medium tracking-[0.08em] text-[#584400]">
              Note
            </Text>
            <Text as="p" className="mt-1 text-sm leading-6 text-[#4f3d00]">
              {submission.note}
            </Text>
          </div>
        )}
      </div>
    </div>
  );
}

function MetaCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-border/40 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(0,96,32,0.03)]">
      <Text as="span" className="text-[11px] font-medium tracking-[0.08em] text-muted-foreground">
        {label}
      </Text>
      <Text as="p" className="mt-1 text-sm font-medium leading-6 text-foreground">
        {value}
      </Text>
    </div>
  );
}
