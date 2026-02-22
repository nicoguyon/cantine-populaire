import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const dmSerif = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cantinepopulaire.fr"),
  title: "Cantine Populaire — Menu du jour fait maison à Clichy",
  description:
    "La Cantine Populaire à Clichy : menu du jour fait maison, produits frais et locaux, formule complète ~15€. Du lundi au vendredi, 12h–14h30. Traiteur le week-end.",
  keywords: [
    "cantine populaire clichy",
    "restaurant fait maison clichy",
    "menu du jour clichy",
    "restaurant 92110",
    "traiteur clichy",
    "cuisine maison clichy",
  ],
  openGraph: {
    title: "Cantine Populaire — Menu du jour fait maison à Clichy",
    description:
      "La Cantine Populaire à Clichy : menu du jour fait maison, produits frais et locaux, formule complète ~15€. Du lundi au vendredi, 12h–14h30.",
    url: "https://cantinepopulaire.fr",
    siteName: "Cantine Populaire",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/images/cantine-hero.webp",
        width: 1200,
        height: 630,
        alt: "Cantine Populaire Clichy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cantine Populaire — Menu du jour fait maison à Clichy",
    description: "Menu du jour, produits frais, 15€ tout compris. Clichy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${dmSerif.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-cream text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}
