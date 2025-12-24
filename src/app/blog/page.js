import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10 max-w-4xl mx-auto">
      
      <h1 className="text-4xl font-bold mb-8 text-center">
        amanblifts Blog
      </h1>

      <p className="text-gray-400 text-center mb-10">
        Training knowledge, exercise breakdowns, and real gym experience.
      </p>

      <div className="space-y-6">
        
        <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-500 transition">
          <h2 className="text-2xl font-semibold mb-2">
            Upper Chest Training Explained
          </h2>
          <p className="text-gray-400 mb-4">
            Learn how to build your upper chest with correct form, volume, and exercise selection.
          </p>
          <Link
            href="/blog/upper-chest-training"
            className="text-white underline"
          >
            Read More →
          </Link>
        </div>

      </div>

    </main>
  );
}
