import Link from "next/link";
import {
  ArrowRight,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";

const values = [
  {
    title: "Verified spaces",
    description:
      "Every listing is reviewed by our team with real photos, accurate amenities and honest pricing.",
    icon: ShieldCheck,
  },
  {
    title: "Fair for everyone",
    description:
      "Transparent hourly rates for creators and secure, on-time payouts for hosts. No surprises.",
    icon: Compass,
  },
  {
    title: "Creator first",
    description:
      "Built around production days — instant confirmation, flexible slots and support that answers fast.",
    icon: Sparkles,
  },
  {
    title: "A real community",
    description:
      "Photographers, podcasters, filmmakers and hosts who share gear, tips and referrals.",
    icon: HeartHandshake,
  },
];

const stats = [
  { value: "2,500+", label: "Spaces listed" },
  { value: "40+", label: "Cities" },
  { value: "18k+", label: "Bookings" },
  { value: "4.9/5", label: "Creator rating" },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="We make great spaces easy to book"
        description="StudioSpace started with a simple frustration: finding a studio should not take 20 phone calls and a spreadsheet."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Our story"
              title="Built by creators, for creators"
            />
            <div className="mt-6 space-y-4 text-muted-foreground sm:text-lg">
              <p>
                We are a small team of photographers, filmmakers and engineers
                who spent too many weekends chasing studio owners on WhatsApp
                just to learn whether a room was free on Saturday.
              </p>
              <p>
                So we built the marketplace we wanted: verified spaces with
                real photos, live availability, clear hourly rates and instant
                booking — plus a guarantee that keeps hosts comfortable opening
                their doors.
              </p>
              <p className="font-medium text-foreground">
                Today, thousands of creators book their shoot days on
                StudioSpace every month.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/explore"
                className={buttonVariants({
                  size: "lg",
                  className:
                    "h-11 bg-violet-600 px-6 text-white shadow-lg shadow-violet-600/25 hover:bg-violet-700",
                })}
              >
                Explore spaces
                <ArrowRight aria-hidden />
              </Link>
              <Link
                href="/how-it-works"
                className={buttonVariants({
                  variant: "outline",
                  size: "lg",
                  className: "h-11 bg-background px-6",
                })}
              >
                How it works
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-violet-300"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-6 border-t border-border pt-10 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-heading font-semibold tracking-tight">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
