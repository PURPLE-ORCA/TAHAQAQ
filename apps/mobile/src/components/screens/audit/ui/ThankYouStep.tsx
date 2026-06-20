import { View } from "react-native";
import Animated, { FadeIn, LinearTransition } from "react-native-reanimated";
import { Button, Surface, Typography } from "heroui-native";
import { router } from "expo-router";

interface ThankYouStepProps {
  submissionCount: number;
  resetFlow: () => void;
}

export function ThankYouStep({
  submissionCount,
  resetFlow,
}: ThankYouStepProps) {
  return (
    <Surface className="items-center gap-4 rounded-3xl p-6">
      <Animated.View
        entering={FadeIn.duration(220)}
        layout={LinearTransition.springify().damping(16).stiffness(160)}
        className="items-center gap-4"
      >
        <View className="size-20 items-center justify-center rounded-full bg-accent/10">
          <Typography type="h2">✅</Typography>
        </View>
        <View className="items-center gap-2">
          <Typography type="h3" weight="semibold">
            Thank you.
          </Typography>
          <Typography type="body-sm" color="muted" className="text-center">
            Your audit helps improve public services.
          </Typography>
        </View>
      </Animated.View>

      <Surface className="w-full rounded-3xl bg-background p-4">
        <View className="gap-1 items-center">
          <Typography type="body-xs" color="muted">
            You&apos;ve submitted
          </Typography>
          <Typography type="h2" weight="semibold">
            {submissionCount} audit{submissionCount === 1 ? "" : "s"}
          </Typography>
        </View>
      </Surface>

      <View className="w-full gap-3">
        <Button
          variant="primary"
          size="md"
          onPress={() => router.replace("/(tabs)/map")}
        >
          <Button.Label>Back to map</Button.Label>
        </Button>
        <Button variant="secondary" size="md" onPress={resetFlow}>
          <Button.Label>Submit another</Button.Label>
        </Button>
      </View>
    </Surface>
  );
}
