"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { NAV } from "@/lib/nav";
import clsx from "clsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <>
      <div className="fixed inset-x-3 top-3 z-[100] flex justify-center pointer-events-none">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={clsx(
            "pointer-events-auto flex w-full max-w-[1280px] items-center justify-between gap-3 rounded-full border px-2 py-2 pl-5 transition-all duration-300",
            scrolled
              ? "bg-ink-900/90 backdrop-blur-xl border-white/10 shadow-card"
              : "bg-ink-800/70 backdrop-blur-md border-white/5"
          )}
          onMouseLeave={() => setActive(null)}
        >
          <Logo />

          <ul className="hidden lg:flex items-center gap-0.5">
            {NAV.map((item) => {
              const has = !!item.children?.length;
              const isActive =
                pathname === item.href ||
                (item.href && item.href !== "/" && pathname?.startsWith(item.href));
              return (
                <li
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => has && setActive(item.label)}
                >
                  {item.href && !has ? (
                    <Link
                      href={item.href}
                      className={clsx(
                        "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors",
                        isActive
                          ? "text-ink-50 bg-white/[0.07]"
                          : "text-ink-100/85 hover:text-ink-50 hover:bg-white/[0.05]"
                      )}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() =>
                        setActive(active === item.label ? null : item.label)
                      }
                      className={clsx(
                        "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-[0.92rem] font-medium transition-colors cursor-pointer",
                        active === item.label || isActive
                          ? "text-ink-50 bg-white/[0.07]"
                          : "text-ink-100/85 hover:text-ink-50 hover:bg-white/[0.05]"
                      )}
                      aria-haspopup
                      aria-expanded={active === item.label}
                    >
                      {item.label}
                      <ChevronDown
                        size={14}
                        className={clsx(
                          "opacity-70 transition-transform duration-200",
                          active === item.label && "rotate-180"
                        )}
                      />
                    </button>
                  )}

                  <AnimatePresence>
                    {has && active === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.98 }}
                        transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                        className={clsx(
                          "absolute left-1/2 top-full pt-3 -translate-x-1/2 z-40",
                          item.children && item.children.length > 1
                            ? "min-w-[640px]"
                            : "min-w-[320px]"
                        )}
                      >
                        <div className="surface rounded-2xl p-3 shadow-card backdrop-blur-xl">
                          <div
                            className={clsx(
                              "grid gap-2",
                              item.children && item.children.length > 1
                                ? "grid-cols-2"
                                : "grid-cols-1"
                            )}
                          >
                            {item.children?.map((col, i) => (
                              <div key={i} className="rounded-xl p-1.5">
                                {col.title && (
                                  <div className="px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-turq">
                                    {col.title}
                                  </div>
                                )}
                                <ul className="grid gap-0.5">
                                  {col.items.map((c) => (
                                    <li key={c.href}>
                                      <Link
                                        href={c.href}
                                        className="group flex items-start gap-2 rounded-lg px-3 py-2.5 transition-colors hover:bg-white/[0.06]"
                                      >
                                        <span className="flex-1">
                                          <span className="block text-[0.92rem] font-medium text-ink-50">
                                            {c.label}
                                          </span>
                                          {c.desc && (
                                            <span className="block text-[0.78rem] text-ink-200 mt-0.5">
                                              {c.desc}
                                            </span>
                                          )}
                                        </span>
                                        <ArrowUpRight
                                          size={14}
                                          className="mt-1 text-ink-200 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-brand-turq"
                                        />
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden md:inline-flex btn btn-turq btn-sm"
            >
              Book a discovery call
              <ArrowUpRight size={14} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/[0.06] text-ink-50"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-x-3 top-[5.25rem] z-[99] surface rounded-2xl p-3 shadow-card backdrop-blur-xl lg:hidden max-h-[80vh] overflow-y-auto"
          >
            {NAV.map((item) =>
              item.children ? (
                <details
                  key={item.label}
                  className="border-b border-white/5 last:border-none"
                >
                  <summary className="list-none cursor-pointer flex items-center justify-between px-3 py-3.5 text-ink-50 font-medium">
                    {item.label}
                    <ChevronDown size={16} className="text-brand-turq" />
                  </summary>
                  <div className="pb-3">
                    {item.children.map((col, i) => (
                      <div key={i}>
                        {col.title && (
                          <div className="px-5 pt-2 pb-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-brand-turq">
                            {col.title}
                          </div>
                        )}
                        {col.items.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-5 py-2 text-[0.92rem] text-ink-100 hover:text-brand-turq"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </details>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="block px-3 py-3.5 text-ink-50 font-medium border-b border-white/5"
                >
                  {item.label}
                </Link>
              )
            )}
            <div className="flex gap-2 p-2 mt-2">
              <Link href="/contact" className="btn btn-turq flex-1">
                Book a call
              </Link>
              <Link href="/solutions" className="btn btn-ghost flex-1">
                Solutions
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
