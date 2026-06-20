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
    handleSearch,
    selectEstablishment,
    clearSearch,
    setIsSearching,
    cameraCenter,
  } = useMap();

  return (
    <SafeScreen>
      <View className="-mx-6" style={{ flex: 1 }}>
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

        <EstablishmentSearch
          searchQuery={searchQuery}
          searchResults={searchResults}
          isSearching={isSearching}
          handleSearch={handleSearch}
          selectEstablishment={selectEstablishment}
          clearSearch={clearSearch}
          setIsSearching={setIsSearching}
          cameraCenter={cameraCenter}
        />

        <SelectedEstablishmentCard selected={selected} onPress={handleReview} />
      </View>
    </SafeScreen>
  );
}
