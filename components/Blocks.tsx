"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { Reveal, Stagger, Item } from "./Motion";

/* Two-column split with visual side */
export function Split({
  left,
  right,
  reverse = false,
}: {
  left: ReactNode;
  right: ReactNode;
  reverse?: boolean;
}) {
  return (
    <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""}`}>
      <Reveal>{left}</Reveal>
      <Reveal delay={0.1}>{right}</Reveal>
    </div>
  );
}

/* Iconographic feature card grid */
export function IconGrid({
  items,
  columns = 3,
}: {
  items: { icon: ReactNode; title: string; description: string }[];
  columns?: 2 | 3 | 4;
}) {
  const cls = columns === 2 ? "md:grid-cols-2" : columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2 lg:grid-cols-4";
  return (
    <Stagger className={`grid gap-5 ${cls}`}>
      {items.map((it, i) => (
        <Item key={i}>
          <motion.div
            whileHover={{ y: -4 }}
            transition={{ duration: 0.25 }}
            className="surface rounded-2xl p-6 h-full"
          >
            <div
              className="grid h-11 w-11 place-items-center rounded-xl text-white mb-5 shadow-glow"
              style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
            >
              {it.icon}
            </div>
            <h3 className="text-lg font-semibold text-ink-50 mb-2">{it.title}</h3>
            <p className="text-ink-200 text-[0.95rem] leading-relaxed">{it.description}</p>
          </motion.div>
        </Item>
      ))}
    </Stagger>
  );
}

/* Numbered process steps */
export function Steps({
  steps,
}: {
  steps: { title: string; description: string }[];
}) {
  return (
    <Stagger className="grid gap-3" delay={0.06}>
      {steps.map((s, i) => (
        <Item key={i}>
          <motion.div
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25 }}
            className="surface rounded-xl p-5 flex gap-5 items-start"
          >
            <div
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border font-condensed text-xl font-bold text-brand-turq"
              style={{
                borderColor: "rgba(128, 220, 255, 0.22)",
                background: "rgba(128, 220, 255, 0.06)",
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div className="pt-1">
              <h4 className="text-ink-50 font-semibold mb-1.5">{s.title}</h4>
              <p className="text-ink-200 text-[0.92rem] leading-relaxed">{s.description}</p>
            </div>
          </motion.div>
        </Item>
      ))}
    </Stagger>
  );
}

/* Methodology row (5 connected steps) */
export function Methodology({
  steps,
}: {
  steps: { label: string; sub?: string }[];
}) {
  return (
    <div className="relative">
      <div
        aria-hidden
        className="hidden md:block absolute top-8 left-[7%] right-[7%] h-px"
        style={{
          background:
            "linear-gradient(90deg, rgba(8,160,235,0.4), rgba(128,220,255,0.6), rgba(0,204,153,0.4))",
        }}
      />
      <Stagger className="grid grid-cols-2 md:grid-cols-5 gap-4 relative" delay={0.08}>
        {steps.map((s, i) => (
          <Item key={i}>
            <div className="text-center relative">
              <div
                className="mx-auto grid h-16 w-16 place-items-center rounded-full font-condensed font-bold text-xl text-brand-turq mb-4"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid rgba(128, 220, 255, 0.22)",
                  boxShadow: "0 8px 24px -10px rgba(8, 160, 235, 0.5)",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="text-ink-50 font-semibold mb-1">{s.label}</div>
              {s.sub && <div className="text-ink-300 text-[0.82rem]">{s.sub}</div>}
            </div>
          </Item>
        ))}
      </Stagger>
    </div>
  );
}

/* Outcome list with check icons in a tinted card */
export function OutcomeCard({
  title,
  items,
  variant = "primary",
}: {
  title: string;
  items: string[];
  variant?: "primary" | "ghost";
}) {
  return (
    <Reveal>
      <div
        className={
          variant === "primary"
            ? "surface-strong rounded-2xl p-7"
            : "surface rounded-2xl p-7"
        }
      >
        <div className="text-[0.72rem] uppercase tracking-[0.2em] font-semibold text-brand-turq mb-3">
          Outcomes
        </div>
        <h3 className="text-xl font-semibold text-ink-50 mb-5">{title}</h3>
        <ul className="space-y-2.5">
          {items.map((it, i) => (
            <li key={i} className="flex items-start gap-2.5 text-ink-100">
              <span
                aria-hidden
                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-turq"
              />
              <span className="leading-relaxed">{it}</span>
            </li>
          ))}
        </ul>
      </div>
    </Reveal>
  );
}

/* Quote block */
export function QuoteCard({
  quote,
  name,
  role,
  initial,
}: {
  quote: string;
  name: string;
  role?: string;
  initial?: string;
}) {
  return (
    <Reveal>
      <figure className="surface rounded-2xl p-7 relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-4 right-5 text-[5rem] leading-none text-brand-turq/20 font-display"
        >
          “
        </div>
        <blockquote className="text-ink-50 text-[1.05rem] leading-relaxed relative">
          {quote}
        </blockquote>
        <figcaption className="mt-6 pt-5 border-t border-white/5 flex items-center gap-3 relative">
          <div
            className="grid h-10 w-10 place-items-center rounded-full text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
          >
            {initial || name.charAt(0)}
          </div>
          <div>
            <div className="text-ink-50 font-semibold text-[0.92rem]">{name}</div>
            {role && <div className="text-ink-300 text-[0.78rem]">{role}</div>}
          </div>
        </figcaption>
      </figure>
    </Reveal>
  );
}

/* Generic visual placeholder */
export function VisualCard({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`surface-strong rounded-[2rem] p-8 relative overflow-hidden aspect-[4/3] grid place-items-center ${className ?? ""}`}
    >
      <div aria-hidden className="absolute inset-0 grid-overlay opacity-50" />
      <div className="relative">{children}</div>
    </div>
  );
}
