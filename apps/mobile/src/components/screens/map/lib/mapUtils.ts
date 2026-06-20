import { Establishment } from "../types";

/**
 * Converts screen tap coordinates to map coordinates (latitude, longitude)
 * using the current camera position and zoom level.
 *
 * Uses Web Mercator ground resolution to convert pixel offsets into
 * degree offsets, accounting for the latitude-dependent longitude scaling.
 */
export function screenToMapCoordinates(
  tapX: number,
  tapY: number,
  mapWidth: number,
  mapHeight: number,
  centerLat: number,
  centerLng: number,
  zoom: number,
): { latitude: number; longitude: number } {
  // Web Mercator ground resolution: meters per pixel
  const metersPerPixel =
    (156543.03392 * Math.cos((centerLat * Math.PI) / 180)) /
    Math.pow(2, zoom);

  // Offset from center in pixels (screen Y is top-down, map Y is bottom-up)
  const dx = tapX - mapWidth / 2;
  const dy = mapHeight / 2 - tapY;

  // Offset in meters
  const dxMeters = dx * metersPerPixel;
  const dyMeters = dy * metersPerPixel;

  // Convert meters to degrees
  // 1 degree latitude ≈ 111,320 meters
  // 1 degree longitude ≈ 111,320 * cos(latitude) meters
  const latOffset = dyMeters / 111320;
  const lngOffset =
    dxMeters / (111320 * Math.cos((centerLat * Math.PI) / 180));

  return {
    latitude: centerLat + latOffset,
    longitude: centerLng + lngOffset,
  };
}

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
