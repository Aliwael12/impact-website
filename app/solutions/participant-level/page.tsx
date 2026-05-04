import type { Metadata } from "next";
import { HardHat, ClipboardList, Briefcase, Crown } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Stagger, Item, Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Participant Level Solutions | Frontline → Senior Leaders | Impact",
  description:
    "Development programs for frontline teams, supervisors, managers, and executives — strengthening leadership capability and organizational performance.",
};

const LEVELS = [
  {
    icon: <HardHat size={20} />,
    level: "01 / Frontline Employees",
    title: "Strengthen execution & service quality",
    challenges: ["Communication and customer interaction", "Maintaining execution discipline", "Sustaining service quality"],
    formats: ["Simulations", "Experiential workshops", "Practical coaching"],
    color: "from-brand-blue/30",
  },
  {
    icon: <ClipboardList size={20} />,
    level: "02 / Supervisors",
    title: "First-line manager development",
    challenges: ["Team coordination", "Accountability", "Operational leadership"],
    formats: ["Experiential leadership labs", "Team management simulations"],
    color: "from-accent-green/30",
  },
  {
    icon: <Briefcase size={20} />,
    level: "03 / Middle Managers",
    title: "Translate strategy into execution",
    challenges: ["Cross-functional alignment", "Turning strategic priorities into action"],
    formats: ["Structured leadership journeys", "Business simulations"],
    color: "from-brand-turq/30",
  },
  {
    icon: <Crown size={20} />,
    level: "04 / Senior Leaders",
    title: "Strategy, transformation & culture",
    challenges: ["Strategic leadership", "Organizational transformation", "Culture"],
    formats: ["Executive simulations", "Leadership labs", "Executive coaching"],
    color: "from-accent-purple/30",
  },
];

export default function ParticipantLevelPage() {
  return (
    <>
      <PageHero
        eyebrow="L&D · Participant Level"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Learning & Development", href: "/solutions/learning-development" },
          { label: "Participant Level" },
        ]}
        title={
          <>
            Development designed for the people who{" "}
            <span className="text-grad">drive performance at every level</span>.
          </>
        }
        description="Organizations invest in different levels of development depending on their growth stage, leadership pipeline maturity, and business priorities. Impact supports development across all levels — from frontline employees to senior leaders."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="By participant level"
          title="The right format for the right development moment."
        />
        <Stagger className="grid md:grid-cols-2 gap-5">
          {LEVELS.map((l) => (
            <Item key={l.level}>
              <div className={`surface rounded-2xl p-7 h-full hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-br ${l.color} to-transparent`}>
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow"
                    style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                  >
                    {l.icon}
                  </div>
                  <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold">
                    {l.level}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-ink-50 mb-4">{l.title}</h3>
                <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-white/5">
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-300 font-semibold mb-2">
                      Common challenges
                    </div>
                    <ul className="space-y-1.5">
                      {l.challenges.map((c) => (
                        <li key={c} className="text-ink-100 text-[0.88rem] flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-turq" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-300 font-semibold mb-2">
                      Recommended formats
                    </div>
                    <ul className="space-y-1.5">
                      {l.formats.map((f) => (
                        <li key={f} className="text-ink-100 text-[0.88rem] flex items-start gap-2">
                          <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent-green" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <OutcomeCard
            title="What organizations gain"
            items={[
              "Development pathways aligned to where each level adds value.",
              "Clear leadership progression from frontline to executive.",
              "Programs that reflect role-specific challenges, not generic content.",
              "Capability that compounds across the pipeline.",
            ]}
          />
        </Reveal>
      </Section>

      <CTA
        eyebrow="Participant Level"
        title="Explore the right development pathway for your audience."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "See L&D solutions", href: "/solutions/learning-development" }}
      />
    </>
  );
}
