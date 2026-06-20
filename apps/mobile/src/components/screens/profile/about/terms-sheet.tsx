import { ScrollView, View } from 'react-native';
import { Typography } from 'heroui-native';
import { AppBottomSheetModal, AppBottomSheetModalRef } from '@/components/ui/bottom-sheet';

export function TermsSheet({ triggerRef }: { triggerRef: React.RefObject<AppBottomSheetModalRef | null> }) {
  return (
    <AppBottomSheetModal ref={triggerRef} title="Terms & Conditions">
      <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
        <View className="gap-5 py-2">
          <View className="gap-1">
            <Typography type="body" weight="semibold">Voluntary Submissions</Typography>
            <Typography type="body-sm" color="muted">
              All submissions and ratings are voluntary and represent honest feedback.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">Limitation of Liability</Typography>
            <Typography type="body-sm" color="muted">
              TAHAQAQ is not liable for hospital actions, conditions, or responses.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">Abuse Policy</Typography>
            <Typography type="body-sm" color="muted">
              Abusive, fraudulent, or harassing submissions will result in device blocking.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">Content License</Typography>
            <Typography type="body-sm" color="muted">
              By uploading photos, you grant TAHAQAQ a license to verify and display them.
            </Typography>
          </View>
        </View>
      </ScrollView>
    </AppBottomSheetModal>
  );
}
