import { View } from "react-native";
import { Label, Slider, Typography } from "heroui-native";
import { useTranslation } from "react-i18next";
import { formatWaitTime } from "../lib/utils";

interface WaitTimeSliderProps {
  waitMinutes: number;
  setWaitMinutes: (minutes: number) => void;
}

export function WaitTimeSlider({
  waitMinutes,
  setWaitMinutes,
}: WaitTimeSliderProps) {
  const { t } = useTranslation();

  return (
    <View className="gap-2">
      <View className="flex-row items-center justify-between">
        <Label>Wait time</Label>
        <Typography type="body-xs" weight="semibold" className="text-accent">
          {formatWaitTime(waitMinutes)}
        </Typography>
      </View>
      <Slider
        value={waitMinutes}
        onChange={(val) => setWaitMinutes(Array.isArray(val) ? val[0] : val)}
        minValue={0}
        maxValue={120}
        step={5}
        accessibilityLabel={t('audit.waitTime')}
        accessibilityRole="adjustable"
        accessibilityValue={{ min: 0, max: 120, now: waitMinutes }}
      >
        <Slider.Track>
          <Slider.Fill />
          <Slider.Thumb />
        </Slider.Track>
      </Slider>
      <Typography type="body-xs" color="muted">
        0 min → 2+ hours
      </Typography>
    </View>
  );
}
