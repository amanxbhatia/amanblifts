import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800 px-6 py-4 flex justify-between items-center">
      
      <Link href="/" className="text-xl font-bold">
        amanblifts
      </Link>

      <div className="flex gap-6 text-gray-300">
        <Link href="/exercises" className="hover:text-white">
          Exercises
        </Link>
        <Link href="/ai-coach" className="hover:text-white">
          AI Coach
        </Link>
        <Link href="/blog" className="hover:text-white">
          Blog
        </Link>
      </div>

    </nav>
  );
}
