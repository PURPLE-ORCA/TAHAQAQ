import { useRef, useState, useEffect } from "react";
import { Alert } from "react-native";
import { router } from "expo-router";
import type { AppBottomSheetModalRef } from "@/components/ui/bottom-sheet";
import { establishments, mapCenter } from "../lib/constants";
import { getDistanceInMeters } from "../lib/mapUtils";
import type { Establishment } from "../types";

type MarkerSelection = {
  id?: string;
  coordinates?: {
    latitude?: number;
    longitude?: number;
  };
};

const COORDINATE_EPSILON = 0.000001;

export function useMap() {
  const sheetRef = useRef<AppBottomSheetModalRef>(null);
  const [selectedId, setSelectedId] = useState(establishments[0].id);

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
  const debounceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const selected =
    establishments.find((item) => item.id === selectedId) ?? establishments[0];

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

    setSelectedId(next.id);
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
      router.push({
        pathname: "/audit",
        params: { establishmentId: selected.id },
      });
      return;
    }

    Alert.alert(
      selected.name,
      "Complaint flow stub for the hackathon prototype.",
    );
  };

  const handleReview = () => {
    router.push({
      pathname: "/audit",
      params: { establishmentId: selected.id },
    });
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
      setSelectedId(next.id);
      setCameraCoordinates(next.coordinates);
      cameraStateRef.current.latitude = next.coordinates.latitude;
      cameraStateRef.current.longitude = next.coordinates.longitude;
    }
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

    if (closest.id !== selectedId) {
      setSelectedId(closest.id);
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
      setSearchResults(filtered);
    }, 300);
  };

  const selectEstablishment = (id: string) => {
    const est = establishments.find((e) => e.id === id);
    if (est) {
      setSelectedId(est.id);
      setCameraCoordinates(est.coordinates);
      cameraStateRef.current.latitude = est.coordinates.latitude;
      cameraStateRef.current.longitude = est.coordinates.longitude;
      setIsSearching(false);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
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
    searchQuery,
    searchResults,
    isSearching,
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
