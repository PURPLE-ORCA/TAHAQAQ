import { router } from 'expo-router';
import { Button } from 'heroui-native/button';
import { View, StyleSheet } from 'react-native';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { Text } from '@/components/ui/text';

export default function HomeScreen() {
  return (
    <SafeScreen safeArea="both" className="bg-background">
      <View style={styles.container}>
        <View style={styles.hero}>
          <Text variant="xsBold" className="uppercase tracking-[0.2em] text-secondary">
            Home
          </Text>
          <Text variant="title">Starter shell is ready</Text>
          <Text variant="default" className="text-muted">
            Tabs, auth shell, and the HeroUI Native layer are in place.
          </Text>
        </View>

        <View className="gap-3 rounded-3xl border border-border bg-card p-5">
          <Text variant="smallBold">Next steps</Text>
          <Text variant="small" className="text-muted">
            Wire Convex auth after the screens are complete.
          </Text>
          <Button onPress={() => router.push('/onboarding')} style={styles.button}>
            Open onboarding wireframe
          </Button>
          <Button onPress={() => router.push('/profile')} style={styles.button}>
            Open profile
          </Button>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 24,
    justifyContent: 'center',
  },
  hero: {
    gap: 12,
  },
  button: {
    marginTop: 4,
  },
});
