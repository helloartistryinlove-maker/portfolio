import type { Metadata } from "next";
import { Manrope, Noto_Serif, Great_Vibes } from "next/font/google";
import { Footer } from "@/components/site/footer";
import { Navigation } from "@/components/site/navigation";
import "./globals.css";

const serifFont = Noto_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const sansFont = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

const scriptFont = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Artistry In Love | Editorial Wedding Cinema",
  description:
    "We specialize in editorial wedding cinema for those who value the intentional, the understated, and the timeless.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${serifFont.variable} ${sansFont.variable} ${scriptFont.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
