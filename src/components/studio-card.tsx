import Link from "next/link";
import { Heart, MapPin, Star, Zap } from "lucide-react";
import { cn } from "cn";
import type { Studio } from "@/lib/data";

type StudioCardProps = {
  studio: Studio;
  className?: string;
};

export function StudioCard({ studio, className }: StudioCardProps) {
  const Icon = studio.icon;

  return (
    <Link
      href="/explore"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl hover:shadow-violet-900/10",
        className
      )}
    >
      <div
        className={cn(
          "relative aspect-[4/3] overflow-hidden bg-linear-to-br",
          studio.image
        )}
      >
        <Icon
          aria-hidden
          className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-white/40 transition-transform duration-500 group-hover:scale-110"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-black/45 via-black/5 to-transparent"
        />

        {studio.instantBook ? (
          <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-medium text-foreground">
            <Zap aria-hidden className="size-3 text-violet-600" />
            Instant book
          </span>
        ) : null}

        <span
          aria-hidden
          className="absolute top-3 right-3 flex size-8 items-center justify-center rounded-full bg-white/92 text-foreground transition-colors group-hover:text-rose-500"
        >
          <Heart className="size-4" />
        </span>

        <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white">
          {studio.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-base leading-snug font-semibold transition-colors group-hover:text-violet-700">
            {studio.name}
          </h3>
          <span className="flex shrink-0 items-center gap-1 text-sm font-medium">
            <Star aria-hidden className="size-3.5 fill-amber-400 text-amber-400" />
            {studio.rating}
          </span>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin aria-hidden className="size-3.5 shrink-0" />
          {studio.location}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {studio.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-muted px-2 py-0.5 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-border pt-3">
          <p className="text-sm text-muted-foreground">
            <span className="text-lg font-semibold text-foreground">
              ${studio.price}
            </span>
            /hour
            <span className="block text-xs">({studio.reviews} reviews)</span>
          </p>
          <span className="text-sm font-medium text-violet-700">
            View space
          </span>
        </div>
      </div>
    </Link>
  );
}
