import { establishments } from "@/components/screens/map/lib/constants";
import {
  AUDIT_CATEGORIES,
  AuditCategoryId,
  CategoryAnswers,
} from "../types";

function toRadians(value: number) {
  return (value * Math.PI) / 180;
}

export function getDistanceKm(
  a: { latitude: number; longitude: number },
  b: { latitude: number; longitude: number },
) {
  const earthRadiusKm = 6371;
  const deltaLat = toRadians(b.latitude - a.latitude);
  const deltaLon = toRadians(b.longitude - a.longitude);
  const startLat = toRadians(a.latitude);
  const endLat = toRadians(b.latitude);

  const haversine =
    Math.sin(deltaLat / 2) * Math.sin(deltaLat / 2) +
    Math.sin(deltaLon / 2) *
      Math.sin(deltaLon / 2) *
      Math.cos(startLat) *
      Math.cos(endLat);

  return 2 * earthRadiusKm * Math.asin(Math.min(1, Math.sqrt(haversine)));
}

export function formatWaitTime(minutes: number) {
  if (minutes >= 120) return "2+ hours";
  if (minutes >= 60)
    return `${Math.round(minutes / 60)} hour${minutes >= 120 ? "s" : ""}`;
  if (minutes === 0) return "0 min";
  return `${minutes} min`;
}

export function getNearestEstablishment(location: {
  latitude: number;
  longitude: number;
}) {
  return establishments.reduce((closest, current) => {
    const closestDistance = getDistanceKm(location, closest.coordinates);
    const currentDistance = getDistanceKm(location, current.coordinates);
    return currentDistance < closestDistance ? current : closest;
  }, establishments[0]);
}

export function categoryLabel(categoryId: AuditCategoryId) {
  return (
    AUDIT_CATEGORIES.find((item) => item.id === categoryId)?.label ?? categoryId
  );
}

export function categoryEmoji(categoryId: AuditCategoryId) {
  return AUDIT_CATEGORIES.find((item) => item.id === categoryId)?.emoji ?? "•";
}

export function getCategorySummary(
  category: AuditCategoryId,
  details: CategoryAnswers[AuditCategoryId],
) {
  const emoji = categoryEmoji(category);
  const label = categoryLabel(category);
  switch (category) {
    case "hygiene":
      return `${emoji} ${label} · ${details.hygieneRating}/5 stars`;
    case "staff":
      return `${emoji} ${label} · staff ${details.staffPresent === "unknown" ? "not answered" : details.staffPresent}`;
    case "equipment":
      return `${emoji} ${label} · ${details.equipmentCondition}`;
    case "bribery":
      return `${emoji} ${label} · ${details.briberyExperienced === "unknown" ? "not answered" : details.briberyExperienced}`;
    case "wait-time":
      return `${emoji} ${label} · ${formatWaitTime(details.waitMinutes)}`;
    default:
      return category;
  }
}
