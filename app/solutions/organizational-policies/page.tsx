import type { Metadata } from "next";
import { FileText, Shuffle, ShieldCheck } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";

export const metadata: Metadata = {
  title: "Organizational Policies & Procedures | Impact",
  description:
    "Define decision flows, standardize operations, and reduce ambiguity — enabling teams to operate efficiently and consistently across functions.",
};

export default function PoliciesPage() {
  return (
    <>
      <PageHero
        eyebrow="OD · Policies & Procedures"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Organizational Development", href: "/solutions/organizational-development" },
          { label: "Policies & Procedures" },
        ]}
        title={
          <>
            Operating clarity that <span className="text-grad">scales execution</span>.
          </>
        }
        description="Execution at scale depends on clarity in how decisions are made, how work gets done, and how accountability is structured. Impact structures policies and procedures that define decision flows and standardize operations."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="What you get"
          title="Operating infrastructure built to scale."
        />
        <IconGrid
          items={[
            { icon: <FileText size={18} />, title: "Decision-flow design", description: "Clear policies that define how decisions are made, escalated, and owned." },
            { icon: <Shuffle size={18} />, title: "Standardized operations", description: "Procedures that translate strategy into consistent day-to-day execution." },
            { icon: <ShieldCheck size={18} />, title: "Accountability architecture", description: "Roles, ownership, and oversight built for clarity and speed." },
          ]}
        />
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="Outcomes"
          items={[
            "Reduced ambiguity in how work flows across functions.",
            "Faster onboarding through clear, accessible procedures.",
            "Stronger compliance built into operating rhythms.",
            "Smoother execution across teams, levels, and geographies.",
            "An HR and operations infrastructure built to scale.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Policies & Procedures"
        title="Discuss your policy and procedure needs."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
