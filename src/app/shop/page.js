export const metadata = {
  title: "Shop",
  description:
    "Gym essentials and amanblifts merchandise. Coming soon.",
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-24">
      <div className="max-w-3xl mx-auto text-center">
        
        <h1 className="text-4xl font-bold mb-6">
          amanblifts Shop
        </h1>

        <p className="text-gray-400 text-lg mb-10">
          Gym essentials and amanblifts merchandise are coming soon.
        </p>

        <div className="border border-gray-800 rounded-2xl p-10">
          <p className="text-gray-300 mb-4">
            What you can expect:
          </p>

          <ul className="text-gray-400 space-y-2">
            <li>• Gym gloves & straps</li>
            <li>• Shakers & accessories</li>
            <li>• amanblifts merchandise</li>
            <li>• Trusted fitness products</li>
          </ul>

          <p className="text-sm text-gray-500 mt-8">
            Stay tuned — this section will unlock in Phase 2.
          </p>
        </div>

      </div>
    </main>
  );
}
