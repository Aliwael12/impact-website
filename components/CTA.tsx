import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Motion";

export default function CTA({
  eyebrow = "Next step",
  title,
  description,
  primary = { label: "Book a discovery call", href: "/contact" },
  secondary,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
}) {
  return (
    <section className="section">
      <div className="container-x">
        <Reveal>
          <div className="surface-strong rounded-[2rem] px-6 md:px-12 py-14 md:py-16 text-center relative overflow-hidden">
            <div
              aria-hidden
              className="absolute inset-0 grid-overlay opacity-50"
            />
            <div
              aria-hidden
              className="absolute -top-24 -left-20 w-72 h-72 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(128,220,255,0.35), transparent 65%)",
                filter: "blur(40px)",
              }}
            />
            <div
              aria-hidden
              className="absolute -bottom-24 -right-20 w-80 h-80 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(63,54,200,0.32), transparent 65%)",
                filter: "blur(50px)",
              }}
            />
            <div className="relative">
              <span className="chip mb-5 inline-flex">{eyebrow}</span>
              <h2 className="text-3xl md:text-[2.6rem] font-bold text-ink-50 max-w-[24ch] mx-auto leading-[1.08]">
                {title}
              </h2>
              {description && (
                <p className="mt-5 max-w-[58ch] mx-auto text-ink-100">
                  {description}
                </p>
              )}
              <div className="mt-8 flex flex-wrap gap-3 justify-center">
                <Link href={primary.href} className="btn btn-turq btn-lg">
                  {primary.label}
                  <ArrowUpRight size={16} />
                </Link>
                {secondary && (
                  <Link href={secondary.href} className="btn btn-ghost btn-lg">
                    {secondary.label}
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
