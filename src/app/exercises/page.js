export const dynamicParams = true;

const exerciseData = {
  "incline-dumbbell-press": {
    title: "Incline Dumbbell Press",
    description:
      "Incline dumbbell press exercise guide with proper form, muscles worked, and training tips.",
    video: "https://www.youtube.com/embed/ThJGIFDqiiA",
  },
};

export default function ExerciseDetailPage({ params }) {
  if (!params?.slug) {
    return null;
  }

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

        <div className="rounded-2xl overflow-hidden border border-gray-800">
          <iframe
            src={exercise.video}
            className="w-full aspect-video"
            allowFullScreen
          />
        </div>

      </div>
    </main>
  );
}
