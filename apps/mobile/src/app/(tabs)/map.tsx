import { useRef } from "react";
import { Platform, View } from "react-native";
import { AppleMaps, GoogleMaps } from "expo-maps";
import { Button } from "heroui-native";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { AppBottomSheetModal } from "@/components/ui/bottom-sheet";
import { useMap } from "@/components/screens/map/hooks/useMap";
import { MapUnavailableFallback } from "@/components/screens/map/MapUnavailableFallback";
import { mapProperties, markers } from "@/components/screens/map/lib/constants";
import { SelectedEstablishmentCard } from "@/components/screens/map/ui/SelectedEstablishmentCard";
import { EstablishmentDetails } from "@/components/screens/map/ui/EstablishmentDetails";
import { useI18n } from "@/hooks/useI18n";

export default function MapScreen() {
  const {
    sheetRef,
    selected,
    openEstablishment,
    handleAction,
    cameraCoordinates,
    handleCameraMove,
    handleMapClick,
  } = useMap();
  const iosMapRef = useRef<AppleMaps.MapView>(null);
  const androidMapRef = useRef<GoogleMaps.MapView>(null);
  const { t } = useI18n();

  const handleMarkerClick = (event: {
    id?: string;
    coordinates?: { latitude?: number; longitude?: number };
  }) => {
    openEstablishment(event);
    // Dismiss the native map callout immediately so only our custom bottom sheet shows
    if (Platform.OS === "ios") {
      iosMapRef.current?.selectMarker(undefined);
    } else {
      androidMapRef.current?.selectMarker(undefined);
    }
  };

  return (
    <SafeScreen>
      <View className="-mx-6" style={{ flex: 1 }}>
        {Platform.OS === "ios" ? (
          <AppleMaps.View
            ref={iosMapRef}
            style={{ flex: 1 }}
            properties={mapProperties}
            cameraPosition={{
              coordinates: {
                latitude: cameraCoordinates.latitude,
                longitude: cameraCoordinates.longitude,
              },
              zoom: 14,
            }}
            markers={markers}
            onMarkerClick={handleMarkerClick}
            onCameraMove={handleCameraMove}
            onMapClick={handleMapClick}
          />
        ) : Platform.OS === "android" ? (
          <GoogleMaps.View
            ref={androidMapRef}
            style={{ flex: 1 }}
            properties={mapProperties}
            cameraPosition={{
              coordinates: {
                latitude: cameraCoordinates.latitude,
                longitude: cameraCoordinates.longitude,
              },
              zoom: 14,
            }}
            markers={markers}
            onMarkerClick={handleMarkerClick}
            onCameraMove={handleCameraMove}
            onMapClick={handleMapClick}
          />
        ) : (
          <MapUnavailableFallback />
        )}

        <SelectedEstablishmentCard selected={selected} />
      </View>

      <AppBottomSheetModal
        ref={sheetRef}
        title={selected.name}
        description={`${selected.category} • ${selected.address}`}
        footer={
          <View className="gap-3">
            <Button variant="primary" onPress={() => handleAction("review")}>
              <Button.Label>{t("map.review")}</Button.Label>
            </Button>
            <Button
              variant="secondary"
              onPress={() => handleAction("complaint")}
            >
              <Button.Label>{t("map.fileComplaint")}</Button.Label>
            </Button>
          </View>
        }
      >
        <EstablishmentDetails selected={selected} />
      </AppBottomSheetModal>
    </SafeScreen>
  );
}
