import type { Metadata } from "next";
import Link from "next/link";
import { Eye, Compass, Heart, Sparkles, ShieldCheck, Zap, Users2, MapPin, Award, Globe2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import { IconGrid, OutcomeCard } from "@/components/Blocks";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import { Reveal, Stagger, Item } from "@/components/Motion";
import LogoMarquee from "@/components/LogoMarquee";

export const metadata: Metadata = {
  title: "About Impact — Leadership Development Experts in MENA",
  description:
    "Learn about Impact, a leadership development and experiential learning firm helping organizations across the MENA region build capability and drive performance.",
};

const VALUES = [
  { icon: <Sparkles size={18} />, title: "Impact", description: "We focus on learning that drives measurable performance and real business results." },
  { icon: <ShieldCheck size={18} />, title: "Trust", description: "We build lasting partnerships through credibility, consistency, and shared accountability." },
  { icon: <Heart size={18} />, title: "Customer Centricity", description: "We design every solution around client context, goals, and learner needs." },
  { icon: <Award size={18} />, title: "Quality", description: "We hold our work to high standards to ensure depth, relevance, and excellence in delivery." },
  { icon: <Zap size={18} />, title: "Agility", description: "We adapt quickly to changing business realities with flexible, responsive solutions." },
  { icon: <Users2 size={18} />, title: "Diversity", description: "We value varied perspectives, inclusive collaboration, and the richness they bring to learning." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Impact"
        crumbs={[{ label: "About" }]}
        title={
          <>
            A trusted learning and performance partner that{" "}
            <span className="text-grad">unlocks human potential.</span>
          </>
        }
        description="Impact for Learning & Development helps organizations drive transformation across MENA — combining global methodologies, behavioral science, and deep regional fluency to deliver measurable outcomes."
      />

      {/* Vision + Mission */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-2 gap-5">
          <Reveal>
            <article className="surface-strong rounded-[1.6rem] p-8 relative overflow-hidden h-full">
              <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-turq/15 text-brand-turq mb-5">
                  <Eye size={20} />
                </div>
                <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-2">Vision</div>
                <h3 className="text-2xl font-semibold text-ink-50 mb-4">Leading human development across MEA.</h3>
                <p className="text-ink-100 leading-relaxed">
                  Influencing positive change in individuals, teams, organizations, and communities across the Middle East and Africa.
                </p>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="surface rounded-[1.6rem] p-8 h-full">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-accent-green/15 text-accent-green mb-5">
                <Compass size={20} />
              </div>
              <div className="text-[0.72rem] uppercase tracking-[0.2em] text-accent-green font-semibold mb-2">Mission</div>
              <h3 className="text-2xl font-semibold text-ink-50 mb-4">Innovative, customer-focused people development.</h3>
              <p className="text-ink-100 leading-relaxed">
                Create solutions that meet the highest quality standards, align with international benchmarks, and deliver exceptional client satisfaction.
              </p>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* What makes Impact different */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="What makes Impact different"
          title={
            <>
              Regional fluency, global rigor — and a relentless focus on{" "}
              <span className="text-brand-turq">measurable change</span>.
            </>
          }
          description="Impact combines regional expertise across Egypt, KSA and the UAE with globally benchmarked methodologies and partnerships with leading international learning providers."
        />
        <IconGrid
          items={[
            { icon: <Globe2 size={18} />, title: "Globally benchmarked", description: "Methodologies in partnership with Culture Partners, Knolskape, BCon, and Gallup." },
            { icon: <Sparkles size={18} />, title: "Experiential by design", description: "Business simulations and applied learning that translate insight into behavior change." },
            { icon: <MapPin size={18} />, title: "MENA-fluent delivery", description: "On-the-ground teams and tailored programs aligned to regional business realities." },
          ]}
        />
      </Section>

      <LogoMarquee label="Impact has partnered with leading organizations across MENA" />

      {/* Stats */}
      <Stats
        eyebrow="Milestones & Achievements"
        title="A track record built across public and private sectors."
        stats={[
          { value: 150000, suffix: "+", label: "Learners reached through leadership and capability initiatives" },
          { value: 60000, suffix: "+", label: "Learning hours delivered across the region" },
          { value: 500, suffix: "+", label: "Trainers certified through localized international programs" },
          { value: 3, suffix: "", label: "Hubs across Cairo, Dubai and Riyadh" },
        ]}
      />

      {/* Regional presence */}
      <Section>
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 items-center">
          <Reveal>
            <div className="surface-strong rounded-[2rem] p-8 relative overflow-hidden">
              <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
              <div className="relative space-y-3">
                {[
                  { city: "Cairo", country: "Egypt", role: "Regional design hub" },
                  { city: "Dubai", country: "UAE", role: "HQ · Client engagement" },
                  { city: "Riyadh", country: "KSA", role: "Delivery & partnerships" },
                ].map((p, i) => (
                  <div key={i} className="surface rounded-2xl p-5 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-turq/15 text-brand-turq">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <div className="text-ink-50 font-semibold">{p.city}</div>
                        <div className="text-ink-300 text-[0.82rem]">{p.country}</div>
                      </div>
                    </div>
                    <div className="text-[0.78rem] text-ink-200 text-right max-w-[16ch]">{p.role}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="chip mb-5">Regional presence & partnerships</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-[2.2rem] font-semibold text-ink-50 leading-tight">
                On-the-ground in three of MENA&apos;s most important markets.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-ink-100 leading-relaxed">
                Our ecosystem brings together leading global partners to deliver world-class, locally relevant solutions — including Culture Partners (Discovery Maps®), Knolskape (multi-award-winning business simulations), BCon (behavioral science frameworks), and Gallup&apos;s coaching methodologies.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <Link href="/affiliates" className="btn btn-ghost mt-7">
                Meet our international affiliates
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Our values"
          title="Six principles shape how we design, deliver and partner."
        />
        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {VALUES.map((v) => (
            <Item key={v.title}>
              <div className="surface rounded-2xl p-6 h-full hover:-translate-y-1 transition-transform duration-300">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/15 text-brand-turq mb-4">
                  {v.icon}
                </div>
                <h3 className="text-lg font-semibold text-ink-50 mb-2">{v.title}</h3>
                <p className="text-ink-200 text-[0.92rem] leading-relaxed">{v.description}</p>
              </div>
            </Item>
          ))}
        </Stagger>
      </Section>

      {/* Approach outcomes */}
      <Section className="!pt-0">
        <div className="grid md:grid-cols-2 gap-5">
          <OutcomeCard
            title="What clients get from working with Impact"
            items={[
              "Tailored learning, leadership, and OD solutions aligned to business priorities.",
              "Globally benchmarked methodologies adapted for regional context.",
              "Behavior change reinforced through assessments, coaching, and simulations.",
              "End-to-end delivery — from diagnosis to sustained reinforcement.",
            ]}
          />
          <OutcomeCard
            variant="ghost"
            title="What learners experience"
            items={[
              "Immersive, scenario-based experiences instead of one-time training.",
              "Practical leadership challenges supported by coaching and feedback.",
              "Skills they can apply in real workplace situations from day one.",
              "Clear progression from frontline to senior leadership development.",
            ]}
          />
        </div>
      </Section>

      <CTA
        eyebrow="Partner with Impact"
        title="Let's design the next chapter of your capability strategy."
        description="Tell us what you're trying to change. We'll bring the methodology, the regional context, and the discipline to make it stick."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "Explore our solutions", href: "/solutions" }}
      />
    </>
  );
}
