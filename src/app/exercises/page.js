"use client";

import { useState } from "react";

const exercises = [
  {
    name: "Incline Dumbbell Press",
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

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 py-14 sm:py-16">
      
      <h1 className="text-4xl font-bold mb-10 text-center">
        amanblifts Exercises
      </h1>

      {/* MUSCLE FILTER */}
      <div className="flex flex-wrap gap-3 justify-center mb-14">
        {muscles.map((muscle) => (
          <button
            key={muscle}
            onClick={() => setSelectedMuscle(muscle)}
            className={`px-5 py-2 rounded-full border text-sm transition
              ${
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
        {exercises
          .filter(
            (ex) =>
              selectedMuscle === "All" || ex.muscle === selectedMuscle
          )
          .map((ex, index) => (
            <div
              key={index}
              className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">
                  {ex.name}
                </h2>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Muscle: <span className="text-white">{ex.muscle}</span>
                </p>

                <p className="text-gray-400 text-sm leading-relaxed">
                  Sets: {ex.sets} • Reps: {ex.reps}
                </p>
              </div>

              <div className="rounded-xl overflow-hidden border border-gray-800">
                <iframe
                  src={ex.video}
                  className="w-full aspect-video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          ))}
      </div>

    </main>
  );
}
