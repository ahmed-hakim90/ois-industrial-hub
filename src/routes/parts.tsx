import { createFileRoute } from "@tanstack/react-router";
import { RouteLoading } from "@/components/site/RouteLoading";
import { SectionHeader } from "@/components/site/SectionHeader";
import { PartCard } from "@/components/site/PartCard";
import { CTASection } from "@/components/site/CTASection";
import { parts_list } from "@/data/parts";
import { site } from "@/config/site";

export const Route = createFileRoute("/parts")({
  head: () => ({
    meta: [
      { title: `Auxiliary Parts & Spare Components — ${site.name}` },
      {
        name: "description",
        content:
          "OEM-grade industrial spare parts: bearings, hydraulic cylinders, gears, conveyors, motors, and custom control panels — kept in stock and ready to ship.",
      },
      {
        property: "og:title",
        content: `Auxiliary Parts — ${site.name}`,
      },
      {
        property: "og:description",
        content:
          "Genuine industrial spare parts with fast lead times and engineering support.",
      },
      { property: "og:url", content: "/parts" },
    ],
    links: [{ rel: "canonical", href: "/parts" }],
  }),
  pendingComponent: RouteLoading,
  component: PartsPage,
});

function PartsPage() {
  return (
    <>
      <section className="bg-surface text-surface-foreground">
        <div className="container-x py-16 md:py-24">
          <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            <span className="h-px w-10 bg-accent" />
            Auxiliary Parts
          </div>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
            Spare parts that keep your machines running.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
            From precision bearings to custom PLC cabinets, we stock and source
            the components your maintenance teams need to minimize downtime.
          </p>
        </div>
      </section>

      <section className="bg-background py-20 md:py-24">
        <div className="container-x">
          <SectionHeader
            eyebrow="Catalog"
            title="Auxiliary components and spare parts."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {parts_list.map((p) => (
              <PartCard key={p.slug} part={p} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need a part that isn't listed?"
        description="Our sourcing team can locate OEM and aftermarket components for nearly any industrial machine. Send us the reference."
      />
    </>
  );
}
