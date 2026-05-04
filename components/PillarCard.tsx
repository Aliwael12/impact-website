"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export default function PillarCard({
  num,
  title,
  description,
  href,
  icon,
  tags,
  cta = "Explore",
  index = 0,
}: {
  num: string;
  title: string;
  description: string;
  href: string;
  icon: ReactNode;
  tags?: string[];
  cta?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group surface relative overflow-hidden rounded-2xl p-7 flex flex-col"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(360px 200px at 90% 0%, rgba(128,220,255,0.12), transparent 60%)",
        }}
      />
      <div className="relative flex items-start justify-between mb-5">
        <div
          className="grid h-12 w-12 place-items-center rounded-xl text-white shadow-glow"
          style={{ background: "linear-gradient(135deg, #1C65A5, #08A0EB)" }}
        >
          {icon}
        </div>
        <span className="font-condensed text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-brand-turq">
          {num}
        </span>
      </div>

      <h3 className="text-xl font-semibold text-ink-50 mb-2.5 relative">{title}</h3>
      <p className="text-ink-200 leading-relaxed flex-1 relative">{description}</p>

      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-5 relative">
          {tags.map((t) => (
            <span
              key={t}
              className="text-[0.74rem] px-2.5 py-1 rounded-full border border-white/10 bg-white/[0.04] text-ink-200"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      <Link
        href={href}
        className="mt-6 pt-5 border-t border-white/5 inline-flex items-center justify-between text-[0.92rem] font-medium text-brand-turq group/link relative"
      >
        <span>{cta}</span>
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 group-hover/link:translate-x-1 group-hover/link:-translate-y-0.5"
        />
      </Link>
    </motion.div>
  );
}
