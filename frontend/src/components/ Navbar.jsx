import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 md:py-6
        bg-white/70 backdrop-blur-md shadow-md dark:bg-black/70 dark:text-white transition-colors duration-500"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-serif tracking-widest text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
        >
          RAMAN
        </Link>

        {/* HAMBURGER BUTTON (MOBILE) */}
        <button
          className="md:hidden p-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖️" : "☰"}
        </button>

        {/* MENU */}
        <ul className={`flex flex-col md:flex-row md:space-x-8 items-center text-sm uppercase tracking-wide
          md:static absolute top-full left-0 w-full md:w-auto
          overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-[500px] py-4 md:py-0" : "max-h-0 md:max-h-full"}`}
        >
          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/">Home</Link>
          </li>
          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/portfolio">Portfolio</Link>
          </li>
          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/about">About</Link>
          </li>
          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/profile">Profile</Link>
          </li>
          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/services">Services</Link>
          </li>
          <li className="px-6 md:px-0 py-2 md:py-0">
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 px-5 py-2 rounded-lg
                hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-black transition-colors duration-300"
            >
              Book Session
            </Link>
          </li>

          {/* DARK / LIGHT MODE TOGGLE */}
          <li className="px-6 md:px-0 py-2 md:py-0">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm"
              title="Toggle Dark/Light Mode"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
