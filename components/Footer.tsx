import Link from "next/link";
import Logo from "./Logo";
import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/></svg>
);
const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/></svg>
);
const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
);
const Youtube = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2C0 8 0 12 0 12s0 4 .5 5.8a3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 16 24 12 24 12s0-4-.5-5.8zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z"/></svg>
);

const links = {
  Solutions: [
    { label: "Learning & Development", href: "/solutions/learning-development" },
    { label: "Experiential Learning", href: "/solutions/experiential-learning" },
    { label: "Organizational Development", href: "/solutions/organizational-development" },
    { label: "Assessments & Coaching", href: "/assessments-coaching" },
    { label: "Impact GO", href: "/impact-go" },
    { label: "Impulse", href: "/impulse" },
  ],
  Company: [
    { label: "About", href: "/about" },
    { label: "International Affiliates", href: "/affiliates" },
    { label: "Success Stories", href: "/success-stories" },
    { label: "Learning Lab", href: "/learning-lab" },
    { label: "Flagship Programs", href: "/flagship-programs" },
    { label: "Contact", href: "/contact" },
  ],
  Resources: [
    { label: "Public Calendar", href: "/public-calendar" },
    { label: "Whitepapers", href: "/learning-lab#whitepapers" },
    { label: "Newsletter", href: "/contact#newsletter" },
    { label: "Become an Affiliate", href: "/affiliates#join" },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-white/5 mt-16 pt-20 pb-8 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(800px 360px at 80% -20%, rgba(8,160,235,0.12), transparent 65%), radial-gradient(700px 300px at 10% 110%, rgba(128,220,255,0.08), transparent 70%)",
        }}
      />
      <div className="container-x">
        {/* Big CTA strip above footer */}
        <div className="surface-strong rounded-[2rem] p-8 md:p-12 mb-20 relative overflow-hidden">
          <div
            aria-hidden
            className="absolute inset-0 opacity-50 grid-overlay"
          />
          <div className="relative grid md:grid-cols-[1.4fr_1fr] gap-8 items-end">
            <div>
              <span className="chip mb-5">Let&apos;s build capability</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-ink-50 mb-3 max-w-[20ch]">
                Ready to translate strategy into <span className="text-grad">measurable performance?</span>
              </h2>
              <p className="text-ink-100 max-w-[58ch]">
                Tell us about your challenge. Our team will design a learning, leadership, or organizational development solution aligned with your business priorities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Link href="/contact" className="btn btn-turq btn-lg">
                Book a discovery call
                <ArrowUpRight size={16} />
              </Link>
              <Link href="/solutions" className="btn btn-ghost btn-lg">
                Explore solutions
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-12 md:grid-cols-12 mb-14">
          <div className="md:col-span-4">
            <Logo />
            <p className="mt-5 text-ink-200 text-[0.95rem] max-w-[36ch] leading-relaxed">
              Transforming capability into measurable business performance across the MENA region. Designed in Cairo, Dubai &amp; Riyadh.
            </p>
            <div className="mt-6 space-y-2.5 text-[0.9rem]">
              <a href="mailto:info@impact-ld.me" className="flex items-center gap-2.5 text-ink-200 hover:text-brand-turq transition-colors">
                <Mail size={15} className="text-brand-turq" />
                info@impact-ld.me
              </a>
              <div className="flex items-center gap-2.5 text-ink-200">
                <MapPin size={15} className="text-brand-turq" />
                Dubai · Cairo · Riyadh
              </div>
            </div>
          </div>

          {Object.entries(links).map(([title, items]) => (
            <div key={title} className="md:col-span-2">
              <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-50 mb-5">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {items.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-[0.9rem] text-ink-200 hover:text-brand-turq transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="md:col-span-2">
            <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-50 mb-5">
              Languages
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {["EN", "AR", "FR"].map((l, i) => (
                <span
                  key={l}
                  className={
                    i === 0
                      ? "rounded-full bg-brand-turq px-3 py-1 text-[0.74rem] font-semibold text-ink-900"
                      : "rounded-full border border-white/10 px-3 py-1 text-[0.74rem] text-ink-200 cursor-pointer hover:border-brand-turq/40 hover:text-brand-turq transition-colors"
                  }
                >
                  {l}
                </span>
              ))}
            </div>

            <h4 className="mt-8 text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-ink-50 mb-4">
              Follow
            </h4>
            <div className="flex gap-2">
              {[
                { Icon: Linkedin, href: "#", label: "LinkedIn" },
                { Icon: Twitter, href: "#", label: "Twitter" },
                { Icon: Instagram, href: "#", label: "Instagram" },
                { Icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-ink-200 transition-colors hover:text-brand-turq hover:border-brand-turq/40"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/5 pt-7 text-[0.82rem] text-ink-300">
          <div>© {new Date().getFullYear()} Impact for Learning &amp; Development. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-brand-turq transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-turq transition-colors">Terms</a>
            <a href="#" className="hover:text-brand-turq transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
