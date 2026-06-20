import { View } from "react-native";
import { Button, Input, Label, Surface, Typography } from "heroui-native";
import { COMMENT_MAX, AuditStep } from "../types";

interface CommentStepProps {
  comment: string;
  setComment: (val: string) => void;
  setStep: (step: AuditStep) => void;
}

export function CommentStep({
  comment,
  setComment,
  setStep,
}: CommentStepProps) {
  return (
    <Surface className="gap-4 rounded-3xl p-4">
      <View className="gap-2">
        <Typography type="h4" weight="semibold">
          Step 4 · Anything else?
        </Typography>
        <Typography type="body-sm" color="muted">
          This is optional — skip if you&apos;re done.
        </Typography>
      </View>

      <View className="gap-2">
        <Label>Comment</Label>
        <Input
          value={comment}
          onChangeText={(value) => setComment(value.slice(0, COMMENT_MAX))}
          placeholder="Add a short note about your experience"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
          maxLength={COMMENT_MAX}
        />
        <Typography type="body-xs" color="muted">
          {comment.length}/{COMMENT_MAX}
        </Typography>
      </View>

      <View className="gap-3">
        <Button variant="primary" size="md" onPress={() => setStep(5)}>
          <Button.Label>Continue to review</Button.Label>
        </Button>
        <Button variant="secondary" size="md" onPress={() => setStep(5)}>
          <Button.Label>Skip comment</Button.Label>
        </Button>
      </View>
    </Surface>
  );
}
