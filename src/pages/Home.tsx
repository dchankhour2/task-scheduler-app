import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div className="flex-1 flex items-center justify-center p-6">
      <section
        className="max-w-3xl w-full bg-white/5 border border-white/6 rounded-2xl p-8 shadow-xl text-center"
        aria-labelledby="home-title"
      >
        <div className="mx-auto w-72">
          <svg
            viewBox="0 0 360 220"
            className="w-full h-auto"
            role="img"
            aria-hidden="true"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="sunGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#FFD166" />
                <stop offset="1" stopColor="#FF8A65" />
              </linearGradient>
              <linearGradient id="rainbow1" x1="0" x2="1">
                <stop offset="0" stopColor="#7c3aed" />
                <stop offset="1" stopColor="#06b6d4" />
              </linearGradient>
              <linearGradient id="kidGrad" x1="0" x2="1">
                <stop offset="0" stopColor="#60a5fa" />
                <stop offset="1" stopColor="#7c3aed" />
              </linearGradient>
              <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#000" floodOpacity="0.2" />
              </filter>
            </defs>

            {/* soft rounded background card */}
            <rect x="8" y="8" rx="18" width="344" height="204" fill="rgba(255,255,255,0.02)" />

            {/* subtle decorative waves */}
            <g opacity="0.06">
              <path d="M0 150 C60 130 120 170 180 150 C240 130 300 170 360 150 L360 220 L0 220 Z" fill="#fff" />
            </g>

            {/* rainbow arc */}
            <g transform="translate(40,28)" filter="url(#softShadow)">
              <path d="M20 120 A100 70 0 0 1 220 120" stroke="#FF9AA2" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M28 128 A92 62 0 0 1 212 128" stroke="#FFB7B2" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M36 136 A84 54 0 0 1 204 136" stroke="#FFD166" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M44 144 A76 46 0 0 1 196 144" stroke="#B5E48C" strokeWidth="10" fill="none" strokeLinecap="round" />
              <path d="M52 152 A68 38 0 0 1 188 152" stroke="url(#rainbow1)" strokeWidth="10" fill="none" strokeLinecap="round" />
            </g>

            {/* sun with rays */}
            <g transform="translate(270,34)">
              <circle cx="0" cy="0" r="20" fill="url(#sunGrad)" opacity="0.98" />
              {[...Array(8)].map((_, i) => {
                const angle = (i / 8) * 360;
                return (
                  <rect
                    key={i}
                    x="-2"
                    y="-34"
                    width="4"
                    height="12"
                    rx="2"
                    fill="url(#sunGrad)"
                    transform={`rotate(${angle})`}
                    opacity={0.85}
                  />
                );
              })}
            </g>

            {/* floating balloons (simple bob animation) */}
            <g>
              <g transform="translate(70,40)">
                <ellipse cx="0" cy="0" rx="12" ry="16" fill="#FF6B6B">
                  <animateTransform attributeName="transform" type="translate" values="0 0;0 -4;0 0" dur="3s" repeatCount="indefinite" />
                </ellipse>
                <line x1="0" y1="16" x2="0" y2="34" stroke="#fff" strokeWidth="1" strokeOpacity="0.6" />
              </g>
              <g transform="translate(110,32)">
                <ellipse cx="0" cy="0" rx="11" ry="15" fill="#FFD166">
                  <animateTransform attributeName="transform" type="translate" values="0 0;0 -5;0 0" dur="3.6s" repeatCount="indefinite" />
                </ellipse>
                <line x1="0" y1="15" x2="0" y2="33" stroke="#fff" strokeWidth="1" strokeOpacity="0.6" />
              </g>
              <g transform="translate(150,44)">
                <ellipse cx="0" cy="0" rx="10" ry="13" fill="#7c3aed">
                  <animateTransform attributeName="transform" type="translate" values="0 0;0 -6;0 0" dur="4s" repeatCount="indefinite" />
                </ellipse>
                <line x1="0" y1="13" x2="0" y2="31" stroke="#fff" strokeWidth="1" strokeOpacity="0.6" />
              </g>
            </g>

            {/* friendly character & pet */}
            <g transform="translate(88,96)" filter="url(#softShadow)">
              {/* body */}
              <rect x="0" y="24" rx="10" width="56" height="44" fill="#7c3aed66" />
              {/* head */}
              <circle cx="28" cy="12" r="14" fill="url(#kidGrad)" />
              {/* eyes */}
              <circle cx="22" cy="10" r="2.3" fill="#0b1220" />
              <circle cx="34" cy="10" r="2.3" fill="#0b1220" />
              {/* smile */}
              <path d="M20 16 q8 8 16 0" stroke="#0b1220" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              {/* hand (waving) */}
              <circle cx="-4" cy="34" r="6" fill="#FFD166">
                <animateTransform attributeName="transform" type="rotate" values="0;8;0" dur="1.2s" repeatCount="indefinite" additive="sum" />
              </circle>
              {/* small pet */}
              <g transform="translate(74,36)">
                <ellipse cx="12" cy="8" rx="12" ry="8" fill="#FFB7B2" />
                <circle cx="6" cy="4" r="2" fill="#0b1220" />
                <circle cx="14" cy="4" r="2" fill="#0b1220" />
              </g>
            </g>

            {/* confetti dots */}
            <g>
              <circle cx="40" cy="60" r="2" fill="#FF6B6B" opacity="0.9" />
              <circle cx="88" cy="40" r="2.5" fill="#FFD166" opacity="0.95" />
              <circle cx="130" cy="70" r="1.8" fill="#7c3aed" opacity="0.9" />
              <circle cx="200" cy="54" r="1.6" fill="#06b6d4" opacity="0.9" />
            </g>
          </svg>
        </div>

        <h1 id="home-title" className="mt-6 text-3xl font-extrabold text-indigo-200">
          Welcome to Task Buddies
        </h1>

        <p className="mt-3 text-slate-300 max-w-xl mx-auto">
          Make everyday routines fun. Create tasks, set dates, mark them done, and repeat on the days you choose —
          perfect for kids learning routines.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-2 rounded-md text-white font-semibold
                        bg-gradient-to-r from-indigo-600 to-cyan-400 shadow-md hover:scale-105 transform transition"
          >
            Sign up
          </Link>

          <Link
            to="/login"
            className="inline-flex items-center justify-center px-6 py-2 rounded-md text-indigo-100 font-semibold
                        border border-indigo-500 bg-white/3 hover:bg-white/5 transition"
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