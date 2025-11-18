import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center min-h-screen bg-gradient-to-b from-indigo-900 via-indigo-950 to-slate-900 p-6">
      <section
        className="max-w-3xl w-full bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/6 shadow-lg text-center"
        aria-labelledby="home-title"
      >
        <div className="mx-auto w-72">
          <svg
            viewBox="0 0 240 160"
            className="w-full h-auto"
            role="img"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="bg" x1="0" x2="1">
                <stop offset="0" stopColor="#EFF6FF" />
                <stop offset="1" stopColor="#F0FDF4" />
              </linearGradient>
            </defs>

            {/* card */}
            <rect x="12" y="18" rx="12" width="216" height="124" fill="url(#bg)" stroke="#E6EEF8" />

            {/* checklist lines */}
            <g transform="translate(28,34)" fill="none" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round">
              <line x1="36" y1="8" x2="180" y2="8" />
              <line x1="36" y1="32" x2="180" y2="32" />
              <line x1="36" y1="56" x2="180" y2="56" />
            </g>

            {/* checkmarks */}
            <g transform="translate(22,30)" fill="#10B981">
              <path d="M8 10 L14 16 L26 4" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M8 34 L14 40 L26 28" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              <path d="M8 58 L14 64 L26 52" stroke="#10B981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            {/* playful sun */}
            <g transform="translate(186,36)">
              <circle cx="0" cy="0" r="18" fill="#FFD166" />
              <circle cx="-6" cy="-2" r="2" fill="#FFF" />
              <circle cx="6" cy="-2" r="2" fill="#FFF" />
              <path d="M-6 6 q6 6 12 0" stroke="#5B4636" strokeWidth="2" strokeLinecap="round" fill="none" />
            </g>

            {/* friendly sticker */}
            <g transform="translate(44,100)">
              <rect x="0" y="0" width="64" height="36" rx="8" fill="#7C3AED" />
              <text x="32" y="22" fontSize="12" textAnchor="middle" fill="#FFF" fontFamily="sans-serif">Done!</text>
            </g>
          </svg>
        </div>

        <h1 id="home-title" className="mt-6 text-3xl font-extrabold text-white">
          Welcome to Task Buddies
        </h1>

        <p className="mt-3 text-slate-300 max-w-xl mx-auto">
          Make everyday routines fun. Create tasks, set dates, mark them done, and repeat on the days you choose —
          perfect for kids learning routines.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-2 rounded-md text-white font-semibold bg-gradient-to-r from-indigo-600 to-cyan-400 shadow-md hover:scale-105 transform transition"
          >
            Sign up
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center justify-center px-6 py-2 rounded-md text-cyan-100 font-semibold border border-white/10 bg-white/3 hover:bg-white/5 transition"
          >
            Log in
          </Link>
        </div>

        <p className="mt-4 text-sm text-slate-400">
          No ads · Safe for kids · Data stored locally
        </p>
      </section>
    </div>
  );
}