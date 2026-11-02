type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-linear-to-b from-violet-50 via-background to-background">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-72 rounded-full bg-violet-300/40 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -left-16 size-64 rounded-full bg-sky-300/30 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <span className="inline-flex items-center gap-2 rounded-full border border-violet-200 bg-background px-3 py-1 text-xs font-medium tracking-widest text-violet-700 uppercase">
          <span className="size-1.5 rounded-full bg-violet-500" aria-hidden />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl font-heading font-semibold tracking-tight text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-pretty text-muted-foreground sm:text-lg">
          {description}
        </p>
      </div>
    </section>
  );
}
