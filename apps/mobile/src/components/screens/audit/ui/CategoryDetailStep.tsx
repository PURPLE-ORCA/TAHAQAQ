import { View } from "react-native";
import { Card, Button, Surface, Typography } from "heroui-native";
import { AuditCategoryId, CategoryAnswers } from "../types";
import { categoryEmoji, categoryLabel } from "../lib/utils";
import { HygieneDetail } from "./HygieneDetail";
import { StaffDetail } from "./StaffDetail";
import { EquipmentDetail } from "./EquipmentDetail";
import { BriberyDetail } from "./BriberyDetail";
import { WaitTimeDetail } from "./WaitTimeDetail";

interface CategoryDetailStepProps {
  currentCategory: AuditCategoryId;
  currentCategoryIndex: number;
  totalCategories: number;
  currentAnswers: CategoryAnswers[AuditCategoryId];
  updateAnswer: <K extends keyof CategoryAnswers[AuditCategoryId]>(
    categoryId: AuditCategoryId,
    field: K,
    value: CategoryAnswers[AuditCategoryId][K],
  ) => void;
  advanceCategory: () => void;
}

export function CategoryDetailStep({
  currentCategory,
  currentCategoryIndex,
  totalCategories,
  currentAnswers,
  updateAnswer,
  advanceCategory,
}: CategoryDetailStepProps) {
  return (
    <Surface className="gap-4 rounded-3xl p-4">
      <View className="gap-2">
        <Typography type="h4" weight="semibold">
          Step 3 · Tell us more
        </Typography>
        <Typography type="body-sm" color="muted">
          {categoryLabel(currentCategory)} {currentCategoryIndex + 1}/
          {totalCategories}
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

          {currentCategory === "hygiene" && (
            <HygieneDetail
              hygieneRating={currentAnswers.hygieneRating}
              setHygieneRating={(val) =>
                updateAnswer(currentCategory, "hygieneRating", val)
              }
            />
          )}
          {currentCategory === "staff" && (
            <StaffDetail
              staffPresent={currentAnswers.staffPresent}
              setStaffPresent={(val) =>
                updateAnswer(currentCategory, "staffPresent", val)
              }
            />
          )}
          {currentCategory === "equipment" && (
            <EquipmentDetail
              equipmentCondition={currentAnswers.equipmentCondition}
              setEquipmentCondition={(val) =>
                updateAnswer(currentCategory, "equipmentCondition", val)
              }
            />
          )}
          {currentCategory === "bribery" && (
            <BriberyDetail
              briberyExperienced={currentAnswers.briberyExperienced}
              setBriberyExperienced={(val) =>
                updateAnswer(currentCategory, "briberyExperienced", val)
              }
              briberyAmount={currentAnswers.briberyAmount}
              setBriberyAmount={(val) =>
                updateAnswer(currentCategory, "briberyAmount", val)
              }
              briberyDescription={currentAnswers.briberyDescription}
              setBriberyDescription={(val) =>
                updateAnswer(currentCategory, "briberyDescription", val)
              }
            />
          )}
          {currentCategory === "wait-time" && (
            <WaitTimeDetail
              waitMinutes={currentAnswers.waitMinutes}
              setWaitMinutes={(val) =>
                updateAnswer(currentCategory, "waitMinutes", val)
              }
            />
          )}
        </View>
      </Card>

      <View className="gap-3">
        <Button variant="primary" size="md" onPress={advanceCategory}>
          <Button.Label>
            {currentCategoryIndex + 1 < totalCategories
              ? "Next category"
              : "Finish details"}
          </Button.Label>
        </Button>
        <Button variant="secondary" size="md" onPress={advanceCategory}>
          <Button.Label>Skip</Button.Label>
        </Button>
      </View>
    </Surface>
  );
}
