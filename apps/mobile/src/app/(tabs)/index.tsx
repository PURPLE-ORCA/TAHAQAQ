import { router } from "expo-router";
import { Button } from "heroui-native/button";
import { View, StyleSheet } from "react-native";

import { SafeScreen } from "@/components/layout/SafeScreen";
import { Text } from "@/components/ui/text";

export default function HomeScreen() {
  return (
    <SafeScreen safeArea="both">
      <View>
        <View className="flex flex-row gap-3 justify-evenly">
          <Button onPress={() => router.push("/onboarding")}>
            Open onboarding wireframe
          </Button>
          <Button onPress={() => router.push("/profile")}>Open profile</Button>
        </View>
      </View>
    </SafeScreen>
  );
}
