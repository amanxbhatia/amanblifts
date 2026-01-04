export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      
      {/* HERO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-24 flex flex-col items-center text-center">
        
        <span className="text-sm uppercase tracking-widest text-gray-400 mb-4">
          amanblifts
        </span>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
          Train Smart. <br className="hidden md:block" />
          Lift Real.
        </h1>

        <p className="text-gray-400 max-w-2xl text-lg mb-10">
          Daily gym edits, exercise breakdowns, workout plans, and a free AI gym coach —
          built from real gym experience.
        </p>

      <div className="flex justify-center">
  <a
    href="/exercises"
    className="bg-white text-black px-10 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
  >
    Explore Exercises
  </a>
</div>


      </section>
      {/* FEATURES SECTION */}
<section className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    
    <h2 className="text-3xl font-bold text-center mb-12">
      What you’ll find on amanblifts
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <a
        href="/exercises"
        className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition"
      >
        <h3 className="text-xl font-semibold mb-3">Exercises</h3>
        <p className="text-gray-400 text-sm">
          Proper form, muscle focus, and real gym videos for each exercise.
        </p>
      </a>

      {/* Card 2 */}
      <a
        href="/ai-coach"
        className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition"
      >
        <h3 className="text-xl font-semibold mb-3">AI Gym Coach</h3>
        <p className="text-gray-400 text-sm">
          Get workout plans based on your goal, schedule, and training style.
        </p>
      </a>

      {/* Card 3 */}
      <a
        href="/blog"
        className="border border-gray-800 rounded-2xl p-8 hover:border-gray-600 transition"
      >
        <h3 className="text-xl font-semibold mb-3">Training Blog</h3>
        <p className="text-gray-400 text-sm">
          Simple explanations, workout knowledge, and gym experience.
        </p>
      </a>

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
