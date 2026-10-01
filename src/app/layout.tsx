import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://winterborn.se"),
  title: "WinterBorn AB",
  description: "WinterBorn AB utvecklar och driver digitala produkter och tjänster.",
  openGraph: {
    title: "WinterBorn AB",
    description: "WinterBorn AB utvecklar och driver digitala produkter och tjänster.",
    type: "website",
    locale: "sv_SE",
    alternateLocale: "en_US",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
