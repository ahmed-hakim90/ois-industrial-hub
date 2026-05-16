export function RouteLoading() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Hero skeleton */}
      <section className="bg-surface">
        <div className="container-x animate-pulse py-20 md:py-28 lg:py-36">
          <div className="h-3 w-32 rounded bg-accent/20" />
          <div className="mt-6 h-10 w-3/4 rounded bg-surface-foreground/10 md:h-14 lg:h-16" />
          <div className="mt-3 h-10 w-1/2 rounded bg-surface-foreground/10 md:h-14 lg:h-16" />
          <div className="mt-6 h-5 w-full max-w-xl rounded bg-surface-foreground/10" />
          <div className="mt-2 h-5 w-2/3 max-w-xl rounded bg-surface-foreground/10" />
          <div className="mt-8 flex gap-3">
            <div className="h-11 w-36 rounded-md bg-accent/20" />
            <div className="h-11 w-36 rounded-md bg-surface-foreground/10" />
          </div>
        </div>
      </section>

      {/* Content skeleton blocks */}
      <section className="bg-background py-16 md:py-24">
        <div className="container-x animate-pulse">
          <div className="h-3 w-24 rounded bg-accent/20" />
          <div className="mt-4 h-8 w-1/2 rounded bg-foreground/10 md:h-10" />
          <div className="mt-3 h-5 w-2/3 rounded bg-muted-foreground/20" />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-0">
                <div className="aspect-[4/3] w-full rounded-t-xl bg-muted" />
                <div className="p-5">
                  <div className="h-4 w-20 rounded bg-accent/20" />
                  <div className="mt-3 h-6 w-3/4 rounded bg-foreground/10" />
                  <div className="mt-2 h-4 w-full rounded bg-muted-foreground/20" />
                  <div className="mt-2 h-4 w-5/6 rounded bg-muted-foreground/20" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
