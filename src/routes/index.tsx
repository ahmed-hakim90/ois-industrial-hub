import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { RouteLoading } from "@/components/site/RouteLoading";
import { Factory, Cog, ArrowRight } from "lucide-react";
import { QuoteButton, ExploreButton } from "@/components/site/CTAButtons";
import { SectionHeader } from "@/components/site/SectionHeader";
import { MachineCard } from "@/components/site/MachineCard";
import { PartCard } from "@/components/site/PartCard";
import { CTASection } from "@/components/site/CTASection";
import { Reveal, StaggerGroup, StaggerItem } from "@/components/site/Reveal";
import { CountUp } from "@/components/site/CountUp";
import { home, machines, parts_list, site } from "@/constants";

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
  pendingComponent: RouteLoading,
  component: HomePage,
});

function HomePage() {
  const { heroImage, heroImageAlt, values, industries, stats, partners } = home;
  const featured = machines.slice(0, 3);
  const featuredParts = parts_list.slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-surface text-surface-foreground">
        <div className="absolute inset-0">
          <motion.img
            src={heroImage}
            alt={heroImageAlt}
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-70"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/85 to-surface/30" />
          <div className="absolute inset-0 hero-grid-bg opacity-40" />
        </div>

        <div className="container-x relative grid gap-10 py-20 md:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:py-36">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
            >
              <span className="h-px w-10 bg-accent" />
              B2B Industrial Equipment
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-balance font-display font-semibold leading-[1.05] text-surface-foreground"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 4.5rem)" }}
            >
              Industrial Machinery <br className="hidden md:block" />
              Solutions <span className="text-accent">Built for Performance</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg"
            >
              {site.name} supplies premium machines, heavy equipment, and
              auxiliary parts to manufacturers across the region — backed by
              expert engineering, spare-parts inventory, and lifetime
              after-sales support.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease: "easeOut" }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <QuoteButton size="lg" />
              <ExploreButton size="lg" variant="surface" />
            </motion.div>
          </div>

          <motion.div
            className="hidden lg:block"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="ml-auto grid max-w-sm grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur">
              {stats.map((s) => (
                <div key={s.label} className="bg-surface/60 p-5">
                  <div className="font-display text-3xl font-semibold text-accent">
                    <CountUp value={s.value} />
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-wider text-surface-foreground/60">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
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

          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((m) => (
              <StaggerItem key={m.slug}>
                <MachineCard machine={m} />
              </StaggerItem>
            ))}
          </StaggerGroup>
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
          <StaggerGroup className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <StaggerItem key={title} className="bg-background p-7 h-full">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {desc}
                </p>
              </StaggerItem>
            ))}
          </StaggerGroup>
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
          <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredParts.map((p) => (
              <StaggerItem key={p.slug}>
                <PartCard part={p} />
              </StaggerItem>
            ))}
          </StaggerGroup>
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
            {partners.map((label) => (
              <div
                key={label}
                className="font-display text-center text-lg font-semibold tracking-[0.18em] text-muted-foreground"
              >
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS (mobile-visible) */}
      <section className="bg-background py-16 lg:hidden">
        <div className="container-x grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6">
              <div className="font-display text-3xl font-semibold text-accent">
                <CountUp value={s.value} />
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
