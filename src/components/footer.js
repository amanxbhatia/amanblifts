export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">amanblifts</h3>
            <p className="text-gray-400 text-sm mt-1">
              Train smart. Lift real.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-8 text-sm text-gray-400">
            <a
              href="https://www.instagram.com/amanblifts"
              target="_blank"
              className="hover:text-white transition"
            >
              Instagram
            </a>
            <a
              href="https://www.youtube.com/@amanblifts"
              target="_blank"
              className="hover:text-white transition"
            >
              YouTube
            </a>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} amanblifts. Built from real gym experience.
        </div>

      </div>
    </footer>
  );
}
