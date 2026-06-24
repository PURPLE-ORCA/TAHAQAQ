import { View } from "react-native";
import { Button, Label } from "heroui-native";
import { EQUIPMENT_CONDITIONS, EquipmentCondition } from "../types";

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
      <View className="flex-row flex-wrap gap-2">
        {EQUIPMENT_CONDITIONS.map((item) => {
          const isSelected = equipmentCondition === item.id;
          return (
            <View key={item.id} className="w-[48%]">
              <Button
                variant={isSelected ? "primary" : "secondary"}
                size="sm"
                className="rounded-2xl w-full"
                onPress={() => setEquipmentCondition(item.id)}
              >
                <Button.Label>{item.label}</Button.Label>
              </Button>
            </View>
          );
        })}
      </View>
    </View>
  );
}
