"use client";

import { useEffect, type ReactNode } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

/**
 * Client side gate for the dashboard routes. While the session is loading it
 * shows a skeleton (no flash of the login page), then either renders the
 * children or redirects to /login.
 */
export function AuthGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const { data, isPending } = authClient.useSession();
  const isAuthenticated = Boolean(data?.user);

  useEffect(() => {
    if (!isPending && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isPending, isAuthenticated, router]);

  if (isPending || !isAuthenticated) {
    return (
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-10 sm:px-6 lg:px-8">
        <div aria-hidden className="h-9 w-72 animate-pulse rounded-lg bg-muted" />
        <div aria-hidden className="mt-6 h-12 w-full max-w-md animate-pulse rounded-lg bg-muted" />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              aria-hidden
              className="h-36 animate-pulse rounded-2xl bg-muted"
            />
          ))}
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
