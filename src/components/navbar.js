import Link from "next/link";

export default function Navbar() {
  const navItem =
    "px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition font-medium";

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 py-3">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-4 gap-y-2 items-center">

          {/* ROW 1 */}
          <div className="col-span-1">
            <Link href="/" className={navItem}>
              Home
            </Link>
          </div>

          <div className="col-span-3 flex gap-3 justify-end flex-wrap">
            <Link href="/exercises" className={navItem}>
              Exercises
            </Link>

            <Link href="/workouts" className={navItem}>
              Workouts
            </Link>

            <Link href="/ai-coach" className={navItem}>
              AI Coach
            </Link>
          </div>

          {/* ROW 2 (under Exercises) */}
          <div className="col-span-1"></div>

          <div className="col-span-3 flex gap-3 justify-start pl-[6.5rem] sm:pl-[7.5rem]">
            <Link href="/blog" className={navItem}>
              Blog
            </Link>

            <Link href="/shop" className={navItem}>
              Shop
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}
