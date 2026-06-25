import { Image } from "expo-image";
import {
  Button,
  Description,
  FieldError,
  Input,
  InputOTP,
  Label,
  REGEXP_ONLY_DIGITS,
  TextField,
  Typography,
} from "heroui-native";
import { Icon } from "@/components/ui/icon";
import { View } from "react-native";

import { SafeScreen } from "@/components/layout/SafeScreen";
import { identifyingWomanVector } from "@tahaqaq/assets/vectors";
import {
  OTP_LEFT_INDICES,
  OTP_RIGHT_INDICES,
  OTP_LENGTH,
} from "@/components/screens/auth/constants";
import { useLogin } from "@/components/screens/auth/use-login";
import { useI18n } from "@/hooks/useI18n";

export default function LoginScreen() {
  const { t } = useI18n();
  const {
    email,
    setEmail,
    otp,
    setOtp,
    error,
    isOtpStep,
    canRequestCode,
    canVerifyCode,
    normalizedEmail,
    buttonLabel,
    requestCode,
    verifyCode,
    changeEmail,
    clearError,
  } = useLogin();

  return (
    <SafeScreen scrollable safeArea="both" contentClassName="justify-center">
      <View className="flex-1 justify-evenly">
        <View>
          <Image
            source={identifyingWomanVector}
            contentFit="contain"
            style={{ width: "100%", height: 400 }}
          />
          <View className="gap-4">
            <Typography type="h2">{t("auth.loginWithEmail")}</Typography>
            <Typography type="body-sm" className="text-muted">
              {t("auth.otpDescription")}
            </Typography>
          </View>
        </View>

        <View className="gap-5">
          <TextField
            isRequired
            isDisabled={isOtpStep}
            isInvalid={Boolean(error && !isOtpStep)}
          >
            <Label>{t("auth.emailLabel")}</Label>
            <Input
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
              placeholder={t("auth.emailPlaceholder")}
            />
            <Description>{t("auth.emailDescription")}</Description>
            <FieldError isInvalid={Boolean(error && !isOtpStep)}>
              {error && !isOtpStep ? error : ""}
            </FieldError>
          </TextField>

          {!isOtpStep && (
            <Button
              variant="outline"
              size="md"
              onPress={() => console.log("Anonymous login")}
            >
              <Icon name="person-outline" size={18} />
              <Button.Label>{t("auth.continueAnonymously")}</Button.Label>
            </Button>
          )}

          {isOtpStep && (
            <View className="gap-3">
              <View className="gap-1">
                <Label>{t("auth.oneTimeCode")}</Label>
                <Typography type="body-xs" className="text-muted">
                  {t("auth.codeSentTo", { email: normalizedEmail })}
                </Typography>
              </View>
              <InputOTP
                value={otp}
                onChange={(v: string) => {
                  setOtp(v.replace(/[^0-9]/g, ""));
                  clearError();
                }}
                maxLength={OTP_LENGTH}
                inputMode="numeric"
                pattern={REGEXP_ONLY_DIGITS}
                placeholder="------"
                isInvalid={Boolean(error && isOtpStep)}
              >
                <InputOTP.Group>
                  {OTP_LEFT_INDICES.map((i) => (
                    <InputOTP.Slot key={i} index={i} />
                  ))}
                </InputOTP.Group>
                <InputOTP.Separator />
                <InputOTP.Group>
                  {OTP_RIGHT_INDICES.map((i) => (
                    <InputOTP.Slot key={i} index={i} />
                  ))}
                </InputOTP.Group>
              </InputOTP>
              <FieldError isInvalid={Boolean(error && isOtpStep)}>
                {error && isOtpStep ? error : ""}
              </FieldError>
            </View>
          )}

          <Button
            onPress={isOtpStep ? verifyCode : requestCode}
            isDisabled={isOtpStep ? !canVerifyCode : !canRequestCode}
            variant="primary"
            size="md"
          >
            <Button.Label>{buttonLabel}</Button.Label>
          </Button>

          {isOtpStep && (
            <Button variant="ghost" size="sm" onPress={changeEmail}>
              <Button.Label>{t("common.useDifferentEmail")}</Button.Label>
            </Button>
          )}
        </View>
      </View>
    </SafeScreen>
  );
}
