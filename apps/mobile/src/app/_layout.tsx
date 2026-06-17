import '../polyfills';
import 'react-native-reanimated';
import '../global.css';

import Constants from 'expo-constants';
import { ConvexAuthProvider } from '@convex-dev/auth/react';
import { Stack } from 'expo-router';
import { ConvexReactClient } from 'convex/react';
import { HeroUINativeProvider } from 'heroui-native/provider';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const convexUrl =
  process.env.EXPO_PUBLIC_CONVEX_URL ??
  Constants.expoConfig?.extra?.EXPO_PUBLIC_CONVEX_URL ??
  Constants.manifest?.extra?.EXPO_PUBLIC_CONVEX_URL;

if (!convexUrl) {
  throw new Error(
    'Missing Convex address. Set EXPO_PUBLIC_CONVEX_URL in the repo root .env so apps/mobile can link it before Expo starts.',
  );
}

const convex = new ConvexReactClient(convexUrl, {
  unsavedChangesWarning: false,
});

const secureStorage = {
  getItem: SecureStore.getItemAsync,
  setItem: SecureStore.setItemAsync,
  removeItem: SecureStore.deleteItemAsync,
};

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ConvexAuthProvider
        client={convex}
        storage={Platform.OS !== 'web' ? secureStorage : undefined}
      >
        <HeroUINativeProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </HeroUINativeProvider>
      </ConvexAuthProvider>
    </GestureHandlerRootView>
  );
}
