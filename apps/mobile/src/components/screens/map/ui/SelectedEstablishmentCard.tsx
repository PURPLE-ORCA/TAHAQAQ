import { View } from 'react-native';
import { Card } from 'heroui-native';
import { Text } from '@/components/ui/text';
import type { Establishment } from '../types';
import { statusLabels, statusStyles } from '../lib/constants';

type Props = {
  selected: Establishment;
};

export function SelectedEstablishmentCard({ selected }: Props) {
  return (
    <Card className="pointer-events-none absolute bottom-4 left-4 right-4 rounded-2xl bg-background/90 px-4 py-3">
      <View className="flex-row items-center justify-between">
        <View>
          <Text variant="smallBold">{selected.name}</Text>
          <Text variant="xs" className="text-muted">
            {selected.city} • {selected.category}
          </Text>
        </View>
        <View
          className={`rounded-full px-3 py-1 ${statusStyles[selected.status]}`}
        >
          <Text variant="xsBold" className={statusStyles[selected.status]}>
            {statusLabels[selected.status]}
          </Text>
        </View>
      </View>
    </Card>
  );
}
