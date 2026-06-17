import { router } from 'expo-router';
import { Image } from 'expo-image';
import { Button } from 'heroui-native/button';
import { StyleSheet, View } from 'react-native';
import { womenHoldingEqualityVector } from '@tahaqaq/assets/vectors';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { Text } from '@/components/ui/text';

export default function OnboardingScreen() {
  return (
    <SafeScreen safeArea="both" className="bg-background">
      <View style={styles.container}>
        <View style={styles.content}>
          <Image
            source={womenHoldingEqualityVector}
            contentFit="contain"
            style={styles.illustration}
          />

          <View style={styles.copyBlock}>
            <Text variant="title" className="text-[40px] leading-[48px]">
              Report equality issues with confidence
            </Text>

            <Text variant="default" className="text-muted">
              Tahaqaq helps you document civic cases, attach trusted evidence,
              and keep every report clear from the very first step.
            </Text>
          </View>
        </View>

        <View style={styles.footer}>
          <Button variant="primary" size="lg" onPress={() => router.push('/login')}>
            <Button.Label>Next</Button.Label>
          </Button>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 16,
  },
  content: {
    gap: 32,
  },
  illustration: {
    width: '100%',
    height: 380,
    alignSelf: 'center',
  },
  copyBlock: {
    gap: 16,
  },
  footer: {
    alignItems: 'flex-end',
  },
});
