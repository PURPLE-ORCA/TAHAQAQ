import { View } from 'react-native';
import { Button, Surface, Typography } from 'heroui-native';
import { router } from 'expo-router';

interface AuditHeaderProps {
  step: number;
}

const STEPS = [
  'Where are you?',
  'What are you auditing?',
  'Tell us more',
  'Comment',
  'Review',
  'Thank you',
];

export function AuditHeader({ step }: AuditHeaderProps) {
  return (
    <View className="gap-4">
      <View className="flex-row items-center justify-between gap-3">
        <View className="gap-1">
          <Typography type="h2" weight="semibold">Audit submission</Typography>
          <Typography type="body-sm" color="muted">
            Follow the six-step flow and keep every audit anonymous.
          </Typography>
        </View>
        <Button variant="secondary" size="sm" onPress={() => router.replace('/(tabs)/map')}>
          <Button.Label>Back to map</Button.Label>
        </Button>
      </View>

      <Surface className="rounded-3xl p-4">
        <View className="gap-2">
          <Typography type="body-xs" color="muted">Progress</Typography>
          <View className="flex-row flex-wrap gap-2">
            {STEPS.map((item, index) => {
              const number = index + 1;
              const isActive = step === number;
              const isCompleted = step > number;
              return (
                <Surface
                  key={item}
                  className={`rounded-full px-3 py-1 ${
                    isActive ? 'bg-accent' : isCompleted ? 'bg-accent/10' : 'bg-background'
                  }`}
                >
                  <Typography
                    type="body-xs"
                    weight="semibold"
                    className={isActive ? 'text-accent-foreground' : 'text-foreground'}
                  >
                    {number}. {item}
                  </Typography>
                </Surface>
              );
            })}
          </View>
        </View>
      </Surface>
    </View>
  );
}
