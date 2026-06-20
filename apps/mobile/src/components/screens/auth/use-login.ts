import { useMemo, useRef, useState } from "react";
import { router } from "expo-router";
import { useAuthActions } from "@convex-dev/auth/react";
import { ConvexError } from "convex/values";

import type { LoginStep } from "./types";
import { OTP_LENGTH, EMAIL_REGEX } from "./constants";
import { t } from "@/locales";

function getRawErrorMessage(error: unknown): string {
  if (error instanceof ConvexError) {
    const { data } = error;
    if (typeof data === "string") return data;
    if (data && typeof data === "object" && "message" in data)
      return String(data.message);
  }
  if (error instanceof Error) return error.message;
  return t("auth.unknownError");
}

function getAuthErrorMessage(error: unknown): string {
  const raw = getRawErrorMessage(error);
  const msg = raw.toLowerCase();

  if (msg.includes("could not verify code")) return t("auth.invalidCode");
  if (msg.includes("expired")) return t("auth.codeExpired");
  if (msg.includes("rate") || msg.includes("too many"))
    return t("auth.tooManyAttempts");
  if (msg.includes("invalid email") || msg.includes("email address"))
    return t("auth.invalidEmail");
  if (__DEV__ && raw) return raw;
  return t("auth.authFailed");
}

export function useLogin() {
  const { signIn } = useAuthActions();
  const verifyingRef = useRef(false);

  const [step, setStep] = useState<LoginStep>("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
  const isOtpStep = step === "otp";
  const canRequestCode = normalizedEmail.length > 0 && !isSendingCode;
  const canVerifyCode = otp.length === OTP_LENGTH && !isVerifyingCode;

  const requestCode = async () => {
    if (!canRequestCode) return;
    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setError(t("auth.invalidEmail"));
      return;
    }

    setIsSendingCode(true);
    setError(null);
    try {
      await signIn("resend-otp", { email: normalizedEmail });
      setStep("otp");
      setOtp("");
    } catch (e: unknown) {
      setError(getAuthErrorMessage(e));
    } finally {
      setIsSendingCode(false);
    }
  };

  const verifyCode = async () => {
    if (!isOtpStep || !canVerifyCode || verifyingRef.current) return;
    verifyingRef.current = true;
    setIsVerifyingCode(true);
    setError(null);
    try {
      await signIn("resend-otp", { email: normalizedEmail, code: otp });
      router.replace("/");
    } catch (e: unknown) {
      setError(getAuthErrorMessage(e));
      setOtp("");
    } finally {
      verifyingRef.current = false;
      setIsVerifyingCode(false);
    }
  };

  const changeEmail = () => {
    setStep("email");
    setOtp("");
    setError(null);
  };

  const clearError = () => setError(null);

  const buttonLabel = isOtpStep
    ? isVerifyingCode
      ? t("auth.verifying")
      : t("auth.verifyCode")
    : isSendingCode
      ? t("auth.sending")
      : t("auth.loggingIn");

  return {
    step,
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
  };
}
