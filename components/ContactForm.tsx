"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Check } from "lucide-react";

const TOPICS = [
  "Leadership Development",
  "Experiential Learning / Simulations",
  "Assessments & Coaching",
  "Organizational Development",
  "Impact GO (Team Experiences)",
  "Affiliate / Partnership",
  "Other",
];

export default function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="surface rounded-3xl p-7 md:p-9 relative overflow-hidden"
    >
      <div aria-hidden className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-brand-blue/10 blur-3xl" />

      <AnimatePresence mode="wait">
        {!sent ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            className="grid gap-5 relative"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Company" name="company" required />
              <Field label="Country" name="country" placeholder="Egypt / KSA / UAE / Other" />
            </div>
            <div className="grid">
              <label className="text-[0.85rem] font-medium text-ink-100 mb-1.5">
                What can we help with?
              </label>
              <select
                name="topic"
                className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-ink-50 focus:outline-none focus:ring-2 focus:ring-brand-turq/40 focus:border-brand-turq/40 transition-colors"
              >
                {TOPICS.map((t) => (
                  <option key={t} className="bg-ink-800">{t}</option>
                ))}
              </select>
            </div>
            <div className="grid">
              <label className="text-[0.85rem] font-medium text-ink-100 mb-1.5">Tell us about your challenge</label>
              <textarea
                name="message"
                rows={5}
                className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-ink-50 focus:outline-none focus:ring-2 focus:ring-brand-turq/40 focus:border-brand-turq/40 transition-colors resize-y"
                placeholder="Audience, scale, timeline, outcomes you're after..."
              />
            </div>

            <label className="flex items-start gap-2.5 text-[0.85rem] text-ink-200">
              <input type="checkbox" className="mt-1 accent-brand-turq" />
              I&apos;d like to receive Impact insights and the Learning Lab newsletter.
            </label>

            <button type="submit" className="btn btn-primary btn-lg justify-center mt-2">
              <Send size={16} />
              Send message
            </button>
            <p className="text-ink-300 text-[0.78rem] text-center">
              By submitting, you agree to be contacted by our team. We never share your details.
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="ok"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center py-12 relative"
          >
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent-green/20 text-accent-green mb-5">
              <Check size={24} />
            </div>
            <h3 className="text-2xl font-semibold text-ink-50 mb-2">Thanks — message received.</h3>
            <p className="text-ink-200 max-w-md mx-auto">
              An Impact specialist will reach out within one business day to schedule your discovery call.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="grid">
      <label htmlFor={name} className="text-[0.85rem] font-medium text-ink-100 mb-1.5">
        {label} {required && <span className="text-brand-turq">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-xl border border-white/10 bg-ink-900/60 px-4 py-3 text-ink-50 placeholder:text-ink-300/50 focus:outline-none focus:ring-2 focus:ring-brand-turq/40 focus:border-brand-turq/40 transition-colors"
      />
    </div>
  );
}
