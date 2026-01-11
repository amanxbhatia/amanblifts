import Link from "next/link";

export default function Navbar() {
  const navClass =
    "px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition font-medium";

  return (
    <nav className="w-full border-b border-gray-800">

      {/* TOP ROW */}
      <div className="flex items-center justify-between px-4 py-3 gap-3 flex-wrap">

        {/* HOME */}
        <Link href="/" className={navClass}>
          Home
        </Link>

        {/* PRIMARY LINKS */}
        <div className="flex gap-3 flex-wrap justify-end">
          <Link href="/exercises" className={navClass}>
            Exercises
          </Link>

          <Link href="/workouts" className={navClass}>
            Workouts
          </Link>

          <Link href="/ai-coach" className={navClass}>
            AI Coach
          </Link>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="flex justify-end px-4 pb-3">
        <div className="flex gap-3 flex-wrap">
          <Link href="/blog" className={navClass}>
            Blog
          </Link>

          <Link href="/shop" className={navClass}>
            Shop
          </Link>
        </div>
      </div>

    </nav>
  );
}
