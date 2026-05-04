import Link from "next/link";
import { ArrowUpRight, ArrowRight, Sparkles, BookOpen, Layers, BarChart3, Users, GraduationCap, Brain, Compass, Building2, Globe2, Target } from "lucide-react";
import HeroVisual from "@/components/HeroVisual";
import LogoMarquee from "@/components/LogoMarquee";
import Stats from "@/components/Stats";
import Section, { SectionHead } from "@/components/Section";
import PillarCard from "@/components/PillarCard";
import { Reveal, Stagger, Item } from "@/components/Motion";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-36 pb-24 overflow-hidden">
        <div aria-hidden className="absolute inset-0 grid-overlay -z-10" />
        <div className="container-x">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
            <div>
              <Reveal>
                <span className="chip mb-6">
                  <Sparkles size={11} className="-mr-1" />
                  Learning · Leadership · Performance · MENA
                </span>
              </Reveal>
              <Reveal delay={0.05}>
                <h1
                  className="font-bold text-ink-50 leading-[1.02] tracking-tight"
                  style={{ fontSize: "clamp(2.4rem, 5.6vw, 4.4rem)" }}
                >
                  Transforming capability into{" "}
                  <span className="text-grad">measurable business performance.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-7 text-ink-100/85 text-[1.08rem] leading-relaxed max-w-[58ch]">
                  Impact designs experiential learning journeys and business simulations that translate capability into real-world results — combining innovation, regional expertise, and globally benchmarked methodologies to create lasting behavioral change.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-9 flex flex-wrap gap-3 items-center">
                  <Link href="/contact" className="btn btn-primary btn-lg">
                    Book a discovery call
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link href="/solutions" className="btn btn-ghost btn-lg">
                    Explore solutions
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[0.86rem] text-ink-300">
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-turq animate-pulse-soft" />
                    Cairo · Dubai · Riyadh
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-green animate-pulse-soft" />
                    150,000+ participants developed
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-blue animate-pulse-soft" />
                    Globally benchmarked methodologies
                  </div>
                </div>
              </Reveal>
            </div>
            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT MARQUEE */}
      <LogoMarquee />

      {/* STATS */}
      <Stats
        eyebrow="Impact in numbers"
        title={
          <>
            A track record measured in <span className="text-brand-turq">people, hours and outcomes</span>.
          </>
        }
        stats={[
          { value: 150000, suffix: "+", label: "Participants developed across leadership and professional programs" },
          { value: 60000, suffix: "+", label: "Learning hours delivered through experiential learning and simulations" },
          { value: 7000, suffix: "+", label: "Coaching sessions supporting leadership growth" },
          { value: 95, suffix: "%", label: "Participant satisfaction across development programs" },
        ]}
      />

      {/* SOLUTIONS PILLARS */}
      <Section id="solutions">
        <SectionHead
          eyebrow="Our solutions"
          title={
            <>
              Four pillars designed to build capability where{" "}
              <span className="text-brand-turq">strategy meets execution</span>.
            </>
          }
          description="Whether you need leadership pipelines, immersive simulations, evidence-based coaching, or team experiences — our solutions are tailored to your business priorities and learner reality."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          <PillarCard
            num="01 — L&D"
            title="Learning & Development"
            description="Structured journeys that combine assessments, experiential learning, and coaching to build leadership pipelines that scale."
            href="/solutions/learning-development"
            icon={<GraduationCap size={20} />}
            tags={["Journeys", "Workshops", "Impulse"]}
            cta="Explore L&D"
            index={0}
          />
          <PillarCard
            num="02 — Experiential"
            title="Experiential Learning"
            description="Immersive business simulations and gamified labs that recreate organizational challenges and accelerate applied learning."
            href="/solutions/experiential-learning"
            icon={<Layers size={20} />}
            tags={["Simulations", "Gamification", "Labs"]}
            cta="See simulations"
            index={1}
          />
          <PillarCard
            num="03 — Insight"
            title="Assessments & Coaching"
            description="Diagnostic tools, leadership assessments, and structured coaching that translate insight into targeted, measurable growth."
            href="/assessments-coaching"
            icon={<BarChart3 size={20} />}
            tags={["Gallup", "MBTI", "BCon"]}
            cta="Explore tools"
            index={2}
          />
          <PillarCard
            num="04 — Impact GO"
            title="Team Experiences"
            description="High-impact corporate events and experiential team programs that strengthen collaboration, alignment and ownership."
            href="/impact-go"
            icon={<Users size={20} />}
            tags={["Retreats", "Events", "Collaboration"]}
            cta="Design an event"
            index={3}
          />
        </div>
      </Section>

      {/* WHY IMPACT — split layout */}
      <Section className="!pt-0">
        <div className="grid lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <div className="surface-strong rounded-[2rem] p-8 relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
                <div className="relative grid grid-cols-2 gap-3">
                  {[
                    { icon: <Brain size={18} />, label: "Behavioral science", val: "BCon · LIFO" },
                    { icon: <Globe2 size={18} />, label: "Global methodology", val: "Knolskape · Gallup" },
                    { icon: <Compass size={18} />, label: "Regional fluency", val: "EG · KSA · UAE" },
                    { icon: <Target size={18} />, label: "Outcomes focus", val: "Measurable change" },
                  ].map((c, i) => (
                    <div key={i} className="surface rounded-2xl p-4">
                      <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-blue/15 text-brand-turq mb-3">
                        {c.icon}
                      </div>
                      <div className="text-ink-50 font-semibold text-[0.95rem]">{c.label}</div>
                      <div className="text-ink-300 text-[0.8rem] mt-0.5">{c.val}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 surface rounded-2xl p-5">
                  <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-2">
                    Methodology
                  </div>
                  <div className="text-ink-50 font-semibold text-[1rem]">
                    Research → Design → Delivery → Evaluation → Reinforcement
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <span className="chip mb-5">Why organizations partner with Impact</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-3xl md:text-[2.4rem] font-semibold text-ink-50 leading-[1.1]">
                Globally informed. <span className="text-grad">Locally fluent.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-ink-100/85 leading-relaxed">
                We blend regional expertise across Egypt, KSA and the UAE with globally benchmarked partnerships — Culture Partners, Knolskape, BCon and Gallup — to deliver experiential learning that drives measurable behavioral change.
              </p>
            </Reveal>
            <Stagger className="mt-8 grid gap-4">
              {[
                {
                  t: "Experiential simulations",
                  d: "Immersive business simulations that recreate real organizational challenges and accelerate applied learning.",
                },
                {
                  t: "Tailored learning journeys",
                  d: "Structured programs combining assessments, experiential learning, and coaching for sustained leadership growth.",
                },
                {
                  t: "Regional + global expertise",
                  d: "Globally informed solutions delivered with deep MENA business context — from Cairo to Riyadh.",
                },
              ].map((b, i) => (
                <Item key={i}>
                  <div className="surface rounded-xl p-4 flex items-start gap-4">
                    <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-turq/15 text-brand-turq font-condensed font-bold">
                      0{i + 1}
                    </div>
                    <div>
                      <div className="text-ink-50 font-semibold mb-1">{b.t}</div>
                      <div className="text-ink-200 text-[0.92rem] leading-relaxed">{b.d}</div>
                    </div>
                  </div>
                </Item>
              ))}
            </Stagger>
            <Reveal delay={0.2}>
              <Link href="/about" className="mt-7 inline-flex items-center gap-1.5 text-brand-turq font-medium group">
                Read the Impact story
                <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* AUDIENCE / PARTICIPANT LEVELS */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Built for every level"
          title={
            <>
              Development designed for the people who <span className="text-brand-turq">drive performance</span>.
            </>
          }
          description="Frontline employees, supervisors, managers, and senior leaders — each supported through development solutions aligned to their role in organizational performance."
        />
        <Stagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { lev: "01 / Frontline", t: "Frontline Employees", d: "Strengthen execution, service quality, and operational performance." },
            { lev: "02 / Supervisors", t: "Supervisors", d: "Coordinate teams, build accountability, and drive operational leadership." },
            { lev: "03 / Managers", t: "Middle Managers", d: "Translate strategic priorities into cross-functional action." },
            { lev: "04 / Leaders", t: "Senior Leaders", d: "Shape strategy, drive transformation, and influence culture." },
          ].map((a) => (
            <Item key={a.lev}>
              <Link
                href="/solutions/participant-level"
                className="block surface rounded-2xl p-5 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
              >
                <div className="text-[0.7rem] uppercase tracking-[0.2em] text-brand-turq font-semibold">
                  {a.lev}
                </div>
                <div className="text-ink-50 font-semibold text-lg mt-2 mb-2">{a.t}</div>
                <div className="text-ink-200 text-[0.9rem] leading-relaxed">{a.d}</div>
                <div className="mt-4 inline-flex items-center gap-1 text-[0.85rem] text-brand-turq">
                  Explore <ArrowRight size={13} />
                </div>
              </Link>
            </Item>
          ))}
        </Stagger>
      </Section>

      {/* SUCCESS STORY HIGHLIGHT */}
      <Section className="!pt-0">
        <SectionHead
          eyebrow="Stories of measurable impact"
          title={
            <>
              How design, delivery and reinforcement create{" "}
              <span className="text-brand-turq">real outcomes</span>.
            </>
          }
        />
        <div className="grid md:grid-cols-3 gap-5">
          <Reveal>
            <article className="surface rounded-2xl p-7 flex flex-col h-full">
              <div className="flex items-center justify-between mb-5">
                <span className="chip">Featured</span>
                <BookOpen size={16} className="text-brand-turq" />
              </div>
              <h3 className="text-xl font-semibold text-ink-50 mb-3">
                Localizing an international trainer certification at scale
              </h3>
              <p className="text-ink-200 leading-relaxed flex-1">
                We localized an international trainer certification program — delivering a culturally contextualized model that exceeded expectations and reached <span className="text-ink-50 font-semibold">500+ trainers</span> nationwide.
              </p>
              <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-white/5">
                <div>
                  <div className="text-brand-turq font-bold text-lg">500+</div>
                  <div className="text-[0.72rem] text-ink-300">Trainers</div>
                </div>
                <div>
                  <div className="text-brand-turq font-bold text-lg">100%</div>
                  <div className="text-[0.72rem] text-ink-300">Localized</div>
                </div>
                <div>
                  <div className="text-brand-turq font-bold text-lg">Nat&apos;l</div>
                  <div className="text-[0.72rem] text-ink-300">Reach</div>
                </div>
              </div>
            </article>
          </Reveal>
          <Reveal delay={0.06}>
            <article className="surface rounded-2xl p-7 h-full">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-blue/15 text-brand-turq mb-5">
                <Building2 size={18} />
              </div>
              <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-2">
                Multi-sector
              </div>
              <h3 className="text-lg font-semibold text-ink-50 mb-3">
                Public + private sector at scale
              </h3>
              <p className="text-ink-200 leading-relaxed text-[0.95rem]">
                Large-scale L&D programs across public and private sectors, supporting organizations in building leadership capability where it matters most.
              </p>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="surface rounded-2xl p-7 h-full">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent-green/15 text-accent-green mb-5">
                <Globe2 size={18} />
              </div>
              <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-2">
                MENA reach
              </div>
              <h3 className="text-lg font-semibold text-ink-50 mb-3">
                150,000 learners and counting
              </h3>
              <p className="text-ink-200 leading-relaxed text-[0.95rem]">
                More than 150,000 learners reached through leadership, capability building and experiential learning initiatives across the region.
              </p>
            </article>
          </Reveal>
        </div>
        <div className="mt-10 flex justify-center">
          <Link href="/success-stories" className="btn btn-ghost">
            See all success stories <ArrowRight size={15} />
          </Link>
        </div>
      </Section>

      <CTA
        eyebrow="Talk to our team"
        title={
          <>
            Let&apos;s design the right learning solution for{" "}
            <span className="text-grad">your business priorities.</span>
          </>
        }
        description="Tell us about your challenge — we'll come back with a tailored learning, leadership, or organizational development approach."
        primary={{ label: "Book a discovery call", href: "/contact" }}
        secondary={{ label: "Explore solutions", href: "/solutions" }}
      />
    </>
  );
}
