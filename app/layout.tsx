import type { Metadata } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";
import TailwindIndicator from "@/components/tailwind-inicator";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const newsreader = Newsreader({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.pasadoreciente.com/"),
  title: {
    default: "Pasado Reciente",
    template: "%s | Pasado Reciente",
  },
  description:
    "Museo de la Memoria del Pasado Reciente contiene noticias escaneadas de las páginas originales de la prensa sobre asesinatos, secuestros, atentados, robo de dinero, armas, explosivos, bancos y otras acciones cometidas por terroristas en Uruguay en las décadas de 1960 y 1970",
};

import Header from "@/components/header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-UY">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>

        <TailwindIndicator />
      </body>
    </html>
  );
}
