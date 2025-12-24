const exercises = [
  {
    name: "Incline Dumbbell Press",
    muscle: "Upper Chest",
    sets: "4",
    reps: "8–12",
    video: "https://www.youtube.com/embed/ThJGIFDqiiA"
  }
];

export default function ExercisesPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      
      <h1 className="text-4xl font-bold mb-8 text-center">
        amanblifts Exercises
      </h1>

      <div className="grid gap-6 max-w-4xl mx-auto">
        {exercises.map((ex, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-6"
          >
            <h2 className="text-2xl font-semibold mb-2">
              {ex.name}
            </h2>

            <p className="text-gray-400 mb-1">
              Muscle: {ex.muscle}
            </p>

            <p className="text-gray-400 mb-4">
              Sets: {ex.sets} | Reps: {ex.reps}
            </p>

           <iframe
  src={ex.video}
  className="w-full aspect-video rounded-lg"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>

          </div>
        ))}
      </div>

    </main>
  );
}
