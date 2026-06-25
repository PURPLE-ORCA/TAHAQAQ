import { authTables } from "@convex-dev/auth/server";
import { defineSchema } from "convex/server";
import { usersTable } from "./schema/users";
import { establishmentsTable } from "./schema/establishments";

export default defineSchema({
  ...authTables,
  users: usersTable,
  establishments: establishmentsTable,
});
