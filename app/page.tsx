import { Icons } from "@/components/icons";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { api } from "@/db/api";
import Link from "next/link";
// import { unstable_noStore as noStore } from "next/cache";
import { ChevronRight } from "lucide-react";
import Memorial from "@/components/memorial";

// export const dynamic = "force-dynamic";

export default async function Home() {
  // noStore();
  // const month = new Intl.DateTimeFormat("es-ES", { month: "long" });
  // console.log(month);

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
    <section className="min-h-screen">
      {/* <Stats /> */}

      <div className="text-textPrimary container">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 relative py-8">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 min-h-[650px] md:gap-4 relative"> */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4">
              <h1 className="text-5xl xl:text-6xl font-extrabold leading-relaxed xl:leading-tight uppercase text-[#f40]">
                nunca más terrorismo
              </h1>
              <p className="text-textSecondary xl:max-w-[850px]">
                La presente hemeroteca fue confeccionada exclusivamente con
                noticias periodísticas de las décadas del 60 y 70 escaneadas de
                las páginas originales de los diarios. De esta manera se podrá
                acceder al relato cronológico documentado exento de opiniones
                y/o relatos alejados en el tiempo y contexto en que sucedieron
                los hechos. En virtud del tiempo transcurrido, es necesario
                precisar que el inicio de los hechos se dieron en el marco de un
                gobierno democrático surgido de elecciones libres, el cual, al
                igual que la sociedad de la época, se vieron sorprendidos ante
                los embates de una situación ajena a los hábitos de convivencia,
                como lo demuestran estas publicaciones.
              </p>
            </div>
          </div>

          {/* MEMORIal */}
          {/* <div className="flex flex-col justify-center items-center">
            <div className="flex items-center justify-center gap-3 py-2">
              <Icons.museum className="w-6 h-6 hidden lg:block" />
              <h2 className="text-2xl uppercase text-center font-extrabold text-textPrimary">
                Memorial del Mes de{" "}
                <time dateTime={month.format(new Date())} className="">
                  {month.format(new Date())}
                </time>
              </h2>
            </div>

            <img
              src={`/efemerides/${month.format(new Date())}.png`}
              className="w-[350px] md:w-[550px] xl:w-[350px] drop-shadow py-4"
              // className="object-cover w-full py-4"
              alt={`memorial del mes de ${month.format(new Date())}`}
            />

            <Button
              className="bg-[#f60] hover:bg-[#f90]/90 w-full xl:w-80"
              asChild
            >
              <Link href="/efemerides" className="text-orange-50">
                Ver Efemérides <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div> */}
          <Memorial />
        </div>

        {/* <Stats /> */}

        {/* <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          <div className="mx-auto pb-10 text-center md:pb-16">
            <h1 className="leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl uppercase text-primary">
              nunca más terrorismo
            </h1>

            <div className="mx-auto">
              <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                La presente hemeroteca fue confeccionada exclusivamente con
                noticias periodísticas de las décadas del 60 y 70 escaneadas de
                las páginas originales de los diarios. De esta manera se podrá
                acceder al relato cronológico documentado exento de opiniones
                y/o relatos alejados en el tiempo y contexto en que sucedieron
                los hechos. En virtud del tiempo transcurrido, es necesario
                precisar que el inicio de los hechos se dieron en el marco de un
                gobierno democrático surgido de elecciones libres, el cual, al
                igual que la sociedad de la época, se vieron sorprendidos ante
                los embates de una situación ajena a los hábitos de convivencia,
                como lo demuestran estas publicaciones.
              </p>
            </div>

            <Stats />
          </div>

          <div className="relative m-auto flex items-center justify-center">
            <div className="text-primary w-full flex items-center justify-center flex-col gap-4">
              <div className="flex items-center justify-center gap-3">
                <Icons.museum className="w-10 h-10 hidden lg:block" />
                <h2 className="text-4xl uppercase text-center font-extrabold text-primary">
                  Memorial del Mes de{" "}
                  <time dateTime={month.format(new Date())} className="">
                    {month.format(new Date())}
                  </time>
                </h2>
              </div>

              <p className="mb-4 text-textSecondary text-2xl text-center">
                Acciones terroristas llevadas a cabo por los movimientos
                subversivos durante el período 1965-1972.
              </p>

              <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
                <img
                  src={`/efemerides/${month.format(new Date())}.png`}
                  className="object-cover w-full py-4"
                  alt={`memorial del mes de ${month.format(new Date())}`}
                />
                <Button className="w-full bg-[#f60] hover:bg-[#f90]/90" asChild>
                  <Link href="/efemerides">
                    Ver Efemérides <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div> */}

        {/* <div>
        <h2 className="uppercase font-extrabold py-2 text-4xl text-center text-primary">
          testimonios
        </h2>

        <p className="text-textSecondary text-2xl text-center">
          Relatos de familiares de víctimas del terrorismo revolucionario.
        </p>


        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
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
              <div className="p-2 text-textPrimary">
                <Link href={video.slug}>{video.title}</Link>
              </div>
            </div>
          ))}
        </div>
      </div> */}
      </div>

      <Stats />

      <div className="bg-[#f90]/60 mt-8">
        <div className="container">
          <h2 className="text-3xl capitalize font-extrabold py-8 text-textPrimary">
            testimonios
          </h2>
          <p className="text-textSecondary text-xl">
            Relatos de familiares de víctimas del terrorismo.
          </p>

          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
            {terroristActionWithVideos.map((video) => (
              <div className="rounded shadow-lg bg-orange-50" key={video.src}>
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="w-full h-96 lg:h-52"
                ></iframe>
                <div className="p-2 text-textPrimary">
                  <Link href={video.slug}>{video.title}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// <div className="flex flex-col lg:flex-row items-center justify-between py-8">
// <div>
//   <h1 className="uppercase text-5xl text-[#f40] font-extrabold">
//     nunca más terrorismo
//   </h1>

//   <p className="max-w-[900px] text-textPrimary py-4 leading-relaxed">
//     La presente hemeroteca fue confeccionada exclusivamente con noticias
//     periodísticas de las décadas del 60 y 70 escaneadas de las páginas
//     originales de los diarios. De esta manera se podrá acceder al relato
//     cronológico documentado exento de opiniones y/o relatos alejados en
//     el tiempo y contexto en que sucedieron los hechos. En virtud del
//     tiempo transcurrido, es necesario precisar que el inicio de los
//     hechos se dieron en el marco de un gobierno democrático surgido de
//     elecciones libres, el cual, al igual que la sociedad de la época, se
//     vieron sorprendidos ante los embates de una situación ajena a los
//     hábitos de convivencia, como lo demuestran estas publicaciones.
//   </p>

//   <Stats />
// </div>

// <div className="text-primary w-full lg:w-[26rem] flex items-center justify-center flex-col gap-4">
//   <Card className="border-none shadow-none bg-background">
//     <CardHeader>
//       <CardTitle className="text-xl text-textPrimary flex items-center gap-2">
//         <Icons.museum className="w-5 h-5" />
//         Memorial del Mes de{" "}
//         <time
//           dateTime={month.format(new Date())}
//           className="capitalize"
//         >
//           {month.format(new Date())}
//         </time>
//       </CardTitle>
//     </CardHeader>
//     <CardContent>
{
  /* TODO: fix years */
}
//       <p className="mb-4 text-[#4D4D4D]">
//         Recuerdo de atentados llevados a cabo durante el período
//         1963-1972.
//       </p>
//       <div className="aspect-w-16 aspect-h-9 mb-4 rounded-lg overflow-hidden">
//         <img
//           src={`/efemerides/${month.format(new Date())}.png`}
//           className="object-cover w-full"
//           alt={`memorial del mes de ${month.format(new Date())}`}
//         />
//       </div>
//       <Button className="w-full bg-[#f60] hover:bg-[#f90]/90" asChild>
//         <Link href="/efemerides">
//           Ver Efemérides <ChevronRight className="ml-2 h-4 w-4" />
//         </Link>
//       </Button>
//     </CardContent>
//   </Card>
// </div>
// </div>

// <div>
// <h2 className="text-3xl capitalize font-extrabold py-2">testimonios</h2>

// <p className="text-textSecondary text-xl">
//   Relatos de familiares de víctimas del terrorismo revolucionario.
// </p>

// <p className="text-textSecondary text-lg">
//   Escucha las historias de quienes vivieron estos eventos de primera
//   mano. Estos testimonios nos ayudan a comprender el impacto humano de
//   los sucesos históricos.
// </p>

// <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 py-4">
//   {terroristActionWithVideos.map((video) => (
//     <div className="rounded shadow-lg bg-white" key={video.src}>
//       <iframe
//         src={video.src}
//         title={video.title}
//         frameBorder="0"
//         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//         referrerPolicy="strict-origin-when-cross-origin"
//         allowFullScreen
//         className="w-full h-96 lg:h-52"
//       ></iframe>
//       <div className="p-2 text-textPrimary">
//         <Link href={video.slug}>{video.title}</Link>
//       </div>
//     </div>
//   ))}
// </div>
// </div>
