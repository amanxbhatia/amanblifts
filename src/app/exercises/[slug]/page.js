export default function ExerciseDetailPage({ params }) {
  const { slug } = params;

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 capitalize">
          {slug.replace(/-/g, " ")}
        </h1>

        <p className="text-gray-400 mb-10">
          Detailed exercise guide coming soon.
        </p>

        <div className="border border-gray-800 rounded-2xl p-8">
          <ul className="space-y-3 text-gray-400">
            <li>• Proper form breakdown</li>
            <li>• Muscles worked</li>
            <li>• Common mistakes</li>
            <li>• Training tips</li>
            <li>• Video demonstration</li>
          </ul>
        </div>

      </div>
    </main>
  );
}
