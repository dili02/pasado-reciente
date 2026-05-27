import type { Metadata, Viewport } from "next";
import { Inter, Newsreader, Merriweather } from "next/font/google";
import { WebSite, WithContext } from "schema-dts";
import "./globals.css";
import TailwindIndicator from "@/components/tailwind-inicator";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "800"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pasadoreciente.com/"),
  title: {
    default: "Pasado Reciente",
    template: "%s | Pasado Reciente",
  },
  description:
    "Museo de la Memoria del Pasado Reciente contiene noticias escaneadas de las páginas originales de la prensa sobre asesinatos, secuestros, atentados, robo de dinero, armas, explosivos, bancos y otras acciones cometidas por terroristas en Uruguay en las décadas de 1960 y 1970",
  openGraph: {
    type: "website",
    locale: "es_UY",
    url: "https://www.pasadoreciente.com/",
    siteName: "Pasado Reciente",
    title: "Pasado Reciente - Museo de la Memoria",
    description:
      "Hemeroteca digital con noticias escaneadas de prensa de los años 60 y 70...",
    images: [
      {
        url: "https://www.pasadoreciente.com/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pasado Reciente",
    description: "Museo de la Memoria del Pasado Reciente",
  },
  alternates: {
    canonical: "https://www.pasadoreciente.com/",
    languages: { "es-UY": "https://www.pasadoreciente.com/" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#f5f3ef",
};

const jsonLd: WithContext<WebSite> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Pasado Reciente",
  description: "Museo de la Memoria del Pasado Reciente",
  url: "https://www.pasadoreciente.com/",
  publisher: { "@type": "Organization", name: "Pasado Reciente" },
  inLanguage: "es-UY",
};

import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-UY">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.className} ${newsreader.className} bg-background text-foreground antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:font-bold focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
        >
          Saltar al contenido principal
        </a>
        <Header />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>

        <TailwindIndicator />
      </body>
    </html>
  );
}
