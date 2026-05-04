"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CLIENTS = [
  { src: "/clients/vodafone.png", alt: "Vodafone" },
  { src: "/clients/nestle.png", alt: "Nestlé" },
  { src: "/clients/orange.png", alt: "Orange" },
  { src: "/clients/pepsico.png", alt: "PepsiCo" },
  { src: "/clients/nbe.png", alt: "National Bank of Egypt" },
  { src: "/clients/schlumberger.png", alt: "Schlumberger" },
  { src: "/clients/nissan.png", alt: "Nissan" },
  { src: "/clients/alkhorayef.png", alt: "Alkhorayef Group" },
  { src: "/clients/jangoom.png", alt: "Jangoom Pharma" },
  { src: "/clients/sio.png", alt: "SIO" },
];

export default function LogoMarquee({
  label = "Trusted by leading organizations across MENA",
}: {
  label?: string;
}) {
  const row = [...CLIENTS, ...CLIENTS];
  return (
    <section className="py-14 border-t border-b border-white/5">
      <div className="container-x">
        <p className="text-center text-[0.78rem] uppercase tracking-[0.22em] font-medium text-ink-300 mb-9">
          {label}
        </p>
        <div className="marquee-mask overflow-hidden">
          <motion.div
            className="flex items-center gap-16 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            {row.map((c, i) => (
              <div key={i} className="shrink-0 grid place-items-center h-12">
                <Image
                  src={c.src}
                  alt={c.alt}
                  width={140}
                  height={48}
                  className="logo-img h-10 w-auto object-contain"
                  unoptimized
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
