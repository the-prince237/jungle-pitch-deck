import type { Metadata } from "next";
import "./globals.css";
import { degular } from "./fonts";

export const metadata: Metadata = {
  // 🔹 Base
  title: {
    default: "Jungle — L’immobilier gagnant-gagnant au Cameroun",
    template: "%s | Jungle",
  },

  description:
    "Jungle est une plateforme immobilière innovante qui permet aux agents de monétiser leur expertise terrain grâce à des visites virtuelles payantes, tout en offrant aux locataires une transparence totale avant de louer. Présente à Yaoundé et Douala.",

  applicationName: "Jungle",

  generator: "Next.js",
  referrer: "origin-when-cross-origin",

  keywords: [
    "immobilier Cameroun",
    "location Yaoundé",
    "location Douala",
    "agents immobiliers Cameroun",
    "visite immobilière virtuelle",
    "plateforme immobilière Afrique",
    "startup immobilière Cameroun",
    "real estate Africa",
    "proptech Afrique",
    "location maison Cameroun",
    "Jungle immobilier",
  ],

  authors: [
    {
      name: "Durin Tasondock",
      url: "https://jungle.africa", // à ajuster si besoin
    },
  ],

  creator: "Durin Tasondock",
  publisher: "Jungle",

  category: "Real Estate / PropTech",

  // 🔹 SEO & indexation
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // 🔹 Open Graph (Facebook, LinkedIn, WhatsApp)
  openGraph: {
    type: "website",
    locale: "fr_CM",
    url: "https://jungle.africa",
    siteName: "Jungle",
    title: "Jungle — Enfin, l’immobilier gagnant-gagnant",
    description:
      "Agents immobiliers enfin payés à leur juste valeur. Locataires informés avant de signer. Jungle digitalise les visites immobilières et sécurise les paiements au Cameroun.",
    images: [
      {
        url: "https://jungle.africa/og/jungle-cover.jpg", // image 1200x630
        width: 1200,
        height: 630,
        alt: "Jungle — Plateforme immobilière gagnant-gagnant",
      },
    ],
  },

  // 🔹 Twitter / X
  twitter: {
    card: "summary_large_image",
    title: "Jungle — La nouvelle façon de louer au Cameroun",
    description:
      "Visites virtuelles payantes, transparence totale, revenus garantis pour les agents. Jungle révolutionne l’immobilier à Yaoundé et Douala.",
    images: ["https://jungle.africa/og/jungle-cover.jpg"],
    creator: "@jungle_africa", // optionnel
  },

  // 🔹 Mobile / PWA
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },

  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0A2540" },
    { media: "(prefers-color-scheme: dark)", color: "#0A2540" },
  ],

  // 🔹 Icônes
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },

  // 🔹 Manifest (PWA ready)
  manifest: "/site.webmanifest",

  // 🔹 Autres métadonnées utiles
  alternates: {
    canonical: "https://jungle.africa",
    languages: {
      "fr-CM": "https://jungle.africa",
      "fr-FR": "https://jungle.africa/fr",
      "en-US": "https://jungle.africa/en",
    },
  },

  metadataBase: new URL("https://jungle.africa"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${degular.variable} antialiased font-degular`}
      >
        {children}
      </body>
    </html>
  );
}
