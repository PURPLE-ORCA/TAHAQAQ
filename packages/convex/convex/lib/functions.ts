import { getAuthUserId } from "@convex-dev/auth/server";
import { ConvexError } from "convex/values";
import { customMutation, customQuery } from "convex-helpers/server/customFunctions";
import type { Doc } from "../_generated/dataModel";
import { mutation as baseMutation, query as baseQuery } from "../_generated/server";

export const userQuery = customQuery(baseQuery, {
  args: {},
  input: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new ConvexError({ code: "UNAUTHORIZED", message: "Authentication required" });
    }

    const user = await ctx.db.get(userId);
    if (!user) {
      throw new ConvexError({ code: "USER_NOT_FOUND", message: "User not found" });
    }

    return { ctx: { userId, user: user as Doc<"users"> }, args: {} };
  },
});

export const userMutation = customMutation(baseMutation, {
  args: {},
  input: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new ConvexError({ code: "UNAUTHORIZED", message: "Authentication required" });
    }

    const user = await ctx.db.get(userId);
    if (!user) {
      throw new ConvexError({ code: "USER_NOT_FOUND", message: "User not found" });
    }

    return { ctx: { userId, user: user as Doc<"users"> }, args: {} };
  },
});

export const adminQuery = customQuery(baseQuery, {
  args: {},
  input: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new ConvexError({ code: "UNAUTHORIZED", message: "Authentication required" });
    }

    const user = await ctx.db.get(userId);
    if (!user || user.role !== "admin") {
      throw new ConvexError({ code: "FORBIDDEN", message: "Admin access required" });
    }

    return { ctx: { userId, user: user as Doc<"users"> }, args: {} };
  },
});

export const adminMutation = customMutation(baseMutation, {
  args: {},
  input: async (ctx) => {
    const userId = await getAuthUserId(ctx);
    if (!userId) {
      throw new ConvexError({ code: "UNAUTHORIZED", message: "Authentication required" });
    }

    const user = await ctx.db.get(userId);
    if (!user || user.role !== "admin") {
      throw new ConvexError({ code: "FORBIDDEN", message: "Admin access required" });
    }

    return { ctx: { userId, user: user as Doc<"users"> }, args: {} };
  },
});
