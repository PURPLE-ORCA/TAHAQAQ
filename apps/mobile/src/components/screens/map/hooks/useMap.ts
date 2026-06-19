import { useRef, useState } from 'react';
import { Alert } from 'react-native';
import type { AppBottomSheetModalRef } from '@/components/ui/bottom-sheet';
import { establishments, mapCenter } from '../lib/constants';
import { useUserLocation } from './useUserLocation';

export function useMap() {
  const sheetRef = useRef<AppBottomSheetModalRef>(null);
  const [selectedId, setSelectedId] = useState(establishments[0].id);
  const { location } = useUserLocation();

  const cameraCoordinates = location ?? mapCenter;

  const selected =
    establishments.find((item) => item.id === selectedId) ?? establishments[0];

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

  return {
    sheetRef,
    selected,
    openEstablishment,
    handleAction,
    cameraCoordinates,
  };
}

