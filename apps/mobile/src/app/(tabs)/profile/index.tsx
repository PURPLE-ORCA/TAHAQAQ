import { useRef } from 'react';
import { router } from 'expo-router';
import { Button } from 'heroui-native/button';
import { View, StyleSheet } from 'react-native';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { Text } from '@/components/ui/text';
import {
  AppBottomSheetModal,
  type AppBottomSheetModalRef,
} from '@/components/ui/bottom-sheet';

export default function ProfileScreen() {
  const sheetRef = useRef<AppBottomSheetModalRef>(null);

  return (
    <SafeScreen safeArea="both">
      <View>
        <View>
          <Text variant="title">Personal shell</Text>
          <Text variant="default" className="text-muted">
            This route is ready for account details once Convex auth lands.
          </Text>
        </View>

        <View className="gap-3 rounded-3xl border border-border bg-surface p-5">
          <Text variant="smallBold">Account</Text>
          <Text variant="small" className="text-muted">
            Email, avatar, preferences, and sign-out actions will live here.
          </Text>
          <Button onPress={() => router.push("/onboarding")}>
            Open onboarding wireframe
          </Button>
        </View>

        <View className="gap-3 rounded-3xl border border-border bg-surface p-5">
          <Text variant="smallBold">Test Bottom Sheet</Text>
          <Button variant="secondary" onPress={() => sheetRef.current?.present()}>
            <Button.Label>Open Bottom Sheet</Button.Label>
          </Button>
        </View>
      </View>

      <AppBottomSheetModal
        ref={sheetRef}
        title="Bottom sheet works"
        description="This is a shared bottom sheet component using HeroUI Native."
      >
        <Button variant="primary" onPress={() => sheetRef.current?.dismiss()}>
          <Button.Label>Confirm</Button.Label>
        </Button>
        <Button
          variant="tertiary"
          onPress={() => sheetRef.current?.dismiss()}
        >
          <Button.Label>Cancel</Button.Label>
        </Button>
      </AppBottomSheetModal>
    </SafeScreen>
  );
}
