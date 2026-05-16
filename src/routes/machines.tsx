import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MachineCard } from "@/components/site/MachineCard";
import { CTASection } from "@/components/site/CTASection";
import { categories, machines } from "@/data/machines";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/machines")({
  head: () => ({
    meta: [
      { title: `Industrial Machines Catalog — ${site.name}` },
      {
        name: "description",
        content:
          "Browse the OIS Machinery catalog: CNC machining centers, hydraulic presses, fiber laser cutters, packaging lines, robotic welding cells, and material handling equipment.",
      },
      { property: "og:title", content: `Industrial Machines — ${site.name}` },
      {
        property: "og:description",
        content:
          "Explore our full range of industrial machines, from CNC and cutting to packaging and handling.",
      },
      { property: "og:url", content: "/machines" },
    ],
    links: [{ rel: "canonical", href: "/machines" }],
  }),
  component: MachinesPage,
});

function MachinesPage() {
  const [active, setActive] = useState<(typeof categories)[number]>("All");

  const filtered =
    active === "All" ? machines : machines.filter((m) => m.category === active);

  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x py-16 md:py-24">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Machinery Catalog
          </div>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
            Production machines for every stage of the line.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
            Each machine in our catalog is selected for industrial-grade
            durability and supported by our in-house engineering team.
          </p>
        </div>
      </section>

      <section className="bg-background py-16 md:py-20">
        <div className="container-x">
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                  active === c
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-background text-muted-foreground hover:border-foreground hover:text-foreground",
                )}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((m) => (
              <MachineCard key={m.slug} machine={m} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="mt-12 text-center text-muted-foreground">
              No machines in this category yet. Contact us for a custom inquiry.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
