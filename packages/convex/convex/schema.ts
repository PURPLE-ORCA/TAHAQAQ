import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";
import { usersTable } from "./schema/users";

export default defineSchema({
  ...authTables,
  users: usersTable,
});
