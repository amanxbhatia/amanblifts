export const dynamicParams = false;

const exerciseData = {
  "incline-dumbbell-press": {
    title: "Incline Dumbbell Press",
    description:
      "Incline dumbbell press exercise guide with proper form, muscles worked, common mistakes, and training tips.",
    video: "https://www.youtube.com/embed/ThJGIFDqiiA",
    muscles: ["Upper Chest", "Front Deltoids", "Triceps"],
    steps: [
      "Set the bench at a 30–45 degree incline.",
      "Hold dumbbells at shoulder level with palms facing forward.",
      "Press the dumbbells upward until arms are fully extended.",
      "Lower the dumbbells slowly with control.",
    ],
  },
};

// ✅ TELL NEXT.JS WHICH SLUGS EXIST
export async function generateStaticParams() {
  return Object.keys(exerciseData).map((slug) => ({
    slug,
  }));
}

export default function ExerciseDetailPage({ params }) {
  const exercise = exerciseData[params.slug];

  if (!exercise) {
    return (
      <main className="min-h-screen bg-black text-white px-6 py-20 text-center">
        <h1 className="text-2xl font-bold">Exercise coming soon</h1>
        <p className="text-gray-400 mt-4">
          This exercise page will be added shortly.
        </p>
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
          <h2 className="text-2xl font-semibold mb-4">
            Muscles Worked
          </h2>
          <ul className="text-gray-400 space-y-2">
            {exercise.muscles.map((m, i) => (
              <li key={i}>• {m}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            How to Perform
          </h2>
          <ol className="list-decimal list-inside text-gray-400 space-y-2">
            {exercise.steps.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </section>

      </div>
    </main>
  );
}
