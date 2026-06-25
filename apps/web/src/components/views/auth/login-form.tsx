"use client";

import { type FormEvent, useRef, useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { ConvexError } from "convex/values";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";
import { OTPField, OTPFieldInput } from "@/components/ui/otp-field";
import { useAuthTypingImpulse, bumpParticleTypingImpulse, pulseParticleSubmitImpulse } from "@/components/views/auth/auth-shell";

const OTP_LENGTH = 6;

const OTP_SLOT_KEYS = Array.from(
  { length: OTP_LENGTH },
  (_, i) => `otp-slot-${i}`,
);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getAuthErrorMessage(error: unknown): string {
  const message = getRawErrorMessage(error).toLowerCase();

  if (message.includes("could not verify code")) {
    return "Invalid code. Check digits and try again.";
  }

  if (message.includes("expired")) {
    return "Code expired. Request a new one.";
  }

  if (message.includes("rate") || message.includes("too many")) {
    return "Too many attempts. Wait, then try again.";
  }

  if (message.includes("email")) {
    return "Enter a valid email address.";
  }

  return "Auth failed. Try again.";
}

function getRawErrorMessage(error: unknown): string {
  if (error instanceof ConvexError) {
    const data = error.data;

    if (typeof data === "string") {
      return data;
    }

    if (data && typeof data === "object" && "message" in data) {
      return String(data.message);
    }
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown auth error";
}

export function LoginForm() {
  return (
    <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-[#006020]/10 shadow-[0_10px_30px_-10px_rgba(0,96,32,0.08)]">
      <div className="flex flex-col items-center text-center mb-6">
        <Text as="p" className="text-[#00A040] font-semibold text-sm tracking-wider uppercase">
          TAHAQAQ • PORTAIL CITOYEN
        </Text>
        
        <Text as="h1" className="mt-2 text-[#006020] font-bold text-2xl" variant="h3">
          Authentification
        </Text>
        
        <Text className="mt-2 text-[#3e4a3d] text-sm" variant="muted">
          Connectez-vous pour accéder à vos services de vérification civique.
        </Text>
      </div>

      <MagicLinkForm />
      <OrSeparator />
      <OAuthButtons />
    </div>
  );
}

function OrSeparator() {
  return (
    <div className="my-6 flex items-center gap-3">
      <Separator className="flex-1 bg-[#006020]/10" />
      <Text as="span" variant="xs" className="text-[#3e4a3d]">
        ou
      </Text>
      <Separator className="flex-1 bg-[#006020]/10" />
    </div>
  );
}

function MagicLinkForm() {
  const router = useRouter();
  const { signIn } = useAuthActions();
  const formRef = useRef<HTMLFormElement>(null);
  const typingImpulse = useAuthTypingImpulse();
  const [email, setEmail] = useState("");
  const [sentTo, setSentTo] = useState<string | null>(null);
  const [pending, setPending] = useState(false);
  const [otpValue, setOtpValue] = useState("");
  const [otpPending, setOtpPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const normalizedEmail = email.trim().toLowerCase();

    if (!EMAIL_REGEX.test(normalizedEmail)) {
      setError("Entrez une adresse e-mail valide.");
      return;
    }

    pulseParticleSubmitImpulse(typingImpulse);
    setPending(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("email", normalizedEmail);

      await signIn("resend-otp", formData);
      setSentTo(normalizedEmail);
      setOtpValue("");
    } catch (err: unknown) {
      setError(getAuthErrorMessage(err));
    } finally {
      setPending(false);
    }
  };

  const onOtpSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!sentTo || otpValue.length !== OTP_LENGTH) {
      return;
    }

    setOtpPending(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("email", sentTo);
      formData.append("code", otpValue);

      await signIn("resend-otp", formData);
      router.replace("/dashboard");
    } catch (err: unknown) {
      setError(getAuthErrorMessage(err));
      setOtpValue("");
    } finally {
      setOtpPending(false);
    }
  };

  if (sentTo) {
    return (
      <div className="mt-6 space-y-6">
        <div className="border border-[#006020]/15 bg-[#f4fcef] px-3 py-2 rounded-[0.5rem] text-[#006020]">
          <Text variant="small" className="text-[#006020]">
            Code envoyé à <span className="font-semibold text-[#006020]">{sentTo}</span>. Saisissez-le ci-dessous.
          </Text>
        </div>

        {error ? (
          <Text className="text-[#ba1a1a] text-sm" variant="small">
            {error}
          </Text>
        ) : null}

        <form onSubmit={onOtpSubmit} className="space-y-4">
          <div className="space-y-2 flex flex-col items-center">
            <OTPField 
              aria-label="One-time password" 
              length={OTP_LENGTH}
              value={otpValue}
              onValueChange={setOtpValue}
            >
              {OTP_SLOT_KEYS.map((slotKey, index) => (
                <OTPFieldInput
                  key={slotKey}
                  aria-label={`Character ${index + 1} of ${OTP_LENGTH}`}
                  className="bg-white border-[#006020]/20 focus-visible:ring-[#00A040] focus-visible:border-[#00A040] rounded-[0.5rem]"
                />
              ))}
            </OTPField>
          </div>

          <Button 
            type="submit" 
            size="lg" 
            className="w-full bg-[#00A040] hover:bg-[#006020] text-white rounded-[0.5rem] h-11 border-none shadow-sm transition-colors" 
            disabled={otpValue.length !== OTP_LENGTH || otpPending}
          >
            {otpPending ? "Vérification..." : "Vérifier le code"}
          </Button>
        </form>

        <div className="text-center">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => {
              setSentTo(null);
              setOtpValue("");
              setError(null);
            }}
            className="text-[#006020] hover:text-[#00A040] hover:bg-transparent"
          >
            Utiliser un autre e-mail
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        onKeyDown={(e) => bumpParticleTypingImpulse(typingImpulse, e)}
        className="mt-6 flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="magic-link-email" className="text-[#006020] font-medium">Adresse e-mail</Label>
          <Input
            id="magic-link-email"
            type="email"
            required
            placeholder="citoyen@adresse.ma"
            autoComplete="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError(null);
            }}
            className="bg-white border-[#006020]/20 focus-visible:ring-[#00A040] focus-visible:border-[#00A040] rounded-[0.5rem] h-11"
          />
        </div>

        {error ? (
          <Text className="text-[#ba1a1a] text-sm" variant="small">
            {error}
          </Text>
        ) : null}

        <Button type="submit" size="lg" className="mt-2 bg-[#00A040] hover:bg-[#006020] text-white border-none shadow-sm rounded-[0.5rem] h-11 transition-colors" disabled={pending}>
          {pending ? "Envoi..." : "Recevoir mon code d'accès"}
        </Button>
      </form>
    </>
  );
}

function OAuthButtons() {
  return (
    <div className="flex flex-col gap-2">
      <Button variant="outline" size="lg" type="button" className="border border-[#006020]/20 bg-white hover:bg-[#006020]/5 text-[#006020] rounded-[0.5rem] h-11 transition-colors">
        <GoogleIcon />
        Se connecter avec Google
      </Button>
      <Button variant="outline" size="lg" type="button" className="border border-[#006020]/20 bg-white hover:bg-[#006020]/5 text-[#006020] rounded-[0.5rem] h-11 transition-colors">
        <AppleIcon />
        Se connecter avec Apple
      </Button>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 mr-2">
      <path
        fill="currentColor"
        d="M21.35 11.1H12v2.98h5.35c-.23 1.4-1.64 4.1-5.35 4.1-3.22 0-5.85-2.67-5.85-5.95s2.63-5.95 5.85-5.95c1.84 0 3.07.78 3.77 1.45l2.57-2.5C16.71 3.8 14.59 2.9 12 2.9 6.97 2.9 2.9 6.97 2.9 12s4.07 9.1 9.1 9.1c5.26 0 8.74-3.69 8.74-8.89 0-.6-.06-1.05-.14-1.51Z"
      />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 mr-2">
      <path
        fill="currentColor"
        d="M16.37 1.43c.06 1.2-.39 2.37-1.17 3.2-.8.85-2.08 1.5-3.28 1.41-.09-1.19.5-2.37 1.21-3.13.8-.88 2.16-1.52 3.24-1.48ZM20.5 17.33c-.55 1.27-.82 1.84-1.53 2.96-.99 1.57-2.39 3.53-4.12 3.54-1.54.02-1.94-1-4.03-.99-2.1.01-2.54 1-4.08.98-1.73-.02-3.06-1.78-4.05-3.35-2.77-4.4-3.06-9.56-1.35-12.31 1.21-1.95 3.12-3.1 4.91-3.1 1.82 0 2.97.99 4.47.99 1.46 0 2.35-1 4.45-1 1.59 0 3.27.86 4.47 2.36-3.93 2.15-3.29 7.76 1.06 9.92Z"
      />
    </svg>
  );
}
