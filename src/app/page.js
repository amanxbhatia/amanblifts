import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/hero-gym.jpg')" }}
        ></div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl px-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Train Smart. <br className="hidden md:block" />
            Lift Real.
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg mb-10 px-2">
            Daily gym edits, exercise breakdowns, workout plans, and a free AI gym coach —
            built from real gym experience.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/exercises"
              className="bg-white text-black px-8 sm:px-10 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Explore Exercises
            </Link>

            <Link
              href="/workouts"
              className="border border-gray-600 px-8 sm:px-10 py-4 rounded-xl font-semibold text-white hover:border-gray-400 transition"
            >
              View Workout Routines
            </Link>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            What you’ll find here
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <Link
              href="/exercises"
              className="border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Exercises</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Proper form, muscle focus, and real gym videos for each exercise.
              </p>
            </Link>

            <Link
              href="/ai-coach"
              className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold mb-3">AI Gym Coach</h3>
              <p className="text-gray-400 text-sm">
                Get workout plans based on your goal, schedule, and training style.
              </p>
            </Link>

            <Link
              href="/blog"
              className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition"
            >
              <h3 className="text-xl font-semibold mb-3">Training Blog</h3>
              <p className="text-gray-400 text-sm">
                Simple explanations, workout knowledge, and gym experience.
              </p>
            </Link>

          </div>
        </div>
      </section>

      {/* WORKOUT ROUTINES SECTION */}
      <section className="py-20 border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Workout Routines
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Structured workout splits designed for consistent progress and better recovery.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <Link
              href="/workouts/push-pull-legs"
              className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition block"
            >
              <h3 className="text-xl font-semibold mb-2">
                Push Pull Legs
              </h3>
              <p className="text-gray-400 text-sm">
                A balanced split focusing on strength and hypertrophy.
              </p>
            </Link>

            <Link
              href="/workouts/chest-triceps"
              className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition block"
            >
              <h3 className="text-xl font-semibold mb-2">
                Chest & Triceps
              </h3>
              <p className="text-gray-400 text-sm">
                Push-focused upper body routine for size and strength.
              </p>
            </Link>

            <Link
              href="/workouts/back-biceps"
              className="border border-gray-800 rounded-2xl p-6 hover:border-gray-600 transition block"
            >
              <h3 className="text-xl font-semibold mb-2">
                Back & Biceps
              </h3>
              <p className="text-gray-400 text-sm">
                Pull-focused workout for back and arm development.
              </p>
            </Link>

          </div>

          <div className="mt-10 text-center">
            <Link
              href="/workouts"
              className="inline-block px-6 py-3 rounded-full border border-gray-700 hover:border-gray-500 transition"
            >
              View all workouts →
            </Link>
          </div>

        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="border-t border-gray-800 py-16">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-xl font-semibold mb-2">Real Gym Content</h3>
            <p className="text-gray-400 text-sm">
              Every exercise is backed by real training and real videos.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Simple Guidance</h3>
            <p className="text-gray-400 text-sm">
              No fake promises. Just practical workouts that actually work.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">AI Gym Coach</h3>
            <p className="text-gray-400 text-sm">
              Get instant workout plans based on your goal and schedule.
            </p>
          </div>

        </div>
      </section>

    </main>
  );
}
