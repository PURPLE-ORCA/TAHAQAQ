import { ScrollView, View } from 'react-native';
import { Typography } from 'heroui-native';
import { AppBottomSheetModal, AppBottomSheetModalRef } from '@/components/ui/bottom-sheet';

export function HowItWorksSheet({ triggerRef }: { triggerRef: React.RefObject<AppBottomSheetModalRef | null> }) {
  return (
    <AppBottomSheetModal ref={triggerRef} title="How TAHAQAQ Works">
      <ScrollView showsVerticalScrollIndicator={false} className="max-h-96">
        <View className="gap-5 py-2">
          <View className="gap-1">
            <Typography type="body" weight="semibold">1. Select a Hospital</Typography>
            <Typography type="body-sm" color="muted">
              Choose a facility to audit from the map.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">2. Rate Your Experience</Typography>
            <Typography type="body-sm" color="muted">
              Rate 5 categories: Cleanliness, Staff, Wait Time, Equipment, Overall.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">3. AI Verifies Your Photo</Typography>
            <Typography type="body-sm" color="muted">
              Our AI checks photo authenticity and auto-blurs faces.
            </Typography>
          </View>
          <View className="gap-1">
            <Typography type="body" weight="semibold">4. Scores Update Publicly</Typography>
            <Typography type="body-sm" color="muted">
              Hospital integrity scores update in real-time.
            </Typography>
          </View>
        </View>
      </ScrollView>
    </AppBottomSheetModal>
  );
}
