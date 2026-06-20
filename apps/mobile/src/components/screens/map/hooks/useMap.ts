import { useRef, useState } from "react";
import { Alert, Platform } from "react-native";
import { router } from "expo-router";
import type { AppBottomSheetModalRef } from "@/components/ui/bottom-sheet";
import { establishments, mapCenter } from "../lib/constants";
import { findClosestEstablishment } from "../lib/mapUtils";

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
  const cameraStateRef = useRef({
    latitude: mapCenter.latitude,
    longitude: mapCenter.longitude,
    zoom: 14,
  });

  const cameraCoordinates = mapCenter;

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
  };

  const handleMapClick = (event: {
    coordinates?: { latitude?: number; longitude?: number };
  }) => {
    const { latitude, longitude } = event.coordinates ?? {};
    if (latitude == null || longitude == null) return;

    if (Platform.OS === "ios") {
      // On iOS, selectionEnabled is false, so tapping a custom marker doesn't trigger onMarkerClick.
      // We manually detect if the user clicked close enough to a marker.
      const tappedEstablishment = findClosestEstablishment(
        latitude,
        longitude,
        cameraStateRef.current.zoom,
        establishments,
      );

      if (tappedEstablishment) {
        openEstablishment(tappedEstablishment.id);
      } else {
        // Tapped empty space, dismiss bottom sheet
        sheetRef.current?.dismiss();
      }
    } else {
      // On Android, Google Maps marker click handles itself, so map click always means tapping empty space.
      sheetRef.current?.dismiss();
    }
  };

  return {
    sheetRef,
    selected,
    openEstablishment,
    handleAction,
    cameraCoordinates,
    handleCameraMove,
    handleMapClick,
  };
}
