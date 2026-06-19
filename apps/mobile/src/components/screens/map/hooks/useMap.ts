import { useRef, useState } from 'react';
import { Alert, useWindowDimensions } from 'react-native';
import type { AppBottomSheetModalRef } from '@/components/ui/bottom-sheet';
import { establishments } from '../lib/constants';

export function useMap() {
  const sheetRef = useRef<AppBottomSheetModalRef>(null);
  const { height } = useWindowDimensions();
  const [selectedId, setSelectedId] = useState(establishments[0].id);

  const selected =
    establishments.find((item) => item.id === selectedId) ?? establishments[0];

  const mapHeight = Math.max(360, Math.round(height * 0.48));

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
    mapHeight,
    openEstablishment,
    handleAction,
  };
}
