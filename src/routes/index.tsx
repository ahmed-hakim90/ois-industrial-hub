import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Wrench,
  Truck,
  Award,
  Factory,
  Cog,
  ArrowRight,
} from "lucide-react";
import heroImg from "@/assets/hero-machinery.jpg";
import { QuoteButton, ExploreButton } from "@/components/site/CTAButtons";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MachineCard } from "@/components/site/MachineCard";
import { PartCard } from "@/components/site/PartCard";
import { CTASection } from "@/components/site/CTASection";
import { machines } from "@/data/machines";
import { parts_list } from "@/data/parts";
import { site } from "@/config/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${site.name} — ${site.tagline}` },
      { name: "description", content: site.description },
      { property: "og:title", content: `${site.name} — ${site.tagline}` },
      { property: "og:description", content: site.description },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const values = [
  {
    icon: ShieldCheck,
    title: "Engineered Reliability",
    desc: "Equipment specified for continuous-duty industrial operation and long service life.",
  },
  {
    icon: Wrench,
    title: "Lifetime Support",
    desc: "Spare parts, technical service, and operator training delivered by our in-house engineers.",
  },
  {
    icon: Truck,
    title: "Global Logistics",
    desc: "Turnkey shipping, installation, and commissioning to your facility anywhere in the region.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    desc: "Authorized representative for leading European, American, and Asian manufacturers.",
  },
];

const industries = [
  "Automotive",
  "Steel & Metal",
  "Food & Beverage",
  "Oil & Gas",
  "Construction",
  "Pharmaceuticals",
];

const stats = [
  { value: "20+", label: "Years of Experience" },
  { value: "1,200+", label: "Machines Delivered" },
  { value: "35", label: "Countries Served" },
  { value: "500+", label: "Active B2B Clients" },
];

function HomePage() {
  const featured = machines.slice(0, 3);
  const featuredParts = parts_list.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface text-surface-foreground">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Industrial machinery factory floor"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/30" />
          <div className="absolute inset-0 hero-grid-bg opacity-40" />
        </div>

        <div className="container-x relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-36">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-10 bg-accent" />
              B2B Industrial Equipment
            </div>
            <h1
              className="text-balance font-display font-semibold leading-[1.05] text-surface-foreground"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.5rem)" }}
            >
              Industrial Machinery <br className="hidden md:block" />
              Solutions <span className="text-accent">Built for Performance</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
              {site.name} supplies premium machines, heavy equipment, and
              auxiliary parts to manufacturers across the region — backed by
              expert engineering, spare-parts inventory, and lifetime
              after-sales support.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <QuoteButton size="lg" />
              <ExploreButton size="lg" />
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="ml-auto grid max-w-sm grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface/60 p-5">
                  <div className="font-display text-3xl font-semibold text-accent">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-surface-foreground/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="border-b border-border bg-background">
        <div className="container-x grid gap-6 py-10 md:grid-cols-3 md:py-14">
          <div className="md:col-span-2">
            <p className="text-balance text-xl font-medium leading-snug text-foreground md:text-2xl">
              For over two decades, {site.name} has equipped industrial
              manufacturers with the machines and spare parts that keep their
              production lines moving — reliably, day and night.
            </p>
          </div>
          <div className="flex items-center md:justify-end">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent"
            >
              About the company <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURED MACHINES */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Featured Machines"
              title="Equipment trusted on demanding production lines."
              description="A curated selection from our machinery catalog — CNC machining centers, presses, cutting systems, and more."
            />
            <ExploreButton variant="ghost" label="View all machines" />
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m) => (
              <MachineCard key={m.slug} machine={m} />
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why OIS Machinery"
            title="Industrial-grade engineering, supplier-grade partnership."
            description="What separates OIS from a typical equipment vendor: deep technical expertise, in-stock spare parts, and a service team you can actually reach."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTS PREVIEW */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeader
              eyebrow="Auxiliary Parts"
              title="Genuine spare parts ready to ship."
              description="Bearings, hydraulic components, electric motors, conveyors, and custom panels — kept in stock for fast turnaround."
            />
            <ExploreButton to="/parts" variant="ghost" label="All auxiliary parts" />
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredParts.map((p) => (
              <PartCard key={p.slug} part={p} />
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Industries Served"
            title="Built for the sectors that power modern industry."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 md:grid-cols-3">
            {industries.map((i, idx) => (
              <div
                key={i}
                className="flex items-center gap-4 bg-background p-6"
              >
                {idx % 2 === 0 ? (
                  <Factory className="h-5 w-5 text-accent" />
                ) : (
                  <Cog className="h-5 w-5 text-accent" />
                )}
                <span className="font-display text-lg font-semibold text-foreground">
                  {i}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS / LOGOS */}
      <section className="border-y border-border bg-background py-14">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Trusted suppliers & partners
          </p>
          <div className="mt-8 grid grid-cols-2 items-center gap-x-10 gap-y-6 opacity-70 sm:grid-cols-3 md:grid-cols-6">
            {["MEKANIX", "FERROCAST", "TECHLINE", "AXIOM", "NORDMET", "PRECISA"].map(
              (label) => (
                <div
                  key={label}
                  className="font-display text-center text-lg font-semibold tracking-[0.18em] text-muted-foreground"
                >
                  {label}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* STATS (mobile-visible) */}
      <section className="bg-background py-16 lg:hidden">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6">
              <div className="font-display text-3xl font-semibold text-accent">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
