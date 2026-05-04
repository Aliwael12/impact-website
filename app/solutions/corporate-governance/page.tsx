import type { Metadata } from "next";
import { Scale, Network, Gauge } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Corporate Governance | Impact Organizational Development",
  description:
    "Governance frameworks that clarify roles, responsibilities, and decision-making authority — strengthening alignment, oversight, and confident operation at scale.",
};

export default function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="OD · Corporate Governance"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Organizational Development", href: "/solutions/organizational-development" },
          { label: "Corporate Governance" },
        ]}
        title={
          <>
            Governance built for{" "}
            <span className="text-grad">control, accountability and speed</span>.
          </>
        }
        description="Strong governance balances control, accountability, and effective execution. Impact establishes governance frameworks that clarify roles, responsibilities, and decision-making authority — enabling organizations to operate with greater confidence at scale."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="What you get"
          title="Frameworks that align oversight with execution."
        />
        <IconGrid
          items={[
            { icon: <Scale size={18} />, title: "Decision-rights design", description: "Clear authority matrices so leaders know what they own — and what they don't." },
            { icon: <Network size={18} />, title: "Governance architecture", description: "Defined roles, committees, and forums aligned to the business operating model." },
            { icon: <Gauge size={18} />, title: "Execution cadence", description: "Reporting and review rhythms that keep oversight close to the work." },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="Outcomes"
          items={[
            "Clear decision-making structures and accountability across the organization.",
            "Defined roles and governance frameworks across functions.",
            "Improved alignment between leadership and execution.",
            "Faster, more effective organizational decision-making.",
            "A governance model built to support the next stage of organizational growth.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Corporate Governance"
        title="Explore governance support."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
