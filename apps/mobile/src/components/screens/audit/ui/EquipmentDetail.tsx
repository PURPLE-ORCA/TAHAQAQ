import { View } from 'react-native';
import { Button, Label } from 'heroui-native';
import { EQUIPMENT_CONDITIONS, EquipmentCondition } from '../types';

interface EquipmentDetailProps {
  equipmentCondition: EquipmentCondition;
  setEquipmentCondition: (cond: EquipmentCondition) => void;
}

export function EquipmentDetail({
  equipmentCondition,
  setEquipmentCondition,
}: EquipmentDetailProps) {
  return (
    <View className="gap-3">
      <Label>Condition</Label>
      <View className="gap-2">
        {EQUIPMENT_CONDITIONS.map((item) => {
          const isSelected = equipmentCondition === item.id;
          return (
            <Button
              key={item.id}
              variant={isSelected ? 'primary' : 'secondary'}
              size="sm"
              className="rounded-2xl"
              onPress={() => setEquipmentCondition(item.id)}
            >
              <Button.Label>{item.label}</Button.Label>
            </Button>
          );
        })}
      </View>
    </View>
  );
}
