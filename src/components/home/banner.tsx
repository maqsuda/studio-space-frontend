import Link from "next/link";
import {
  ArrowRight,
  Camera,
  Check,
  Star,
  Zap,
} from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

const stats = [
  { value: "2,500+", label: "Bookable spaces" },
  { value: "40+", label: "Cities covered" },
  { value: "18k+", label: "Bookings completed" },
  { value: "4.9/5", label: "Average rating" },
];

export function Banner() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-linear-to-b from-violet-100/70 via-violet-50/40 to-transparent"
      />
      <div
        aria-hidden
        className="absolute -top-32 -right-24 -z-10 size-96 rounded-full bg-violet-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute top-40 -left-28 -z-10 size-80 rounded-full bg-sky-300/35 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(124,58,237,0.10)_1px,transparent_1px)] [background-size:22px_22px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 pt-14 pb-16 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-20 lg:pb-24">
        <div className="lg:col-span-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-background px-3 py-1 text-xs font-medium tracking-wider text-violet-700 uppercase">
            <Zap aria-hidden className="size-3.5 text-violet-600" />
            Now live in 40+ cities
          </span>

          <h1 className="mt-6 text-4xl font-heading font-semibold tracking-tight text-balance sm:text-5xl xl:text-6xl">
            Book the perfect{" "}
            <span className="bg-linear-to-r from-violet-600 via-fuchsia-500 to-sky-500 bg-clip-text text-transparent">
              studio space
            </span>{" "}
            for your next big idea.
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-muted-foreground sm:text-lg">
            From photo studios and podcast rooms to film sets and galleries —
            compare verified spaces, check live availability, and book by the
            hour in minutes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
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

          <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-border pt-6 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-heading font-semibold tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:col-span-6">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-linear-to-br from-violet-200/70 via-transparent to-sky-200/70 blur-2xl"
          />

          <div className="mx-auto w-full max-w-md rounded-3xl border border-border bg-card p-3 shadow-2xl shadow-violet-900/10 lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-linear-to-br from-violet-500 via-indigo-500 to-sky-400">
              <Camera
                aria-hidden
                className="absolute top-1/2 left-1/2 size-20 -translate-x-1/2 -translate-y-1/2 text-white/35"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/92 px-3 py-1 text-xs font-medium text-foreground">
                <Zap aria-hidden className="size-3.5 text-violet-600" />
                Instant book
              </span>
              <span className="absolute bottom-4 left-4 rounded-full bg-black/55 px-3 py-1 text-xs font-medium text-white">
                From $30/hour
              </span>
            </div>

            <div className="px-2 pt-4 pb-1">
              <div className="flex items-start justify-between gap-3">
                <h2 className="font-heading text-base font-semibold">
                  The Loft Photo Studio
                </h2>
                <span className="flex items-center gap-1 text-sm font-medium">
                  <Star
                    aria-hidden
                    className="size-3.5 fill-amber-400 text-amber-400"
                  />
                  4.9
                </span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Banani, Dhaka · Cyclorama · Wi-Fi · Parking
              </p>
              <div className="mt-4 flex items-center justify-between gap-3 border-t border-border pt-3">
                <span className="flex items-center gap-2 text-sm">
                  <span className="flex size-8 items-center justify-center rounded-full bg-violet-100 text-xs font-semibold text-violet-700">
                    NA
                  </span>
                  <span className="text-muted-foreground">
                    Hosted by <span className="text-foreground">Nusrat</span>
                  </span>
                </span>
                <span className="text-sm font-medium text-violet-700">
                  Check availability
                </span>
              </div>
            </div>
          </div>

          <div className="absolute -top-4 -right-2 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:block lg:-right-6">
            <div className="flex items-center gap-2.5">
              <span className="flex size-9 items-center justify-center rounded-full bg-emerald-100">
                <Check aria-hidden className="size-4 text-emerald-600" />
              </span>
              <span>
                <span className="block text-sm font-medium">
                  Booking confirmed
                </span>
                <span className="block text-xs text-muted-foreground">
                  Sat · 10:00 – 14:00
                </span>
              </span>
            </div>
          </div>

          <div className="absolute -bottom-5 left-0 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-xl sm:block lg:-left-6">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-sm font-medium">
                <Star
                  aria-hidden
                  className="size-4 fill-amber-400 text-amber-400"
                />
                4.9
              </span>
              <span className="h-6 w-px bg-border" aria-hidden />
              <span className="text-xs text-muted-foreground">
                128 verified reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
