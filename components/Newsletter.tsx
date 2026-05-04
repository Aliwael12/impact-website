"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

export default function Newsletter() {
  const [done, setDone] = useState(false);
  return (
    <form
      onSubmit={(e) => { e.preventDefault(); setDone(true); }}
      className="flex flex-col sm:flex-row gap-2 w-full md:w-auto items-stretch"
    >
      <AnimatePresence mode="wait">
        {!done ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col sm:flex-row gap-2 w-full"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              className="rounded-full border border-white/10 bg-ink-900/60 px-5 py-3 text-ink-50 min-w-[260px] focus:outline-none focus:ring-2 focus:ring-brand-turq/40 focus:border-brand-turq/40 transition-colors"
            />
            <button type="submit" className="btn btn-turq whitespace-nowrap">Subscribe</button>
          </motion.div>
        ) : (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 rounded-full bg-accent-green/15 text-accent-green px-5 py-3 font-medium"
          >
            <Check size={16} /> You&apos;re on the list.
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}
