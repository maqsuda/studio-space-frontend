import type { LucideIcon } from "lucide-react";

type DashboardPlaceholderProps = {
  icon: LucideIcon;
  title: string;
  description: string;
};

/** "Coming soon" body shared by the not-yet-built dashboard routes. */
export function DashboardPlaceholder({
  icon: Icon,
  title,
  description,
}: DashboardPlaceholderProps) {
  return (
    <div className="flex flex-col items-start gap-4 rounded-2xl border border-dashed border-border bg-card/60 p-8 sm:flex-row sm:items-center sm:p-10">
      <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-violet-600">
        <Icon aria-hidden className="size-6" />
      </span>
      <div>
        <h2 className="font-heading text-lg font-semibold tracking-tight">
          {title}
        </h2>
        <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
          {description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
          <span className="size-1.5 animate-pulse rounded-full bg-violet-500" aria-hidden />
          Coming soon
        </span>
      </div>
    </div>
  );
}
