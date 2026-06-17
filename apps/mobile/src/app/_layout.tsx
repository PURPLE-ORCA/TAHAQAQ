import '../polyfills';
import 'react-native-reanimated';
import '../global.css';

import { ConvexAuthProvider } from '@convex-dev/auth/react';
import { Stack } from 'expo-router';
import { ConvexReactClient } from 'convex/react';
import { HeroUINativeProvider } from 'heroui-native/provider';
import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
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
