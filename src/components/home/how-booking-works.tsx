import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  LayoutGrid,
  Search,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { buttonVariants } from "@/components/ui/button";

type Step = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const steps: Step[] = [
  {
    title: "Search",
    description:
      "Filter by city, category, price and amenities to shortlist spaces.",
    icon: Search,
  },
  {
    title: "Compare",
    description:
      "Read verified reviews, browse photos and compare hourly rates side by side.",
    icon: LayoutGrid,
  },
  {
    title: "Book",
    description:
      "Pick your slot and pay securely — instant confirmation, no back-and-forth.",
    icon: CalendarCheck,
  },
  {
    title: "Create",
    description:
      "Show up, plug in and make something great. Support is one tap away.",
    icon: Sparkles,
  },
];

export function HowBookingWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <SectionHeading
        eyebrow="How booking works"
        title="From search to shoot in four steps"
        description="No phone tag, no hidden fees. StudioSpace keeps the whole booking flow in one place."
      />

      <div className="relative mt-12">
        <span
          aria-hidden
          className="absolute top-7 right-7 left-7 hidden h-px bg-linear-to-r from-violet-300 via-border to-violet-300 md:block"
        />
        <ol className="grid gap-10 md:grid-cols-4 md:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <li
                key={step.title}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex size-14 items-center justify-center rounded-2xl border border-violet-100 bg-background text-violet-600 shadow-sm">
                  <Icon aria-hidden className="size-6" />
                  <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-violet-600 text-[11px] font-semibold text-white">
                    {index + 1}
                  </span>
                </span>
                <h3 className="mt-5 font-heading text-lg font-semibold">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[30ch] text-sm text-muted-foreground">
                  {step.description}
                </p>
              </li>
            );
          })}
        </ol>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <Link
          href="/explore"
          className={buttonVariants({
            size: "lg",
            className:
              "h-11 bg-violet-600 px-6 text-white shadow-lg shadow-violet-600/25 hover:bg-violet-700",
          })}
        >
          Start exploring
          <ArrowRight aria-hidden />
        </Link>
        <p className="text-sm text-muted-foreground">
          Free to browse · No booking fees on your first reservation
        </p>
      </div>
    </section>
  );
}
