import { exercises } from "../../../data/exercises";

/* ---------- DYNAMIC SEO ---------- */
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const exercise = exercises.find((ex) => ex.slug === slug);

  if (!exercise) {
    return {
      title: "Exercise | amanblifts",
      description: "Exercise details coming soon on amanblifts.",
    };
  }

  return {
    title: `${exercise.name} | amanblifts`,
    description: `Learn how to perform ${exercise.name} with proper form, muscles worked, sets, reps, and training tips.`,
  };
}

/* ---------- PAGE ---------- */
export default async function ExerciseDetailPage({ params }) {
  const { slug } = await params;
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
    <main className="min-h-screen bg-black text-white px-4 sm:px-6 py-16">
      <div className="max-w-4xl mx-auto">
        {/* TITLE */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{exercise.name}</h1>

        <p className="text-gray-400 text-sm sm:text-base mb-8">
          {exercise.description}
        </p>

        {/* VIDEO */}
        {/* VIDEO (LONG FORM)
        {exercise.video && (
          <div className="rounded-2xl overflow-hidden border border-gray-800 mb-8">
            <iframe
              src={exercise.video}
              className="w-full aspect-video"
              allowFullScreen
            />
          </div>
        )} */}

        {/* YOUTUBE SHORT CTA */}
        {exercise.shortsLink && (
          <div className="border border-gray-800 rounded-2xl p-6 text-center mb-8">
            <p className="text-gray-400 mb-4">
              Watch real form demonstration on YouTube
            </p>

            <a
              href={exercise.shortsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              ▶ Watch on YouTube
            </a>
          </div>
        )}

        {/* INFO BADGES */}
        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-4 py-1 rounded-full bg-gray-900 border border-gray-800 text-sm">
            Muscle: {exercise.muscle}
          </span>
          <span className="px-4 py-1 rounded-full bg-gray-900 border border-gray-800 text-sm">
            Sets: {exercise.sets}
          </span>
          <span className="px-4 py-1 rounded-full bg-gray-900 border border-gray-800 text-sm">
            Reps: {exercise.reps}
          </span>
        </div>

        {/* MUSCLES WORKED */}
        <section className="border border-gray-800 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Muscles Worked</h2>
          <ul className="text-gray-400 space-y-2">
            {exercise.musclesWorked.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
        </section>

        {/* HOW TO PERFORM */}
        <section className="border border-gray-800 rounded-2xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">How to Perform</h2>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            {exercise.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </section>

        {/* TRAINING TIPS */}
        <section className="border border-gray-800 rounded-2xl p-6">
          <h2 className="text-xl font-semibold mb-4">Training Tips</h2>
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
