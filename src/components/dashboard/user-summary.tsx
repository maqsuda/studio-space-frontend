"use client";

import Link from "next/link";
import { CalendarCheck, Mail, ShieldCheck } from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { UserAvatar } from "@/components/layout/user-menu";
import { buttonVariants } from "@/components/ui/button";

/** Signed-in identity card on the dashboard overview. */
export function UserSummary() {
  const { data } = authClient.useSession();
  const user = data?.user;

  if (!user) return null;

  return (
    <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <UserAvatar user={user} className="size-14 text-base" />
        <div className="min-w-0">
          <p className="truncate font-heading text-xl font-semibold tracking-tight">
            {user.name}
          </p>
          <p className="mt-0.5 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
            <Mail aria-hidden className="size-3.5 shrink-0" />
            {user.email}
          </p>
          <p className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-violet-200 bg-violet-50 px-2.5 py-0.5 text-xs font-medium text-violet-700">
            <ShieldCheck aria-hidden className="size-3.5" />
            {user.emailVerified ? "Verified account" : "Account active"}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        <Link
          href="/dashboard/bookings"
          className={buttonVariants({ variant: "outline" })}
        >
          <CalendarCheck aria-hidden />
          My bookings
        </Link>
        <Link
          href="/dashboard/studios/new"
          className={buttonVariants({
            className: "bg-violet-600 text-white hover:bg-violet-700",
          })}
        >
          Add new studio
        </Link>
      </div>
    </div>
  );
}
