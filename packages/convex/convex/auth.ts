import Google from "@auth/core/providers/google";
import { convexAuth } from "@convex-dev/auth/server";
import { ResendOTP } from "./mails/ResendOTP";

export const { auth, signIn, signOut, store, isAuthenticated } = convexAuth({
  providers: [
    ResendOTP,
    Google({
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
  ],
  jwt: {
    customClaims: async (ctx, { userId }) => {
      const user = await ctx.db.get(userId);

      return {
        role: user?.role ?? "user",
      };
    },
  },
});
