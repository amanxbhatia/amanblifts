export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      
      <h1 className="text-5xl font-extrabold tracking-wide mb-4">
        amanblifts
      </h1>

      <p className="text-gray-400 text-center max-w-xl mb-6">
        Daily Gym Edits • Workout Knowledge • AI Gym Coach  
        <br />
        Train smart. Lift real.
      </p>

      <div className="flex gap-4">
        <a
          href="/exercises"
          className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Explore Exercises
        </a>

        <a
          href="/ai-coach"
          className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
        >
          Ask AI Coach
        </a>
      </div>

    </main>
  );
}
