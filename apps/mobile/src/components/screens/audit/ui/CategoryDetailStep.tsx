import { View } from 'react-native';
import { Card, Button, Surface, Typography } from 'heroui-native';
import { AuditCategoryId, Choice, EquipmentCondition } from '../types';
import { categoryEmoji, categoryLabel } from '../lib/utils';
import { HygieneDetail } from './HygieneDetail';
import { StaffDetail } from './StaffDetail';
import { EquipmentDetail } from './EquipmentDetail';
import { BriberyDetail } from './BriberyDetail';
import { WaitTimeDetail } from './WaitTimeDetail';

interface CategoryDetailStepProps {
  currentCategory: AuditCategoryId;
  currentCategoryIndex: number;
  totalCategories: number;
  hygieneRating: number;
  setHygieneRating: (val: number) => void;
  staffPresent: Choice;
  setStaffPresent: (val: Choice) => void;
  waitMinutes: number;
  setWaitMinutes: (val: number) => void;
  equipmentCondition: EquipmentCondition;
  setEquipmentCondition: (val: EquipmentCondition) => void;
  briberyExperienced: Choice;
  setBriberyExperienced: (val: Choice) => void;
  briberyAmount: string;
  setBriberyAmount: (val: string) => void;
  briberyDescription: string;
  setBriberyDescription: (val: string) => void;
  advanceCategory: () => void;
}

export function CategoryDetailStep({
  currentCategory,
  currentCategoryIndex,
  totalCategories,
  hygieneRating,
  setHygieneRating,
  staffPresent,
  setStaffPresent,
  waitMinutes,
  setWaitMinutes,
  equipmentCondition,
  setEquipmentCondition,
  briberyExperienced,
  setBriberyExperienced,
  briberyAmount,
  setBriberyAmount,
  briberyDescription,
  setBriberyDescription,
  advanceCategory,
}: CategoryDetailStepProps) {
  return (
    <Surface className="gap-4 rounded-3xl p-4">
      <View className="gap-2">
        <Typography type="h4" weight="semibold">
          Step 3 · Tell us more
        </Typography>
        <Typography type="body-sm" color="muted">
          {categoryLabel(currentCategory)} {currentCategoryIndex + 1}/{totalCategories}
        </Typography>
      </View>

      <Card className="rounded-3xl border border-border bg-background p-4">
        <View className="gap-4">
          <View className="gap-1">
            <Typography type="h3" weight="semibold">
              {categoryEmoji(currentCategory)} {categoryLabel(currentCategory)}
            </Typography>
            <Typography type="body-xs" color="muted">
              Keep it light, precise, and anonymous.
            </Typography>
          </View>

          {currentCategory === 'hygiene' && (
            <HygieneDetail hygieneRating={hygieneRating} setHygieneRating={setHygieneRating} />
          )}
          {currentCategory === 'staff' && (
            <StaffDetail
              staffPresent={staffPresent}
              setStaffPresent={setStaffPresent}
              waitMinutes={waitMinutes}
              setWaitMinutes={setWaitMinutes}
            />
          )}
          {currentCategory === 'equipment' && (
            <EquipmentDetail
              equipmentCondition={equipmentCondition}
              setEquipmentCondition={setEquipmentCondition}
            />
          )}
          {currentCategory === 'bribery' && (
            <BriberyDetail
              briberyExperienced={briberyExperienced}
              setBriberyExperienced={setBriberyExperienced}
              briberyAmount={briberyAmount}
              setBriberyAmount={setBriberyAmount}
              briberyDescription={briberyDescription}
              setBriberyDescription={setBriberyDescription}
            />
          )}
          {currentCategory === 'wait-time' && (
            <WaitTimeDetail waitMinutes={waitMinutes} setWaitMinutes={setWaitMinutes} />
          )}
        </View>
      </Card>

      <View className="gap-3">
        <Button variant="primary" size="md" onPress={advanceCategory}>
          <Button.Label>
            {currentCategoryIndex + 1 < totalCategories ? 'Next category' : 'Finish details'}
          </Button.Label>
        </Button>
        <Button variant="secondary" size="md" onPress={advanceCategory}>
          <Button.Label>Skip</Button.Label>
        </Button>
      </View>
    </Surface>
  );
}
