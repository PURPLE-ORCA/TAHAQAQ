import { useMemo, useRef, useState } from 'react';
import { router } from 'expo-router';
import { useAuthActions } from '@convex-dev/auth/react';
import { ConvexError } from 'convex/values';

import type { LoginStep } from './types';
import { OTP_LENGTH, EMAIL_REGEX } from './constants';

function getRawErrorMessage(error: unknown): string {
  if (error instanceof ConvexError) {
    const { data } = error;
    if (typeof data === 'string') return data;
    if (data && typeof data === 'object' && 'message' in data) return String(data.message);
  }
  if (error instanceof Error) return error.message;
  return 'Unknown auth error';
}

function getAuthErrorMessage(error: unknown): string {
  const raw = getRawErrorMessage(error);
  const msg = raw.toLowerCase();

  if (msg.includes('could not verify code')) return 'Invalid code. Check the digits and try again.';
  if (msg.includes('expired')) return 'Code expired. Request a new one.';
  if (msg.includes('rate') || msg.includes('too many')) return 'Too many attempts. Wait, then try again.';
  if (msg.includes('invalid email') || msg.includes('email address')) return 'Enter a valid email address.';
  if (__DEV__ && raw) return raw;
  return 'Auth failed. Try again.';
}

export function useLogin() {
  const { signIn } = useAuthActions();
  const verifyingRef = useRef(false);

  const [step, setStep] = useState<LoginStep>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [isSendingCode, setIsSendingCode] = useState(false);
  const [isVerifyingCode, setIsVerifyingCode] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const normalizedEmail = useMemo(() => email.trim().toLowerCase(), [email]);
  const isOtpStep = step === 'otp';
  const canRequestCode = normalizedEmail.length > 0 && !isSendingCode;
  const canVerifyCode = otp.length === OTP_LENGTH && !isVerifyingCode;

  const requestCode = async () => {
    if (!canRequestCode) return;
    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setError('Enter a valid email address.');
      return;
    }

    setIsSendingCode(true);
    setError(null);
    try {
      await signIn('resend-otp', { email: normalizedEmail });
      setStep('otp');
      setOtp('');
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
      await signIn('resend-otp', { email: normalizedEmail, code: otp });
      router.replace('/');
    } catch (e: unknown) {
      setError(getAuthErrorMessage(e));
      setOtp('');
    } finally {
      verifyingRef.current = false;
      setIsVerifyingCode(false);
    }
  };

  const changeEmail = () => {
    setStep('email');
    setOtp('');
    setError(null);
  };

  const clearError = () => setError(null);

  const buttonLabel = isOtpStep
    ? isVerifyingCode ? 'Verifying...' : 'Verify code'
    : isSendingCode ? 'Sending...' : 'Log in';

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
