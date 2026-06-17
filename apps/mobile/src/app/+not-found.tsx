import { Link } from 'expo-router';
import { Pressable, View, StyleSheet } from 'react-native';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { Text } from '@/components/ui/text';

export default function NotFoundScreen() {
  return (
    <SafeScreen safeArea="both" className="bg-background">
      <View style={styles.container}>
        <Text variant="xsBold" className="uppercase tracking-[0.2em] text-secondary">
          404
        </Text>
        <Text variant="title">Route not found</Text>
        <Text variant="default" className="text-muted">
          The page you requested is not in the Expo shell yet.
        </Text>

        <Link href="/" asChild>
          <Pressable style={styles.link}>
            <Text variant="smallBold" className="text-primary">
              Go home
            </Text>
          </Pressable>
        </Link>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    marginTop: 8,
  },
});
