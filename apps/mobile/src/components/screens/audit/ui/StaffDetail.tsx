import { View } from 'react-native';
import { Button, Label } from 'heroui-native';
import { Choice } from '../types';
import { WaitTimeSlider } from './WaitTimeSlider';

interface StaffDetailProps {
  staffPresent: Choice;
  setStaffPresent: (choice: Choice) => void;
  waitMinutes: number;
  setWaitMinutes: (minutes: number) => void;
}

export function StaffDetail({
  staffPresent,
  setStaffPresent,
  waitMinutes,
  setWaitMinutes,
}: StaffDetailProps) {
  return (
    <View className="gap-4">
      <View className="gap-2">
        <Label>Were staff present?</Label>
        <View className="flex-row gap-2">
          {(['yes', 'no'] as const).map((value) => (
            <Button
              key={value}
              variant={staffPresent === value ? 'primary' : 'secondary'}
              size="sm"
              className="flex-1 rounded-2xl"
              onPress={() => setStaffPresent(value)}
            >
              <Button.Label>{value === 'yes' ? 'Yes' : 'No'}</Button.Label>
            </Button>
          ))}
        </View>
      </View>

      <WaitTimeSlider waitMinutes={waitMinutes} setWaitMinutes={setWaitMinutes} />
    </View>
  );
}
