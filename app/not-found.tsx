import { ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { Newsreader } from "next/font/google";
import { Icons } from "@/components/icons";

const newsreader = Newsreader({ subsets: ["latin"], weight: ["800"] });

export default function NotFound() {
  const mainPages = [
    { name: "Asesinatos", href: "/asesinatos", icon: Icons.shot },
    { name: "Secuestros", href: "/secuestros", icon: Icons.prisoner },
    { name: "Atentados", href: "/atentados", icon: Icons.timeDinamite },
    { name: "Robo de Dinero", href: "/robo-dinero", icon: Icons.heist },
    {
      name: "Robo de Armas",
      href: "/robo-armamento-explosivos",
      icon: Icons.gun,
    },
    { name: "Otras Acciones", href: "/otras-acciones", icon: Icons.punch },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full text-center">
        <h1
          className={`${newsreader.className} text-6xl md:text-8xl font-black uppercase tracking-tighter mb-4`}
        >
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Página no encontrada
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>

        <div className="flex flex-col gap-6 mb-12">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-md hover:bg-primary/90 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
        </div>

        <div className="border-t border-border pt-8">
          <h3 className="text-lg font-bold mb-6 uppercase tracking-widest">
            Quizás estabas buscando:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {mainPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                className="flex flex-col items-center gap-2 p-4 border border-border rounded-md hover:border-primary hover:bg-primary/5 transition-colors group"
              >
                <span className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors">
                  {<page.icon className="w-full h-full" />}
                </span>
                <span className="text-sm font-bold text-center">
                  {page.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
