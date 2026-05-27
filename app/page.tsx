import { Icons } from "@/components/icons";
import Link from "next/link";
import { api as API, TerroristActionDefinition } from "@/db/data";
import Intro from "@/components/home/intro";
import IntroTerroristActions from "@/components/home/intro-terrorist-actions";
import IntroChronologicalSummary from "@/components/home/intro-chronological-summary";
import IntroMemorial from "@/components/home/intro-memorial";
import { Metadata } from "next";

type Props = {};

export const metadata: Metadata = {
  title: "Inicio",
};

const navItems = [
  {
    name: "Asesinatos",
    icon: <Icons.shot className="w-7 h-7" />,
    href: "/asesinatos",
  },
  {
    name: "Secuestros",
    icon: <Icons.prisoner className="w-7 h-7" />,
    href: "/secuestros",
  },
  {
    name: "Atentados",
    icon: <Icons.timeDinamite className="w-7 h-7" />,
    href: "/atentados",
  },
  {
    name: "Robo Dinero",
    icon: <Icons.heist className="w-7 h-7" />,
    href: "/robo-dinero",
  },
  {
    name: "Robo Armas/Explosivos",
    icon: <Icons.gun className="w-6 h-6" />,
    href: "/robo-armamento-explosivos",
  },
  {
    name: "Otras Acciones",
    icon: <Icons.punch className="w-7 h-7" />,
    href: "/otras-acciones",
  },
];

export default async function page({}: Props) {
  const terroristActionWithVideos = await API.getAllWithVideo();
  const actions = await API.getAllAcitions();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="border-b-2 border-foreground pb-8 mb-8">
        <Intro />
      </div>

      <h2 className="font-[family-name:var(--font-newsreader)] text-2xl xs:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-8">
        Acceso directo a la prensa original de la época.
      </h2>

      <main className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Left Sidebar: Acciones */}
        <aside className="lg:col-span-1 border-r border-border pr-8">
          <IntroTerroristActions />
        </aside>

        {/* Center: Memorial (The Lead Story) */}
        <section className="lg:col-span-2 px-4">
          <IntroMemorial actions={actions} />
        </section>

        {/* Right Sidebar: Chronology */}
        <aside className="lg:col-span-1 border-l border-border pl-8">
          <IntroChronologicalSummary />
        </aside>
      </main>

      <section className="mt-24 pt-12 border-t-2 border-foreground">
        <header className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
          <h2 className="font-[family-name:var(--font-newsreader)] text-2xl xs:text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter">
            Testimonios
          </h2>

          <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            Archivo Audiovisual Seleccionado
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {terroristActionWithVideos.map((video) => (
            <div className="group border-b border-border pb-6" key={video.src}>
              <div className="aspect-video bg-black/5 mb-4 relative overflow-hidden">
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90"
                ></iframe>
                <div className="absolute top-0 left-0 bg-primary px-2 py-1 text-[10px] font-black text-white uppercase tracking-widest translate-y-[-100%] group-hover:translate-y-0 transition-transform">
                  Video / Documento
                </div>
              </div>
              <Link
                href={video.slug}
                className="font-[family-name:var(--font-newsreader)] text-xl font-bold leading-tight hover:text-primary transition-colors block mb-2"
              >
                {video.title}
              </Link>
              <p className="text-[10px] font-bold uppercase text-muted-foreground tracking-widest">
                Categoría: Testimonios Directos
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
