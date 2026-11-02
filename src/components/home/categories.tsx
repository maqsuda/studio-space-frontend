import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/section-heading";
import { categories } from "@/lib/data";

export function Categories() {
  return (
    <section
      id="categories"
      className="scroll-mt-24 border-y border-border bg-muted/30 py-16 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Browse by category"
          title="Find your kind of space"
          description="Every discipline has a home here. Pick a category to see spaces built for the way you create."
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-lg hover:shadow-violet-900/5"
              >
                <span className="flex size-11 items-center justify-center rounded-xl bg-violet-50 text-violet-600 transition-colors group-hover:bg-violet-600 group-hover:text-white">
                  <Icon aria-hidden className="size-5" />
                </span>
                <ArrowUpRight
                  aria-hidden
                  className="absolute top-5 right-5 size-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                />
                <span className="block">
                  <span className="block font-heading text-sm font-semibold">
                    {category.name}
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {category.count} spaces
                  </span>
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
