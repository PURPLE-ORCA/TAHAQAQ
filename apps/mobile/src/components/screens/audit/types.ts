import { Establishment } from "@/components/screens/map/types";

export type AuditStep = 1 | 2 | 3 | 4 | 5 | 6;
export type AuditCategoryId =
  | "hygiene"
  | "staff"
  | "equipment"
  | "bribery"
  | "wait-time";

export type AuditParams = {
  establishmentId?: string;
  name?: string;
  city?: string;
  latitude?: string;
  longitude?: string;
  address?: string;
};

export type EquipmentCondition = "new" | "used" | "broken" | "locked";
export type Choice = "yes" | "no" | "unknown";

export const AUDIT_CATEGORIES: Array<{
  id: AuditCategoryId;
  label: string;
  emoji: string;
}> = [
  { id: "hygiene", label: "Hygiene", emoji: "🧹" },
  { id: "staff", label: "Staff", emoji: "👥" },
  { id: "equipment", label: "Equipment", emoji: "🔧" },
  { id: "bribery", label: "Bribery", emoji: "💰" },
  { id: "wait-time", label: "Wait time", emoji: "⏱️" },
];

export const EQUIPMENT_CONDITIONS: Array<{
  id: EquipmentCondition;
  label: string;
}> = [
  { id: "new", label: "New" },
  { id: "used", label: "Used" },
  { id: "broken", label: "Broken" },
  { id: "locked", label: "Locked away" },
];

export const DEFAULT_WAIT_MINUTES = 30;

export type CategoryAnswers = Record<
  AuditCategoryId,
  {
    hygieneRating: number;
    staffPresent: Choice;
    waitMinutes: number;
    equipmentCondition: EquipmentCondition;
    briberyExperienced: Choice;
    briberyAmount: string;
    briberyDescription: string;
  }
>;

export const DEFAULT_ANSWERS: CategoryAnswers = {
  hygiene: {
    hygieneRating: 4,
    staffPresent: "unknown",
    waitMinutes: DEFAULT_WAIT_MINUTES,
    equipmentCondition: "used",
    briberyExperienced: "unknown",
    briberyAmount: "",
    briberyDescription: "",
  },
  staff: {
    hygieneRating: 4,
    staffPresent: "unknown",
    waitMinutes: DEFAULT_WAIT_MINUTES,
    equipmentCondition: "used",
    briberyExperienced: "unknown",
    briberyAmount: "",
    briberyDescription: "",
  },
  equipment: {
    hygieneRating: 4,
    staffPresent: "unknown",
    waitMinutes: DEFAULT_WAIT_MINUTES,
    equipmentCondition: "used",
    briberyExperienced: "unknown",
    briberyAmount: "",
    briberyDescription: "",
  },
  bribery: {
    hygieneRating: 4,
    staffPresent: "unknown",
    waitMinutes: DEFAULT_WAIT_MINUTES,
    equipmentCondition: "used",
    briberyExperienced: "unknown",
    briberyAmount: "",
    briberyDescription: "",
  },
  "wait-time": {
    hygieneRating: 4,
    staffPresent: "unknown",
    waitMinutes: DEFAULT_WAIT_MINUTES,
    equipmentCondition: "used",
    briberyExperienced: "unknown",
    briberyAmount: "",
    briberyDescription: "",
  },
};

export const STAR_VALUES = [1, 2, 3, 4, 5];
export const COMMENT_MAX = 500;
export const BRIBERY_DESCRIPTION_MAX = 200;
