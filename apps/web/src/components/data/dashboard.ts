export type DashboardShortcut = {
  label: string;
  description: string;
  iconName: "plus" | "file-text" | "key" | "users" | "database";
};

export type DashboardTask = {
  id: number;
  title: string;
  project: string;
  due: string;
  done: boolean;
  priority: "high" | "medium" | "low";
};

export type DashboardScheduleItem = {
  time: string;
  title: string;
  subtitle: string;
  color: string;
};

export type DashboardMetric = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  sub: string;
  iconName: "layers" | "clock" | "check-circle" | "activity";
};

export type DashboardInsight = {
  id: string;
  title: string;
  description: string;
  type: "warning" | "success" | "info";
  time: string;
};

export type DashboardActivity = {
  id: string;
  time: string;
  event: string;
  actor: string;
  status: "success" | "pending" | "info" | "warning";
};

export const dashboardDate = "Saturday, Apr 26";

export const dashboardGreeting = {
  title: "Good morning, Sean.",
  description: "Operations are active. All core systems are operational, with 3 high-priority audits pending review.",
};

export const dashboardShortcuts: DashboardShortcut[] = [
  {
    label: "New Verification",
    description: "Launch manual document review",
    iconName: "plus",
  },
  {
    label: "Export Audit Log",
    description: "Generate CSV for state portal",
    iconName: "file-text",
  },
  {
    label: "Rotate API Key",
    description: "Manage system access tokens",
    iconName: "key",
  },
  {
    label: "Manage Operators",
    description: "Add or configure staff accounts",
    iconName: "users",
  },
];

export const dashboardTasks: DashboardTask[] = [
  { id: 1, title: "Review Casablanca sector audit log", project: "Audit", due: "10m", done: false, priority: "high" },
  { id: 2, title: "Investigate bouncing invites for ministry accounts", project: "Inbox", due: "1h", done: false, priority: "high" },
  { id: 3, title: "Sketch onboarding wizard step 2", project: "UX", due: "Today", done: false, priority: "medium" },
  { id: 4, title: "Approve Q3 regional budget expansion", project: "Ops", due: "Tomorrow", done: false, priority: "low" },
  { id: 5, title: "Deploy Tuesday's scheduled security patch", project: "Security", due: "Tomorrow", done: true, priority: "high" },
];

export const dashboardSchedule: DashboardScheduleItem[] = [
  { time: "10:00", title: "National Sync Standup", subtitle: "Civic Board · 15m", color: "bg-[#00A040]" },
  { time: "11:30", title: "1:1 with Director Amina", subtitle: "Ministry Brief · 30m", color: "bg-[#F2C94C]" },
  { time: "14:00", title: "Casablanca Load Review", subtitle: "Engineering · 45m", color: "bg-[#006020]" },
  { time: "16:00", title: "Key Rotation Sign-off", subtitle: "Security Ops · 30m", color: "bg-[#E0C080]" },
];

export const dashboardMetrics: DashboardMetric[] = [
  {
    label: "Pending Queue",
    value: "24 Batches",
    change: "-12% from yesterday",
    trend: "down",
    sub: "Target < 50",
    iconName: "layers",
  },
  {
    label: "Avg Verify Time",
    value: "1.8s",
    change: "-200ms vs last week",
    trend: "down",
    sub: "SLA target 2.5s",
    iconName: "clock",
  },
  {
    label: "Resolution Rate",
    value: "99.94%",
    change: "+0.02% since Mon",
    trend: "up",
    sub: "Total 4,821 resolved",
    iconName: "check-circle",
  },
  {
    label: "System Status",
    value: "99.99% Uptime",
    change: "Normal Operations",
    trend: "neutral",
    sub: "All instances active",
    iconName: "activity",
  },
];

export const dashboardInsights: DashboardInsight[] = [
  {
    id: "insight-1",
    title: "Casablanca Sector Bottleneck",
    description: "Driving license verification load has increased by 45% in Casablanca-Anfa region.",
    type: "warning",
    time: "10m ago",
  },
  {
    id: "insight-2",
    title: "API Performance Restored",
    description: "Database query optimization has dropped response times by 14% across all endpoints.",
    type: "success",
    time: "1h ago",
  },
  {
    id: "insight-3",
    title: "Security Keys Rotation Due",
    description: "Weekly rotation of administrator signatures is scheduled to trigger in 4 hours.",
    type: "info",
    time: "2h ago",
  },
];

export const dashboardActivities: DashboardActivity[] = [
  {
    id: "act-1",
    time: "09:42 AM",
    event: "Verification batch #8492 approved",
    actor: "Amina El Idrissi",
    status: "success",
  },
  {
    id: "act-2",
    time: "09:15 AM",
    event: "Casablanca database replica sync completed",
    actor: "System Scheduler",
    status: "info",
  },
  {
    id: "act-3",
    time: "08:30 AM",
    event: "Weekly audit log exported to State Portal",
    actor: "Sean (You)",
    status: "success",
  },
  {
    id: "act-4",
    time: "07:00 AM",
    event: "Automated cleanup: cleared 1,200 cache items",
    actor: "Cron Worker",
    status: "success",
  },
];
