import type { Metadata, Viewport } from "next";
import { Silkscreen, Google_Sans_Code } from "next/font/google";
import "./globals.css";

const gsc = Google_Sans_Code({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-gsc",
  display: "swap",
  adjustFontFallback: false,
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-silkscreen",
  display: "swap",
});

const SITE = "https://bidaman.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "bidaman · Presence, not promises.",
    template: "%s · bidaman",
  },
  description:
    "bidaman is a reliable skeleton crew for your editing, Meta Business ads, and content strategy. We don't promise virality. We make sure you're seen. Working across EU, US & LATAM.",
  keywords: [
    "video editing",
    "Meta ads",
    "content strategy",
    "social media",
    "editing crew",
    "bidaman",
    "EU",
    "US",
    "LATAM",
  ],
  openGraph: {
    title: "bidaman · Presence, not promises.",
    description:
      "A reliable skeleton crew for editing, Meta Business ads, and content strategy. EU · US · LATAM.",
    url: SITE,
    siteName: "bidaman",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "bidaman · Presence, not promises.",
    description:
      "A reliable skeleton crew for editing, Meta Business ads, and content strategy. EU · US · LATAM.",
  },
  alternates: { canonical: SITE },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${gsc.variable} ${silkscreen.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
