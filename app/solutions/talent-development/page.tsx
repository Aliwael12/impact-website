import type { Metadata } from "next";
import { Sparkles, Activity, Target } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Talent Development Solutions | Leadership & Capability Growth",
  description:
    "Integrated development journeys that build leadership capability, accelerate high-potential growth, and strengthen critical roles across MENA.",
};

export default function TalentDevPage() {
  return (
    <>
      <PageHero
        eyebrow="OD · Talent Development"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Organizational Development", href: "/solutions/organizational-development" },
          { label: "Talent Development" },
        ]}
        title={
          <>
            Build the talent your <span className="text-grad">strategy depends on</span>.
          </>
        }
        description="Sustainable performance is driven by the strength and readiness of an organization's talent. Impact designs integrated development journeys that build leadership capability, accelerate high-potential growth, and strengthen critical roles."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="How we differentiate"
          title="More than standalone training — integrated development pathways."
          description="Our approach combines assessment, experiential learning, simulations, and coaching to support sustained capability growth across the organization."
        />
        <IconGrid
          items={[
            { icon: <Activity size={18} />, title: "Diagnostic-led", description: "Assessments identify strengths, gaps, and leadership potential — informing every design choice." },
            { icon: <Sparkles size={18} />, title: "Experiential journeys", description: "Workshops, simulations, and applied learning experiences that build capability through practice." },
            { icon: <Target size={18} />, title: "Coaching & feedback", description: "Practical leadership challenges supported by coaching that accelerates readiness." },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="Outcomes"
          items={[
            "Stronger pipelines built on data, not assumption.",
            "Better readiness for roles before they're needed.",
            "Accelerated performance through applied learning.",
            "A sustainable pipeline of future leaders aligned with organizational strategy.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Talent Development"
        title="Map your growth."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "Explore Assessments & Coaching", href: "/assessments-coaching" }}
      />
    </>
  );
}
