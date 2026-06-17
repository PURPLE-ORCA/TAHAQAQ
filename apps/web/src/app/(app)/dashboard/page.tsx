import { AppShell } from "@/components/layout/app/app-shell";
import { AppContentHeader } from "@/components/layout/app/app-content-header";
import { dashboardDate, dashboardGreeting, dashboardShortcuts } from "@/components/data/dashboard";
import { DashboardFacts } from "@/components/views/app/dashboard/dashboard-facts";
import { DashboardHeader } from "@/components/views/app/dashboard/dashboard-header";
import { DashboardSchedule } from "@/components/views/app/dashboard/dashboard-schedule";
import { DashboardShortcuts } from "@/components/views/app/dashboard/dashboard-shortcuts";
import { DashboardTasks } from "@/components/views/app/dashboard/dashboard-tasks";

export default function DashboardPage() {
  return (
    <AppShell>
      <AppContentHeader title="Dashboard" />

      <DashboardHeader
        date={dashboardDate}
        title={dashboardGreeting.title}
        description={dashboardGreeting.description}
      />

      <DashboardShortcuts items={dashboardShortcuts} />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[3fr_2fr]">
        <DashboardTasks />
        <DashboardSchedule />
      </div>

      <DashboardFacts />

    </AppShell>
  );
}
