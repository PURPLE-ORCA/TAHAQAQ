import { defineTable } from "convex/server";
import { v } from "convex/values";

export const establishmentsTable = defineTable({
  code: v.string(),
  name: v.string(),
  type: v.string(), // "hospital", "school", "municipality", "admin_office", etc.
  city: v.string(),
  latitude: v.number(),
  longitude: v.number(),
  categoryBreakdown: v.record(v.string(), v.number()),
  auditCount: v.number(),
  score: v.number(),
  trend: v.union(v.literal("up"), v.literal("down"), v.literal("stable")),
})
  .index("by_code", ["code"])
  .index("by_type", ["type"])
  .index("by_city", ["city"]);
