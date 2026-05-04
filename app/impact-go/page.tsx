import type { Metadata } from "next";
import { Users, MessageSquare, Target, Crown } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Corporate Team Building & Experiential Events | Impact GO",
  description:
    "Experiential team building programs and corporate events designed to strengthen collaboration, alignment, and team effectiveness.",
};

export default function ImpactGoPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 04 — Impact GO"
        crumbs={[{ label: "Impact GO" }]}
        title={
          <>
            Team experiences that go{" "}
            <span className="text-grad">beyond entertainment</span>.
          </>
        }
        description="Impact GO designs experiential team programs that strengthen collaboration, trust, and team performance — built around real collaboration challenges and structured to drive lasting change."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Business outcomes"
          title="Four outcomes we design every Impact GO experience around."
        />
        <IconGrid
          columns={4}
          items={[
            { icon: <Users size={18} />, title: "Collaboration", description: "Strengthen trust, cooperation, and problem-solving between team members." },
            { icon: <Target size={18} />, title: "Alignment", description: "Reconnect teams with shared goals, organizational priorities, and collective responsibility." },
            { icon: <Crown size={18} />, title: "Ownership", description: "Encourage individuals and teams to take accountability for outcomes and contribute proactively." },
            { icon: <MessageSquare size={18} />, title: "Communication", description: "Strengthen open dialogue, active listening, and effective communication within teams." },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <Reveal>
            <div className="surface-strong rounded-[2rem] p-8 relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
              <div className="relative">
                <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-3">
                  Corporate retreats & events
                </div>
                <h3 className="text-2xl font-semibold text-ink-50 mb-4">
                  From alignment workshops to full retreats — designed end to end.
                </h3>
                <p className="text-ink-100 leading-relaxed mb-6">
                  Every experience is built around real collaboration challenges and structured activities that encourage teams to reflect, align, and improve the way they work together. Outcomes, energy, and engagement — engineered.
                </p>
                <div className="grid grid-cols-3 gap-2.5">
                  {[
                    { n: "100+", l: "Programs delivered" },
                    { n: "30+", l: "Activity formats" },
                    { n: "EG·KSA·UAE", l: "Regional reach" },
                  ].map((s) => (
                    <div key={s.l} className="surface rounded-xl p-3 text-center">
                      <div className="text-brand-turq font-bold text-[0.95rem]">{s.n}</div>
                      <div className="text-ink-300 text-[0.72rem] mt-1">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <OutcomeCard
            title="What teams take away"
            items={[
              "Stronger trust built through shared experience.",
              "Reconnection with purpose and shared priorities.",
              "Ownership of outcomes — beyond the event itself.",
              "Communication patterns that carry back into daily work.",
            ]}
          />
        </div>
      </Section>

      <CTA
        eyebrow="Impact GO"
        title="Design your team experience."
        description="Tell us your team size, objective, and timing — we'll design an experience that delivers."
        primary={{ label: "Design my experience", href: "/contact" }}
        secondary={{ label: "Browse other solutions", href: "/solutions" }}
      />
    </>
  );
}
