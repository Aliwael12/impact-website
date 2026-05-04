import type { Metadata } from "next";
import { Gamepad2, Users, Sparkles, Monitor, Globe, RefreshCw } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Experiential Learning & Business Simulations | Impact",
  description:
    "Immersive business simulations and experiential learning programs that accelerate leadership capability and real-world decision-making.",
};

export default function ExperientialPage() {
  return (
    <>
      <PageHero
        eyebrow="Pillar 02 — Experiential Learning"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Experiential Learning" },
        ]}
        title={
          <>
            Learning sticks when people <span className="text-grad">experience it.</span>
          </>
        }
        description="Through immersive simulations and hands-on learning journeys, Impact helps participants build capabilities faster, retain insights longer, and apply them directly in the workplace."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Core formats"
          title="Three formats. Same goal — active, memorable learning."
          description="Practical formats that simulate real business situations and create active, memorable learning experiences."
        />
        <IconGrid
          items={[
            { icon: <Gamepad2 size={18} />, title: "Business Simulations", description: "Immersive experiences that replicate real organizational challenges and let participants practice decisions in a risk-free environment." },
            { icon: <Users size={18} />, title: "Scenario-Based Workshops", description: "Facilitated workshops built around practical scenarios that encourage problem solving, collaboration, and reflection." },
            { icon: <Sparkles size={18} />, title: "Gamified Learning Journeys", description: "Structured experiences that use challenge, storytelling, and interaction to increase engagement and retention." },
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
                  Facilitation & application
                </div>
                <h3 className="text-2xl font-semibold text-ink-50 mb-4">
                  Every experience is supported by expert facilitation.
                </h3>
                <p className="text-ink-100 leading-relaxed">
                  Structured debriefing helps participants reflect on decisions, extract insights, and connect lessons to real workplace challenges — so learning translates into practical behavior change, not just engagement in the moment.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-2.5">
                  {[
                    { i: <Monitor size={16} />, t: "In-person" },
                    { i: <Globe size={16} />, t: "Virtual" },
                    { i: <RefreshCw size={16} />, t: "Hybrid" },
                  ].map((m) => (
                    <div key={m.t} className="surface rounded-xl p-3 text-center">
                      <div className="grid h-8 w-8 mx-auto place-items-center rounded-lg bg-brand-turq/15 text-brand-turq mb-1.5">
                        {m.i}
                      </div>
                      <div className="text-ink-100 text-[0.85rem] font-medium">{m.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
          <OutcomeCard
            title="Outcomes participants experience"
            items={[
              "Accelerated skill transfer from learning to workplace.",
              "Stronger behavior change reinforced by reflection and practice.",
              "Deeper engagement that drives retention and application.",
              "Measurable business impact through scenario-based decisions.",
            ]}
          />
        </div>
      </Section>

      <CTA
        eyebrow="Experiential"
        title="Explore our experiential learning solutions."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "See affiliates (Knolskape, Culture Partners)", href: "/affiliates" }}
      />
    </>
  );
}
