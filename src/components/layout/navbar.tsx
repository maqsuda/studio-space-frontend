"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "cn";
import { navItems } from "@/lib/data";
import { authClient } from "@/lib/auth-client";
import { buttonVariants } from "@/components/ui/button";
import {
  MobileAuthActions,
  MobileUserPanel,
  UserMenu,
} from "@/components/layout/user-menu";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { data, isPending } = authClient.useSession();
  const user = data?.user ?? null;

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-white shadow-xs ring-1 ring-border">
            <Image
              src="/logo.png"
              alt="StudioSpace logo"
              width={26}
              height={26}
              className="size-6.5 object-contain"
            />
          </span>
          <span className="text-lg font-heading font-semibold tracking-tight">
            Studio<span className="text-violet-600">Space</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-violet-700"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {item.label}
                {active ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-3.5 -bottom-[14px] h-0.5 rounded-full bg-violet-600"
                  />
                ) : null}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop: Login / Register, or the signed-in user menu */}
          <div className="hidden items-center gap-2 md:flex">
            {isPending ? (
              <span
                aria-hidden
                className="h-9 w-28 animate-pulse rounded-full bg-muted"
              />
            ) : user ? (
              <UserMenu user={user} />
            ) : (
              <>
                <Link
                  href="/login"
                  className={buttonVariants({
                    variant: "outline",
                    className: "h-9 px-4",
                  })}
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className={buttonVariants({
                    className: "h-9 bg-violet-600 px-4 text-white shadow-sm hover:bg-violet-700",
                  })}
                >
                  Sign up
                </Link>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:bg-muted md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background md:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const active = isCurrent(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      active
                        ? "bg-violet-50 text-violet-700"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {isPending ? (
              <div
                aria-hidden
                className="mt-4 h-20 animate-pulse rounded-xl bg-muted"
              />
            ) : user ? (
              <MobileUserPanel user={user} onNavigate={() => setOpen(false)} />
            ) : (
              <MobileAuthActions onNavigate={() => setOpen(false)} />
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}
