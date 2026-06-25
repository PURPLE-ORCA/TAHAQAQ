import { Platform, View } from "react-native";
import { AppleMaps, GoogleMaps } from "expo-maps";
import { SafeScreen } from "@/components/layout/SafeScreen";
import { useMap } from "@/components/screens/map/hooks/useMap";
import { MapUnavailableFallback } from "@/components/screens/map/MapUnavailableFallback";
import { mapProperties, markers } from "@/components/screens/map/lib/constants";
import { SelectedEstablishmentCard } from "@/components/screens/map/ui/SelectedEstablishmentCard";
import { EstablishmentSearch } from "@/components/screens/map/ui/EstablishmentSearch";

export default function MapScreen() {
  const {
    selected,
    handleReview,
    cameraCoordinates,
    handleCameraMove,
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
    cameraCenter,
  } = useMap();

  return (
    <View className="flex-1 bg-background">
      <View style={{ flex: 1 }}>
        {Platform.OS === "ios" ? (
          <AppleMaps.View
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
            onCameraMove={handleCameraMove}
            onMarkerClick={handleMarkerClick}
            onMapClick={handleMapClick}
          />
        ) : Platform.OS === "android" ? (
          <GoogleMaps.View
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
            onCameraMove={handleCameraMove}
            onMarkerClick={handleMarkerClick}
            onMapClick={handleMapClick}
          />
        ) : (
          <MapUnavailableFallback />
        )}

        <SafeScreen
          safeArea="top"
          className="absolute inset-0 bg-transparent"
          contentClassName="bg-transparent"
          contentHorizontalPadding={false}
          contentPointerEvents="box-none"
          pointerEvents="box-none"
        >
          <EstablishmentSearch
            searchQuery={searchQuery}
            searchResults={searchResults}
            isSearching={isSearching}
            showRedOnly={showRedOnly}
            toggleRedOnly={toggleRedOnly}
            handleSearch={handleSearch}
            selectEstablishment={selectEstablishment}
            clearSearch={clearSearch}
            setIsSearching={setIsSearching}
            cameraCenter={cameraCenter}
          />
        </SafeScreen>

        <SelectedEstablishmentCard selected={selected} onPress={handleReview} />
      </View>
    </View>
  );
}
