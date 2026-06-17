# CONVEX-BOILATE

Reusable Convex backend for NexVex-style SaaS starters.

## Setup

1. Run `bun install`.
2. Run `bunx convex dev` manually to create deployment and generated types.
3. Set Convex dashboard env vars: `CONVEX_SITE_URL`, `RESEND_API_KEY`, `AUTH_RESEND_FROM`.
4. Copy deployment URL into frontend as `NEXT_PUBLIC_CONVEX_URL`.

## Auth

Email OTP uses Convex Auth provider id `resend-otp`.

OTP details:
- 6 digits
- 15 minute expiry
- Resend transport

## Files

- `convex/auth.ts`: Convex Auth providers and JWT role claim.
- `convex/http.ts`: Auth HTTP routes.
- `convex/schema.ts`: Auth tables plus app `users` table.
- `convex/users.ts`: Current user/profile functions.
- `convex/lib/functions.ts`: Authenticated/admin function wrappers.
