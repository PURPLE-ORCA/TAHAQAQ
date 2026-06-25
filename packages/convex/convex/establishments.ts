import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import seedData from "./seedData.json";

/**
 * Seed the database with initial Moroccan establishment data.
 * This mutation is idempotent: running it multiple times will update existing
 * establishments (matched by code) rather than creating duplicates.
 */
export const seed = mutation({
  args: {},
  returns: v.null(),
  handler: async (ctx) => {
    for (const item of seedData) {
      // Look up existing establishment by its unique code
      const existing = await ctx.db
        .query("establishments")
        .withIndex("by_code", (q) => q.eq("code", item.code))
        .unique();

      const doc = {
        code: item.code,
        name: item.name,
        type: item.type,
        city: item.city,
        latitude: item.latitude,
        longitude: item.longitude,
        categoryBreakdown: item.categoryBreakdown,
        auditCount: item.auditCount,
        score: item.score,
        trend: item.trend as "up" | "down" | "stable",
      };

      if (existing) {
        await ctx.db.patch(existing._id, doc);
      } else {
        await ctx.db.insert("establishments", doc);
      }
    }
    return null;
  },
});

/**
 * List establishments (bounded to 100 items).
 */
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("establishments").take(100);
  },
});
