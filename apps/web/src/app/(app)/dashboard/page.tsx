"use client";

import { useMemo, useState } from "react";
import { AppShell } from "@/components/layout/app/app-shell";
import { AppContentHeader } from "@/components/layout/app/app-content-header";
import { dashboardDate, dashboardGreeting, dashboardShortcuts } from "@/components/data/dashboard";
import { DashboardActivityFeed } from "@/components/views/app/dashboard/dashboard-activity";
import { DashboardFacts } from "@/components/views/app/dashboard/dashboard-facts";
import { DashboardHeader } from "@/components/views/app/dashboard/dashboard-header";
import { DashboardInsights } from "@/components/views/app/dashboard/dashboard-insights";
import { DashboardSubmissionQueue } from "@/components/views/app/dashboard/dashboard-submission-queue";
import { DashboardShortcuts } from "@/components/views/app/dashboard/dashboard-shortcuts";
import { DashboardVerificationChart } from "@/components/views/app/dashboard/dashboard-verification-chart";
import { DashboardPerformanceChart } from "@/components/views/app/dashboard/dashboard-performance-chart";
import { DashboardGroupedSignals } from "@/components/views/app/dashboard/dashboard-grouped-signals";
import { DashboardHotspots } from "@/components/views/app/dashboard/dashboard-hotspots";
import { DashboardFilterBar } from "@/components/views/app/dashboard/dashboard-filter-bar";
import { DashboardMonthlyReport } from "@/components/views/app/dashboard/dashboard-monthly-report";

import {
  analystSubmissions,
  applySubmissionFilters,
  EMPTY_FILTERS,
  type SubmissionFilters,
} from "@tahaqaq/mock-data";

const sortedSubmissions = [...analystSubmissions].sort(
  (a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
);

export default function DashboardPage() {
  const [filters, setFilters] = useState<SubmissionFilters>(EMPTY_FILTERS);

  const filteredSubmissions = useMemo(
    () => applySubmissionFilters(sortedSubmissions, filters),
    [filters]
  );

  return (
    <AppShell className="gap-5">
      <AppContentHeader title="Dashboard" />

      <DashboardHeader date={dashboardDate} title={dashboardGreeting.title} description={dashboardGreeting.description} />

      <DashboardFilterBar filters={filters} onChange={setFilters} />

      {/* Raw submission queue — unprocessed citizen reports */}
      <DashboardSubmissionQueue submissions={filteredSubmissions} />

      <DashboardShortcuts items={dashboardShortcuts} />

      <DashboardFacts />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.95fr)]">
        <div className="space-y-5">
          <DashboardVerificationChart />
          <DashboardActivityFeed />
        </div>
        <div className="space-y-5">
          <DashboardPerformanceChart />
          <DashboardInsights />
        </div>
      </div>

      {/* Grouped signals + hotspot detection — derived from filtered submissions */}
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.95fr)]">
        <DashboardGroupedSignals submissions={filteredSubmissions} />
        <DashboardHotspots submissions={filteredSubmissions} />
      </div>

      {/* Monthly report — generated from current filtered submissions and grouped signals */}
      <DashboardMonthlyReport submissions={filteredSubmissions} filters={filters} />
    </AppShell>
  );
}
