"use client";

import { useState } from "react";
import Link from "next/link";

const exercises = [
  {
    name: "Incline Dumbbell Press",
    slug: "incline-dumbbell-press",
    muscle: "Chest",
    sets: "4",
    reps: "8–12",
    video: "https://www.youtube.com/embed/ThJGIFDqiiA",
  },
];

export default function ExercisesPage() {
  const [selectedMuscle, setSelectedMuscle] = useState("All");

  const muscles = [
    "All",
    "Chest",
    "Back",
    "Legs",
    "Shoulders",
    "Biceps",
    "Triceps",
  ];

  const filteredExercises =
    selectedMuscle === "All"
      ? exercises
      : exercises.filter((ex) => ex.muscle === selectedMuscle);

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 py-14 sm:py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        AmanBlifts Exercises
      </h1>

      {/* MUSCLE FILTER */}
      <div className="flex flex-wrap gap-3 justify-center mb-14">
        {muscles.map((muscle) => (
          <button
            key={muscle}
            onClick={() => setSelectedMuscle(muscle)}
            className={`px-5 py-2 rounded-full border text-sm transition ${
              selectedMuscle === muscle
                ? "bg-white text-black border-white"
                : "border-gray-700 text-gray-300 hover:border-gray-500"
            }`}
          >
            {muscle}
          </button>
        ))}
      </div>

      {/* EXERCISE LIST */}
      <div className="max-w-5xl mx-auto grid gap-10">
        {filteredExercises.map((ex) => (
          <Link key={ex.slug} href={`/exercises/${ex.slug}`}>
            <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition cursor-pointer">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {ex.name}
                </h2>

                <p className="text-gray-400 text-sm">
                  Muscle: <span className="text-white">{ex.muscle}</span>
                </p>

                <p className="text-gray-400 text-sm">
                  Sets: {ex.sets} • Reps: {ex.reps}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-800">
                <iframe
                  src={ex.video}
                  className="w-full aspect-video"
                  allowFullScreen
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
