import { View } from "react-native";
import { Button, Input, Label, Surface, Typography } from "heroui-native";
import { useI18n } from "@/hooks/useI18n";
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
  const { t } = useI18n();
  return (
    <Surface className="gap-4 rounded-3xl p-4">
      <View className="gap-2">
        <Typography type="h4" weight="semibold">
          {t("audit.step4Title")}
        </Typography>
        <Typography type="body-sm" color="muted">
          {t("audit.allOptional")}
        </Typography>
      </View>

      <View className="gap-2">
        <Label>{t("audit.commentLabel")}</Label>
        <Input
          value={comment}
          onChangeText={(value) => setComment(value.slice(0, COMMENT_MAX))}
          placeholder={t("audit.commentPlaceholder")}
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
          <Button.Label>{t("audit.continueToReview")}</Button.Label>
        </Button>
        <Button variant="secondary" size="md" onPress={() => setStep(5)}>
          <Button.Label>{t("audit.skipComment")}</Button.Label>
        </Button>
      </View>
    </Surface>
  );
}
