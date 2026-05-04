import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "./Motion";

type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  description,
  crumbs = [],
  align = "center",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  crumbs?: Crumb[];
  align?: "left" | "center";
}) {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(700px 400px at 50% -10%, rgba(8, 160, 235, 0.22), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="grid-overlay absolute inset-0 -z-10 opacity-60"
      />
      <div className={`container-x ${align === "center" ? "text-center" : ""}`}>
        {crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={`flex items-center gap-1 text-[0.82rem] text-ink-300 mb-6 ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            <Link href="/" className="hover:text-brand-turq transition-colors">
              Home
            </Link>
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                <ChevronRight size={13} className="opacity-50" />
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-turq transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-ink-200">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}

        <Reveal>
          {eyebrow && (
            <div className={align === "center" ? "flex justify-center mb-5" : "mb-5"}>
              <span className="chip">{eyebrow}</span>
            </div>
          )}
        </Reveal>

        <Reveal delay={0.05}>
          <h1
            className={`font-bold tracking-tight text-ink-50 leading-[1.04] ${
              align === "center" ? "max-w-[22ch] mx-auto" : "max-w-[24ch]"
            }`}
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
          >
            {title}
          </h1>
        </Reveal>

        {description && (
          <Reveal delay={0.12}>
            <p
              className={`mt-6 text-ink-100/85 text-[1.05rem] leading-relaxed ${
                align === "center" ? "max-w-[62ch] mx-auto" : "max-w-[58ch]"
              }`}
            >
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
