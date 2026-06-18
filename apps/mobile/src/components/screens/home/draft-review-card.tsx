import { View } from "react-native";
import { Image } from "expo-image";
import { Card, Button, Typography } from "heroui-native";
import { manDraftingReviewVector } from "@tahaqaq/assets/vectors";

export function DraftReviewCard() {
  return (
    <Card variant="secondary" className="overflow-hidden">
      <View className="flex-row items-center gap-4">
        <View className="flex-1 gap-2">
          <Typography type="h3">Got a draft?</Typography>
          <Typography type="body-sm" color="muted">
            Review and submit your pending reports to help your community.
          </Typography>
          <Button variant="primary" size="sm" className="mt-1 self-start">
            <Button.Label>Review drafts</Button.Label>
          </Button>
        </View>
        <Image
          source={manDraftingReviewVector}
          style={{ width: 100, height: 100 }}
          contentFit="contain"
        />
      </View>
    </Card>
  );
}
