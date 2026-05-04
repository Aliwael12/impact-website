import type { Metadata } from "next";
import { Globe2, Sparkles, Brain, Award, ExternalLink } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import CTA from "@/components/CTA";
import { Reveal, Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Global Learning Partners & International Affiliates | Impact",
  description:
    "Impact's global affiliates and international learning partners — Culture Partners, Knolskape, BCon, and Gallup — delivering leadership development and simulation-based programs across MENA.",
};

const PARTNERS = [
  {
    name: "Culture Partners / Paradigm Learning",
    tag: "Discovery learning",
    icon: <Award size={20} />,
    desc: "Award-winning Discovery Maps® and classroom-based business games used by leading organizations worldwide. Over 3 million learners across the globe.",
    color: "from-brand-blue/30",
  },
  {
    name: "Knolskape",
    tag: "Online simulations",
    icon: <Sparkles size={20} />,
    desc: "Multi-award-winning online simulations provider offering assessment, development, and engagement through a powerful gamified platform.",
    color: "from-brand-turq/30",
  },
  {
    name: "BCon",
    tag: "Behavioral science",
    icon: <Brain size={20} />,
    desc: "Behavioral science-based tools (LIFO® and accountability circles) that promote productivity, innovation, and high-trust problem-solving climates.",
    color: "from-accent-green/30",
  },
  {
    name: "Gallup",
    tag: "Strengths-based development",
    icon: <Globe2 size={20} />,
    desc: "Global analytics and advice firm behind CliftonStrengths® — supporting leaders with decades of research and executive coaching methodology.",
    color: "from-accent-purple/30",
  },
];

export default function AffiliatesPage() {
  return (
    <>
      <PageHero
        eyebrow="International Affiliates"
        crumbs={[{ label: "International Affiliates" }]}
        title={
          <>
            World-class methodology delivered with{" "}
            <span className="text-grad">regional fluency</span>.
          </>
        }
        description="Access globally benchmarked methodologies through our affiliate network — bringing deep expertise in leadership development, behavioral science, business simulations, and digital learning, delivered with regional context."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Our affiliate ecosystem"
          title="Four global partners. One coordinated regional delivery."
          description="Through partnerships with Paradigm Learning, Knolskape, BCon, and Gallup, Impact delivers award-winning business simulations, experiential learning tools, and leadership development that combines global expertise with MENA context."
        />
        <Stagger className="grid md:grid-cols-2 gap-5">
          {PARTNERS.map((p) => (
            <Item key={p.name}>
              <article className={`surface rounded-2xl p-7 h-full hover:-translate-y-1 transition-transform duration-300 bg-gradient-to-br ${p.color} to-transparent`}>
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow"
                    style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
                  >
                    {p.icon}
                  </div>
                  <span className="chip text-[0.7rem] py-1 px-2.5 normal-case tracking-[0.16em]">{p.tag}</span>
                </div>
                <h3 className="text-xl font-semibold text-ink-50 mb-3">{p.name}</h3>
                <p className="text-ink-200 leading-relaxed">{p.desc}</p>
              </article>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section id="join" className="!pt-0">
        <Reveal>
          <div className="surface-strong rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
            <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
              <div>
                <span className="chip mb-5">Affiliate program</span>
                <h2 className="text-3xl md:text-[2.2rem] font-semibold text-ink-50 leading-tight mb-3 max-w-[24ch]">
                  Trainers, facilitators, and consultants — partner with Impact.
                </h2>
                <p className="text-ink-100 max-w-[58ch]">
                  We&apos;re building a network of practitioners across MENA who share our commitment to experiential, behaviorally grounded development. Apply to join our affiliate network.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 md:justify-end">
                <a href="mailto:info@impact-ld.me?subject=Affiliate%20Network%20Application" className="btn btn-turq btn-lg">
                  Apply to join
                  <ExternalLink size={15} />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTA
        eyebrow="Explore affiliates"
        title="See how global methodology translates into your context."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "Explore Assessments & Coaching", href: "/assessments-coaching" }}
      />
    </>
  );
}
