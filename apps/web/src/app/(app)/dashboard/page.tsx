import { AppShell } from "@/components/layout/app/app-shell";
import { AppContentHeader } from "@/components/layout/app/app-content-header";
import { dashboardDate, dashboardGreeting, dashboardShortcuts } from "@/components/data/dashboard";
import { DashboardActivityFeed } from "@/components/views/app/dashboard/dashboard-activity";
import { DashboardFacts } from "@/components/views/app/dashboard/dashboard-facts";
import { DashboardHeader } from "@/components/views/app/dashboard/dashboard-header";
import { DashboardInsights } from "@/components/views/app/dashboard/dashboard-insights";
import { DashboardSchedule } from "@/components/views/app/dashboard/dashboard-schedule";
import { DashboardShortcuts } from "@/components/views/app/dashboard/dashboard-shortcuts";
import { DashboardTasks } from "@/components/views/app/dashboard/dashboard-tasks";

export default function DashboardPage() {
  return (
    <AppShell className="gap-5">
      <AppContentHeader title="Dashboard 2" />

      <DashboardHeader date={dashboardDate} title={dashboardGreeting.title} description={dashboardGreeting.description} />

      <DashboardShortcuts items={dashboardShortcuts} />

      <DashboardFacts />

      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.95fr)]">
        <div className="space-y-5">
          <DashboardTasks />
          <DashboardActivityFeed />
        </div>

        <div className="space-y-5">
          <DashboardSchedule />
          <DashboardInsights />
        </div>
      </div>
    </AppShell>
  );
}
