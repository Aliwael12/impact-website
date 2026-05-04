import type { Metadata } from "next";
import { Brain, Activity, Repeat, Settings, TrendingUp } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { Methodology, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Cultural Transformation Solutions | Impact",
  description:
    "Aligning mindset, leadership behavior, and organizational systems to create sustainable culture and performance.",
};

export default function CulturalTransformationPage() {
  return (
    <>
      <PageHero
        eyebrow="OD · Cultural Transformation"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Organizational Development", href: "/solutions/organizational-development" },
          { label: "Cultural Transformation" },
        ]}
        title={
          <>
            Culture change that{" "}
            <span className="text-grad">lives in everyday behavior</span>.
          </>
        }
        description="Transforming culture requires more than communication initiatives. It requires shifting how people think, behave, and collaborate every day — and ensuring leadership practices, team rituals, and systems reinforce the change rather than resist it."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Why it matters"
          title="When culture isn't aligned with strategy, you feel it everywhere."
          description="Slow execution, weak cross-functional collaboration, and resistance to change. Cultural transformation aligns leadership behaviors, team practices, and systems with where the business needs to move — turning strategic intent into everyday action."
        />
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface-strong rounded-[2rem] p-8 md:p-12 mb-12 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
            <div className="relative">
              <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-3">
                Transformation framework
              </div>
              <h3 className="text-2xl md:text-[1.75rem] font-semibold text-ink-50 mb-7">
                Mindset → Behavior → Rituals → Systems → Sustainable Culture
              </h3>
              <Methodology
                steps={[
                  { label: "Mindset", sub: "Shifts required by strategy" },
                  { label: "Behavior", sub: "Observable, practiced daily" },
                  { label: "Rituals", sub: "Team & leader practices" },
                  { label: "Systems", sub: "Reinforce, recognize, reward" },
                  { label: "Culture", sub: "Sustained over time" },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Transformation method"
          title="Translating strategy and values into the way people actually work."
          description="Rather than treating culture as a campaign, we embed change into the operating rhythm — through leadership practices, team rituals, and aligned systems."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {[
            { i: <Brain size={16} />, t: "Mindset shifts", d: "Identify what needs to change in how people think." },
            { i: <Activity size={16} />, t: "Observable behaviors", d: "Translate mindset into daily practice." },
            { i: <Repeat size={16} />, t: "Team rituals", d: "Embed behaviors in how teams work." },
            { i: <Settings size={16} />, t: "Aligned systems", d: "Communication, recognition, performance management." },
            { i: <TrendingUp size={16} />, t: "Reinforced culture", d: "Sustained through leadership role-modeling." },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="surface rounded-2xl p-5 h-full">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-blue/15 text-brand-turq mb-3">
                  {c.i}
                </div>
                <div className="text-ink-50 font-semibold text-[0.95rem] mb-1.5">{c.t}</div>
                <div className="text-ink-200 text-[0.85rem] leading-relaxed">{c.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="Expected outcomes"
          items={[
            "Stronger alignment between strategy and behavior across the organization.",
            "Improved collaboration across teams and functions.",
            "Leaders who role-model the desired culture in everyday work.",
            "Stronger accountability for performance and outcomes.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Cultural Transformation"
        title="Make culture stick — not slip."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
