import { useMemo, useRef, useState } from 'react';
import {
  Alert,
  Platform,
  useWindowDimensions,
  View,
} from 'react-native';
import { AppleMaps, GoogleMaps } from 'expo-maps';
import { Button, Card } from 'heroui-native';

import { SafeScreen } from '@/components/layout/SafeScreen';
import {
  AppBottomSheetModal,
  type AppBottomSheetModalRef,
} from '@/components/ui/bottom-sheet';
import { Text } from '@/components/ui/text';

type Establishment = {
  id: string;
  name: string;
  category: string;
  address: string;
  city: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  status: 'verified' | 'watch' | 'new' | 'priority';
  reviews: number;
  complaints: number;
  recentSignal: string;
};

const establishments: Establishment[] = [
  {
    id: 'rabat-central-hospital',
    name: 'Rabat Central Hospital',
    category: 'Hospital',
    address: 'Avenue Al Maarif, Rabat',
    city: 'Rabat',
    coordinates: { latitude: 33.9902, longitude: -6.8436 },
    status: 'priority',
    reviews: 128,
    complaints: 9,
    recentSignal: '2 complaints this week',
  },
  {
    id: 'casablanca-tech-school',
    name: 'Casablanca Tech School',
    category: 'School',
    address: 'Bourgogne District, Casablanca',
    city: 'Casablanca',
    coordinates: { latitude: 33.5899, longitude: -7.6039 },
    status: 'verified',
    reviews: 64,
    complaints: 2,
    recentSignal: 'Top-rated by students',
  },
  {
    id: 'marrakesh-civic-office',
    name: 'Marrakesh Civic Office',
    category: 'Public Office',
    address: 'Gueliz, Marrakesh',
    city: 'Marrakesh',
    coordinates: { latitude: 31.6288, longitude: -7.9811 },
    status: 'watch',
    reviews: 47,
    complaints: 5,
    recentSignal: 'Queue delays reported',
  },
  {
    id: 'tangier-community-clinic',
    name: 'Tangier Community Clinic',
    category: 'Clinic',
    address: 'Iberia Quarter, Tangier',
    city: 'Tangier',
    coordinates: { latitude: 35.7595, longitude: -5.834 },
    status: 'new',
    reviews: 18,
    complaints: 1,
    recentSignal: 'Recently added to the map',
  },
  {
    id: 'fez-central-library',
    name: 'Fez Central Library',
    category: 'Library',
    address: 'Ville Nouvelle, Fez',
    city: 'Fez',
    coordinates: { latitude: 34.0243, longitude: -5.0003 },
    status: 'verified',
    reviews: 92,
    complaints: 0,
    recentSignal: 'Clean record for 30 days',
  },
  {
    id: 'agadir-coastal-market',
    name: 'Agadir Coastal Market',
    category: 'Marketplace',
    address: 'Corniche, Agadir',
    city: 'Agadir',
    coordinates: { latitude: 30.4278, longitude: -9.5981 },
    status: 'watch',
    reviews: 35,
    complaints: 4,
    recentSignal: 'Access and pricing concerns',
  },
];

const statusStyles: Record<Establishment['status'], string> = {
  verified: 'bg-emerald-100 text-emerald-700',
  watch: 'bg-amber-100 text-amber-800',
  new: 'bg-sky-100 text-sky-700',
  priority: 'bg-rose-100 text-rose-700',
};

const statusLabels: Record<Establishment['status'], string> = {
  verified: 'Verified',
  watch: 'Watchlist',
  new: 'New',
  priority: 'Priority',
};

const mapCenter = {
  latitude: 33.5731,
  longitude: -7.5898,
};

const mapCamera = {
  coordinates: mapCenter,
  zoom: 6.5,
};

function MapUnavailableFallback() {
  return (
    <View className="flex-1 items-center justify-center gap-3 rounded-[28px] border border-border bg-surface px-5 py-8">
      <Text variant="large" className="text-center">
        Native map preview
      </Text>
      <Text variant="small" className="text-center text-muted">
        This screen uses Expo Maps on iOS and Android. Open it in the native
        build to see the live pins.
      </Text>
      <View className="mt-2 gap-2 self-stretch">
        {establishments.slice(0, 3).map((item) => (
          <View
            key={item.id}
            className="flex-row items-center justify-between rounded-2xl border border-border bg-background px-4 py-3"
          >
            <View className="flex-1 pr-3">
              <Text variant="smallBold">{item.name}</Text>
              <Text variant="xs" className="text-muted">
                {item.city} • {item.category}
              </Text>
            </View>
            <View
              className={`rounded-full px-3 py-1 ${statusStyles[item.status]}`}
            >
              <Text variant="xsBold" className={statusStyles[item.status]}>
                {statusLabels[item.status]}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

export default function MapScreen() {
  const sheetRef = useRef<AppBottomSheetModalRef>(null);
  const { height } = useWindowDimensions();
  const [selectedId, setSelectedId] = useState(establishments[0].id);

  const selected =
    establishments.find((item) => item.id === selectedId) ?? establishments[0];

  const mapHeight = Math.max(360, Math.round(height * 0.48));

  const markers = useMemo(
    () =>
      establishments.map((item) => ({
        id: item.id,
        coordinates: item.coordinates,
        title: item.name,
        snippet: `${item.category} • ${item.city}`,
        showCallout: true,
        zIndex: item.status === 'priority' ? 10 : 1,
      })),
    [],
  );

  const openEstablishment = (id: string) => {
    const next = establishments.find((item) => item.id === id);
    if (!next) return;

    setSelectedId(id);
    sheetRef.current?.present();
  };

  const handleAction = (action: 'review' | 'complaint') => {
    Alert.alert(
      selected.name,
      action === 'review'
        ? 'Review flow stub for the hackathon prototype.'
        : 'Complaint flow stub for the hackathon prototype.',
    );
  };

  return (
    <SafeScreen scrollable>
      <View
        className="-mx-6"
        style={{ height: mapHeight }}
      >
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

        <Card className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 px-4 py-3">
          <View className="flex-row items-center justify-between">
            <View>
              <Text variant="smallBold">{selected.name}</Text>
              <Text variant="xs" className="text-muted">
                {selected.city} • {selected.category}
              </Text>
            </View>
            <View className={`rounded-full px-3 py-1 ${statusStyles[selected.status]}`}>
              <Text variant="xsBold" className={statusStyles[selected.status]}>
                {statusLabels[selected.status]}
              </Text>
            </View>
          </View>
        </Card>
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
            <Button variant="secondary" onPress={() => handleAction('complaint')}>
              <Button.Label>File complaint</Button.Label>
            </Button>
          </View>
        }
      >
        <View className="gap-4">
          <View className="flex-row flex-wrap gap-2">
            <View className={`rounded-full px-3 py-1 ${statusStyles[selected.status]}`}>
              <Text variant="xsBold" className={statusStyles[selected.status]}>
                {statusLabels[selected.status]}
              </Text>
            </View>
            <View className="rounded-full bg-background px-3 py-1">
              <Text variant="xsBold">{selected.city}</Text>
            </View>
            <View className="rounded-full bg-background px-3 py-1">
              <Text variant="xsBold">{selected.category}</Text>
            </View>
          </View>

          <View className="gap-2 rounded-3xl border border-border bg-background p-4">
            <View className="flex-row items-center justify-between">
              <Text variant="smallBold">Why this place?</Text>
              <Text variant="xs" className="text-muted">
                {selected.recentSignal}
              </Text>
            </View>
            <Text variant="small" className="text-muted">
              This is static seed data for the hackathon prototype. The real
              product will later hydrate from Google Maps data and moderation
              state.
            </Text>
          </View>

          <View className="flex-row gap-3">
            <View className="flex-1 rounded-3xl border border-border bg-background p-4">
              <Text variant="xs" className="text-muted">
                Reviews
              </Text>
              <Text variant="large">{selected.reviews}</Text>
            </View>
            <View className="flex-1 rounded-3xl border border-border bg-background p-4">
              <Text variant="xs" className="text-muted">
                Complaints
              </Text>
              <Text variant="large">{selected.complaints}</Text>
            </View>
          </View>
        </View>
      </AppBottomSheetModal>
    </SafeScreen>
  );
}
