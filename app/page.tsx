import { Icons } from "@/components/icons";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { api } from "@/db/api";
import Link from "next/link";

const links = [
  { label: "asesinatos", href: "/asesinatos", icon: Icons.gun },
  { label: "atentados", href: "/atentados", icon: Icons.timeDinamite },
  { label: "robos", href: "/robos", icon: Icons.heist },
  { label: "secuestros", href: "/secuestros", icon: Icons.prisoner },
  { label: "otras acciones", href: "/otras-acciones", icon: Icons.punch },
];

export default async function Home() {
  const month = new Intl.DateTimeFormat("es-ES", { month: "long" });

  const terroristActionWithVideos = await api.getAllWithVideo();
  // console.log(
  //   "terroristActionWithVideos",
  //   terroristActionWithVideos.map((video) => console.log("video", video.title))
  // );
  // console.log(terroristActionWithVideos);

  const numberOfMurderedVictims = (await api.getKills()).reduce(
    (acc, incident) => acc + (incident.totalOfVictims ?? 0),
    0
  );
  // console.log(Number(numberOfMurderedVictims));

  return (
    <section className="h-full mx-auto container bg-background">
      <div className="">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="uppercase text-5xl text-primary font-extrabold">
              nunca más terrorismo
            </h1>

            <p className="max-w-[850px] text-primary-foreground py-4">
              La presente hemeroteca fue confeccionada exclusivamente con
              noticias periodísticas de las décadas del 60 y 70 escaneadas de
              las páginas originales de los diarios. De esta manera se podrá
              acceder al relato cronológico documentado exento de opiniones y/o
              relatos alejados en el tiempo y contexto en que sucedieron los
              hechos. En virtud del tiempo transcurrido, es necesario precisar
              que el inicio de los hechos se dieron en el marco de un gobierno
              democrático surgido de elecciones libres, el cual, al igual que la
              sociedad de la época, se vieron sorprendidos ante los embates de
              una situación ajena a los hábitos de convivencia, como lo
              demuestran estas publicaciones.
            </p>
          </div>

          <div className="text-primary flex flex-col justify-center items-center w-full lg:w-96">
            <Link
              href={`/memorial`}
              className="font-bold md:text-lg flex items-center gap-3 py-2"
            >
              <Icons.museum className="w-6 h-6 xl:w-7 xl:h-7" />

              <p>
                Memorial del mes de{" "}
                <time
                  dateTime={month.format(new Date())}
                  className="capitalize"
                >
                  {month.format(new Date())}
                </time>
              </p>
            </Link>
            <img
              src={`/efemerides/${month.format(new Date())}.png`}
              className="object-contain lg:object-contain w-full lg:w-[298px] lg:h-[398px]"
              alt={`memorial del mes de ${month.format(new Date())}`}
            />
          </div>
        </div>
      </div>

      <Stats />

      <div className="py-10 container mx-auto mt-4">
        <h2 className="uppercase text-5xl text-primary text-center font-extrabold">
          testimonios
        </h2>

        <p className="text-center font-bold text-lg lg:text-2xl text-primary">
          Videos con relatos de familiares de víctimas del terrorismo
          revolucionario
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 py-4">
          {terroristActionWithVideos.map((video) => (
            <div className="rounded shadow-lg bg-white" key={video.src}>
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-96 lg:h-52"
              ></iframe>
              <div className="p-2 text-primary">
                <Link href={video.slug}>{video.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

{
  /* <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div>
            <h1 className="uppercase text-5xl text-primary font-extrabold">
              nunca más terrorismo
            </h1>

            <p className="max-w-[850px] text-primary-foreground py-4">
              La presente hemeroteca fue confeccionada exclusivamente con
              noticias periodísticas de las décadas del 60 y 70 escaneadas de
              las páginas originales de los diarios. De esta manera se podrá
              acceder al relato cronológico documentado exento de opiniones y/o
              relatos alejados en el tiempo y contexto en que sucedieron los
              hechos. En virtud del tiempo transcurrido, es necesario precisar
              que el inicio de los hechos se dieron en el marco de un gobierno
              democrático surgido de elecciones libres, el cual, al igual que la
              sociedad de la época, se vieron sorprendidos ante los embates de
              una situación ajena a los hábitos de convivencia, como lo
              demuestran estas publicaciones.
            </p>
          </div>

          <div className="text-primary flex flex-col justify-center items-center w-full lg:w-96">
            <Link
              href={`/memorial`}
              className="font-bold md:text-lg flex items-center gap-3 py-2"
            >
              <Icons.museum className="w-6 h-6 xl:w-7 xl:h-7" />

              <p>
                Memorial del mes de{" "}
                <time
                  dateTime={month.format(new Date())}
                  className="capitalize"
                >
                  {month.format(new Date())}
                </time>
              </p>
            </Link>
            <img
              src={`/efemerides/${month.format(new Date())}.png`}
              className="object-contain lg:object-contain w-full lg:w-[298px] lg:h-[398px]"
              alt={`memorial del mes de ${month.format(new Date())}`}
            />
          </div>
        </div>
      </div>

      <Stats />

      <div className="py-10 bg-white container mx-auto mt-4">
        <h2 className="uppercase text-5xl text-primary text-center font-extrabold">
          testimonios
        </h2>

        <p className="text-center font-bold text-lg lg:text-2xl text-destructive">
          Videos con relatos de familiares de víctimas del terrorismo
          revolucionario
        </p>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 py-4">
          {terroristActionWithVideos.map((video) => (
            <div className="rounded shadow-lg" key={video.src}>
              <iframe
                src={video.src}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-96 lg:h-52"
              ></iframe>
              <Link className="pt-2 text-primary" href={video.slug}>
                {video.title}
              </Link>
            </div>
          ))}
        </div>
      </div> */
}
