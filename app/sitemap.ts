// import { api as API } from "@/db/data";
// import { MetadataRoute } from "next";

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   const actions = await API.getAllAcitions();

//   const attacks: MetadataRoute.Sitemap = actions.map((action) => ({
//     url: `https://www.pasadoreciente.com/${action.type}/${action.slug}`,
//     lastModified: new Date(),
//   }));

//   return [
//     {
//       url: "https://www.pasadoreciente.com",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/atentados",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/asesinatos",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/otras-acciones",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/robo-armamento-explosivos",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/robo-dinero",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/secuestros",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/efemerides",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://www.pasadoreciente.com/cronologico",
//       lastModified: new Date(),
//     },
//     ...attacks,
//   ];
// }
