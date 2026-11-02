"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "cn";
import { accountMenuItems, isAccountItemActive } from "@/lib/data";

/** Secondary navigation with active route indicators for the dashboard. */
export function DashboardNav() {
  const pathname = usePathname();

  return (
    <div className="border-b border-border">
      <nav className="-mb-px flex gap-1 overflow-x-auto">
        {accountMenuItems.map((item) => {
          const active = isAccountItemActive(pathname, item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative shrink-0 rounded-t-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors",
                active
                  ? "text-violet-700"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {item.label}
              {active ? (
                <span
                  aria-hidden
                  className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-violet-600"
                />
              ) : null}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
