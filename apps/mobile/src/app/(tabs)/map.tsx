import { Platform, View } from 'react-native';
import { AppleMaps, GoogleMaps } from 'expo-maps';
import { Button } from 'heroui-native';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { AppBottomSheetModal } from '@/components/ui/bottom-sheet';

import { useMap } from '@/components/screens/map/hooks/useMap';
import { MapUnavailableFallback } from '@/components/screens/map/MapUnavailableFallback';
import { mapCamera, markers } from '@/components/screens/map/lib/constants';
import { SelectedEstablishmentCard } from '@/components/screens/map/ui/SelectedEstablishmentCard';
import { EstablishmentDetails } from '@/components/screens/map/ui/EstablishmentDetails';

export default function MapScreen() {
  const { sheetRef, selected, mapHeight, openEstablishment, handleAction } =
    useMap();

  return (
    <SafeScreen scrollable>
      <View className="-mx-6" style={{ height: mapHeight }}>
        {Platform.OS === 'ios' ? (
          <AppleMaps.View
            style={{ flex: 1 }}
            cameraPosition={mapCamera}
            markers={markers}
            onMarkerClick={(event) => {
              if (event.id) {
                openEstablishment(event.id);
              }
            }}
          />
        ) : Platform.OS === 'android' ? (
          <GoogleMaps.View
            style={{ flex: 1 }}
            cameraPosition={mapCamera}
            markers={markers}
            onMarkerClick={(event) => {
              if (event.id) {
                openEstablishment(event.id);
              }
            }}
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
            <Button variant="primary" onPress={() => handleAction('review')}>
              <Button.Label>Review</Button.Label>
            </Button>
            <Button
              variant="secondary"
              onPress={() => handleAction('complaint')}
            >
              <Button.Label>File complaint</Button.Label>
            </Button>
          </View>
        }
      >
        <EstablishmentDetails selected={selected} />
      </AppBottomSheetModal>
    </SafeScreen>
  );
}
