import type { Metadata } from "next";
import { Brain, Users, Sparkles, Activity, BarChart3, Database } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal, Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Leadership Assessments & Coaching Programs | Impact",
  description:
    "Leadership assessments, diagnostics, and coaching programs that uncover capability gaps, translate insight into action, and accelerate leadership development.",
};

const TOOLS = [
  { t: "Gallup CliftonStrengths®", d: "Identifies individual strengths so leaders and teams build on natural talents to improve performance." },
  { t: "Gallup BP10", d: "Measures entrepreneurial talent and identifies individuals with strong innovation and business-building capability." },
  { t: "MBTI®", d: "Insights into personality preferences — improving communication, collaboration, and decision-making." },
  { t: "LIFO® / BCon", d: "Leadership styles, behavioral patterns, and interpersonal effectiveness for productivity, trust, and collaboration." },
  { t: "Knolskape Kognitive", d: "Measures behavior and potential, drawing logical conclusions from complex patterns at scale." },
  { t: "Knolskape Digital Awareness", d: "Scalable, data-driven evaluation of digital awareness with micro-learning to challenge existing minds." },
  { t: "Team Diagnostics", d: "Assesses team dynamics, alignment, and collaboration to improve collective performance." },
];

const USE_CASES = [
  { t: "Leadership Development Programs", d: "Understanding strengths and development areas before launching journeys." },
  { t: "Talent ID & Succession", d: "Identifying high-potentials and preparing the next generation of leaders." },
  { t: "Team Development", d: "Understanding team dynamics, communication styles, and collaboration patterns." },
  { t: "Entrepreneurial & Innovation", d: "Spotting individuals with strong entrepreneurial potential to drive new growth." },
  { t: "Coaching Engagements", d: "Deeper insight into leadership style — enabling more focused, effective coaching conversations." },
];

export default function AssessmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 03 — Assessments & Coaching"
        crumbs={[{ label: "Assessments & Coaching" }]}
        title={
          <>
            Insight you can act on —{" "}
            <span className="text-grad">coaching that makes it stick</span>.
          </>
        }
        description="Organizations improve performance through a clear understanding of their people, their strengths, and the gaps that stand in the way of growth. Impact combines assessments, diagnostics and coaching to accelerate measurable development."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Our approach"
          title="Assessment insight integrated into the development journey."
          description="By combining assessment data, simulations, and structured coaching, organizations identify priorities, activate leadership capability, strengthen pipelines, and drive sustained performance improvement."
        />

        <div className="grid md:grid-cols-3 gap-4">
          {[
            { i: <Activity size={18} />, t: "Diagnose", d: "Use globally recognized tools to map strengths, gaps, and potential." },
            { i: <Sparkles size={18} />, t: "Translate", d: "Convert insight into targeted leadership development priorities." },
            { i: <BarChart3 size={18} />, t: "Reinforce", d: "Coaching and experiential learning that turns insight into behavior." },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="surface-strong rounded-2xl p-6">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-turq/15 text-brand-turq mb-4">
                  {c.i}
                </div>
                <h3 className="text-lg font-semibold text-ink-50 mb-2">{c.t}</h3>
                <p className="text-ink-200 text-[0.92rem] leading-relaxed">{c.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Assessment portfolio"
          title="Globally recognized tools, integrated into Impact journeys."
        />
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {TOOLS.map((tool) => (
            <Item key={tool.t}>
              <div className="surface rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/15 text-brand-turq mb-4">
                  <Database size={16} />
                </div>
                <h3 className="text-ink-50 font-semibold mb-2">{tool.t}</h3>
                <p className="text-ink-200 text-[0.92rem] leading-relaxed">{tool.d}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="When organizations use assessments"
          title="Five common moments where insight changes outcomes."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-3">
          {USE_CASES.map((u, i) => (
            <Reveal key={u.t} delay={i * 0.04}>
              <div className="surface rounded-xl p-5 h-full">
                <div className="text-brand-turq font-condensed font-bold mb-2">{String(i + 1).padStart(2, "0")}</div>
                <div className="text-ink-50 font-semibold text-[0.95rem] mb-1.5">{u.t}</div>
                <div className="text-ink-200 text-[0.84rem] leading-relaxed">{u.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-5">
          <OutcomeCard
            title="Coaching & development integration"
            items={[
              "Insight directly translated into sustained behavioral change.",
              "Structured coaching paired with experiential learning.",
              "Leaders supported in applying insights in real organizational contexts.",
              "Measurable improvement in capability and performance.",
            ]}
          />
          <OutcomeCard
            variant="ghost"
            title="What organizations gain"
            items={[
              "Clearer insights into leadership potential.",
              "Stronger talent pipelines built on data.",
              "Better decision-making about development investments.",
              "More targeted, more effective initiatives.",
            ]}
          />
        </div>
      </Section>

      <CTA
        eyebrow="Assessments & Coaching"
        title="Connect with Impact to explore the right tools."
        description="Suitable diagnostic tools, coaching approaches, and development pathways for your leadership strategy."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "See international affiliates", href: "/affiliates" }}
      />
    </>
  );
}
