"use client";

import { motion } from "framer-motion";
import { Sparkles, TrendingUp, Users, Target, Layers } from "lucide-react";

export default function HeroVisual() {
  return (
    <div className="relative aspect-square w-full max-w-[540px] ml-auto">
      {/* Glow orbs */}
      <motion.div
        aria-hidden
        className="absolute -top-12 -left-12 w-[70%] h-[70%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(8,160,235,0.35), transparent 65%)",
          filter: "blur(40px)",
        }}
        animate={{ scale: [1, 1.08, 1], opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-12 -right-12 w-[60%] h-[60%] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(128,220,255,0.35), transparent 65%)",
          filter: "blur(50px)",
        }}
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.45, 0.7, 0.45] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
      />

      {/* Concentric rings */}
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        viewBox="0 0 500 500"
        aria-hidden
      >
        <defs>
          <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#80DCFF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#08A0EB" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[210, 160, 110].map((r, i) => (
          <motion.circle
            key={r}
            cx="250"
            cy="250"
            r={r}
            fill="none"
            stroke="url(#ringG)"
            strokeWidth="1"
            initial={{ rotate: 0 }}
            animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
            transition={{
              duration: 30 + i * 8,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ transformOrigin: "250px 250px" }}
            strokeDasharray={i === 0 ? "4 8" : i === 1 ? "2 6" : "1 4"}
          />
        ))}
      </svg>

      {/* Main glass dashboard card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-[12%] rounded-[1.6rem] surface-strong p-6 backdrop-blur-xl shadow-glow-strong"
      >
        <div className="flex items-center justify-between mb-5">
          <div>
            <div className="text-[0.7rem] uppercase tracking-[0.2em] text-brand-turq font-semibold">
              Capability Index
            </div>
            <div className="text-ink-50 font-semibold mt-1">Leadership Pipeline · Q4</div>
          </div>
          <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-turq/15 text-brand-turq">
            <Sparkles size={16} />
          </div>
        </div>

        {/* Bars chart */}
        <div className="flex items-end gap-2 h-20 mb-5">
          {[55, 72, 48, 84, 68, 92, 78].map((h, i) => (
            <motion.div
              key={i}
              className="flex-1 rounded-md"
              style={{
                background: "linear-gradient(180deg, #80DCFF, #08A0EB)",
                opacity: 0.85,
              }}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ duration: 0.8, delay: 0.6 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            />
          ))}
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-2.5 mb-4">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="rounded-xl bg-ink-900/50 border border-white/5 p-3"
          >
            <div className="text-[0.7rem] text-ink-300 mb-1">Cohort growth</div>
            <div className="text-lg font-bold text-brand-turq">+34%</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="rounded-xl bg-ink-900/50 border border-white/5 p-3"
          >
            <div className="text-[0.7rem] text-ink-300 mb-1">Behavior shift</div>
            <div className="text-lg font-bold text-brand-pale">8.6 / 10</div>
          </motion.div>
        </div>

        {/* Progress bar */}
        <div>
          <div className="flex justify-between text-[0.74rem] text-ink-200 mb-1.5">
            <span>Program completion</span>
            <span className="text-ink-50 font-semibold">78%</span>
          </div>
          <div className="h-2 rounded-full bg-white/[0.06] overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 1.4, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, #08A0EB, #80DCFF)" }}
            />
          </div>
        </div>
      </motion.div>

      {/* Floating cards */}
      <motion.div
        initial={{ opacity: 0, y: 14, x: -10 }}
        animate={{
          opacity: 1,
          y: [0, -10, 0],
          x: 0,
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.7 },
          x: { duration: 0.6, delay: 0.7 },
          y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.7 },
        }}
        className="absolute top-[2%] -left-[6%] surface flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-md shadow-card"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent-green/15 text-accent-green">
          <TrendingUp size={16} />
        </div>
        <div>
          <div className="text-[0.68rem] text-ink-300">Leaders activated</div>
          <div className="text-ink-50 font-semibold text-sm">+ 1,240</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14, x: 10 }}
        animate={{
          opacity: 1,
          y: [0, -8, 0],
          x: 0,
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.85 },
          x: { duration: 0.6, delay: 0.85 },
          y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 },
        }}
        className="absolute bottom-[5%] -right-[4%] surface flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-md shadow-card"
      >
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-brand-turq/15 text-brand-turq">
          <Target size={16} />
        </div>
        <div>
          <div className="text-[0.68rem] text-ink-300">Behavior change</div>
          <div className="text-ink-50 font-semibold text-sm">95% adoption</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -top-[3%] right-[8%] surface rounded-full p-2 backdrop-blur-md"
      >
        <div className="grid h-8 w-8 place-items-center rounded-full bg-brand-blue/20 text-brand-blue">
          <Layers size={14} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.35, duration: 0.5 }}
        className="absolute bottom-[12%] left-[2%] surface rounded-full p-2 backdrop-blur-md"
      >
        <div className="grid h-8 w-8 place-items-center rounded-full bg-accent-purple/20 text-brand-pale">
          <Users size={14} />
        </div>
      </motion.div>
    </div>
  );
}
