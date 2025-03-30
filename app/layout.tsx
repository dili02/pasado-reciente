import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import TailwindIndicator from "@/components/tailwind-inicator";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-UY">
      <body className={`${jetBrainsMono.className} bg-[#e4d8b4]`}>
        <header className="container text-center py-4">
          <Link href="/">
            <h1
              className={`${newsreader.className} text-2xl lg:text-4xl text-black font-extrabold`}
            >
              Museo de la Memoria del Pasado Reciente
            </h1>
            <span
              className={`${newsreader.className} text-2xl lg:text-4xl text-black`}
            >
              Uruguay
            </span>
          </Link>
        </header>

        <main className="">{children}</main>

        <TailwindIndicator />
      </body>
    </html>
  );
}
