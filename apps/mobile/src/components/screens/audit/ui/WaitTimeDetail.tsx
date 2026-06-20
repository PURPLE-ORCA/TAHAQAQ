import { View } from "react-native";
import { WaitTimeSlider } from "./WaitTimeSlider";

interface WaitTimeDetailProps {
  waitMinutes: number;
  setWaitMinutes: (minutes: number) => void;
}

export function WaitTimeDetail({
  waitMinutes,
  setWaitMinutes,
}: WaitTimeDetailProps) {
  return (
    <View className="gap-3">
      <WaitTimeSlider
        waitMinutes={waitMinutes}
        setWaitMinutes={setWaitMinutes}
      />
    </View>
  );
}
