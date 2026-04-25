import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
