import { ScrollView, View } from "react-native";
import { Typography } from "heroui-native";
import {
  AppBottomSheetModal,
  AppBottomSheetModalRef,
} from "@/components/ui/bottom-sheet";

export function PrivacySheet({
  triggerRef,
}: {
  triggerRef: React.RefObject<AppBottomSheetModalRef | null>;
}) {
  return (
    <AppBottomSheetModal ref={triggerRef} title="Privacy Policy">
      <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
        <View className="gap-5 py-2">
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              Anonymous Audits
            </Typography>
            <Typography type="body-sm" color="muted">
              Audits are anonymous, and no personal data is linked to your
              submissions.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              AI Processing
            </Typography>
            <Typography type="body-sm" color="muted">
              Photos are AI-processed and faces are auto-blurred to protect
              privacy.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              No Tracking or Selling
            </Typography>
            <Typography type="body-sm" color="muted">
              We do not track you, show ads, or sell your data to third parties.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">
              Purpose of Data
            </Typography>
            <Typography type="body-sm" color="muted">
              Data is used solely for hospital integrity scoring and
              transparency.
            </Typography>
          </View>
        </View>
      </ScrollView>
    </AppBottomSheetModal>
  );
}
