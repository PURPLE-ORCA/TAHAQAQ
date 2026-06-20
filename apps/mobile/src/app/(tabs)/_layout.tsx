import { Tabs } from "expo-router";
import { useThemeColor } from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { useI18n } from "@/hooks/useI18n";

export default function TabsLayout() {
  const [activeColor, inactiveColor, surfaceColor, borderColor] = useThemeColor([
    "accent",
    "muted",
    "surface",
    "border",
  ] as const);
  const { t } = useI18n();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarStyle: {
          backgroundColor: surfaceColor,
          borderTopColor: borderColor,
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
