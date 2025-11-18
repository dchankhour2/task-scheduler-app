import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingHeader() {
  return (
    <header className="w-full py-4 px-6 md:px-8 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        {/* simplified clear logo */}
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className="flex-shrink-0"
        >
          <rect x="0" y="0" width="24" height="24" rx="6" fill="#6366f1" />
          <path d="M6.5 12.5l3 3 7-7" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
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