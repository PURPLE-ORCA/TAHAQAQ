import { Tabs } from 'expo-router';
import { Text } from 'react-native';

function TabIcon({ icon, color }: { icon: string; color: string }) {
  return <Text style={{ color, fontSize: 20, lineHeight: 22 }}>{icon}</Text>;
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#208aef',
        tabBarInactiveTintColor: '#64748b',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <TabIcon icon="⌂" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile/index"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <TabIcon icon="○" color={color} />,
        }}
      />
    </Tabs>
  );
}
