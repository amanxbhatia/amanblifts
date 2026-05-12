import exercises from "@/data/exercises";
import Image from "next/image";

export default async function ExerciseDetail({ params }) {
  const { slug } = await params;

  const exercise = exercises.find((item) => item.slug === slug);

  if (!exercise) {
    return <h1>Exercise not found</h1>;
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-4">{exercise.name}</h1>

        <Image
          src={exercise.image}
          alt={exercise.name}
          width={800}
          height={500}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />

        <div className="flex gap-4 mb-8">
          <span className="bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-700">
            Muscle: {exercise.muscle}
          </span>

          <span className="bg-zinc-900 px-4 py-2 rounded-lg border border-zinc-700">
            Level: {exercise.level}
          </span>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Description</h2>

          <p className="text-zinc-300 leading-7">{exercise.description}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Benefits</h2>

          <p className="text-zinc-300 leading-7">{exercise.benefits}</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 mb-6">
          <h2 className="text-2xl font-semibold mb-3">Steps</h2>

          <ul className="list-disc pl-5 space-y-2 text-zinc-300">
            {exercise.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold mb-3">Common Mistakes</h2>

          <p className="text-zinc-300 leading-7">{exercise.mistakes}</p>
        </div>
      </div>
    </div>
  );
}
