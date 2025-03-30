import type { Metadata } from "next";
import { JetBrains_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import TailwindIndicator from "@/components/tailwind-inicator";
import Link from "next/link";

const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"] });
const newsreader = Newsreader({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Pasado Reciente",
    template: "%s | Pasado Reciente",
  },
  description:
    "Hemeroteca confeccionada con noticias periodísticas de las décadas del 60 y 70 escaneadas de las páginas originales de los diarios. De esta manera se podrá acceder al relato cronológico documentado exento de opiniones y/o relatos alejados en el tiempo y contexto en que sucedieron los hechos.",
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

        {/* <footer className="bg-orange-300 py-12 bg-opacity-10">
          <div className="container mx-auto px-4 text-center text-gray-900">
            <p>Made with 💗 by RoadsideCoder</p>
          </div>
        </footer> */}

        <TailwindIndicator />
      </body>
      {/* <body className={jetBrainsMono.className}>
        <Header />

        <main className="">{children}</main>

        <TailwindIndicator />
      </body> */}
    </html>
  );
}
