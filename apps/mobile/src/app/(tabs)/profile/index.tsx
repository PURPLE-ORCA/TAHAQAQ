import { router } from 'expo-router';
import { Button } from 'heroui-native/button';
import { View, StyleSheet } from 'react-native';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { Text } from '@/components/ui/text';

export default function ProfileScreen() {
  return (
    <SafeScreen safeArea="both">
      <View>
        <View>
          <Text variant="title">Personal shell</Text>
          <Text variant="default" className="text-muted">
            This route is ready for account details once Convex auth lands.
          </Text>
        </View>

        <View className="gap-3 rounded-3xl border border-border bg-card p-5">
          <Text variant="smallBold">Account</Text>
          <Text variant="small" className="text-muted">
            Email, avatar, preferences, and sign-out actions will live here.
          </Text>
          <Button onPress={() => router.replace("/login")}>
            Back to login
          </Button>
          <Button onPress={() => router.push("/onboarding")}>
            Open onboarding wireframe
          </Button>
        </View>
      </View>
    </SafeScreen>
  );
}

