import { router } from "expo-router";
import { Button } from "heroui-native/button";
import { useMemo, useState } from "react";
import { StyleSheet, View } from "react-native";

import { SafeScreen } from "@/components/layout/SafeScreen";
import { Text } from "@/components/ui/text";

type OnboardingStep = {
  label: string;
  title: string;
  body: string;
  chips: string[];
};

const steps: OnboardingStep[] = [
  {
    label: "01 / 03",
    title: "Welcome screen",
    body: "Use this space for a short intro, brand moment, or a single sentence that explains the app.",
    chips: ["Brand block", "Headline", "CTA"],
  },
  {
    label: "02 / 03",
    title: "Preference screen",
    body: "Reserve this step for simple preference picks, toggles, or a tiny list of starter choices.",
    chips: ["Options", "Selection card", "Next action"],
  },
  {
    label: "03 / 03",
    title: "Finish screen",
    body: "Use the last screen as a quick handoff into auth or the main app shell.",
    chips: ["Summary", "Confirmation", "Enter app"],
  },
];

function WireCard({
  title,
  body,
}: Pick<OnboardingStep, "title" | "body" | "chips">) {
  return (
    <View className="gap-4 border border-border bg-card p-5 shadow-sm">
      <View className="gap-2">
        <Text variant="large">{title}</Text>
        <Text variant="default" className="text-muted">
          {body}
        </Text>
      </View>
    </View>
  );
}

export default function OnboardingScreen() {
  const [stepIndex, setStepIndex] = useState(0);

  const step = useMemo(() => steps[stepIndex] ?? steps[0], [stepIndex]);
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === steps.length - 1;

  function goNext() {
    if (!isLastStep) {
      setStepIndex((current) => Math.min(current + 1, steps.length - 1));
      return;
    }

    router.push("/login");
  }

  function goBack() {
    setStepIndex((current) => Math.max(current - 1, 0));
  }

  return (
    <SafeScreen scrollable safeArea="both" className="">
      <View style={styles.shell}>
        <View className="gap-3 p-4">
          <View className="mt-4 flex-row gap-3">
            <Button
              variant="secondary"
              size="lg"
              isDisabled={isFirstStep}
              onPress={goBack}
              style={styles.button}
            >
              Back
            </Button>
            <Button
              variant="primary"
              size="lg"
              onPress={goNext}
              style={styles.button}
            >
              {isLastStep ? "Finish" : "Next"}
            </Button>
          </View>
        </View>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    gap: 24,
    justifyContent: "center",
  },
  header: {
    gap: 12,
  },
  button: {
    flex: 1,
  },
});
