import type { Metadata } from "next";
import Link from "next/link";
import { Zap, Gamepad2, Globe2, Brain, MessageCircle, Compass, Users, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal, Counter, Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Impulse by Impact — Modular Microlearning Library",
  description:
    "Impulse is a modular microlearning library with 130+ bites, 70+ activities, and 20+ gamification themes built for fast, engaging, measurable learning.",
};

const STATS = [
  { v: 130, s: "+", l: "Learning bites" },
  { v: 70, s: "+", l: "Activities" },
  { v: 20, s: "+", l: "Gamification themes" },
  { v: 4, s: "", l: "Competency areas" },
];

const EDGE = [
  { icon: <Zap size={18} />, title: "Plug & play", description: "Drop into your learning ecosystem with minimal setup." },
  { icon: <Gamepad2 size={18} />, title: "Gamified experience", description: "20+ themes that drive engagement and retention." },
  { icon: <Globe2 size={18} />, title: "Multilingual options", description: "Designed for delivery across MENA in multiple languages." },
  { icon: <Compass size={18} />, title: "Designed by experts", description: "Curated by Impact's design and behavioral specialists." },
  { icon: <Brain size={18} />, title: "Customizable", description: "Adapt content, scenarios, and theming to your context." },
  { icon: <Users size={18} />, title: "Competency-aligned", description: "Mapped to Impact's competency frameworks." },
];

export default function ImpulsePage() {
  return (
    <>
      <PageHero
        eyebrow="Impulse by Impact"
        crumbs={[{ label: "Impulse" }]}
        title={
          <>
            Fast, focused, scalable —{" "}
            <span className="text-grad">microlearning that moves the needle</span>.
          </>
        }
        description="Impulse is Impact's flagship modular learning solution. A flexible library of learning bites, activities, and simulations that addresses immediate capability needs while supporting continuous learning and performance improvement."
      />

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-strong rounded-[2rem] p-8 md:p-12 mb-12 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
            <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {STATS.map((s) => (
                <div key={s.l}>
                  <div
                    className="font-bold leading-none tracking-tight"
                    style={{
                      fontSize: "clamp(2.2rem, 4vw, 3rem)",
                      background: "linear-gradient(135deg, #ffffff, #80DCFF)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    <Counter to={s.v} suffix={s.s} />
                  </div>
                  <div className="mt-3 text-ink-100 text-[0.92rem]">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Why Impulse"
          title="Six advantages built for modern L&D teams."
        />
        <IconGrid items={EDGE} columns={3} />
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Where it fits"
          title="Built for leadership tracks, learning academies, and just-in-time skill development."
        />
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { t: "Core Business Skills", i: <Compass size={16} /> },
            { t: "People & Leadership", i: <Users size={16} /> },
            { t: "Communication & Influence", i: <MessageCircle size={16} /> },
            { t: "Personal Effectiveness", i: <Brain size={16} /> },
          ].map((c) => (
            <Item key={c.t}>
              <div className="surface rounded-xl p-5 hover:-translate-y-1 transition-transform duration-300">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-turq/15 text-brand-turq mb-3">
                  {c.i}
                </div>
                <div className="text-ink-50 font-semibold text-[0.95rem]">{c.t}</div>
              </div>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="What you get with Impulse"
          items={[
            "Fast deployment for immediate capability needs.",
            "Engaging, gamified experiences with measurable outcomes.",
            "Aligned to your competency framework — no orphaned content.",
            "Continuous learning that complements long-form journeys.",
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-strong rounded-[2rem] p-8 md:p-10 relative overflow-hidden text-center">
            <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
            <div className="relative">
              <span className="chip mb-5">Live demo</span>
              <h2 className="text-2xl md:text-[1.8rem] font-semibold text-ink-50 mb-3">
                See Impulse in action.
              </h2>
              <p className="text-ink-100 max-w-[58ch] mx-auto mb-6">
                Visit the Impulse demo site to explore the modular content library and gamified experiences.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href="https://impulsebyimpact.zohosites.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-turq btn-lg"
                >
                  Open Impulse demo
                  <ExternalLink size={15} />
                </a>
                <Link href="/contact" className="btn btn-ghost btn-lg">
                  Request a private walkthrough
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTA
        eyebrow="Impulse"
        title="Discover Impulse."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
