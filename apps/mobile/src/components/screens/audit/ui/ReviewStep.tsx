import { View } from "react-native";
import { Card, Button, Surface, Typography } from "heroui-native";
import { Establishment } from "@/components/screens/map/types";
import { AuditCategoryId, AuditStep } from "../types";
import { categoryEmoji, categoryLabel } from "../lib/utils";

interface ReviewStepProps {
  selectedEstablishment: Establishment;
  selectedCategories: AuditCategoryId[];
  selectedCategorySummaries: string[];
  comment: string;
  setStep: (step: AuditStep) => void;
  setCurrentCategoryIndex: (index: number) => void;
  submitAudit: () => void;
}

export function ReviewStep({
  selectedEstablishment,
  selectedCategories,
  selectedCategorySummaries,
  comment,
  setStep,
  setCurrentCategoryIndex,
  submitAudit,
}: ReviewStepProps) {
  return (
    <Surface className="gap-4 rounded-3xl p-4">
      <View className="gap-2">
        <Typography type="h4" weight="semibold">
          Step 5 · Review & submit
        </Typography>
        <Typography type="body-sm" color="muted">
          Double-check everything before you send it.
        </Typography>
      </View>

      <View className="gap-3">
        <Card className="rounded-3xl border border-border bg-background p-4">
          <View className="gap-2">
            <View className="flex-row items-center justify-between gap-2">
              <Typography type="body-sm" weight="semibold">
                1. Where are you?
              </Typography>
              <Button variant="secondary" size="sm" onPress={() => setStep(1)}>
                <Button.Label>Edit</Button.Label>
              </Button>
            </View>
            <Typography type="body-sm" color="muted">
              {selectedEstablishment.name} · {selectedEstablishment.category} ·{" "}
              {selectedEstablishment.city}
            </Typography>
            <Typography type="body-xs" color="muted">
              {selectedEstablishment.address}
            </Typography>
          </View>
        </Card>

        <Card className="rounded-3xl border border-border bg-background p-4">
          <View className="gap-2">
            <View className="flex-row items-center justify-between gap-2">
              <Typography type="body-sm" weight="semibold">
                2. Categories
              </Typography>
              <Button variant="secondary" size="sm" onPress={() => setStep(2)}>
                <Button.Label>Edit</Button.Label>
              </Button>
            </View>
            {selectedCategories.length > 0 ? (
              <View className="gap-1">
                {selectedCategories.map((item) => (
                  <Typography key={item} type="body-xs" color="muted">
                    {categoryEmoji(item)} {categoryLabel(item)}
                  </Typography>
                ))}
              </View>
            ) : (
              <Typography type="body-xs" color="muted">
                No categories selected — you skipped this step.
              </Typography>
            )}
          </View>
        </Card>

        <Card className="rounded-3xl border border-border bg-background p-4">
          <View className="gap-2">
            <View className="flex-row items-center justify-between gap-2">
              <Typography type="body-sm" weight="semibold">
                3. Details
              </Typography>
              <Button
                variant="secondary"
                size="sm"
                onPress={() => {
                  setCurrentCategoryIndex(0);
                  setStep(3);
                }}
              >
                <Button.Label>Edit</Button.Label>
              </Button>
            </View>
            {selectedCategorySummaries.length > 0 ? (
              <View className="gap-1">
                {selectedCategorySummaries.map((item) => (
                  <Typography key={item} type="body-xs" color="muted">
                    {item}
                  </Typography>
                ))}
              </View>
            ) : (
              <Typography type="body-xs" color="muted">
                No detailed category answers yet.
              </Typography>
            )}
          </View>
        </Card>

        <Card className="rounded-3xl border border-border bg-background p-4">
          <View className="gap-2">
            <View className="flex-row items-center justify-between gap-2">
              <Typography type="body-sm" weight="semibold">
                4. Comment
              </Typography>
              <Button variant="secondary" size="sm" onPress={() => setStep(4)}>
                <Button.Label>Edit</Button.Label>
              </Button>
            </View>
            <Typography type="body-xs" color="muted">
              {comment ? comment : "No extra comment added."}
            </Typography>
          </View>
        </Card>
      </View>

      <Surface className="rounded-3xl bg-accent/10 p-4">
        <Typography type="body-sm" weight="semibold">
          Your audit is anonymous
        </Typography>
        <Typography type="body-xs" color="muted">
          We only keep the evidence signals, not your identity.
        </Typography>
      </Surface>

      <View className="gap-3">
        <Button variant="primary" size="md" onPress={submitAudit}>
          <Button.Label>Submit Audit</Button.Label>
        </Button>
        <Button variant="secondary" size="md" onPress={() => setStep(4)}>
          <Button.Label>Back to comment</Button.Label>
        </Button>
      </View>
    </Surface>
  );
}
