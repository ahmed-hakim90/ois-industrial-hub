import { createFileRoute } from "@tanstack/react-router";
import { RouteLoading } from "@/components/site/RouteLoading";
import { Target, Eye, Award, Users, ShieldCheck, Globe2 } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";
import { SectionHeader } from "@/components/site/SectionHeader";
import { CTASection } from "@/components/site/CTASection";
import { site } from "@/config/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About ${site.name} — Industrial Machinery Partner` },
      {
        name: "description",
        content:
          "Learn how OIS Machinery has equipped industrial manufacturers with premium machines, spare parts, and engineering support for over two decades.",
      },
      { property: "og:title", content: `About ${site.name}` },
      {
        property: "og:description",
        content:
          "Two decades of industrial machinery expertise — engineering, supply, installation, and after-sales support.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const strengths = [
  { icon: ShieldCheck, title: "Certified Quality", desc: "Equipment that meets international safety and quality standards." },
  { icon: Users, title: "Expert Engineering", desc: "A dedicated team of mechanical and automation engineers." },
  { icon: Globe2, title: "Global Sourcing", desc: "Direct relationships with leading machine manufacturers worldwide." },
  { icon: Award, title: "Proven Track Record", desc: "Over a thousand successful machine deployments across the region." },
];

function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-surface text-surface-foreground">
        <div className="container-x grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <span className="h-px w-10 bg-accent" />
              About {site.name}
            </div>
            <h1 className="text-balance font-display text-4xl font-semibold leading-[1.05] md:text-5xl lg:text-6xl">
              Industrial machinery,{" "}
              <span className="text-accent">delivered with engineering integrity.</span>
            </h1>
            <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-surface-foreground/75 md:text-lg">
              For more than twenty years, {site.name} has supplied premium
              machines and auxiliary parts to manufacturers who cannot afford
              downtime. We work as a long-term partner — not a one-time
              vendor — from technical specification through installation,
              commissioning, and after-sales service.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={aboutImg}
              alt="OIS Machinery engineers on-site"
              loading="lazy"
              width={1600}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* MISSION / VISION */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
              <Target className="h-5 w-5" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold text-foreground md:text-3xl">
              Our Mission
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To equip industrial manufacturers with the right machinery and
              parts to operate efficiently, safely, and competitively — backed
              by responsive engineering support throughout the equipment
              lifecycle.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-card p-8 md:p-10">
            <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
              <Eye className="h-5 w-5" />
            </div>
            <h2 className="mt-6 font-display text-2xl font-semibold text-foreground md:text-3xl">
              Our Vision
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              To be the regional reference for industrial machinery supply — a
              partner known for engineering depth, supplier transparency, and
              service quality, helping clients build production lines that last.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="bg-secondary py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Industrial Experience"
            title="Two decades of equipping the region's factories."
            description="From the workshop floor to the boardroom, every project we deliver is grounded in deep technical experience and supplier knowledge accumulated over twenty years."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
            {[
              { year: "2003", title: "Founded", desc: "Started as a specialized supplier of CNC machining centers." },
              { year: "2011", title: "Service Division", desc: "Launched in-house engineering and after-sales service." },
              { year: "2024", title: "Today", desc: "Full-line industrial machinery and auxiliary parts supplier." },
            ].map((m) => (
              <div key={m.year} className="bg-background p-7">
                <div className="font-display text-3xl font-semibold text-accent">{m.year}</div>
                <div className="mt-3 font-display text-lg font-semibold text-foreground">{m.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STRENGTHS */}
      <section className="bg-background py-20 md:py-28">
        <div className="container-x">
          <SectionHeader
            eyebrow="Why partner with us"
            title="Strengths that translate to uptime on your factory floor."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-background p-7">
                <div className="grid h-11 w-11 place-items-center rounded-md bg-accent/10 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Let's discuss your equipment program."
        description="Our team is ready to advise on machine selection, integration, and total cost of ownership."
      />
    </>
  );
}
