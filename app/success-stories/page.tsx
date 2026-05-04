import type { Metadata } from "next";
import Image from "next/image";
import { Award, Building2, Globe2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import CTA from "@/components/CTA";
import { Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Success Stories — Measurable Impact | Impact L&D",
  description:
    "Explore stories of measurable impact — how Impact's design, delivery, and reinforcement create real outcomes for people and organizations.",
};

const STORIES = [
  {
    tag: "Featured · Localization",
    icon: <Award size={20} />,
    title: "Localizing an international trainer certification at scale",
    body: "We localized an international trainer certification program — delivering a culturally contextualized model that exceeded expectations and reached 500+ trainers nationwide.",
    metrics: [
      { n: "500+", l: "Trainers certified" },
      { n: "100%", l: "Localized" },
      { n: "Nat'l", l: "Reach" },
    ],
  },
  {
    tag: "Public sector",
    icon: <Building2 size={20} />,
    title: "Large-scale leadership capability across public agencies",
    body: "Multi-cohort leadership programs combining diagnostics, experiential workshops, and coaching — building leadership capability where execution matters most.",
    metrics: [
      { n: "Multi-cohort", l: "Format" },
      { n: "Leadership", l: "Focus" },
      { n: "Public", l: "Sector" },
    ],
  },
  {
    tag: "Private enterprise",
    icon: <Globe2 size={20} />,
    title: "Talent pipeline transformation across MENA",
    body: "Long-term talent development journeys integrating Gallup CliftonStrengths®, Knolskape simulations, and structured coaching — accelerating leadership readiness across markets.",
    metrics: [
      { n: "MENA", l: "Reach" },
      { n: "Multi-tool", l: "Approach" },
      { n: "Long-term", l: "Engagement" },
    ],
  },
];

const CLIENTS = [
  "vodafone", "nestle", "orange", "pepsico", "nbe", "schlumberger", "nissan", "alkhorayef", "jangoom", "sio",
];

export default function SuccessStoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Success Stories"
        crumbs={[{ label: "Success Stories" }]}
        title={
          <>
            Stories of <span className="text-grad">measurable impact</span>.
          </>
        }
        description="How design, delivery and reinforcement create real outcomes for people and organizations across the MENA region."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Featured engagements"
          title="A glimpse of what partnership with Impact looks like in practice."
        />
        <Stagger className="grid gap-5">
          {STORIES.map((s, i) => (
            <Item key={i}>
              <article className="surface rounded-[1.5rem] p-7 md:p-9 grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center hover:-translate-y-1 transition-transform duration-300">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="grid h-11 w-11 place-items-center rounded-xl text-white shadow-glow"
                      style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                    >
                      {s.icon}
                    </div>
                    <span className="chip text-[0.7rem] py-1 px-2.5 normal-case tracking-[0.16em]">{s.tag}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-ink-50 mb-3 leading-tight">{s.title}</h3>
                  <p className="text-ink-200 leading-relaxed">{s.body}</p>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {s.metrics.map((m) => (
                    <div key={m.l} className="surface-strong rounded-xl p-4 text-center">
                      <div
                        className="font-bold text-xl"
                        style={{
                          background: "linear-gradient(135deg, #ffffff, #80DCFF)",
                          WebkitBackgroundClip: "text",
                          backgroundClip: "text",
                          color: "transparent",
                        }}
                      >
                        {m.n}
                      </div>
                      <div className="mt-1 text-ink-300 text-[0.74rem]">{m.l}</div>
                    </div>
                  ))}
                </div>
              </article>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Trusted by"
          title="A decade of partnership across industries."
          description="Selected organizations Impact has supported across leadership, capability, and OD initiatives."
        />
        <div className="surface-strong rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
          <div className="relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center">
            {CLIENTS.map((c) => (
              <div key={c} className="grid place-items-center h-14">
                <Image
                  src={`/clients/${c}.png`}
                  alt={c}
                  width={140}
                  height={48}
                  className="logo-img h-10 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <CTA
        eyebrow="Become part of our story"
        title="Become a part of our story."
        description="Tell us what you're trying to change. We'll bring the methodology, the regional context, and the discipline to make it stick."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "Explore solutions", href: "/solutions" }}
      />
    </>
  );
}
