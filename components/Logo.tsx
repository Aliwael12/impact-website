import Link from "next/link";

export default function Logo({ size = 36 }: { size?: number }) {
  return (
    <Link
      href="/"
      className="flex items-center gap-2.5 font-bold text-ink-50 tracking-tight"
      aria-label="Impact — Learning & Development"
    >
      <span
        className="grid place-items-center rounded-xl text-ink-900 shadow-glow"
        style={{
          width: size,
          height: size,
          background: "linear-gradient(135deg, #08A0EB, #80DCFF)",
        }}
      >
        <svg
          viewBox="0 0 24 24"
          width={size * 0.55}
          height={size * 0.55}
          fill="none"
        >
          <path
            d="M3 18 L9 6 L13 14 L17 8 L21 18"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="9" cy="6" r="1.4" fill="currentColor" />
          <circle cx="17" cy="8" r="1.4" fill="currentColor" />
        </svg>
      </span>
      <span className="text-[1.18rem] leading-none">
        Impact<span className="text-brand-turq">.</span>
      </span>
    </Link>
  );
}
