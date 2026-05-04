import type { Metadata } from "next";
import { User, Users, Users2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Competency-Based Solutions | Leading Self · Relations · Teams",
  description:
    "Three integrated tracks designed to build the core competencies required at every level of the organization — translating frameworks into observable behaviors.",
};

const TRACKS = [
  {
    icon: <User size={20} />,
    label: "Individual Level",
    title: "Leading Self",
    description: "Self-awareness, accountability, resilience, and personal effectiveness — the foundation for any leadership capability.",
    skills: ["Self-awareness", "Accountability", "Resilience", "Personal effectiveness"],
  },
  {
    icon: <Users size={20} />,
    label: "Interpersonal Level",
    title: "Leading Relationships",
    description: "Communication, collaboration, influence, and emotional intelligence — how leaders show up with others.",
    skills: ["Communication", "Collaboration", "Influence", "Emotional intelligence"],
  },
  {
    icon: <Users2 size={20} />,
    label: "Team Level",
    title: "Leading Teams",
    description: "Decision-making, delegation, performance management, and team alignment — directly linked to behaviors that drive sustainable performance.",
    skills: ["Decision-making", "Delegation", "Performance management", "Team alignment"],
  },
];

export default function CompetencyBasedPage() {
  return (
    <>
      <PageHero
        eyebrow="L&D · Competency-Based"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Learning & Development", href: "/solutions/learning-development" },
          { label: "Competency-Based" },
        ]}
        title={
          <>
            Translating frameworks into{" "}
            <span className="text-grad">observable behaviors</span>.
          </>
        }
        description="Impact helps organizations define and build the capabilities required for performance — ensuring competencies are not theoretical but directly reflected in how individuals decide, collaborate, and deliver."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Three integrated tracks"
          title="Build capability at every layer of the leadership stack."
          description="Designed to build the core competencies required at every level — from personal effectiveness through to team leadership."
        />
        <Stagger className="grid md:grid-cols-3 gap-5">
          {TRACKS.map((t) => (
            <Item key={t.title}>
              <div className="surface rounded-2xl p-7 h-full hover:-translate-y-1 transition-transform duration-300">
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow mb-5"
                  style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                >
                  {t.icon}
                </div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-2">
                  {t.label}
                </div>
                <h3 className="text-xl font-semibold text-ink-50 mb-3">{t.title}</h3>
                <p className="text-ink-200 leading-relaxed mb-4">{t.description}</p>
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {t.skills.map((s) => (
                    <span key={s} className="text-[0.74rem] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-ink-200">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="Outcomes"
          items={[
            "Competencies that show up in real decisions and behaviors.",
            "Leaders who progress through clear capability tracks.",
            "Performance-based learning aligned to organizational outcomes.",
            "A development model that scales across the leadership pipeline.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Competency-Based"
        title="Start designing."
        description="Tell us which competencies your business depends on — we'll design the development tracks that build them."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
