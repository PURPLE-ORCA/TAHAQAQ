import { View } from 'react-native';
import { Text } from '@/components/ui/text';
import type { Establishment } from '../types';
import { statusLabels, statusStyles } from '../lib/constants';

type Props = {
  selected: Establishment;
};

export function EstablishmentDetails({ selected }: Props) {
  return (
    <View className="gap-4">
      <View className="flex-row flex-wrap gap-2">
        <View
          className={`rounded-full px-3 py-1 ${statusStyles[selected.status]}`}
        >
          <Text variant="xsBold" className={statusStyles[selected.status]}>
            {statusLabels[selected.status]}
          </Text>
        </View>
        <View className="rounded-full bg-background px-3 py-1">
          <Text variant="xsBold">{selected.city}</Text>
        </View>
        <View className="rounded-full bg-background px-3 py-1">
          <Text variant="xsBold">{selected.category}</Text>
        </View>
      </View>

      <View className="gap-2 rounded-3xl border border-border bg-background p-4">
        <View className="flex-row items-center justify-between">
          <Text variant="smallBold">Why this place?</Text>
          <Text variant="xs" className="text-muted">
            {selected.recentSignal}
          </Text>
        </View>
        <Text variant="small" className="text-muted">
          This is static seed data for the hackathon prototype. The real product
          will later hydrate from Google Maps data and moderation state.
        </Text>
      </View>

      <View className="flex-row gap-3">
        <View className="flex-1 rounded-3xl border border-border bg-background p-4">
          <Text variant="xs" className="text-muted">
            Reviews
          </Text>
          <Text variant="large">{selected.reviews}</Text>
        </View>
        <View className="flex-1 rounded-3xl border border-border bg-background p-4">
          <Text variant="xs" className="text-muted">
            Complaints
          </Text>
          <Text variant="large">{selected.complaints}</Text>
        </View>
      </View>
    </View>
  );
}
