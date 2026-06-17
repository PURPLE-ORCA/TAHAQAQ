import { router } from 'expo-router';
import { Image } from 'expo-image';
import { Button, Typography } from 'heroui-native';
import { Text, View } from 'react-native';
import { womenHoldingEqualityVector } from '@tahaqaq/assets/vectors';
import { SafeScreen } from '@/components/layout/SafeScreen';
import { Icon } from '@/components/ui/icon';

export default function OnboardingScreen() {
  return (
    <SafeScreen>
      <View className="flex-1 justify-between">
        <Image
          source={womenHoldingEqualityVector}
          contentFit="contain"
          style={{ width: '100%', height: 500 }}
          className="self-center"
        />

        <View className="gap-4">
          <Typography type="h2" weight="bold" className="text-4xl">
            Report equality issues with{' '}
            <Text className="text-4xl font-semibold text-[#00a040]">confidence</Text>
          </Typography>

          <Typography type="body" className="text-muted">
            Tahaqaq helps you document civic cases, attach trusted evidence, and
            keep every report clear from the very first step.
          </Typography>
        </View>

        <View className="px-18">
          <Button
            variant="primary"
            size="md"
            className=" justify-between"
            onPress={() => router.push('/login')}
          >
            <Button.Label>Get Started</Button.Label>
            <View className="bg-background rounded-full p-1">
              <Icon name="chevron-forward" size={14}/>
            </View>
          </Button>
        </View>
      </View>
    </SafeScreen>
  );
}
