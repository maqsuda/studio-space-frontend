import Link from "next/link";
import { ArrowRight, Check, Headphones, ShieldCheck } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";

const hostPerks = [
  "Up to $3M in property damage protection",
  "Verified guests and secure, on-time payouts",
  "Damage deposits handled for you",
  "Cancellation coverage on protected dates",
];

const supportPerks = [
  "24/7 chat with real people, not bots",
  "Dedicated specialists for large productions",
  "On-site help when a shoot goes sideways",
  "Fair, transparent dispute resolution",
];

function PerkList({ items, tone }: { items: string[]; tone: "light" | "dark" }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-sm">
          <span
            className={
              tone === "dark"
                ? "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-white/20"
                : "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-violet-100"
            }
          >
            <Check
              aria-hidden
              className={
                tone === "dark"
                  ? "size-3 text-white"
                  : "size-3 text-violet-600"
              }
            />
          </span>
          <span className={tone === "dark" ? "text-violet-50" : "text-foreground"}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function HostGuarantee() {
  return (
    <section
      id="guarantee"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionHeading
        eyebrow="Peace of mind"
        title="Host guarantee & creator support"
        description="Every booking is backed by real protection for hosts and real humans for creators."
      />

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-violet-600 via-violet-700 to-indigo-700 p-8 text-white sm:p-10">
          <div
            aria-hidden
            className="absolute -top-20 -right-16 size-56 rounded-full bg-white/15 blur-2xl"
          />
          <div className="relative">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-white/15">
              <ShieldCheck aria-hidden className="size-6" />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-semibold">
              Host guarantee
            </h3>
            <p className="mt-2 max-w-md text-sm text-violet-100 sm:text-base">
              Open your doors with confidence. Every reservation on StudioSpace
              includes protection, so a careless guest never costs you your
              space.
            </p>

            <PerkList items={hostPerks} tone="dark" />

            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium underline-offset-4 hover:underline"
            >
              Learn how protection works
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-10">
          <div
            aria-hidden
            className="absolute -bottom-20 -left-16 size-56 rounded-full bg-violet-100 blur-2xl"
          />
          <div className="relative">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <Headphones aria-hidden className="size-6" />
            </span>
            <h3 className="mt-5 font-heading text-2xl font-semibold">
              Creator support
            </h3>
            <p className="mt-2 max-w-md text-sm text-muted-foreground sm:text-base">
              Deadlines do not wait, and neither do we. Our support team knows
              production work and answers in minutes, not days.
            </p>

            <PerkList items={supportPerks} tone="light" />

            <Link
              href="/how-it-works"
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-violet-700 underline-offset-4 hover:underline"
            >
              See what support includes
              <ArrowRight aria-hidden className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
