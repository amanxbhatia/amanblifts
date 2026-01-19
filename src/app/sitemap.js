import { exercises } from "../data/exercises";
import { workouts } from "../data/workouts";

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

  const workoutPages = workouts.map((workout) => ({
    url: `${baseUrl}/workouts/${workout.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...exercisePages, ...workoutPages];
}
