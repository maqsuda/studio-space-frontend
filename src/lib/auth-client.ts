import { createAuthClient } from "better-auth/react";

/**
 * Browser side auth client. Talks to `/api/auth/*` on the same origin,
 * so the session cookie is shared automatically.
 */
export const authClient = createAuthClient();

export type SessionUser = {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  emailVerified?: boolean;
  createdAt?: Date | string;
};
