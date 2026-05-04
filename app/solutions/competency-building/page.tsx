import type { Metadata } from "next";
import { Layers, BookOpen, Repeat } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Competency Building | Impact Organizational Development",
  description:
    "Develop and activate competency frameworks that translate business needs and strategic priorities into practical, role-relevant development pathways.",
};

export default function CompetencyBuildingPage() {
  return (
    <>
      <PageHero
        eyebrow="OD · Competency Building"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Organizational Development", href: "/solutions/organizational-development" },
          { label: "Competency Building" },
        ]}
        title={
          <>
            Competency frameworks that{" "}
            <span className="text-grad">live in the work</span>.
          </>
        }
        description="Organizational performance is shaped by the capabilities people bring to their roles every day. Impact develops and activates frameworks that translate business needs into measurable, scalable development pathways."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="What you get"
          title="Frameworks that go beyond documentation."
          description="We design frameworks built into development journeys, performance conversations, and learning infrastructure your organization can maintain."
        />
        <IconGrid
          items={[
            { icon: <Layers size={18} />, title: "Custom competency frameworks", description: "Built around the behaviors and outcomes that matter for your business — not generic models." },
            { icon: <BookOpen size={18} />, title: "Role-based development pathways", description: "Clear progression mapped to roles, levels, and capability transitions." },
            { icon: <Repeat size={18} />, title: "Reinforcement mechanisms", description: "Performance-based learning that activates competencies in everyday work." },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="Outcomes"
          items={[
            "Competencies that show up in real behavior, not just job descriptions.",
            "Development pathways aligned to performance expectations.",
            "Stronger linkage between learning and career progression.",
            "Reinforced capability through performance conversations and learning rituals.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Competency Building"
        title="Let's discuss more."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
