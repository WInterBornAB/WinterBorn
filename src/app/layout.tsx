import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://www.winterborn.se";
const siteTitle = "WinterBorn AB – Digitala produkter för spel, träning och fritid";
const siteDescription =
  "WinterBorn AB utvecklar digitala produkter och tjänster för spel, träning och fritid – bland annat Remote Raid och WNTR Training.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "WinterBorn AB",
    type: "website",
    locale: "sv_SE",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
