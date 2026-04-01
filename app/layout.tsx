import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://teerra-africa.org"),
  title: {
    default: "TEERRA AFRICA — La Non-Violence au service de l'environnement",
    template: "%s | TEERRA AFRICA",
  },
  description:
    "TEERRA AFRICA est une association à but non lucratif engagée pour la transition écologique, l'éducation et l'entrepreneuriat vert en Afrique de l'Ouest et Australe.",
  keywords: [
    "Teerra Africa", "environnement Afrique", "transition écologique",
    "entrepreneuriat vert", "éducation Bénin", "non-violence",
    "développement durable Afrique", "agro-écologie",
  ],
  authors: [{ name: "TEERRA AFRICA" }],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "TEERRA AFRICA",
    title: "TEERRA AFRICA — La Non-Violence au service de l'environnement",
    description:
      "Réseau de professionnels engagés pour la transition écologique, l'éducation et l'entrepreneuriat vert en Afrique.",
    images: [{ url: "/logo.png", width: 800, height: 800, alt: "TEERRA AFRICA" }],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
