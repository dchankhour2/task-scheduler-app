import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <header className="w-full py-4 px-6 md:px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        {/* simple friendly logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="flex-shrink-0"
        >
          <rect x="1" y="1" width="46" height="46" rx="10" fill="#7c3aed33" />
          <path d="M12 24h24" stroke="#7c3aed" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="18" cy="18" r="2.8" fill="#ffd166" />
          <circle cx="30" cy="30" r="2.8" fill="#06b6d4" />
        </svg>

        <span className="text-lg font-semibold text-indigo-200">Task Buddies</span>
      </Link>

      <nav role="navigation" className="flex items-center gap-3">
        <Link
          to="/signup"
          aria-label="Sign up"
          className="inline-flex items-center justify-center px-4 py-2 rounded-md text-white font-semibold
                     bg-gradient-to-r from-indigo-600 to-cyan-400 shadow-md hover:scale-105 transform transition"
        >
          Sign up
        </Link>

        <Link
          to="/login"
          aria-label="Log in"
          className="text-sm text-indigo-100 hover:text-white transition px-3 py-1 rounded-md border border-transparent hover:border-indigo-400"
        >
          Log in
        </Link>
      </nav>
    </header>
  );
}