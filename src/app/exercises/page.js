"use client";

import { usePathname } from "next/navigation";
import { exercises } from "../../../data/exercises";

export default function ExerciseDetailPage() {
  const slug = usePathname().split("/").pop();
  const exercise = exercises.find((ex) => ex.slug === slug);

  if (!exercise || !exercise.description) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Exercise coming soon</h1>
        <p className="text-gray-400 mt-4">
          Detailed guide for this exercise will be added shortly.
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          {exercise.name}
        </h1>

        <p className="text-gray-400 mb-10">
          {exercise.description}
        </p>

        {exercise.video && (
          <div className="rounded-2xl overflow-hidden border border-gray-800 mb-12">
            <iframe
              src={exercise.video}
              className="w-full aspect-video"
              allowFullScreen
            />
          </div>
        )}

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Muscles Worked</h2>
          <ul className="text-gray-400 space-y-2">
            {exercise.musclesWorked.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How to Perform</h2>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            {exercise.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Training Tips</h2>
          <ul className="text-gray-400 space-y-2">
            {exercise.tips.map((t, i) => (
              <li key={i}>• {t}</li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
