import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
import { MongoClient } from "mongodb";

/**
 * Server side of better-auth.
 *
 * Reads `MONGODB_URI`, `BETTER_AUTH_SECRET` and `BETTER_AUTH_URL` from `.env`.
 * The instance is consumed by:
 *   - `src/app/api/auth/[...all]/route.ts` — the HTTP endpoints
 *   - `auth.api.getSession({ headers })` — session reads in server components
 */
const mongoUri =
  process.env.MONGODB_URI ?? "mongodb://127.0.0.1:27017/studio-space";

// The MongoClient is created eagerly but only opens a connection on the first
// query, so importing this module while prerendering never touches the database.
const mongoClient = new MongoClient(mongoUri);

const baseURL = process.env.BETTER_AUTH_URL ?? "http://localhost:3000";

// better-auth rejects POSTs whose Origin does not match `baseURL`. `next dev`
// picks a free port (3000, 3001, 3002, ...), so in development every localhost
// origin is trusted; production still only trusts `baseURL`.
const trustedOrigins =
  process.env.NODE_ENV === "production"
    ? [baseURL]
    : [baseURL, "http://localhost:*", "http://127.0.0.1:*"];

export const auth = betterAuth({
  baseURL,
  trustedOrigins,
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(mongoClient.db()),
  emailAndPassword: {
    enabled: true,
    minPasswordLength: 6,
  },
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24, // refresh once a day
  },
  // Must stay the last plugin so cookies can also be set from Server Actions.
  plugins: [nextCookies()],
});

export type Auth = typeof auth;
