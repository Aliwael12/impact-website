import { ReactNode } from "react";
import { Reveal } from "./Motion";
import clsx from "clsx";

export function SectionHead({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal>
      <div
        className={clsx(
          align === "center" ? "text-center mx-auto" : "text-left",
          "max-w-[760px] mb-14",
          align === "center" ? "" : "ml-0",
          className
        )}
      >
        {eyebrow && (
          <div className={align === "center" ? "flex justify-center" : ""}>
            <span className="chip mb-5">{eyebrow}</span>
          </div>
        )}
        <h2
          className="text-3xl md:text-[2.4rem] font-semibold text-ink-50 tracking-tight leading-[1.1]"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-5 text-ink-100 leading-relaxed text-[1.02rem] max-w-[60ch] mx-auto">
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}

export default function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={clsx("section", className)}>
      <div className="container-x">{children}</div>
    </section>
  );
}
