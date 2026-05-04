import type { Metadata } from "next";
import Link from "next/link";
import { Award, Sparkles, Target, Layers } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { OutcomeCard } from "@/components/Blocks";
import CTA from "@/components/CTA";
import { Reveal } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Flagship Programs — Signature Solutions | Impact",
  description:
    "Impact's Flagship Programs are high-impact, productized solutions designed to deliver scalable and measurable results across organizations.",
};

export default function FlagshipPage() {
  return (
    <>
      <PageHero
        eyebrow="Flagship Programs"
        crumbs={[{ label: "Flagship Programs" }]}
        title={
          <>
            High-impact, productized solutions for{" "}
            <span className="text-grad">scalable, measurable results</span>.
          </>
        }
        description="Impact's Flagship Programs combine proven methodologies, experiential learning, and practical application — designed to address critical business challenges at scale."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Curated solutions"
          title="Built for the leadership and performance challenges we hear most."
          description="Productized but never generic — each flagship program is configured to your audience, scale, and outcomes."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {[
            { icon: <Sparkles size={20} />, t: "Impulse by Impact", d: "Modular microlearning library — fast, focused, scalable.", href: "/impulse" },
            { icon: <Layers size={20} />, t: "Leading Self · Relations · Teams", d: "Three integrated competency tracks across the leadership stack.", href: "/solutions/competency-based" },
            { icon: <Award size={20} />, t: "Localized Trainer Certification", d: "International certification programs adapted for regional rollout.", href: "/success-stories" },
            { icon: <Target size={20} />, t: "Executive Simulations", d: "Decision-making labs designed for senior leadership pipelines.", href: "/solutions/experiential-learning" },
          ].map((p) => (
            <Reveal key={p.t}>
              <Link href={p.href} className="block surface rounded-2xl p-7 hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow"
                    style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                  >
                    {p.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-ink-50">{p.t}</h3>
                </div>
                <p className="text-ink-200 leading-relaxed">{p.d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <OutcomeCard
          title="What flagship programs deliver"
          items={[
            "Scalable, repeatable outcomes across cohorts and geographies.",
            "Proven methodologies adapted to your business priorities.",
            "Faster time-to-value through productized engagement models.",
            "A strong foundation for ongoing capability building.",
          ]}
        />
      </Section>

      <CTA
        eyebrow="Flagship Programs"
        title="Explore which flagship fits your priorities."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "Browse all solutions", href: "/solutions" }}
      />
    </>
  );
}
