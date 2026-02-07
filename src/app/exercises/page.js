"use client";

import { useState } from "react";
import Link from "next/link";
import { exercises } from "../../data/exercises";
import Image from "next/image";

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

  console.log(
    "EXERCISE THUMBNAILS",
    filteredExercises.map((e) => e.thumbnail)
  );

  return (
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 py-14 sm:py-16">
      <h1 className="text-4xl font-bold mb-10 text-center">
        AmanBlifts Exercises
      </h1>

      {/* MUSCLE FILTER */}
      <div className="flex flex-wrap gap-3 justify-center mb-12 px-2">
        {muscles.map((muscle) => (
          <button
            key={muscle}
            onClick={() => setSelectedMuscle(muscle)}
            className={`px-5 py-2 rounded-full border text-sm transition whitespace-nowrap
        ${selectedMuscle === muscle
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
            <div className="border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-gray-600 transition bg-black">
              {/* THUMBNAIL */}
              {ex.thumbnail && (
                <div className="mb-5 rounded-xl overflow-hidden border border-gray-800 relative">

                  {/* Image */}
                  <div className="relative w-full h-48 z-0">
                    <Image
                      src={ex.thumbnail}
                      alt={`${ex.name} exercise demo`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      unoptimized
                    />
                  </div>

                  {/* Dark Overlay */}
                  <div className="absolute inset-0 bg-black/30 z-10"></div>

                  {/* Play Icon */}
                  <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                    <div className="w-14 h-14 rounded-full bg-black/60 border border-white/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="white"
                        className="w-6 h-6 ml-1"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>

                </div>
              )}


              {/* HEADER */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                <h2 className="text-xl sm:text-2xl font-semibold">{ex.name}</h2>

                <span className="text-xs uppercase tracking-wide text-gray-400 border border-gray-700 px-3 py-1 rounded-full w-fit">
                  {ex.muscle}
                </span>
              </div>

              {/* META INFO */}
              <div className="flex flex-wrap gap-3 mb-6 text-sm">
                <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800">
                  Sets: {ex.sets}
                </span>
                <span className="px-3 py-1 rounded-full bg-gray-900 border border-gray-800">
                  Reps: {ex.reps}
                </span>
              </div>

              {/* VIDEO */}
              {/* {ex.video && (
                <div className="rounded-xl overflow-hidden border border-gray-800">
                  <iframe
                    src={ex.video}
                    className="w-full aspect-video"
                    allowFullScreen
                  />
                </div>
              )} */}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
