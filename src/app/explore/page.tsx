import { MapPin, Search, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { StudioCard } from "@/components/studio-card";
import { studios } from "@/lib/data";

const filters = [
  "All spaces",
  "Photo Studio",
  "Film Set",
  "Podcast Room",
  "Music Studio",
  "Art Gallery",
];

export default function ExplorePage() {
  return (
    <>
      <PageHeader
        eyebrow="Explore space"
        title="Browse every studio, set and room"
        description="Verified listings with transparent hourly rates. Filter by category, location and budget — then book your slot in a couple of clicks."
      />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full max-w-md">
            <Search
              aria-hidden
              className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="search"
              placeholder="Search by name, city or category"
              className="h-11 w-full rounded-xl border border-border bg-card pr-4 pl-10 text-sm outline-none transition placeholder:text-muted-foreground focus-visible:border-violet-400 focus-visible:ring-3 focus-visible:ring-violet-600/15"
            />
          </div>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin aria-hidden className="size-4 text-violet-600" />
            Dhaka · Chattogram · Sylhet · Khulna
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map((filter, index) => (
            <span
              key={filter}
              className={
                index === 0
                  ? "rounded-full bg-violet-600 px-4 py-1.5 text-sm font-medium text-white"
                  : "cursor-pointer rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-violet-300 hover:text-violet-700"
              }
            >
              {filter}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium text-foreground">
              {studios.length} spaces
            </span>{" "}
            available right now
          </p>
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Sparkles aria-hidden className="size-4 text-violet-600" />
            Sorted by top rated
          </span>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {studios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </section>
    </>
  );
}
