import type { Metadata } from "next";
import Link from "next/link";
import { Brain, MessageCircle, Compass, Layers3, Clock, Users } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard, Steps } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal, Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Learning & Development Solutions | Corporate Training",
  description:
    "Customized learning and development solutions including leadership training, workshops, learning journeys, and material development across MENA.",
};

export default function LDPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 01 — L&D Solutions"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Learning & Development" },
        ]}
        title={
          <>
            Structured learning journeys that build{" "}
            <span className="text-grad">sustained capability</span>.
          </>
        }
        description="Impact moves beyond one-time interventions — combining design, delivery, and continuous reinforcement so learning is applied in real business contexts and translated into measurable performance."
      />

      {/* Competency areas */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Competency areas"
          title="Four core capability areas that strengthen individual and organizational performance."
        />
        <IconGrid
          columns={4}
          items={[
            { icon: <Brain size={18} />, title: "Core Business Skills", description: "Strategic thinking, problem solving, decision-making, and business acumen." },
            { icon: <Users size={18} />, title: "People & Leadership", description: "Leading teams, developing talent, coaching, feedback, and performance management." },
            { icon: <MessageCircle size={18} />, title: "Communication & Influence", description: "Effective communication, stakeholder management, negotiation, and influence." },
            { icon: <Compass size={18} />, title: "Personal Effectiveness", description: "Time and priority management, adaptability, resilience, ownership, and accountability." },
          ]}
        />
      </Section>

      {/* Three sub-paths */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Three ways to engage"
          title="Choose by competency, by participant level, or by duration."
          description="Three lenses on the same architecture — pick the one that maps best to how your organization defines its priorities."
        />
        <Stagger className="grid md:grid-cols-3 gap-5">
          {[
            { href: "/solutions/competency-based", icon: <Layers3 size={20} />, t: "Competency-Based", d: "Leading Self · Leading Relationships · Leading Teams." },
            { href: "/solutions/participant-level", icon: <Users size={20} />, t: "Participant Level", d: "Frontline → Supervisors → Managers → Senior Leaders." },
            { href: "/solutions/duration-based", icon: <Clock size={20} />, t: "Duration-Based", d: "Journeys (months) · Workshops (days) · Impulse (hours)." },
          ].map((c) => (
            <Item key={c.href}>
              <Link
                href={c.href}
                className="block surface rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <div
                  className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow mb-5"
                  style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                >
                  {c.icon}
                </div>
                <h3 className="text-xl font-semibold text-ink-50 mb-2">{c.t}</h3>
                <p className="text-ink-200 leading-relaxed">{c.d}</p>
                <div className="mt-5 inline-flex items-center gap-1.5 text-brand-turq text-[0.9rem] font-medium">
                  Explore →
                </div>
              </Link>
            </Item>
          ))}
        </Stagger>
      </Section>

      {/* Process */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <Reveal>
              <span className="chip mb-5">How we deliver</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-[2.2rem] font-semibold text-ink-50 leading-tight mb-5">
                Designed for behavior change, not just knowledge transfer.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="text-ink-100 leading-relaxed mb-6">
                Each L&D engagement starts with diagnostic insight and ends with reinforcement — so what learners practice in the room shows up in how they lead, decide, and collaborate.
              </p>
            </Reveal>
            <OutcomeCard
              variant="ghost"
              title="What organizations gain"
              items={[
                "Stronger leadership pipelines aligned to strategy.",
                "Behaviors that scale beyond the training room.",
                "Programs built around your business challenges, not generic content.",
                "Reinforcement that makes learning stick over months, not days.",
              ]}
            />
          </div>
          <div>
            <Steps
              steps={[
                { title: "Diagnose", description: "Map capability gaps, business priorities, and audience reality." },
                { title: "Design", description: "Architect a learning journey with assessments, simulations, and coaching." },
                { title: "Deliver", description: "Experiential, scenario-led learning across in-person, virtual, and hybrid formats." },
                { title: "Reinforce", description: "Coaching, micro-learning, and team rituals that embed change." },
                { title: "Measure", description: "Behavior shift indicators, performance outcomes, learner satisfaction." },
              ]}
            />
          </div>
        </div>
      </Section>

      {/* Format card */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Time-frame"
          title="Months, days, or hours — match the format to the outcome."
          description="Learning journeys for transformation, workshops for focused capability, or Impulse micro-learning for just-in-time skill development."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { t: "Learning Journeys", sub: "Months → Years", d: "Comprehensive leadership pathways combining assessment, experiential learning, and coaching.", c: "from-brand-blue/40 to-brand-turq/10" },
            { t: "Workshops", sub: "Days → Weeks", d: "Focused interventions delivered intensively to accelerate specific skill development.", c: "from-accent-green/30 to-brand-turq/10" },
            { t: "Impulse Micro-Learning", sub: "Hours", d: "Plug-and-play learning bites with 130+ activities and 20+ gamification themes.", c: "from-accent-purple/30 to-brand-turq/10" },
          ].map((f, i) => (
            <Reveal key={f.t} delay={i * 0.05}>
              <div className={`surface rounded-2xl p-7 h-full bg-gradient-to-br ${f.c}`}>
                <div className="text-[0.72rem] uppercase tracking-[0.2em] font-semibold text-brand-turq mb-2">
                  {f.sub}
                </div>
                <h3 className="text-xl font-semibold text-ink-50 mb-3">{f.t}</h3>
                <p className="text-ink-100 leading-relaxed">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTA
        eyebrow="L&D"
        title="Request a customized learning journey."
        description="Tell us your audience, scale, and outcomes — we'll come back with a journey architecture designed for your business."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "Browse other solutions", href: "/solutions" }}
      />
    </>
  );
}
