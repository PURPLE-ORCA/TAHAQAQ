import { defineTable } from "convex/server";
import { v } from "convex/values";

export const usersTable = defineTable({
  name: v.optional(v.string()),
  image: v.optional(v.string()),
  email: v.optional(v.string()),
  emailVerificationTime: v.optional(v.number()),
  phone: v.optional(v.string()),
  phoneVerificationTime: v.optional(v.number()),
  isAnonymous: v.optional(v.boolean()),
  role: v.optional(v.union(v.literal("admin"), v.literal("user"))),
  onboardingComplete: v.optional(v.boolean()),
})
  .index("email", ["email"])
  .index("by_role", ["role"]);
