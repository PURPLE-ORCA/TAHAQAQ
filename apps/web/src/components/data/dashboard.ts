export type DashboardShortcut = {
  label: string;
};

export type DashboardTask = {
  id: number;
  title: string;
  project: string;
  due: string;
  done: boolean;
};

export type DashboardScheduleItem = {
  time: string;
  title: string;
  subtitle: string;
  color: string;
};

export type DashboardFact = {
  label: string;
  value: string;
  sub: string;
};

export const dashboardDate = "Saturday, Apr 26";

export const dashboardGreeting = {
  title: "Good morning, Sean.",
  description: "5 things on your plate today. The first one is small — start there.",
};

export const dashboardShortcuts: DashboardShortcut[] = [
  { label: "New project" },
  { label: "Invite teammate" },
  { label: "Open API key" },
  { label: "Recent activity" },
];

export const dashboardTasks: DashboardTask[] = [
  { id: 1, title: "Review Maya's audit log PR", project: "API", due: "Today", done: false },
  { id: 2, title: "Sketch onboarding step 2", project: "Onboarding", due: "Today", done: false },
  { id: 3, title: "Reply to Riya about the bouncing invites", project: "Inbox", due: "Today", done: false },
  { id: 4, title: "Approve Q3 budget request", project: "Ops", due: "Tomorrow", done: false },
  { id: 5, title: "Push Tuesday's release notes", project: "Marketing", due: "Tomorrow", done: true },
];

export const dashboardSchedule: DashboardScheduleItem[] = [
  { time: "10:00", title: "Eng standup", subtitle: "Daily · 15m", color: "bg-emerald-500/80" },
  { time: "11:30", title: "1:1 with Maya", subtitle: "Weekly · 30m", color: "bg-amber-500/80" },
  { time: "14:00", title: "Design crit", subtitle: "Squad · 45m", color: "bg-violet-500/80" },
  { time: "16:00", title: "Customer call: BigCorp", subtitle: "Sales · 30m", color: "bg-sky-500/80" },
];

export const dashboardFacts: DashboardFact[] = [
  { label: "Streak", value: "14 days", sub: "without dropping a ball" },
  { label: "Focus", value: "3h 12m", sub: "deep work · this week" },
  { label: "Inbox", value: "3 unread", sub: "last cleared 2h ago" },
];
