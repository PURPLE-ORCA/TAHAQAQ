import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError, v } from "convex/values";
import { mutation, query } from "./_generated/server";

const currentUserValidator = v.union(
  v.object({
    _id: v.id("users"),
    _creationTime: v.number(),
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    email: v.optional(v.string()),
    role: v.optional(v.union(v.literal("admin"), v.literal("user"))),
    onboardingComplete: v.optional(v.boolean()),
  }),
  v.null(),
);

export const currentUser = query({
  args: {},
  returns: currentUserValidator,
  handler: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      return null;
    }

    const user = await ctx.db.get(userId);
    if (!user) {
      return null;
    }

    return {
      _id: user._id,
      _creationTime: user._creationTime,
      name: user.name,
      image: user.image,
      email: user.email,
      role: user.role,
      onboardingComplete: user.onboardingComplete,
    };
  },
});

export const updateProfile = mutation({
  args: {
    name: v.optional(v.string()),
    image: v.optional(v.string()),
    onboardingComplete: v.optional(v.boolean()),
  },
  returns: v.null(),
  handler: async (ctx, args) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new ConvexError({ code: "UNAUTHORIZED", message: "Authentication required" });
    }

    const updates: {
      name?: string;
      image?: string;
      onboardingComplete?: boolean;
    } = {};

    if (args.name !== undefined) {
      const name = args.name.trim();
      if (name.length < 2) {
        throw new ConvexError({ code: "INVALID_NAME", message: "Name must be at least 2 characters" });
      }
      updates.name = name;
    }

    if (args.image !== undefined) {
      updates.image = args.image;
    }

    if (args.onboardingComplete !== undefined) {
      updates.onboardingComplete = args.onboardingComplete;
    }

    if (Object.keys(updates).length > 0) {
      await ctx.db.patch(userId, updates);
    }

    return null;
  },
});
