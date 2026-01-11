import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 sm:py-5 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:text-gray-300 transition"
        >
          Home
        </Link>

        {/* Navigation Links */}
        {/* RIGHT: PRIMARY LINKS */}
        <div className="flex gap-4 text-sm sm:text-base">
          <a href="/exercises" className="hover:text-white">
            Exercises
          </a>
          <a href="/workouts" className="hover:text-white">
            Workouts
          </a>
          <a href="/ai-coach" className="hover:text-white">
            AI Coach
          </a>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="flex justify-end px-4 pb-3">
        <div className="flex gap-4 text-sm sm:text-base font-medium text-gray-300">
          <a href="/blog" className="hover:text-white transition">
            Blog
          </a>
          <a href="/shop" className="hover:text-white transition">
            Shop
          </a>
        </div>
      </div>
    </nav>
  );
}
