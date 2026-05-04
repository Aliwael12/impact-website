import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Impact — Learning, Leadership & Organizational Development | MENA",
    template: "%s | Impact L&D",
  },
  description:
    "Impact designs experiential learning journeys, business simulations, and leadership development programs that drive measurable performance across Egypt, KSA and the UAE.",
  keywords: [
    "leadership development",
    "experiential learning",
    "business simulations",
    "L&D MENA",
    "leadership training Egypt",
    "leadership training KSA",
    "leadership training UAE",
  ],
  metadataBase: new URL("https://impact-ld.me"),
  openGraph: {
    title: "Impact — Learning & Development",
    description:
      "Transforming capability into measurable business performance across MENA.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${barlow.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[200] focus:rounded-md focus:bg-brand-turq focus:px-4 focus:py-2 focus:text-ink-900"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
