import { Counter, Reveal, Stagger, Item } from "./Motion";

type Stat = { value: number; suffix?: string; prefix?: string; label: string };

export default function Stats({
  stats,
  eyebrow,
  title,
}: {
  stats: Stat[];
  eyebrow?: string;
  title?: React.ReactNode;
}) {
  return (
    <section className="border-t border-b border-white/5 py-16 relative">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "linear-gradient(180deg, transparent, rgba(15, 29, 51, 0.55))",
        }}
      />
      <div className="container-x">
        {(eyebrow || title) && (
          <Reveal>
            <div className="text-center mb-12">
              {eyebrow && <span className="chip mb-5 inline-flex">{eyebrow}</span>}
              {title && (
                <h2 className="text-2xl md:text-3xl font-semibold text-ink-50 max-w-[28ch] mx-auto">
                  {title}
                </h2>
              )}
            </div>
          </Reveal>
        )}

        <Stagger className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((s, i) => (
            <Item key={i}>
              <div>
                <div
                  className="font-bold leading-none tracking-tight"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    background:
                      "linear-gradient(135deg, #ffffff, #80DCFF)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    color: "transparent",
                  }}
                >
                  <Counter to={s.value} suffix={s.suffix} prefix={s.prefix} />
                </div>
                <div className="mt-3 text-ink-100 text-[0.95rem] leading-relaxed max-w-[28ch]">
                  {s.label}
                </div>
              </div>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
