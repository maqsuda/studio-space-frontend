"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { ChevronDown, LogOut } from "lucide-react";
import { cn } from "cn";
import { accountMenuItems, isAccountItemActive } from "@/lib/data";
import { authClient, type SessionUser } from "@/lib/auth-client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { buttonVariants } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function userInitials(name: string) {
  const initials = name
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part.charAt(0))
    .join("");

  return initials.toUpperCase() || "?";
}

export function UserAvatar({
  user,
  className,
}: {
  user: SessionUser;
  className?: string;
}) {
  return (
    <Avatar className={cn("shrink-0 ring-1 ring-violet-200", className)}>
      {user.image ? <AvatarImage src={user.image} alt={user.name} /> : null}
      <AvatarFallback className="bg-violet-600 font-semibold text-white">
        {userInitials(user.name)}
      </AvatarFallback>
    </Avatar>
  );
}

function useSignOut() {
  const router = useRouter();
  const [isSigningOut, setIsSigningOut] = useState(false);

  async function signOut() {
    setIsSigningOut(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            router.push("/");
            router.refresh();
          },
        },
      });
    } finally {
      setIsSigningOut(false);
    }
  }

  return { signOut, isSigningOut };
}

/**
 * Signed-in control in the desktop header: avatar first, the user name fades
 * in on hover (and while the menu is open), the click opens the account menu.
 */
export function UserMenu({ user }: { user: SessionUser }) {
  const pathname = usePathname();
  const router = useRouter();
  const { signOut, isSigningOut } = useSignOut();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label="Open account menu"
        className={cn(
          "group flex h-9 items-center gap-2 rounded-full border border-border bg-background py-1 pr-2 pl-1 text-sm font-medium outline-none transition-colors",
          "hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 data-popup-open:bg-muted",
        )}
      >
        <UserAvatar user={user} className="size-7" />
        <span
          className={cn(
            "hidden max-w-28 truncate opacity-0 transition-opacity duration-150 md:inline lg:max-w-40",
            "group-hover:opacity-100 group-focus-visible:opacity-100 group-data-[popup-open]:opacity-100",
          )}
        >
          {user.name}
        </span>
        <ChevronDown
          aria-hidden
          className="size-3.5 text-muted-foreground transition-transform group-data-[popup-open]:rotate-180"
        />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" sideOffset={8} className="min-w-64 p-1.5">
        <div className="flex items-center gap-3 px-2 py-2">
          <UserAvatar user={user} className="size-9" />
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold">{user.name}</p>
            <p className="truncate text-xs text-muted-foreground">
              {user.email}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        {accountMenuItems.map((item) => {
          const active = isAccountItemActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <DropdownMenuItem
              key={item.href}
              onClick={() => router.push(item.href)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "gap-2.5 py-1.5",
                active && "bg-violet-50 font-medium text-violet-700",
              )}
            >
              <Icon aria-hidden />
              <span>{item.label}</span>
              {active ? (
                <span
                  aria-hidden
                  className="ml-auto size-1.5 rounded-full bg-violet-600"
                />
              ) : null}
            </DropdownMenuItem>
          );
        })}

        <DropdownMenuSeparator />

        <DropdownMenuItem
          variant="destructive"
          onClick={signOut}
          disabled={isSigningOut}
          className="gap-2.5 py-1.5"
        >
          <LogOut aria-hidden />
          {isSigningOut ? "Logging out…" : "Log out"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Signed-in block rendered inside the mobile menu. */
export function MobileUserPanel({
  user,
  onNavigate,
}: {
  user: SessionUser;
  onNavigate: () => void;
}) {
  const pathname = usePathname();
  const { signOut, isSigningOut } = useSignOut();

  return (
    <div className="mt-4 border-t border-border pt-4">
      <div className="flex items-center gap-3 rounded-xl bg-muted/70 px-3 py-2.5">
        <UserAvatar user={user} className="size-9" />
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold">{user.name}</p>
          <p className="truncate text-xs text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <nav className="mt-3 flex flex-col gap-1">
        {accountMenuItems.map((item) => {
          const active = isAccountItemActive(pathname, item.href);
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-violet-50 text-violet-700"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon aria-hidden className="size-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <button
        type="button"
        onClick={signOut}
        disabled={isSigningOut}
        className="mt-2 flex w-full items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm font-medium text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-60"
      >
        <LogOut aria-hidden className="size-4" />
        {isSigningOut ? "Logging out…" : "Log out"}
      </button>
    </div>
  );
}

/** Signed-out actions rendered inside the mobile menu. */
export function MobileAuthActions({ onNavigate }: { onNavigate: () => void }) {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2 border-t border-border pt-4">
      <Link
        href="/login"
        onClick={onNavigate}
        className={buttonVariants({ variant: "outline", className: "h-10" })}
      >
        Log in
      </Link>
      <Link
        href="/register"
        onClick={onNavigate}
        className={buttonVariants({
          className: "h-10 bg-violet-600 text-white hover:bg-violet-700",
        })}
      >
        Sign up
      </Link>
    </div>
  );
}
