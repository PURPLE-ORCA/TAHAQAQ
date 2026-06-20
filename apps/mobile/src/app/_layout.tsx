import '../polyfills';
import 'react-native-reanimated';
import '../global.css';

import Constants from 'expo-constants';
import { ConvexAuthProvider } from '@convex-dev/auth/react';
import { Stack } from 'expo-router';
import { ConvexReactClient } from 'convex/react';
import { HeroUINativeProvider } from 'heroui-native/provider';
import * as SecureStore from 'expo-secure-store';
import { Appearance, Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useEffect } from 'react';

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

// Prevent flash of wrong theme on startup by checking synchronously
if (Platform.OS !== 'web') {
  try {
    const stored = SecureStore.getItem('theme-preference');
    if (stored === 'light' || stored === 'dark') {
      Appearance.setColorScheme(stored as any);
    } else if (stored === 'system') {
      Appearance.setColorScheme(null as any);
    }
  } catch (e) {
    // Ignore error on startup sync
  }
}

export default function RootLayout() {
  useEffect(() => {
    async function initTheme() {
      try {
        const stored = await SecureStore.getItemAsync('theme-preference');
        if (stored === 'light' || stored === 'dark') {
          Appearance.setColorScheme(stored as any);
        } else if (stored === 'system') {
          Appearance.setColorScheme(null as any);
        }
      } catch (e) {
        console.warn('Failed to load theme preference on launch', e);
      }
    }
    initTheme();
  }, []);

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
