export type DashboardShortcut = {
  label: string;
  description: string;
  iconName: "plus" | "file-text" | "key" | "users" | "database";
};

export type DashboardMetric = {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  sub: string;
  iconName: "layers" | "clock" | "check-circle" | "activity" | "users";
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

export type EstablishmentStatus = "verified" | "watch" | "new" | "priority";

export type Establishment = {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  coordinates: { latitude: number; longitude: number };
  status: EstablishmentStatus;
  reviews: number;
  complaints: number;
  recentSignal: string;
  overallScore: number;
  scoreCategories: {
    bribery: number;
    hygiene: number;
    waitTime: number;
    equipment: number;
    staff: number;
  };
};

/** @deprecated Use `Establishment` instead. */
export type MapEstablishment = Establishment;

export type MapReview = {
  id: string;
  establishmentId: string;
  establishmentName: string;
  category: string;
  score: number;
  snippet: string;
  author: string;
  relativeTime: string;
  status: EstablishmentStatus;
};
