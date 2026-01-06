"use client";
import Link from "next/link";
import { useState } from "react";

const exercises = [
  // CHEST
  {
    name: "Incline Dumbbell Press",
    slug: "incline-dumbbell-press",
    muscle: "Chest",
    sets: "4",
    reps: "8–12",
    video: "https://www.youtube.com/embed/ThJGIFDqiiA",
  },
  {
    name: "Flat Barbell Bench Press",
    slug: "flat-barbell-bench-press",
    muscle: "Chest",
    sets: "4",
    reps: "6–10",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },

  // BACK
  {
    name: "Lat Pulldown",
    slug: "lat-pulldown",
    muscle: "Back",
    sets: "4",
    reps: "10–12",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    name: "Seated Cable Row",
    slug: "seated-cable-row",
    muscle: "Back",
    sets: "3",
    reps: "10–12",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },

  // LEGS
  {
    name: "Barbell Squat",
    slug: "barbell-squat",
    muscle: "Legs",
    sets: "4",
    reps: "6–10",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    name: "Leg Press",
    slug: "leg-press",
    muscle: "Legs",
    sets: "4",
    reps: "10–12",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },

  // SHOULDERS
  {
    name: "Barbell Shoulder Press",
    slug: "barbell-shoulder-press",
    muscle: "Shoulders",
    sets: "4",
    reps: "8–10",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    name: "Lateral Raises",
    slug: "lateral-raises",
    muscle: "Shoulders",
    sets: "4",
    reps: "12–15",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },

  // BICEPS
  {
    name: "Barbell Curl",
    slug: "barbell-curl",
    muscle: "Biceps",
    sets: "3",
    reps: "10–12",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    name: "Hammer Curl",
    slug: "hammer-curl",
    muscle: "Biceps",
    sets: "3",
    reps: "10–12",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },

  // TRICEPS
  {
    name: "Tricep Rope Pushdown",
    slug: "tricep-rope-pushdown",
    muscle: "Triceps",
    sets: "3",
    reps: "12–15",
    video: "https://www.youtube.com/embed/VIDEO_ID",
  },
  {
    name: "Overhead Tricep Extension",
    slug: "overhead-tricep-extension",
    muscle: "Triceps",
    sets: "3",
    reps: "10–12",
    video: "https://www.youtube.com/embed/VIDEO_ID",
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
  <Link href={`/exercises/${ex.slug}`} key={index}>
    <div className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition cursor-pointer">

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
    
  </Link>
))
}
      </div>
      

    </main>
  );
}
