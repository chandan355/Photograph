import { Link } from "react-router-dom";

export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-12 py-6
        bg-white/70 backdrop-blur-md shadow-md dark:bg-black/70 dark:text-white transition-colors duration-500"
      >
        {/* LOGO */}
        <Link
          to="/"
          className="text-2xl font-serif tracking-widest text-gray-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
        >
          RAMAN
        </Link>

        {/* MENU */}
        <ul className="flex space-x-8 text-sm uppercase tracking-wide items-center">
          <li>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/portfolio">
              Portfolio
            </Link>
          </li>
          <li>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="border border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400 px-5 py-2 rounded-lg
                hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400 dark:hover:text-black transition-colors duration-300"
            >
              Book Session
            </Link>
          </li>

          {/* DARK / LIGHT MODE TOGGLE */}
          <li>
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
