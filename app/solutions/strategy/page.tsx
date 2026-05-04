import type { Metadata } from "next";
import { Compass, Map, Workflow } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Strategy Consulting | Impact Organizational Development",
  description:
    "Impact partners with leadership teams across the GCC to shape clear, actionable strategies that connect business priorities with people, capability, and execution.",
};

export default function StrategyPage() {
  return (
    <>
      <PageHero
        eyebrow="OD · Strategy"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Organizational Development", href: "/solutions/organizational-development" },
          { label: "Strategy" },
        ]}
        title={
          <>
            From intent to{" "}
            <span className="text-grad">measurable performance</span>.
          </>
        }
        description="Effective strategy goes beyond direction. It requires clarity, focus, and the ability to translate ambition into action — connecting business priorities with people, capability and execution."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="What you get"
          title="A strategy you can act on — not a deck that sits on a shelf."
          description="We work alongside your leadership ensuring strategy outputs reflect global best practice and the realities of GCC markets."
        />
        <IconGrid
          items={[
            { icon: <Compass size={18} />, title: "Strategic diagnostics", description: "Clear-eyed assessment of where you are, what's working, and what's blocking forward motion." },
            { icon: <Map size={18} />, title: "Prioritized roadmaps", description: "Sequenced initiatives, resource alignment, and KPIs designed for execution." },
            { icon: <Workflow size={18} />, title: "Structured co-creation", description: "Facilitated leadership sessions that build alignment and shared ownership." },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="What changes after we work together"
          items={[
            "Leadership team alignment around a clear set of strategic priorities.",
            "A roadmap that connects strategy to capability, structure, and execution.",
            "Faster, more confident decision-making across the leadership pipeline.",
            "Strategic clarity that cascades to teams and operates in everyday work.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Strategy"
        title="Book a strategy session."
        primary={{ label: "Book a strategy session", href: "/contact" }}
        secondary={{ label: "Explore other OD practices", href: "/solutions/organizational-development" }}
      />
    </>
  );
}
