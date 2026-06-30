import {
  DashboardShortcut,
  DashboardMetric,
  DashboardInsight,
  DashboardActivity,
  DashboardScheduleItem,
  DashboardTask,
} from "./types";

export const dashboardDate = "Saturday, Apr 26";

export const dashboardGreeting = {
  title: "Good morning, Sean.",
  description:
    "Incoming submissions are flowing in. The queue is current, with a few fresh reports ready for triage and export.",
};

export const dashboardShortcuts: DashboardShortcut[] = [
  {
    label: "Review submissions",
    description: "Open the latest intake records",
    iconName: "plus",
  },
  {
    label: "Export queue",
    description: "Bundle grouped cases for export",
    iconName: "file-text",
  },
  {
    label: "Assign follow-up",
    description: "Route a case to the right desk",
    iconName: "key",
  },
  {
    label: "Open establishment",
    description: "Jump to a linked establishment",
    iconName: "users",
  },
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: "Incoming queue",
    value: "8 submissions",
    change: "3 new since this morning",
    trend: "down",
    sub: "Sorted newest first",
    iconName: "layers",
  },
  {
    label: "Average triage time",
    value: "6.4 min",
    change: "-48 sec vs yesterday",
    trend: "down",
    sub: "Focused review passes",
    iconName: "clock",
  },
  {
    label: "Grouped for export",
    value: "2 cases",
    change: "+1 since noon",
    trend: "up",
    sub: "Ready for the next bundle",
    iconName: "check-circle",
  },
  {
    label: "Sync status",
    value: "live",
    change: "Queue mirrors intake feed",
    trend: "neutral",
    sub: "No stale rows detected",
    iconName: "activity",
  },
];

export const dashboardInsights: DashboardInsight[] = [
  {
    id: "insight-1",
    title: "Casablanca intake spike",
    description:
      "Hospital and transit submissions from Casablanca-Anfa are up 45% this week.",
    type: "warning",
    time: "10m ago",
  },
  {
    id: "insight-2",
    title: "Queue sync stabilized",
    description:
      "The intake mirror is back to normal after the morning refresh.",
    type: "success",
    time: "1h ago",
  },
  {
    id: "insight-3",
    title: "Export window due",
    description:
      "The next grouped export is scheduled to run in 4 hours.",
    type: "info",
    time: "2h ago",
  },
];

export const dashboardActivities: DashboardActivity[] = [
  {
    id: "act-1",
    time: "09:42 AM",
    event: "New hospital submission moved to the queue",
    actor: "Amina El Idrissi",
    status: "success",
  },
  {
    id: "act-2",
    time: "09:15 AM",
    event: "Grouped market reports were bundled for export",
    actor: "System scheduler",
    status: "info",
  },
  {
    id: "act-3",
    time: "08:30 AM",
    event: "Morning intake feed refreshed",
    actor: "Sean",
    status: "success",
  },
  {
    id: "act-4",
    time: "07:00 AM",
    event: "Stale queue rows were cleared",
    actor: "Cron worker",
    status: "success",
  },
];

export const dashboardSchedule: DashboardScheduleItem[] = [
  {
    time: "10:30",
    title: "review backlog",
    subtitle: "12 documents pending approval",
    color: "bg-[#00A040]",
  },
  {
    time: "12:00",
    title: "field audit",
    subtitle: "Casablanca transport desk",
    color: "bg-[#F2C94C]",
  },
  {
    time: "14:15",
    title: "sync meeting",
    subtitle: "operations and compliance",
    color: "bg-[#006020]",
  },
  {
    time: "16:00",
    title: "key rotation",
    subtitle: "admin signatures refresh",
    color: "bg-[#E0C080]",
  },
];

export const dashboardTasks: DashboardTask[] = [
  {
    id: "task-1",
    title: "Review pending identity verifications",
    project: "operations",
    priority: "high",
    due: "Today",
    done: false,
  },
  {
    id: "task-2",
    title: "Refresh audit export job",
    project: "reporting",
    priority: "medium",
    due: "Tomorrow",
    done: true,
  },
  {
    id: "task-3",
    title: "Validate new operator onboarding",
    project: "security",
    priority: "low",
    due: "Fri",
    done: false,
  },
];

export const dashboardReportData = [
  { name: "Mon", reports: 42 },
  { name: "Tue", reports: 38 },
  { name: "Wed", reports: 55 },
  { name: "Thu", reports: 47 },
  { name: "Fri", reports: 61 },
  { name: "Sat", reports: 33 },
  { name: "Sun", reports: 28 },
];

export const dashboardCategoryData = [
  { name: "Submissions", value: 35, color: "#1d8cf8" },
  { name: "Audit", value: 25, color: "#00A040" },
  { name: "Security", value: 20, color: "#F2C94C" },
  { name: "Operations", value: 12, color: "#ba1a1a" },
  { name: "Reports", value: 8, color: "#E91E63" },
];
