import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, FileText, Lightbulb, Users, Activity, Gamepad2, Download, ArrowRight, Mail } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import CTA from "@/components/CTA";
import { Reveal, Stagger, Item } from "@/components/Motion";
import Newsletter from "@/components/Newsletter";

export const metadata: Metadata = {
  title: "Learning Lab — Leadership & OD Insights | Impact",
  description:
    "Thought leadership, articles, and practical resources covering leadership, customer experience, organizational development, and simulations.",
};

const CATEGORIES = [
  { icon: <Users size={18} />, t: "Leadership", d: "Insights and tools focused on developing effective leaders and strengthening leadership capability." },
  { icon: <Lightbulb size={18} />, t: "Customer Experience", d: "Perspectives on service culture, customer engagement, and customer-facing performance." },
  { icon: <Activity size={18} />, t: "Organizational Development", d: "Thought leadership on culture, transformation, change, alignment, and organizational effectiveness." },
  { icon: <BookOpen size={18} />, t: "Performance", d: "Content focused on team effectiveness, accountability, capability building, and measurable outcomes." },
  { icon: <Gamepad2 size={18} />, t: "Simulations", d: "Resources exploring experiential learning, business simulations, and applied practice." },
];

const ARTICLES = [
  { tag: "Leadership", title: "Why behavior change beats knowledge transfer in leadership development", read: "8 min" },
  { tag: "Simulations", title: "How business simulations accelerate decision-making at scale", read: "6 min" },
  { tag: "OD", title: "Operating models for the next stage of GCC growth", read: "11 min" },
  { tag: "Performance", title: "Building a culture of accountability without losing trust", read: "7 min" },
  { tag: "CX", title: "Service excellence as a leadership outcome — not a training topic", read: "5 min" },
  { tag: "Coaching", title: "When CliftonStrengths® meets organizational strategy", read: "9 min" },
];

export default function LearningLabPage() {
  return (
    <>
      <PageHero
        eyebrow="Learning Lab"
        crumbs={[{ label: "Learning Lab" }]}
        title={
          <>
            Thought leadership for{" "}
            <span className="text-grad">HR, L&D, and business leaders</span>.
          </>
        }
        description="Insights on leadership, learning science, and organizational performance — built for the people designing capability strategies across MENA."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Content categories"
          title="Five focus areas where we publish."
        />
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {CATEGORIES.map((c) => (
            <Item key={c.t}>
              <div className="surface rounded-2xl p-5 h-full hover:-translate-y-1 transition-transform duration-300 cursor-pointer">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/15 text-brand-turq mb-3">
                  {c.icon}
                </div>
                <div className="text-ink-50 font-semibold text-[0.95rem] mb-1.5">{c.t}</div>
                <div className="text-ink-200 text-[0.82rem] leading-relaxed">{c.d}</div>
              </div>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Latest articles"
          title="Practical articles for real workplace challenges."
        />
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ARTICLES.map((a, i) => (
            <Item key={i}>
              <article className="surface rounded-2xl overflow-hidden h-full hover:-translate-y-1 transition-transform duration-300 cursor-pointer flex flex-col group">
                <div
                  className="aspect-[16/9] grid place-items-center relative overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, rgba(28,101,165,0.55), rgba(8,160,235,0.18))`,
                  }}
                >
                  <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
                  <div className="relative grid h-14 w-14 place-items-center rounded-2xl bg-white/[0.08] border border-white/10 backdrop-blur-md text-brand-turq">
                    <FileText size={20} />
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3 text-[0.75rem]">
                    <span className="text-brand-turq font-semibold uppercase tracking-[0.18em]">{a.tag}</span>
                    <span className="text-ink-300">{a.read}</span>
                  </div>
                  <h3 className="text-ink-50 font-semibold text-[1.05rem] leading-snug mb-4 flex-1">{a.title}</h3>
                  <div className="inline-flex items-center gap-1.5 text-brand-turq text-[0.88rem] font-medium">
                    Read article
                    <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </article>
            </Item>
          ))}
        </Stagger>
      </Section>

      <Section id="whitepapers" className="!pt-0">
        <Reveal>
          <div className="surface-strong rounded-[2rem] p-8 md:p-12 grid md:grid-cols-[1.4fr_1fr] gap-8 items-end relative overflow-hidden">
            <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
            <div className="relative">
              <span className="chip mb-5">Whitepapers & downloads</span>
              <h2 className="text-3xl md:text-[2rem] font-semibold text-ink-50 leading-tight mb-3 max-w-[24ch]">
                Research-backed resources, frameworks, and toolkits.
              </h2>
              <p className="text-ink-100 max-w-[58ch]">
                Download practical resources to support your learning strategy — from competency framework templates to leadership measurement guides.
              </p>
            </div>
            <div className="relative flex flex-col gap-2">
              {[
                "Leadership measurement playbook",
                "Experiential learning design guide",
                "Competency framework starter kit",
              ].map((t) => (
                <button key={t} className="surface rounded-xl p-4 flex items-center justify-between text-left hover:border-brand-turq/30 transition-colors group">
                  <span className="text-ink-50 text-[0.92rem]">{t}</span>
                  <Download size={15} className="text-brand-turq group-hover:translate-y-0.5 transition-transform" />
                </button>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="surface rounded-[1.6rem] p-7 md:p-9 grid md:grid-cols-[1fr_auto] gap-5 items-center">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Mail size={16} className="text-brand-turq" />
                <span className="text-[0.7rem] uppercase tracking-[0.2em] text-brand-turq font-semibold">Newsletter</span>
              </div>
              <h3 className="text-xl font-semibold text-ink-50 mb-1">Get Impact insights, monthly.</h3>
              <p className="text-ink-200 text-[0.92rem]">A curated digest for HR, L&D, and business leaders across MENA.</p>
            </div>
            <Newsletter />
          </div>
        </Reveal>
      </Section>

      <CTA
        eyebrow="Learning Lab"
        title="Explore insights."
        primary={{ label: "Browse all articles", href: "#" }}
        secondary={{ label: "Talk to a specialist", href: "/contact" }}
      />
    </>
  );
}
