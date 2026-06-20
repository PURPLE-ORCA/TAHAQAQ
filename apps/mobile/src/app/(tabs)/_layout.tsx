import { Tabs } from "expo-router";
import { useColorScheme } from "react-native";
import { Icon } from "@/components/ui/icon";
import { useI18n } from "@/hooks/useI18n";

export default function TabsLayout() {
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";
  const { t } = useI18n();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDark ? "#4ade80" : "#00a040",
        tabBarInactiveTintColor: isDark ? "#a8b8a3" : "#6d7b6b",
        tabBarStyle: {
          backgroundColor: isDark ? "#161d16" : "#ffffff",
          borderTopColor: isDark ? "#3a4a38" : "#e5e7eb",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("tabs.home"),
          tabBarIcon: ({ color, size }) => (
            <Icon name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: t("tabs.map"),
          tabBarIcon: ({ color, size }) => (
            <Icon name="map-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: t("tabs.profile"),
          tabBarIcon: ({ color, size }) => (
            <Icon name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
