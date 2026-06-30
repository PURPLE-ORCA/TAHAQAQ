import { analystSubmissions } from "./submissions";
import type { Submission } from "./types";

// ---------------------------------------------------------------------------
// Filter model
// ---------------------------------------------------------------------------

export type DateRangeKey = "all" | "today" | "yesterday" | "last7days" | "last30days";

export interface SubmissionFilters {
  category: string | null;
  city: string | null;
  region: string | null;
  establishment: string | null;
  dateRange: DateRangeKey;
}

export const EMPTY_FILTERS: SubmissionFilters = {
  category: null,
  city: null,
  region: null,
  establishment: null,
  dateRange: "all",
};

// ---------------------------------------------------------------------------
// Static option lists derived from analystSubmissions
// ---------------------------------------------------------------------------

function unique<T>(items: T[]): T[] {
  return Array.from(new Set(items));
}

export const submissionFilterOptions = {
  categories: unique(analystSubmissions.map((s) => s.category)).sort(),
  cities: unique(analystSubmissions.map((s) => s.city)).sort(),
  regions: unique(analystSubmissions.map((s) => s.region)).sort(),
  establishments: unique(analystSubmissions.map((s) => s.establishmentName)).sort(),
} as const;

export const dateRangeOptions: Array<{ key: DateRangeKey; label: string }> = [
  { key: "all", label: "all time" },
  { key: "today", label: "today" },
  { key: "yesterday", label: "yesterday" },
  { key: "last7days", label: "last 7 days" },
  { key: "last30days", label: "last 30 days" },
];

// ---------------------------------------------------------------------------
// Filter application helper
// ---------------------------------------------------------------------------

function getDateBoundary(key: DateRangeKey): Date | null {
  const now = new Date();
  switch (key) {
    case "today": {
      const d = new Date(now);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    case "yesterday": {
      const d = new Date(now);
      d.setDate(d.getDate() - 1);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    case "last7days": {
      const d = new Date(now);
      d.setDate(d.getDate() - 7);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    case "last30days": {
      const d = new Date(now);
      d.setDate(d.getDate() - 30);
      d.setHours(0, 0, 0, 0);
      return d;
    }
    default:
      return null;
  }
}

function getDateUpperBoundary(key: DateRangeKey): Date | null {
  if (key === "yesterday") {
    const d = new Date();
    d.setHours(0, 0, 0, 0); // start of today = exclusive upper bound for yesterday
    return d;
  }
  return null;
}

export function applySubmissionFilters(
  submissions: Submission[],
  filters: SubmissionFilters
): Submission[] {
  const lowerBound = getDateBoundary(filters.dateRange);
  const upperBound = getDateUpperBoundary(filters.dateRange);

  return submissions.filter((s) => {
    if (filters.category !== null && s.category !== filters.category) return false;
    if (filters.city !== null && s.city !== filters.city) return false;
    if (filters.region !== null && s.region !== filters.region) return false;
    if (filters.establishment !== null && s.establishmentName !== filters.establishment) return false;

    if (lowerBound !== null) {
      const submittedDate = new Date(s.submittedAt);
      if (submittedDate < lowerBound) return false;
      if (upperBound !== null && submittedDate >= upperBound) return false;
    }

    return true;
  });
}

// ---------------------------------------------------------------------------
// Active filter chip helpers
// ---------------------------------------------------------------------------

export interface ActiveFilterChip {
  key: keyof SubmissionFilters;
  label: string;
  value: string;
}

export function getActiveFilterChips(filters: SubmissionFilters): ActiveFilterChip[] {
  const chips: ActiveFilterChip[] = [];

  if (filters.category !== null) {
    chips.push({ key: "category", label: "category", value: filters.category });
  }
  if (filters.city !== null) {
    chips.push({ key: "city", label: "city", value: filters.city });
  }
  if (filters.region !== null) {
    chips.push({ key: "region", label: "region", value: filters.region });
  }
  if (filters.establishment !== null) {
    chips.push({ key: "establishment", label: "establishment", value: filters.establishment });
  }
  if (filters.dateRange !== "all") {
    const option = dateRangeOptions.find((o) => o.key === filters.dateRange);
    chips.push({ key: "dateRange", label: "date", value: option?.label ?? filters.dateRange });
  }

  return chips;
}

export function hasActiveFilters(filters: SubmissionFilters): boolean {
  return (
    filters.category !== null ||
    filters.city !== null ||
    filters.region !== null ||
    filters.establishment !== null ||
    filters.dateRange !== "all"
  );
}
