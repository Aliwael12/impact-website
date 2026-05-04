import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.25rem", lg: "2rem" },
      screens: { "2xl": "1280px" },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-barlow)", "system-ui", "sans-serif"],
        display: ["var(--font-barlow)", "system-ui", "sans-serif"],
        condensed: ["var(--font-barlow-condensed)", "system-ui", "sans-serif"],
      },
      colors: {
        // raw brand from guide
        brand: {
          navy: "#023047",
          charcoal: "#293648",
          deep: "#1C65A5",
          blue: "#08A0EB",
          mid: "#25AAE1",
          sky: "#78CCEE",
          turq: "#80DCFF",
          pale: "#C1FFFF",
        },
        accent: {
          green: "#00CC99",
          orange: "#F95A35",
          purple: "#3F36C8",
        },
        // surfaces (dark-leaning)
        ink: {
          50: "#f1f5f9",
          100: "#cbd5e1",
          200: "#94a3b8",
          300: "#64748b",
          400: "#475569",
          500: "#334155",
          600: "#1e293b",
          700: "#0f1d33",
          800: "#0a1626",
          900: "#07111f",
          950: "#04090f",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "brand-blue": "linear-gradient(135deg, #08A0EB 0%, #1C65A5 100%)",
        "brand-glow":
          "radial-gradient(60% 60% at 50% 50%, rgba(8,160,235,0.35) 0%, rgba(8,160,235,0) 70%)",
      },
      boxShadow: {
        glow: "0 10px 30px -10px rgba(8, 160, 235, 0.55)",
        "glow-strong":
          "0 0 0 1px rgba(128, 220, 255, 0.16), 0 30px 80px -20px rgba(8, 160, 235, 0.55)",
        card: "0 14px 40px -12px rgba(0, 0, 0, 0.45)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "marquee": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up .65s ease forwards",
        "marquee": "marquee 38s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "shimmer": "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
