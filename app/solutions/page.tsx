import type { Metadata } from "next";
import Link from "next/link";
import { GraduationCap, Layers, BarChart3, Users, ArrowRight, FileSearch, Wrench, Cpu, ClipboardCheck, RefreshCw } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import PillarCard from "@/components/PillarCard";
import { Methodology } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Solutions & Services — Leadership, Learning & OD | Impact",
  description:
    "Explore leadership development, experiential learning, and organizational capability solutions designed to strengthen teams and drive measurable performance.",
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions & services"
        crumbs={[{ label: "Solutions" }]}
        title={
          <>
            Tailored learning journeys for{" "}
            <span className="text-grad">measurable performance.</span>
          </>
        }
        description="Organizations partner with Impact to address specific business challenges — from developing leadership pipelines and strengthening team performance to building organizational capabilities at scale."
      />

      {/* 4 pillars */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Four pillars"
          title="One ecosystem. Four ways to build capability."
          description="Engage with the right approach based on your priorities, maturity level, and workforce needs — leadership, capability, simulations, or culture."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <PillarCard
            num="01"
            title="L&D Solutions"
            description="Leadership pipelines and workforce capability through structured, customized learning journeys."
            href="/solutions/learning-development"
            icon={<GraduationCap size={20} />}
            tags={["Journeys", "Workshops", "Coaching"]}
            cta="Explore L&D"
            index={0}
          />
          <PillarCard
            num="02"
            title="Experiential Learning"
            description="Applied, high-impact learning through immersive simulations that replicate real-world challenges."
            href="/solutions/experiential-learning"
            icon={<Layers size={20} />}
            tags={["Simulations", "Gamification"]}
            cta="See simulations"
            index={1}
          />
          <PillarCard
            num="03"
            title="Assessments & Coaching"
            description="Diagnose capability gaps, support leadership development, and drive performance improvement."
            href="/assessments-coaching"
            icon={<BarChart3 size={20} />}
            tags={["Gallup", "MBTI", "BCon"]}
            cta="Explore tools"
            index={2}
          />
          <PillarCard
            num="04"
            title="Impact GO"
            description="Strengthen team dynamics, collaboration, and engagement through high-impact team experiences."
            href="/impact-go"
            icon={<Users size={20} />}
            tags={["Retreats", "Events"]}
            cta="Design an event"
            index={3}
          />
        </div>
      </Section>

      {/* Organizational Development */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Organizational Development"
          title="Aligning strategy, capability, and systems for sustainable performance."
          description="Six interconnected practice areas — strategy, talent, competency, policies, governance, and culture — delivered through one seamless solution."
        />
        <Reveal>
          <Link
            href="/solutions/organizational-development"
            className="block surface-strong rounded-[2rem] p-8 md:p-10 mb-8 hover:scale-[1.005] transition-transform duration-300"
          >
            <div className="grid md:grid-cols-[1.5fr_1fr] gap-6 items-center">
              <div>
                <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-2">
                  Featured pillar
                </div>
                <h3 className="text-2xl md:text-[1.7rem] font-semibold text-ink-50 mb-3">
                  End-to-end OD interventions, in-house and global expertise.
                </h3>
                <p className="text-ink-100 max-w-[60ch]">
                  From diagnosis to sustainable implementation — clear operating models, stronger accountability, healthier culture, and measurable readiness for the regulatory and strategic demands of the GCC.
                </p>
              </div>
              <div className="flex md:justify-end">
                <span className="btn btn-turq">
                  Explore OD <ArrowRight size={15} />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            { href: "/solutions/strategy", title: "Strategy", desc: "Translate ambition into action through clear, executable strategy." },
            { href: "/solutions/talent-development", title: "Talent Development", desc: "Build leadership pipelines and accelerate high-potential growth." },
            { href: "/solutions/competency-building", title: "Competency Building", desc: "Activate frameworks that link capability to performance." },
            { href: "/solutions/organizational-policies", title: "Policies & Procedures", desc: "Define decision flows and standardize operations at scale." },
            { href: "/solutions/corporate-governance", title: "Corporate Governance", desc: "Clarify roles, responsibilities, and decision-making authority." },
            { href: "/solutions/cultural-transformation", title: "Cultural Transformation", desc: "Shift mindset, behavior, rituals, and systems for sustainable culture." },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="surface rounded-xl p-5 hover:border-brand-turq/30 hover:-translate-y-0.5 transition-all duration-200 group block"
              style={{ borderColor: undefined }}
            >
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-ink-50 font-semibold">{s.title}</h4>
                <ArrowRight size={14} className="text-brand-turq opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all" />
              </div>
              <p className="text-ink-200 text-[0.88rem] leading-relaxed">{s.desc}</p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Methodology */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Methodology"
          title={
            <>
              How we move from challenge to <span className="text-brand-turq">sustained outcome</span>.
            </>
          }
          description="A disciplined five-stage approach — designed to translate strategic intent into measurable behavior change."
        />
        <Methodology
          steps={[
            { label: "Research", sub: "Diagnose context & priorities" },
            { label: "Design", sub: "Build the right journey" },
            { label: "Delivery", sub: "Experiential, applied, scalable" },
            { label: "Evaluation", sub: "Measure capability & impact" },
            { label: "Reinforcement", sub: "Sustain behavior change" },
          ]}
        />
        <div className="mt-12 grid md:grid-cols-5 gap-3">
          {[
            { i: <FileSearch size={18} />, t: "Discovery & diagnostics" },
            { i: <Wrench size={18} />, t: "Solution architecture" },
            { i: <Cpu size={18} />, t: "Experiential delivery" },
            { i: <ClipboardCheck size={18} />, t: "Outcomes measurement" },
            { i: <RefreshCw size={18} />, t: "Coaching & reinforcement" },
          ].map((c, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="surface rounded-xl p-4 flex items-center gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-blue/15 text-brand-turq">
                  {c.i}
                </div>
                <div className="text-ink-100 text-[0.88rem] font-medium">{c.t}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        eyebrow="Build the right solution"
        title="Not sure which pillar fits? Let's design it together."
        description="A 30-minute discovery call to map your priorities to the right Impact solution."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "View international affiliates", href: "/affiliates" }}
      />
    </>
  );
}
