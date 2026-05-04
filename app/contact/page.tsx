import type { Metadata } from "next";
import { Mail, Phone, MapPin, Calendar, MessageSquare, Building2 } from "lucide-react";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { Reveal, Stagger, Item } from "@/components/Motion";

export const metadata: Metadata = {
  title: "Contact Impact — Leadership Development Experts",
  description:
    "Tell us about your challenge — our team will design a learning, leadership, or organizational development solution aligned with your goals.",
};

const LOCATIONS = [
  { city: "Dubai", country: "UAE", role: "Headquarters", time: "GMT +4" },
  { city: "Cairo", country: "Egypt", role: "Regional Hub", time: "GMT +2" },
  { city: "Riyadh", country: "KSA", role: "Delivery & Partnerships", time: "GMT +3" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Get in touch"
        crumbs={[{ label: "Contact" }]}
        title={
          <>
            Start a conversation with{" "}
            <span className="text-grad">Impact.</span>
          </>
        }
        description="Tell us about your challenge — our team will design a learning, leadership, or organizational development solution aligned with your goals."
      />

      <Section className="!pt-0">
        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 lg:gap-16">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold text-ink-50 mb-3">Two ways to start.</h2>
            </Reveal>
            <Reveal delay={0.05}>
              <p className="text-ink-100 leading-relaxed mb-8">
                Choose the path that fits your context — corporate inquiry for organizational solutions, or general inquiry for everything else.
              </p>
            </Reveal>

            <Stagger className="grid gap-3 mb-10">
              <Item>
                <div className="surface rounded-2xl p-5 flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-blue/15 text-brand-turq">
                    <Building2 size={18} />
                  </div>
                  <div>
                    <div className="text-ink-50 font-semibold mb-1">Corporate Inquiry</div>
                    <div className="text-ink-200 text-[0.92rem] leading-relaxed">
                      For organizations seeking learning, leadership, or transformation solutions.
                    </div>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="surface rounded-2xl p-5 flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent-green/15 text-accent-green">
                    <Calendar size={18} />
                  </div>
                  <div>
                    <div className="text-ink-50 font-semibold mb-1">Book a Discovery Call</div>
                    <div className="text-ink-200 text-[0.92rem] leading-relaxed">
                      Talk to a specialist about your priorities, audience, and timelines.
                    </div>
                  </div>
                </div>
              </Item>
              <Item>
                <div className="surface rounded-2xl p-5 flex items-start gap-4">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-turq/15 text-brand-turq">
                    <MessageSquare size={18} />
                  </div>
                  <div>
                    <div className="text-ink-50 font-semibold mb-1">Request a Proposal</div>
                    <div className="text-ink-200 text-[0.92rem] leading-relaxed">
                      Share your brief and we&apos;ll come back with a tailored solution outline.
                    </div>
                  </div>
                </div>
              </Item>
            </Stagger>

            <div className="surface-strong rounded-2xl p-7">
              <div className="text-[0.72rem] uppercase tracking-[0.2em] text-brand-turq font-semibold mb-4">
                Direct contact
              </div>
              <div className="space-y-3">
                <a href="mailto:info@impact-ld.me" className="flex items-center gap-3 text-ink-100 hover:text-brand-turq transition-colors">
                  <Mail size={16} className="text-brand-turq" />
                  info@impact-ld.me
                </a>
                <a href="mailto:info@impactegypt.com" className="flex items-center gap-3 text-ink-100 hover:text-brand-turq transition-colors">
                  <Mail size={16} className="text-brand-turq" />
                  info@impactegypt.com
                </a>
                <div className="flex items-center gap-3 text-ink-100">
                  <Phone size={16} className="text-brand-turq" />
                  Available across UAE · Egypt · KSA
                </div>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </Section>

      {/* Locations */}
      <Section className="!pt-0">
        <div className="surface-strong rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
          <div className="relative">
            <span className="chip mb-5">Where we work</span>
            <h2 className="text-3xl md:text-[2.2rem] font-semibold text-ink-50 mb-3">
              On-the-ground in three regional capitals.
            </h2>
            <p className="text-ink-100 max-w-[60ch] mb-8">
              Designed in Dubai, delivered across MENA. Our regional teams partner with global affiliates to bring world-class methodology to local context.
            </p>

            <Stagger className="grid md:grid-cols-3 gap-4">
              {LOCATIONS.map((l) => (
                <Item key={l.city}>
                  <div className="surface rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-turq/15 text-brand-turq mb-4">
                      <MapPin size={18} />
                    </div>
                    <div className="text-ink-50 font-semibold text-xl">{l.city}</div>
                    <div className="text-ink-300 text-[0.85rem] mb-3">{l.country} · {l.time}</div>
                    <div className="text-ink-100 text-[0.92rem]">{l.role}</div>
                  </div>
                </Item>
              ))}
            </Stagger>
          </div>
        </div>
      </Section>
    </>
  );
}
