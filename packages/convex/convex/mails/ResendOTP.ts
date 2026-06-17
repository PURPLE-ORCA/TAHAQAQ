import { Email } from "@convex-dev/auth/providers/Email";
import { generateRandomString, type RandomReader } from "@oslojs/crypto/random";
import { ConvexError } from "convex/values";
import { Resend as ResendAPI } from "resend";
import { generateOtpEmailHtml, generateOtpEmailText } from "./templates";

const OTP_LENGTH = 6;
const OTP_MAX_AGE_SECONDS = 60 * 15;
const DEFAULT_FROM = "NexVex <onboarding@resend.dev>";

export const ResendOTP = Email({
  id: "resend-otp",
  apiKey: process.env.RESEND_API_KEY,
  maxAge: OTP_MAX_AGE_SECONDS,
  async generateVerificationToken() {
    const random: RandomReader = {
      read(bytes) {
        crypto.getRandomValues(bytes);
      },
    };

    return generateRandomString(random, "0123456789", OTP_LENGTH);
  },
  async sendVerificationRequest({ identifier: email, provider, token }) {
    const resend = new ResendAPI(provider.apiKey);
    const { error } = await resend.emails.send({
      from: process.env.AUTH_RESEND_FROM ?? DEFAULT_FROM,
      to: [email],
      subject: "Sign in to NexVex",
      html: generateOtpEmailHtml(token),
      text: generateOtpEmailText(token),
    });

    if (error) {
      throw new ConvexError({
        code: "EMAIL_SEND_FAILED",
        message: JSON.stringify(error),
      });
    }
  },
});
