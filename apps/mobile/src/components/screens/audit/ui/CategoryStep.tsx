import { View } from 'react-native';
import { Button, Surface, Typography } from 'heroui-native';
import { AUDIT_CATEGORIES, AuditCategoryId, AuditStep } from '../types';

interface CategoryStepProps {
  selectedCategories: AuditCategoryId[];
  onToggleCategory: (id: AuditCategoryId) => void;
  setCurrentCategoryIndex: (index: number) => void;
  setStep: (step: AuditStep) => void;
}

export function CategoryStep({
  selectedCategories,
  onToggleCategory,
  setCurrentCategoryIndex,
  setStep,
}: CategoryStepProps) {
  return (
    <Surface className="gap-4 rounded-3xl p-4">
      <View className="gap-2">
        <Typography type="h4" weight="semibold">
          Step 2 · What are you auditing?
        </Typography>
        <Typography type="body-sm" color="muted">
          Tap every category that applies. You can skip this step if you only want to submit a quick note.
        </Typography>
      </View>

      <View className="flex-row flex-wrap gap-3">
        {AUDIT_CATEGORIES.map((item) => {
          const isSelected = selectedCategories.includes(item.id);
          return (
            <Button
              key={item.id}
              variant={isSelected ? 'primary' : 'secondary'}
              size="sm"
              className="rounded-full"
              onPress={() => onToggleCategory(item.id)}
            >
              <Button.Label>
                {item.emoji} {item.label}
              </Button.Label>
            </Button>
          );
        })}
      </View>

      <View className="gap-2">
        <Typography type="body-xs" color="muted">
          {selectedCategories.length > 0
            ? `${selectedCategories.length} selected`
            : 'No categories selected yet'}
        </Typography>
      </View>

      <View className="gap-3">
        <Button
          variant="primary"
          size="md"
          isDisabled={selectedCategories.length === 0}
          onPress={() => {
            setCurrentCategoryIndex(0);
            setStep(3);
          }}
        >
          <Button.Label>Continue</Button.Label>
        </Button>
        <Button variant="secondary" size="md" onPress={() => setStep(4)}>
          <Button.Label>Skip</Button.Label>
        </Button>
      </View>
    </Surface>
  );
}
