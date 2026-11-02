import Link from "next/link";
import { Building2, CalendarCheck, PlusCircle } from "lucide-react";
import { UserSummary } from "@/components/dashboard/user-summary";
import { buttonVariants } from "@/components/ui/button";

const quickActions = [
  {
    title: "Add New Studio",
    description: "Publish a space with photos, pricing and availability.",
    href: "/dashboard/studios/new",
    icon: PlusCircle,
  },
  {
    title: "My Studio Listings",
    description: "Review, edit and pause the spaces you host.",
    href: "/dashboard/studios",
    icon: Building2,
  },
  {
    title: "My Bookings",
    description: "Track upcoming shoots and your booking history.",
    href: "/dashboard/bookings",
    icon: CalendarCheck,
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium tracking-widest text-violet-700 uppercase">
          <span className="size-1.5 rounded-full bg-violet-500" aria-hidden />
          Dashboard
        </span>
        <h1 className="mt-4 text-3xl font-heading font-semibold tracking-tight">
          Welcome back
        </h1>
        <p className="mt-2 text-muted-foreground">
          Everything you host and book lives here.
        </p>
      </div>

      <UserSummary />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {quickActions.map((action) => {
          const Icon = action.icon;
          return (
            <Link
              key={action.href}
              href={action.href}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-violet-300"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                <Icon aria-hidden className="size-5" />
              </span>
              <h2 className="mt-4 font-heading text-base font-semibold">
                {action.title}
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                {action.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-violet-700">
                Open
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-0.5"
                >
                  →
                </span>
              </span>
            </Link>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-3 border-t border-border pt-6">
        <Link
          href="/explore"
          className={buttonVariants({ variant: "outline" })}
        >
          Explore spaces
        </Link>
        <Link
          href="/how-it-works"
          className={buttonVariants({ variant: "outline" })}
        >
          How hosting works
        </Link>
      </div>
    </div>
  );
}
