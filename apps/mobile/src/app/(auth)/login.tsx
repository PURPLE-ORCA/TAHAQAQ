import { useMemo, useRef, useState } from "react";
import { router } from "expo-router";
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
import { useAuthActions } from "@convex-dev/auth/react";
import { ConvexError } from "convex/values";

import { SafeScreen } from "@/components/layout/SafeScreen";
import { identifyingWomanVector } from "@tahaqaq/assets/vectors";

const OTP_LENGTH = 6;
const OTP_LEFT_INDICES = [0, 1, 2];
const OTP_RIGHT_INDICES = [3, 4, 5];

type LoginStep = "email" | "otp";

function getRawErrorMessage(authError: unknown): string {
  if (authError instanceof ConvexError) {
    const data = authError.data;

    if (typeof data === "string") {
      return data;
    }

    if (data && typeof data === "object" && "message" in data) {
      return String(data.message);
    }
  }

  if (authError instanceof Error) {
    return authError.message;
  }

  return "Unknown auth error";
}

function getAuthErrorMessage(authError: unknown): string {
  const rawMessage = getRawErrorMessage(authError);
  const message = rawMessage.toLowerCase();

  if (message.includes("could not verify code")) {
    return "Invalid code. Check the digits and try again.";
  }

  if (message.includes("expired")) {
    return "Code expired. Request a new one.";
  }

  if (message.includes("rate") || message.includes("too many")) {
    return "Too many attempts. Wait, then try again.";
  }

  if (message.includes("invalid email") || message.includes("email address")) {
    return "Enter a valid email address.";
  }

  if (__DEV__ && rawMessage) {
    return rawMessage;
  }

  return "Auth failed. Try again.";
}

export default function LoginScreen() {
  const { signIn } = useAuthActions();
  const verifyingRef = useRef(false);

  const [step, setStep] = useState<LoginStep>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
  const canRequestCode = useMemo(
    () => normalizedEmail.length > 0 && !isSendingCode,
    [isSendingCode, normalizedEmail],
  );
  const canVerifyCode = useMemo(
    () => otp.length === OTP_LENGTH && !isVerifyingCode,
    [isVerifyingCode, otp],
  );
  const isOtpStep = step === "otp";

  const handleRequestCode = async () => {
    if (!canRequestCode) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(normalizedEmail)) {
      setError("Enter a valid email address.");
      return;
    }

    setIsSendingCode(true);
    setError(null);

    try {
      await signIn("resend-otp", { email: normalizedEmail });
      setStep("otp");
      setOtp("");
    } catch (authError: unknown) {
      setError(getAuthErrorMessage(authError));
    } finally {
      setIsSendingCode(false);
    }
  };

  const handleVerifyCode = async () => {
    if (!isOtpStep || !canVerifyCode) {
      return;
    }

    if (verifyingRef.current) {
      return;
    }
    verifyingRef.current = true;

    setIsVerifyingCode(true);
    setError(null);

    try {
      await signIn("resend-otp", { email: normalizedEmail, code: otp });
      router.replace("/");
    } catch (authError: unknown) {
      setError(getAuthErrorMessage(authError));
      setOtp("");
    } finally {
      verifyingRef.current = false;
      setIsVerifyingCode(false);
    }
  };

  const handleChangeEmail = () => {
    setStep("email");
    setOtp("");
    setError(null);
  };

  const buttonLabel = isOtpStep
    ? isVerifyingCode
      ? "Verifying..."
      : "Verify code"
    : isSendingCode
      ? "Sending..."
      : "Log in";

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
              We’ll send a 6-digit code to your inbox, then you can finish sign
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
              Enter the email tied to your account. We’ll send the login code
              there.
            </Description>
            <FieldError isInvalid={Boolean(error && !isOtpStep)}>
              {error && !isOtpStep ? error : ""}
            </FieldError>
          </TextField>

          {isOtpStep ? (
            <View className="gap-3">
              <View className="gap-1">
                <Label>One-time code</Label>
                <Typography type="body-xs" className="text-muted">
                  Code sent to {normalizedEmail}
                </Typography>
              </View>

              <InputOTP
                value={otp}
                onChange={(value) => {
                  setOtp(value.replace(/[^0-9]/g, ""));
                  setError(null);
                }}
                maxLength={OTP_LENGTH}
                inputMode="numeric"
                pattern={REGEXP_ONLY_DIGITS}
                placeholder="------"
                isInvalid={Boolean(error && isOtpStep)}
              >
                <InputOTP.Group>
                  {OTP_LEFT_INDICES.map((index) => (
                    <InputOTP.Slot key={`otp-slot-${index}`} index={index} />
                  ))}
                </InputOTP.Group>
                <InputOTP.Separator />
                <InputOTP.Group>
                  {OTP_RIGHT_INDICES.map((index) => (
                    <InputOTP.Slot key={`otp-slot-${index}`} index={index} />
                  ))}
                </InputOTP.Group>
              </InputOTP>

              <FieldError isInvalid={Boolean(error && isOtpStep)}>
                {error && isOtpStep ? error : ""}
              </FieldError>
            </View>
          ) : null}

          <Button
            onPress={isOtpStep ? handleVerifyCode : handleRequestCode}
            isDisabled={isOtpStep ? !canVerifyCode : !canRequestCode}
            variant="primary"
            size="md"
          >
            <Button.Label>{buttonLabel}</Button.Label>
          </Button>

          {isOtpStep ? (
            <Button variant="ghost" size="sm" onPress={handleChangeEmail}>
              <Button.Label>Use a different email</Button.Label>
            </Button>
          ) : null}
        </View>
      </View>
    </SafeScreen>
  );
}
