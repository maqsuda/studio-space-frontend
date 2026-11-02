import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { StudioCard } from "@/components/studio-card";
import { studios } from "@/lib/data";

export function FeaturedStudios() {
  return (
    <section
      id="featured"
      className="mx-auto max-w-7xl scroll-mt-24 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          align="left"
          eyebrow="Featured studios"
          title="Handpicked spaces creators love"
          description="Top-rated studios with verified reviews, transparent hourly rates and instant confirmation."
        />
        <Link
          href="/explore"
          className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-violet-700 transition-colors hover:text-violet-800"
        >
          View all spaces
          <ArrowRight aria-hidden className="size-4" />
        </Link>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studios.map((studio) => (
          <StudioCard key={studio.id} studio={studio} />
        ))}
      </div>
    </section>
  );
}
