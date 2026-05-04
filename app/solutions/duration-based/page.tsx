import type { Metadata } from "next";
import { Calendar, Layers3, Zap } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Duration-Based Solutions | Journeys · Workshops · Impulse | Impact",
  description:
    "Flexible leadership development programs ranging from focused workshops to long-term learning journeys aligned with organizational needs.",
};

const FORMATS = [
  {
    icon: <Zap size={20} />,
    duration: "Hours · Days",
    label: "Short Interventions",
    title: "Focused workshops & learning labs",
    description: "Designed to address specific skills or challenges within a short timeframe — practical, intense, and outcome-driven.",
    examples: ["Skill workshops", "Simulations", "Learning labs"],
    color: "from-accent-green/30",
  },
  {
    icon: <Layers3 size={20} />,
    duration: "Weeks · Months",
    label: "Program Series",
    title: "Multi-session learning programs",
    description: "Delivered over several weeks or months to reinforce learning and encourage behavioral change over time.",
    examples: ["Manager programs", "Leadership cohorts", "Functional academies"],
    color: "from-brand-turq/30",
  },
  {
    icon: <Calendar size={20} />,
    duration: "Months · Years",
    label: "Development Journeys",
    title: "Comprehensive leadership pathways",
    description: "Integrate assessments, experiential learning, business simulations, and coaching to support long-term capability building.",
    examples: ["Leadership pipelines", "Executive development", "Talent succession"],
    color: "from-brand-blue/30",
  },
];

export default function DurationBasedPage() {
  return (
    <>
      <PageHero
        eyebrow="L&D · Duration-Based"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Learning & Development", href: "/solutions/learning-development" },
          { label: "Duration-Based" },
        ]}
        title={
          <>
            Best-fit by need —{" "}
            <span className="text-grad">hours, weeks, or years</span>.
          </>
        }
        description="Organizations choose different learning formats depending on objectives, timelines, and the level of impact required. Impact offers flexible formats — short interventions, program series, or long-term capability journeys."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Three formats"
          title="Match the format to the outcome — and the audience reality."
        />
        <Stagger className="grid md:grid-cols-3 gap-5">
          {FORMATS.map((f) => (
            <Item key={f.label}>
              <div className={`surface rounded-2xl p-7 h-full hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-br ${f.color} to-transparent`}>
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow mb-5"
                  style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                >
                  {f.icon}
                </div>
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-2">
                  {f.duration}
                </div>
                <h3 className="text-xl font-semibold text-ink-50 mb-2">{f.label}</h3>
                <div className="text-ink-100 font-medium mb-3">{f.title}</div>
                <p className="text-ink-200 leading-relaxed mb-5 text-[0.95rem]">{f.description}</p>
                <div className="pt-4 border-t border-white/5">
                  <div className="text-[0.7rem] uppercase tracking-[0.18em] text-ink-300 font-semibold mb-2">
                    Common deployments
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {f.examples.map((e) => (
                      <span key={e} className="text-[0.74rem] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-ink-200">
                        {e}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="What organizations gain"
          items={[
            "Scalable formats that match business priorities and workforce needs.",
            "Clear sequencing from short interventions to long-term capability.",
            "Flexibility to deploy across teams, functions, and geographies.",
            "Outcome-aligned design — not duration for the sake of it.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Duration-Based"
        title="Let's design the right solution."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
