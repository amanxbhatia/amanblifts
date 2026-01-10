"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function WorkoutDetailPage() {
  const slug = usePathname().split("/").pop();

  const workouts = {
    "push-pull-legs": {
      title: "Push Pull Legs",
      description:
        "A structured split designed for balanced growth and recovery.",
      days: [
        {
          day: "Push Day",
          exercises: [
            { name: "Incline Dumbbell Press", slug: "incline-dumbbell-press" },
            { name: "Barbell Shoulder Press", slug: "barbell-shoulder-press" },
            { name: "Tricep Rope Pushdown", slug: "tricep-rope-pushdown" },
          ],
        },
        {
          day: "Pull Day",
          exercises: [
            { name: "Lat Pulldown", slug: "lat-pulldown" },
            { name: "Seated Cable Row", slug: "seated-cable-row" },
            { name: "Barbell Curl", slug: "barbell-curl" },
          ],
        },
        {
          day: "Leg Day",
          exercises: [
            { name: "Barbell Squat", slug: "barbell-squat" },
            { name: "Leg Press", slug: "leg-press" },
          ],
        },
      ],
    },
  };

  const workout = workouts[slug];

  if (!workout) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Workout coming soon</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{workout.title}</h1>
        <p className="text-gray-400 mb-10">{workout.description}</p>

        {workout.days.map((day, i) => (
          <div
            key={i}
            className="border border-gray-800 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-2xl font-semibold mb-4">{day.day}</h2>

            <ul className="space-y-2 text-gray-400">
              {day.exercises.map((ex, j) => (
                <li key={j}>
                  •{" "}
                  <Link
                    href={`/exercises/${ex.slug}`}
                    className="text-white hover:underline"
                  >
                    {ex.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
