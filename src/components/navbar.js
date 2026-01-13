import Link from "next/link";

export default function Navbar() {
  const navItem =
    "px-4 py-2 rounded-full border border-gray-700 text-gray-300 hover:border-gray-500 hover:text-white transition font-medium";

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      <nav className="max-w-7xl mx-auto px-4 py-3">

        {/* ROW 1 */}
        <div className="flex items-center justify-between flex-wrap gap-3">
          
          {/* LEFT */}
          <Link href="/" className={navItem}>
            Home
          </Link>

          {/* RIGHT */}
          <div className="flex gap-3 flex-wrap justify-end">
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
        </div>

        {/* ROW 2 */}
        <div className="mt-2 flex justify-end gap-3">
          <Link href="/blog" className={navItem}>
            Blog
          </Link>
          <Link href="/shop" className={navItem}>
            Shop
          </Link>
        </div>

      </nav>
    </header>
  );
}
