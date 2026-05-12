export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Top Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold">Lifttversity</h3>
            <p className="text-gray-400 text-sm mt-1">
              Train smart. Lift real.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-gray-400">
  
  {/* YouTube */}
  <a
    href="https://www.youtube.com/@lifttversity"
    target="_blank"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M23.498 6.186a2.999 2.999 0 00-2.114-2.12C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.384.566a2.999 2.999 0 00-2.114 2.12A31.6 31.6 0 000 12a31.6 31.6 0 00.502 5.814 2.999 2.999 0 002.114 2.12C4.495 20.5 12 20.5 12 20.5s7.505 0 9.384-.566a2.999 2.999 0 002.114-2.12A31.6 31.6 0 0024 12a31.6 31.6 0 00-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
    </svg>
    <span>@lifttversity</span>
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/lifttversity"
    target="_blank"
    className="flex items-center gap-2 hover:text-white transition"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-5 h-5"
    >
      <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5zM12 7a5 5 0 100 10 5 5 0 000-10zm0 1.5a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm5.25-.88a.88.88 0 110 1.75.88.88 0 010-1.75z" />
    </svg>
    <span>@lifttversity</span>
  </a>

</div>


        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} Lifttversity. Built from real gym experience.
        </div>

      </div>
    </footer>
  );
}
