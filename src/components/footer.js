export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black text-gray-400 px-6 py-6 mt-10">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <p className="text-sm">
          © {new Date().getFullYear()} amanblifts. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm">
          <a
            href="https://www.instagram.com/amanblifts"
            target="_blank"
            className="hover:text-white"
          >
            Instagram
          </a>
          <a
            href="https://www.youtube.com/@amanblifts"
            target="_blank"
            className="hover:text-white"
          >
            YouTube
          </a>
        </div>

      </div>
    </footer>
  );
}
