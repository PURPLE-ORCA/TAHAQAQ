import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import { establishments, statusLabels, statusStyles } from './lib/constants';

export function MapUnavailableFallback() {
  return (
    <View className="flex-1 items-center justify-center gap-3 rounded-[28px] border border-border bg-surface px-5 py-8">
      <Text variant="large" className="text-center">
        Native map preview
      </Text>
      <Text variant="small" className="text-center text-muted">
        This screen uses Expo Maps on iOS and Android. Open it in the native
        build to see the live pins.
      </Text>
      <View className="mt-2 gap-2 self-stretch">
        {establishments.slice(0, 3).map((item) => (
          <View
            key={item.id}
            className="flex-row items-center justify-between rounded-2xl border border-border bg-background px-4 py-3"
          >
            <View className="flex-1 pr-3">
              <Text variant="smallBold">{item.name}</Text>
              <Text variant="xs" className="text-muted">
                {item.city} • {item.category}
              </Text>
            </View>
            <View
              className={`rounded-full px-3 py-1 ${statusStyles[item.status]}`}
            >
              <Text variant="xsBold" className={statusStyles[item.status]}>
                {statusLabels[item.status]}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}
