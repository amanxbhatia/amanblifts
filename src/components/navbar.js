import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide hover:text-gray-300 transition"
        >
          Home
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium text-gray-300">
          <Link href="/exercises" className="hover:text-white transition">
            Exercises
          </Link>
          <Link href="/ai-coach" className="hover:text-white transition">
            AI Coach
          </Link>
          <Link href="/blog" className="hover:text-white transition">
            Blog
          </Link>
        </div>

      </div>
    </nav>
  );
}
