const exerciseData = {
  "incline-dumbbell-press": {
    title: "Incline Dumbbell Press",
    description:
      "Incline dumbbell press exercise guide with proper form, muscles worked, common mistakes, and training tips.",
    video: "https://www.youtube.com/embed/ThJGIFDqiiA",
    muscles: [
      "Upper Chest (primary)",
      "Front Deltoids",
      "Triceps",
    ],
    steps: [
      "Set an incline bench at about 30–45 degrees.",
      "Hold dumbbells at shoulder level with palms facing forward.",
      "Press the dumbbells upward until your arms are extended.",
      "Lower them slowly back to the starting position.",
    ],
    mistakes: [
      "Using too much weight",
      "Flaring elbows too wide",
      "Bouncing dumbbells at the bottom",
    ],
    tips: [
      "Use controlled reps",
      "Maintain full range of motion",
      "Perform early in chest workouts",
    ],
  },
};

export default function ExerciseDetailPage({ params }) {
  const exercise = exerciseData[params.slug];

  if (!exercise) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Exercise coming soon</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">
          {exercise.title}
        </h1>

        <p className="text-gray-400 mb-10">
          {exercise.description}
        </p>

        <div className="rounded-2xl overflow-hidden border border-gray-800 mb-12">
          <iframe
            src={exercise.video}
            className="w-full aspect-video"
            allowFullScreen
          />
        </div>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Muscles Worked</h2>
          <ul className="text-gray-400 space-y-2">
            {exercise.muscles.map((m, i) => (
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

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Common Mistakes</h2>
          <ul className="text-gray-400 space-y-2">
            {exercise.mistakes.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
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
