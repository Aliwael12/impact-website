import type { Metadata } from "next";
import Link from "next/link";
import { Compass, Users, Layers, FileText, Scale, Sparkles, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Organizational Development Services | Impact",
  description:
    "End-to-end Organizational Development interventions across strategy, talent, governance, policies, competency, and culture — designed for the GCC.",
};

const PRACTICES = [
  { href: "/solutions/strategy", icon: <Compass size={18} />, t: "Strategy", d: "Translate ambition into clear, executable strategic priorities." },
  { href: "/solutions/talent-development", icon: <Users size={18} />, t: "Talent Development", d: "Build leadership pipelines and accelerate high-potential growth." },
  { href: "/solutions/competency-building", icon: <Layers size={18} />, t: "Competency Building", d: "Activate frameworks that link capability to performance." },
  { href: "/solutions/organizational-policies", icon: <FileText size={18} />, t: "Policies & Procedures", d: "Define decision flows, standardize operations, reduce ambiguity." },
  { href: "/solutions/corporate-governance", icon: <Scale size={18} />, t: "Corporate Governance", d: "Clarify roles, responsibilities, and decision-making authority." },
  { href: "/solutions/cultural-transformation", icon: <Sparkles size={18} />, t: "Cultural Transformation", d: "Shift mindset, behavior, rituals, and systems for sustainable culture." },
];

export default function ODPage() {
  return (
    <>
      <PageHero
        eyebrow="Organizational Development"
        crumbs={[
          { label: "Solutions", href: "/solutions" },
          { label: "Organizational Development" },
        ]}
        title={
          <>
            Aligning strategy, capability and systems to drive{" "}
            <span className="text-grad">sustainable performance</span>.
          </>
        }
        description="Six interconnected practice areas — strategy, talent development, competency building, policies and procedures, corporate governance, and cultural transformation — ensuring people, processes, and structures work together to enable execution at scale."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Six interconnected practices"
          title="One ecosystem. Built for the GCC operating reality."
        />
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRACTICES.map((p) => (
            <Item key={p.href}>
              <Link
                href={p.href}
                className="group block surface rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <div
                  className="grid h-11 w-11 place-items-center rounded-xl text-white mb-5 shadow-glow"
                  style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                >
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink-50 mb-2 flex items-center justify-between">
                  {p.t}
                  <ArrowRight size={14} className="text-brand-turq opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </h3>
                <p className="text-ink-200 text-[0.92rem] leading-relaxed">{p.d}</p>
              </Link>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-5">
          <OutcomeCard
            title="What you get"
            items={[
              "End-to-end OD interventions delivered through in-house execution and global expertise.",
              "No reliance on off-the-shelf frameworks — solutions built for your context.",
              "Stronger alignment, governance, and execution across functions.",
              "From diagnosis through to sustainable implementation as one seamless solution.",
            ]}
          />
          <OutcomeCard
            variant="ghost"
            title="Outcomes you can expect"
            items={[
              "Clear operating models across functions.",
              "Stronger accountability and ownership.",
              "Healthier culture aligned with strategy.",
              "Better cross-functional performance.",
              "Measurable readiness for the regulatory and strategic demands of operating in the GCC.",
            ]}
          />
        </div>
      </Section>

      <CTA
        eyebrow="Organizational Development"
        title="Start the dialogue."
        description="Tell us what you're trying to align — strategy, talent, governance, or culture. We'll design the engagement."
        primary={{ label: "Book a discovery call", href: "/contact" }}
      />
    </>
  );
}
