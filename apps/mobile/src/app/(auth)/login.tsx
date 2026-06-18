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
import { View } from "react-native";

import { SafeScreen } from "@/components/layout/SafeScreen";
import { identifyingWomanVector } from "@tahaqaq/assets/vectors";
import {
  OTP_LEFT_INDICES,
  OTP_RIGHT_INDICES,
  OTP_LENGTH,
} from "@/components/screens/auth/constants";
import { useLogin } from "@/components/screens/auth/use-login";

export default function LoginScreen() {
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
            <Typography type="h2">Log in with email</Typography>
            <Typography type="body-sm" className="text-muted">
              We'll send a 6-digit code to your inbox, then you can finish sign
              in with the OTP.
            </Typography>
          </View>
        </View>

        <View className="gap-5">
          <TextField
            isRequired
            isDisabled={isOtpStep}
            isInvalid={Boolean(error && !isOtpStep)}
          >
            <Label>Email</Label>
            <Input
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              autoComplete="email"
              placeholder="you@example.com"
            />
            <Description>
              Enter the email tied to your account. We'll send the login code
              there.
            </Description>
            <FieldError isInvalid={Boolean(error && !isOtpStep)}>
              {error && !isOtpStep ? error : ""}
            </FieldError>
          </TextField>

          {isOtpStep && (
            <View className="gap-3">
              <View className="gap-1">
                <Label>One-time code</Label>
                <Typography type="body-xs" className="text-muted">
                  Code sent to {normalizedEmail}
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
              <Button.Label>Use a different email</Button.Label>
            </Button>
          )}
        </View>
      </View>
    </SafeScreen>
  );
}
