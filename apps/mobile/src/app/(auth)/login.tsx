import { useMemo, useState } from 'react';
import { router } from 'expo-router';
import { Image } from 'expo-image';
import {
  Button,
  Description,
  FieldError,
  Input,
  InputOTP,
  Label,
  REGEXP_ONLY_DIGITS,
  TextField,
} from 'heroui-native';
import { View, StyleSheet } from 'react-native';
import { useAuthActions } from '@convex-dev/auth/react';
import { ConvexError } from 'convex/values';

import { SafeScreen } from '@/components/layout/SafeScreen';
import { Text } from '@/components/ui/text';
import { identifyingWomanVector } from '@tahaqaq/assets/vectors';

const OTP_LENGTH = 6;
const OTP_LEFT_INDICES = [0, 1, 2];
const OTP_RIGHT_INDICES = [3, 4, 5];

type LoginStep = 'email' | 'otp';

function getRawErrorMessage(authError: unknown): string {
  if (authError instanceof ConvexError) {
    const data = authError.data;

    if (typeof data === 'string') {
      return data;
    }

    if (data && typeof data === 'object' && 'message' in data) {
      return String(data.message);
    }
  }

  if (authError instanceof Error) {
    return authError.message;
  }

  return 'Unknown auth error';
}

function getAuthErrorMessage(authError: unknown): string {
  const message = getRawErrorMessage(authError).toLowerCase();

  if (message.includes('could not verify code')) {
    return 'Invalid code. Check the digits and try again.';
  }

  if (message.includes('expired')) {
    return 'Code expired. Request a new one.';
  }

  if (message.includes('rate') || message.includes('too many')) {
    return 'Too many attempts. Wait, then try again.';
  }

  if (message.includes('email')) {
    return 'Enter a valid email address.';
  }

  return 'Auth failed. Try again.';
}

export default function LoginScreen() {
  const { signIn } = useAuthActions();

  const [step, setStep] = useState<LoginStep>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
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
  const isOtpStep = step === 'otp';

  const handleRequestCode = async () => {
    if (!canRequestCode) {
      return;
    }

    setIsSendingCode(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('email', normalizedEmail);

      await signIn('resend-otp', formData);
      setStep('otp');
      setOtp('');
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

    setIsVerifyingCode(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append('email', normalizedEmail);
      formData.append('code', otp);

      await signIn('resend-otp', formData);
      router.replace('/');
    } catch (authError: unknown) {
      setError(getAuthErrorMessage(authError));
      setOtp('');
    } finally {
      setIsVerifyingCode(false);
    }
  };

  const handleChangeEmail = () => {
    setStep('email');
    setOtp('');
    setError(null);
  };

  const buttonLabel = isOtpStep
    ? isVerifyingCode
      ? 'Verifying...'
      : 'Verify code'
    : isSendingCode
      ? 'Sending...'
      : 'Log in';

  return (
    <SafeScreen scrollable safeArea="both" className="bg-background" contentClassName="justify-center">
      <View style={styles.container}>
        <View style={styles.header}>
          <Image
            source={identifyingWomanVector}
            contentFit="contain"
            style={styles.heroImage}
          />

          <View className="gap-3">
            <Text variant="subtitle">Log in with email</Text>
            <Text variant="default" className="text-muted">
              We’ll send a 6-digit code to your inbox, then you can finish sign in with the OTP.
            </Text>
          </View>
        </View>

        <View className="gap-5">
          <TextField isRequired isDisabled={isOtpStep} isInvalid={Boolean(error && !isOtpStep)}>
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
              Enter the email tied to your account. We’ll send the login code there.
            </Description>
            <FieldError isInvalid={Boolean(error && !isOtpStep)}>
              {error && !isOtpStep ? error : ''}
            </FieldError>
          </TextField>

          {isOtpStep ? (
            <View className="gap-3">
              <View className="gap-1">
                <Label>One-time code</Label>
                <Text variant="small" className="text-muted">
                  Code sent to {normalizedEmail}
                </Text>
              </View>

              <InputOTP
                value={otp}
                onChange={setOtp}
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
                {error && isOtpStep ? error : ''}
              </FieldError>
            </View>
          ) : null}

          <Button
            onPress={isOtpStep ? handleVerifyCode : handleRequestCode}
            isDisabled={isOtpStep ? !canVerifyCode : !canRequestCode}
            variant="primary"
            size="lg"
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    gap: 32,
  },
  header: {
    gap: 20,
  },
  heroImage: {
    width: '100%',
    height: 280,
  },
});
