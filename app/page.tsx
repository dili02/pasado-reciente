import { Icons } from "@/components/icons";
import Link from "next/link";
import { api as API, TerroristActionDefinition } from "@/db/data";
import Intro from "@/components/home/intro";
import IntroTerroristActions from "@/components/home/intro-terrorist-actions";
import IntroChronologicalSummary from "@/components/home/intro-chronological-summary";
import IntroMemorial from "@/components/home/intro-memorial";
import { Metadata } from "next";
import { AccionesDataTable } from "@/components/data-table/data-table-acciones";
import { AccionTerrorista } from "@/components/data-table/data-table-types";

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
  // const terroristActionWithVideos = await API.getAllWithVideo();

  // const actions = await API.getAllAcitions();

  const actions = await API.getAllAcitions();

  function DataTableMapper(
    data: TerroristActionDefinition[]
  ): AccionTerrorista[] {
    return data.map((action) => ({
      id: action.slug,
      fecha: action.date.toLocaleDateString(),
      tipoAccion: action.type as AccionTerrorista["tipoAccion"],
      accion: action.title,
      completada: false,
    }));
  }

  const mappedData = DataTableMapper(actions);

  // console.log("mappedData", mappedData);

  return (
    <div className="container mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Registro de Acciones Terroristas
        </h1>
        <p className="text-muted-foreground mt-2">
          Gestiona y monitorea las acciones registradas con filtros y búsqueda
          avanzada.
        </p>
      </div>

      <AccionesDataTable initialData={mappedData} />

      {/* <ul>
        {mappedData.map((action) => (
          <li
            key={action.accion}
            className="flex items-center justify-center gap-2 my-2"
          >
            <div>{action.fecha}</div>
            <div>{action.tipoAccion}</div>
            <div>{action.accion}</div>
          </li>
        ))}
      </ul> */}
    </div>
    // <div className="container">
    //   <Intro />

    //   <div className="grid gap-4 grid-cols-1 lg:grid-cols-3 xl:mt-8">
    //     <IntroTerroristActions />

    //     <IntroChronologicalSummary />

    //     <IntroMemorial actions={actions} />
    //   </div>

    //   <div className="mt-8">
    //     <h2 className="text-center uppercase text-xl xl:text-3xl font-extrabold text-black">
    //       testimonios
    //     </h2>
    //     <p className="text-center xl:text-lg text-black">
    //       Relatos de familiares de víctimas del terrorismo.
    //     </p>
    //     <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 py-4">
    //       {terroristActionWithVideos.map((video) => (
    //         <div
    //           className="shadow-lg bg-orange-50 transition-transform duration-300 hover:scale-105 rounded-xl"
    //           key={video.src}
    //         >
    //           <iframe
    //             src={video.src}
    //             title={video.title}
    //             frameBorder="0"
    //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    //             referrerPolicy="strict-origin-when-cross-origin"
    //             allowFullScreen
    //             className="w-full h-44 lg:h-44 rounded-t-xl"
    //           ></iframe>
    //           <div className="p-2 text-sm text-black text-center">
    //             <Link href={video.slug}>{video.title}</Link>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
}

// neceseito crear una data-table con shacdn, totalmente funcional (ordenable, filtros, buscar, etc), que se guarde en el localsotrage, que reciba un array de acciones terroristas, con las propiedades fecha: date.toLocaleDateString(), es tipo de accion = | "asesinatos" | "atentados" | "secuestros" | "robo-armamento-explosivos" | "robo-dinero" | "otras-acciones" (estos tienen que ser un badge y cada tipo de un diferente color),  un texto que es la accion (que cuando sea mas ancha que la fila termine con ..., por ejemeple asesinato de...), un check que cuando este activo se tache toda la linea y que quede almacenada la data en el local storage
