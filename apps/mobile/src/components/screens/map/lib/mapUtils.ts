import { Establishment } from "../types";

/**
 * Calculates the distance between two geographical points using the Haversine formula.
 */
export function getDistanceInMeters(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
): number {
  const R = 6371e3; // Earth's radius in meters
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLon = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

/**
 * Calculates the touch target radius in meters at a given latitude and zoom level.
 * In Web Mercator projection, resolution (meters per pixel) scales with latitude and zoom.
 */
export function getTouchRadiusInMeters(
  latitude: number,
  zoom: number,
  touchRadiusPixels = 35,
): number {
  // Web Mercator ground resolution formula:
  // meters/pixel = (Earth circumference * cos(lat)) / (256 * 2^zoom)
  // Earth circumference is approx 40075016.686 meters.
  // 40075016.686 / 256 = 156543.03392
  const metersPerPixel =
    (156543.03392 * Math.cos((latitude * Math.PI) / 180)) / Math.pow(2, zoom);
  return touchRadiusPixels * metersPerPixel;
}

/**
 * Finds the closest establishment to the clicked coordinate within the dynamic touch radius.
 */
export function findClosestEstablishment(
  clickedLat: number,
  clickedLng: number,
  zoom: number,
  establishments: Establishment[],
): Establishment | null {
  const maxDistance = getTouchRadiusInMeters(clickedLat, zoom);
  let closest: Establishment | null = null;
  let minDistance = Infinity;

  for (const est of establishments) {
    const dist = getDistanceInMeters(
      clickedLat,
      clickedLng,
      est.coordinates.latitude,
      est.coordinates.longitude,
    );
    if (dist <= maxDistance && dist < minDistance) {
      minDistance = dist;
      closest = est;
    }
  }

  return closest;
}
