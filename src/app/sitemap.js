// export const dynamic = "force-static";

// export default function sitemap() {
//   return [
//     {
//       url: "https://amanblifts.vercel.app/",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://amanblifts.vercel.app/exercises",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://amanblifts.vercel.app/workouts",
//       lastModified: new Date(),
//     },
//     {
//       url: "https://amanblifts.vercel.app/blog",
//       lastModified: new Date(),
//     },
//   ];
// }
import { exercises } from "../data/exercises";

export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://amanblifts.vercel.app";

  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/exercises`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/workouts`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ];

  const exercisePages = exercises.map((exercise) => ({
    url: `${baseUrl}/exercises/${exercise.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...exercisePages];
}
