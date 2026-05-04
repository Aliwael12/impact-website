import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, MapPin, Users, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section, { SectionHead } from "@/components/Section";
import CTA from "@/components/CTA";
import { Reveal, Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Public Calendar — Open Enrollment Programs | Impact",
  description:
    "Browse Impact's open enrollment programs for professionals. Book, pay, and join live or virtual learning experiences designed for career growth.",
};

const PROGRAMS = [
  { date: "May 18", month: "2026", t: "Leading Self · Foundations", loc: "Cairo", mode: "In-person", seats: "12 seats" },
  { date: "May 22", month: "2026", t: "Business Simulation Lab", loc: "Dubai", mode: "Hybrid", seats: "20 seats" },
  { date: "Jun 03", month: "2026", t: "Coaching Skills for Managers", loc: "Virtual", mode: "Virtual", seats: "Open" },
  { date: "Jun 11", month: "2026", t: "CliftonStrengths® for Leaders", loc: "Riyadh", mode: "In-person", seats: "16 seats" },
  { date: "Jun 24", month: "2026", t: "Leading Teams · Advanced", loc: "Cairo", mode: "In-person", seats: "12 seats" },
  { date: "Jul 09", month: "2026", t: "Strategic Thinking Workshop", loc: "Dubai", mode: "In-person", seats: "18 seats" },
];

export default function PublicCalendarPage() {
  return (
    <>
      <PageHero
        eyebrow="Public Calendar"
        crumbs={[{ label: "Public Calendar" }]}
        title={
          <>
            Open enrollment programs for{" "}
            <span className="text-grad">professionals & emerging leaders</span>.
          </>
        }
        description="Browse upcoming programs, reserve your seat, and complete payment online. Live and virtual experiences across Cairo, Dubai, and Riyadh."
      />

      <Section className="!pt-0">
        <SectionHead
          eyebrow="How it works"
          title="Three simple steps from interest to enrollment."
        />
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { n: "01", t: "Browse", d: "Explore upcoming programs by topic, location, and date." },
            { n: "02", t: "Reserve", d: "Pick the session that fits — instant seat reservation." },
            { n: "03", t: "Pay & join", d: "Complete payment online and receive your joining instructions." },
          ].map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06}>
              <div className="surface rounded-2xl p-6">
                <div className="text-brand-turq font-condensed font-bold text-2xl mb-2">{s.n}</div>
                <div className="text-ink-50 font-semibold text-lg mb-1.5">{s.t}</div>
                <div className="text-ink-200 text-[0.92rem]">{s.d}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="!pt-0">
        <SectionHead
          eyebrow="Upcoming programs"
          title="Live and virtual sessions across MENA."
        />
        <Stagger className="grid gap-3">
          {PROGRAMS.map((p, i) => (
            <Item key={i}>
              <article className="surface rounded-2xl p-5 grid sm:grid-cols-[auto_1fr_auto] gap-5 items-center hover:-translate-y-0.5 transition-transform duration-300">
                <div className="surface-strong rounded-xl px-4 py-3 text-center min-w-[88px]">
                  <div className="text-brand-turq font-condensed font-bold text-xl leading-none">{p.date}</div>
                  <div className="text-ink-300 text-[0.74rem] mt-1">{p.month}</div>
                </div>
                <div>
                  <h3 className="text-ink-50 font-semibold text-[1.05rem] mb-2">{p.t}</h3>
                  <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.85rem] text-ink-200">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} className="text-brand-turq" /> {p.loc}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} className="text-brand-turq" /> {p.mode}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users size={13} className="text-brand-turq" /> {p.seats}
                    </span>
                  </div>
                </div>
                <Link href="/contact" className="btn btn-turq btn-sm justify-self-end">
                  Reserve <ArrowRight size={13} />
                </Link>
              </article>
            </Item>
          ))}
        </Stagger>
        <Reveal delay={0.1}>
          <div className="mt-10 surface-strong rounded-[1.6rem] p-6 md:p-8 text-center">
            <div className="grid h-12 w-12 mx-auto place-items-center rounded-xl bg-brand-turq/15 text-brand-turq mb-4">
              <Calendar size={20} />
            </div>
            <h3 className="text-xl font-semibold text-ink-50 mb-2">Calendar integration coming soon</h3>
            <p className="text-ink-200 text-[0.92rem] max-w-[58ch] mx-auto">
              Live booking via Calendly and Zoho Meetings — with secure online payment for B2C learners across MENA.
            </p>
          </div>
        </Reveal>
      </Section>

      <CTA
        eyebrow="Public calendar"
        title="View upcoming programs."
        primary={{ label: "Talk to enrollment", href: "/contact" }}
        secondary={{ label: "Explore Impulse microlearning", href: "/impulse" }}
      />
    </>
  );
}
