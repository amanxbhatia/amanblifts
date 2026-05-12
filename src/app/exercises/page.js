import exercises from "../../data/exercises";
import Link from "next/link";
import Image from "next/image";


export default function ExercisesPage() {
  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-4xl font-bold mb-8">Exercises</h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {exercises.map((exercise) => (
          <Link
            key={exercise.slug}
            href={`/exercises/${exercise.slug}`}
            className="border border-gray-700 rounded-xl p-5 hover:border-white transition"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {exercise.name}
            </h2>

            <p className="text-gray-400">
              Muscle: {exercise.muscle}
            </p>

            <p className="text-gray-400">
              Level: {exercise.level}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}