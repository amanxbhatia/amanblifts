"use client";

import { usePathname } from "next/navigation";

export default function WorkoutDetailPage() {
  const slug = usePathname().split("/").pop();

  const workouts = {
    "push-pull-legs": {
      title: "Push Pull Legs",
      description:
        "Push Pull Legs is a structured split that allows optimal recovery and balanced muscle growth.",
      days: [
        {
          day: "Push Day",
          exercises: [
            "Incline Dumbbell Press",
            "Barbell Shoulder Press",
            "Tricep Rope Pushdown",
          ],
        },
        {
          day: "Pull Day",
          exercises: [
            "Lat Pulldown",
            "Seated Cable Row",
            "Barbell Curl",
          ],
        },
        {
          day: "Leg Day",
          exercises: [
            "Barbell Squat",
            "Leg Press",
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
        <h1 className="text-4xl font-bold mb-4">
          {workout.title}
        </h1>

        <p className="text-gray-400 mb-10">
          {workout.description}
        </p>

        {workout.days.map((day, index) => (
          <div
            key={index}
            className="border border-gray-800 rounded-2xl p-6 mb-6"
          >
            <h2 className="text-2xl font-semibold mb-4">
              {day.day}
            </h2>

            <ul className="text-gray-400 space-y-2">
              {day.exercises.map((ex, i) => (
                <li key={i}>• {ex}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
