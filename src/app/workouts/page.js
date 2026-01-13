export const metadata = {
  title: "Workout Routines",
  description:
    "Explore structured workout routines like Push Pull Legs, Chest & Triceps, and Back & Biceps.",
};

export default function WorkoutsPage() {
  const workouts = [
    {
      name: "Push Pull Legs",
      slug: "push-pull-legs",
      description: "A balanced split focusing on strength and hypertrophy.",
    },
    {
      name: "Chest & Triceps",
      slug: "chest-triceps",
      description: "Upper body push-focused workout.",
    },
    {
      name: "Back & Biceps",
      slug: "back-biceps",
      description: "Pull-focused workout for back and arms.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-center">
          Workout Routines
        </h1>

        <div className="grid gap-6">
          {workouts.map((workout) => (
            <a
              key={workout.slug}
              href={`/workouts/${workout.slug}`}
              className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition block"
            >
              <h2 className="text-2xl font-semibold mb-2">
                {workout.name}
              </h2>
              <p className="text-gray-400">
                {workout.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}
