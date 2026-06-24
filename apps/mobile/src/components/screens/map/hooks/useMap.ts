import { useRef, useState, useEffect } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";
import * as Haptics from "expo-haptics";
import type { AppBottomSheetModalRef } from "@/components/ui/bottom-sheet";
import { establishments, mapCenter } from "../lib/constants";
import { getDistanceInMeters, findClosestEstablishment } from "../lib/mapUtils";
import type { Establishment } from "../types";

type MarkerSelection = {
  id?: string;
  coordinates?: {
    latitude?: number;
    longitude?: number;
  };
};

const COORDINATE_EPSILON = 0.000001;

const getEstablishmentName = (address: any, displayName: string): string => {
  const poiKeys = [
    "amenity",
    "shop",
    "tourism",
    "building",
    "office",
    "leisure",
    "historic",
    "craft",
    "aeroway",
    "railway",
    "club",
    "healthcare",
    "restaurant",
    "cafe",
    "fast_food",
    "bar",
    "pub",
    "hotel",
    "supermarket",
    "bank",
    "pharmacy",
  ];
  
  for (const key of poiKeys) {
    if (address[key]) {
      return address[key];
    }
  }

  if (displayName) {
    const parts = displayName.split(",");
    if (parts.length > 0) {
      const firstPart = parts[0].trim();
      if (firstPart && isNaN(Number(firstPart))) {
        return firstPart;
      }
    }
  }

  return "Establishment";
};

const reverseGeocode = async (
  lat: number,
  lon: number
): Promise<{ name: string; address: string; city: string }> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=18&addressdetails=1`,
      {
        headers: {
          "User-Agent": "TahaqaqMobileApp/1.0",
        },
      }
    );
    if (!response.ok) {
      throw new Error("Geocoding network request failed");
    }
    const data = await response.json();
    const addressObj = data.address || {};
    
    const city =
      addressObj.city ||
      addressObj.town ||
      addressObj.village ||
      addressObj.county ||
      addressObj.state ||
      "Morocco";

    const name = getEstablishmentName(addressObj, data.display_name);
    const address = data.display_name || "Unknown Address";

    return { name, address, city };
  } catch (error) {
    console.error("Error in reverseGeocode:", error);
    return {
      name: "Tapped Location",
      address: `Latitude: ${lat.toFixed(5)}, Longitude: ${lon.toFixed(5)}`,
      city: "Morocco",
    };
  }
};

export function useMap() {
  const sheetRef = useRef<AppBottomSheetModalRef>(null);
  const [selected, setSelected] = useState<Establishment>(establishments[0]);

  // Track the current camera position to dynamically calculate pixel-to-meter touch target
  const [cameraCoordinates, setCameraCoordinates] = useState(mapCenter);

  const cameraStateRef = useRef({
    latitude: mapCenter.latitude,
    longitude: mapCenter.longitude,
    zoom: 14,
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Establishment[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [showRedOnly, setShowRedOnly] = useState(false);
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const openEstablishment = (selection: MarkerSelection | string) => {
    const next =
      typeof selection === "string"
        ? establishments.find((item) => item.id === selection)
        : establishments.find((item) => {
            if (selection.id && item.id === selection.id) {
              return true;
            }

            if (!selection.coordinates) {
              return false;
            }

            const { latitude, longitude } = selection.coordinates;
            if (latitude == null || longitude == null) {
              return false;
            }

            return (
              Math.abs(item.coordinates.latitude - latitude) <
                COORDINATE_EPSILON &&
              Math.abs(item.coordinates.longitude - longitude) <
                COORDINATE_EPSILON
            );
          });

    if (!next) return;

    setSelected(next);
    setCameraCoordinates(next.coordinates);
    cameraStateRef.current.latitude = next.coordinates.latitude;
    cameraStateRef.current.longitude = next.coordinates.longitude;
    setTimeout(() => {
      sheetRef.current?.present();
    }, 0);
  };

  const handleAction = (action: "review" | "complaint") => {
    if (action === "review") {
      sheetRef.current?.dismiss();
      if (selected.id.startsWith("geocoded-")) {
        router.push({
          pathname: "/audit",
          params: {
            establishmentId: selected.id,
            name: selected.name,
            city: selected.city,
            latitude: selected.coordinates.latitude.toString(),
            longitude: selected.coordinates.longitude.toString(),
            address: selected.address || "",
          },
        });
      } else {
        router.push({
          pathname: "/audit",
          params: { establishmentId: selected.id },
        });
      }
      return;
    }

    Alert.alert(
      selected.name,
      "Complaint flow stub for the hackathon prototype.",
    );
  };

  const handleReview = () => {
    if (selected.id.startsWith("geocoded-")) {
      router.push({
        pathname: "/audit",
        params: {
          establishmentId: selected.id,
          name: selected.name,
          city: selected.city,
          latitude: selected.coordinates.latitude.toString(),
          longitude: selected.coordinates.longitude.toString(),
          address: selected.address || "",
        },
      });
    } else {
      router.push({
        pathname: "/audit",
        params: { establishmentId: selected.id },
      });
    }
  };

  const handleMarkerClick = (event: {
    id?: string;
    coordinates?: { latitude?: number; longitude?: number };
  }) => {
    // Find the establishment that matches the tapped marker
    const next = establishments.find((item) => {
      if (event.id && item.id === event.id) return true;
      if (!event.coordinates) return false;
      const { latitude, longitude } = event.coordinates;
      if (latitude == null || longitude == null) return false;
      return (
        Math.abs(item.coordinates.latitude - latitude) < COORDINATE_EPSILON &&
        Math.abs(item.coordinates.longitude - longitude) < COORDINATE_EPSILON
      );
    });
    if (next) {
      setSelected(next);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setCameraCoordinates(next.coordinates);
      cameraStateRef.current.latitude = next.coordinates.latitude;
      cameraStateRef.current.longitude = next.coordinates.longitude;
    }
  };

  const handleMapClick = async (event: {
    coordinates: { latitude?: number; longitude?: number };
  }) => {
    const { latitude, longitude } = event.coordinates;
    if (latitude == null || longitude == null) return;

    // Check if user tapped close enough to an existing custom marker
    const closest = findClosestEstablishment(
      latitude,
      longitude,
      cameraStateRef.current.zoom,
      establishments
    );

    if (closest) {
      setSelected(closest);
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
      setCameraCoordinates(closest.coordinates);
      cameraStateRef.current.latitude = closest.coordinates.latitude;
      cameraStateRef.current.longitude = closest.coordinates.longitude;
      return;
    }

    // Otherwise, create a temporary loading establishment
    const tempId = `geocoded-${latitude}-${longitude}`;
    const loadingEst: Establishment = {
      id: tempId,
      name: "Loading establishment...",
      category: "Establishment",
      city: "Locating...",
      coordinates: { latitude, longitude },
      status: "new",
      address: "Fetching address details...",
      reviews: 0,
      complaints: 0,
      recentSignal: "",
    };

    setSelected(loadingEst);
    setCameraCoordinates({ latitude, longitude });
    cameraStateRef.current.latitude = latitude;
    cameraStateRef.current.longitude = longitude;

    // Fetch details
    const result = await reverseGeocode(latitude, longitude);

    // Make sure the user hasn't selected another marker/location in the meantime
    setSelected((current) => {
      if (current.id === tempId) {
        return {
          id: tempId,
          name: result.name,
          category: "Establishment",
          city: result.city,
          coordinates: { latitude, longitude },
          status: "new",
          address: result.address,
          reviews: 0,
          complaints: 0,
          recentSignal: "",
        };
      }
      return current;
    });
  };

  const handleCameraMove = (event: {
    coordinates?: { latitude?: number; longitude?: number };
    zoom?: number;
  }) => {
    if (
      event.coordinates?.latitude != null &&
      event.coordinates?.longitude != null
    ) {
      cameraStateRef.current.latitude = event.coordinates.latitude;
      cameraStateRef.current.longitude = event.coordinates.longitude;
    }
    if (event.zoom != null) {
      cameraStateRef.current.zoom = event.zoom;
    }

    const currentDistFromCenter = getDistanceInMeters(
      cameraStateRef.current.latitude,
      cameraStateRef.current.longitude,
      selected.coordinates.latitude,
      selected.coordinates.longitude
    );

    if (selected.id.startsWith("geocoded-") && currentDistFromCenter < 300) {
      // Keep geocoded selection
      return;
    }

    const closest = establishments.reduce((prev, curr) => {
      const prevDist = getDistanceInMeters(
        cameraStateRef.current.latitude,
        cameraStateRef.current.longitude,
        prev.coordinates.latitude,
        prev.coordinates.longitude,
      );
      const currDist = getDistanceInMeters(
        cameraStateRef.current.latitude,
        cameraStateRef.current.longitude,
        curr.coordinates.latitude,
        curr.coordinates.longitude,
      );
      return currDist < prevDist ? curr : prev;
    });

    if (closest.id !== selected.id) {
      setSelected(closest);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);

    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    debounceTimerRef.current = setTimeout(() => {
      const normalizedQuery = query.toLowerCase().trim();
      const filtered = establishments.filter((est) => {
        return (
          est.name.toLowerCase().includes(normalizedQuery) ||
          est.category.toLowerCase().includes(normalizedQuery) ||
          est.city.toLowerCase().includes(normalizedQuery)
        );
      });
      const redFiltered = showRedOnly
        ? filtered.filter((est) => est.overallScore != null && est.overallScore < 4)
        : filtered;
      setSearchResults(redFiltered);
    }, 300);
  };

  const selectEstablishment = (id: string) => {
    const est = establishments.find((e) => e.id === id);
    if (est) {
      setSelected(est);
      setCameraCoordinates(est.coordinates);
      cameraStateRef.current.latitude = est.coordinates.latitude;
      cameraStateRef.current.longitude = est.coordinates.longitude;
      setIsSearching(false);
    }
  };

  const toggleRedOnly = () => {
    setShowRedOnly((prev) => {
      const next = !prev;
      if (searchQuery.trim()) {
        const normalizedQuery = searchQuery.toLowerCase().trim();
        const filtered = establishments.filter((est) => {
          return (
            est.name.toLowerCase().includes(normalizedQuery) ||
            est.category.toLowerCase().includes(normalizedQuery) ||
            est.city.toLowerCase().includes(normalizedQuery)
          );
        });
        const redFiltered = next
          ? filtered.filter((est) => est.overallScore != null && est.overallScore < 4)
          : filtered;
        setSearchResults(redFiltered);
      }
      return next;
    });
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
    setShowRedOnly(false);
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
  };

  return {
    sheetRef,
    selected,
    openEstablishment,
    handleAction,
    cameraCoordinates,
    handleCameraMove,
    handleReview,
    handleMarkerClick,
    handleMapClick,
    searchQuery,
    searchResults,
    isSearching,
    showRedOnly,
    toggleRedOnly,
    handleSearch,
    selectEstablishment,
    clearSearch,
    setIsSearching,
    cameraCenter: {
      latitude: cameraStateRef.current.latitude,
      longitude: cameraStateRef.current.longitude,
    },
  };
}
