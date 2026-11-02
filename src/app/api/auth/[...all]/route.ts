import { toNextJsHandler } from "better-auth/next-js";
import { auth } from "@/lib/auth";

/**
 * better-auth endpoints: /api/auth/sign-in, /api/auth/sign-up,
 * /api/auth/get-session, /api/auth/sign-out, ...
 */
export const { GET, POST, PATCH, PUT, DELETE } = toNextJsHandler(auth.handler);
