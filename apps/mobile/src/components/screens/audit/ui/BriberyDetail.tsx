import { View } from 'react-native';
import { Button, Input, Label, Typography } from 'heroui-native';
import { Choice, BRIBERY_DESCRIPTION_MAX } from '../types';

interface BriberyDetailProps {
  briberyExperienced: Choice;
  setBriberyExperienced: (choice: Choice) => void;
  briberyAmount: string;
  setBriberyAmount: (amount: string) => void;
  briberyDescription: string;
  setBriberyDescription: (desc: string) => void;
}

export function BriberyDetail({
  briberyExperienced,
  setBriberyExperienced,
  briberyAmount,
  setBriberyAmount,
  briberyDescription,
  setBriberyDescription,
}: BriberyDetailProps) {
  return (
    <View className="gap-4">
      <View className="gap-2">
        <Label>Did you experience bribery?</Label>
        <View className="flex-row gap-2">
          {(['yes', 'no'] as const).map((value) => (
            <Button
              key={value}
              variant={briberyExperienced === value ? 'primary' : 'secondary'}
              size="sm"
              className="flex-1 rounded-2xl"
              onPress={() => setBriberyExperienced(value)}
            >
              <Button.Label>{value === 'yes' ? 'Yes' : 'No'}</Button.Label>
            </Button>
          ))}
        </View>
      </View>

      {briberyExperienced === 'yes' && (
        <View className="gap-3">
          <View className="gap-2">
            <Label>Amount (optional)</Label>
            <Input
              value={briberyAmount}
              onChangeText={setBriberyAmount}
              placeholder="e.g. 20 MAD"
              keyboardType="decimal-pad"
            />
          </View>
          <View className="gap-2">
            <Label>Description (optional)</Label>
            <Input
              value={briberyDescription}
              onChangeText={(val) => setBriberyDescription(val.slice(0, BRIBERY_DESCRIPTION_MAX))}
              placeholder="Short note about what happened"
              multiline
              numberOfLines={4}
              textAlignVertical="top"
              maxLength={BRIBERY_DESCRIPTION_MAX}
            />
            <Typography type="body-xs" color="muted">
              {briberyDescription.length}/{BRIBERY_DESCRIPTION_MAX}
            </Typography>
          </View>
        </View>
      )}
    </View>
  );
}
