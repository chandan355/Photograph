import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-lightCard to-white dark:from-darkCard dark:to-darkBg 
    text-black dark:text-white py-16 transition-colors duration-500">
      
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div className="text-center sm:text-left">
          <h2 className="text-3xl font-serif tracking-[0.3em] mb-4 text-teal-700 dark:text-indigo-200">
            RAMAN
          </h2>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-300 max-w-xs mx-auto sm:mx-0">
            Capturing moments, telling stories through timeless photography.
          </p>
        </div>

        {/* LINKS */}
        <div className="text-center sm:text-left">
          <h3 className="uppercase text-xs tracking-widest mb-5 text-gray-600 dark:text-gray-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-500 dark:text-gray-300 text-sm">
            <li><Link className="hover:text-teal-600 dark:hover:text-indigo-300 transition" to="/">Home</Link></li>
            <li><Link className="hover:text-teal-600 dark:hover:text-indigo-300 transition" to="/portfolio">Portfolio</Link></li>
            <li><Link className="hover:text-teal-600 dark:hover:text-indigo-300 transition" to="/about">About</Link></li>
            <li><Link className="hover:text-teal-600 dark:hover:text-indigo-300 transition" to="/profile">Profile</Link></li>
            <li><Link className="hover:text-teal-600 dark:hover:text-indigo-300 transition" to="/services">Services</Link></li>
            <li><Link className="hover:text-teal-600 dark:hover:text-indigo-300 transition" to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="text-center sm:text-left">
          <h3 className="uppercase text-xs tracking-widest mb-5 text-gray-600 dark:text-gray-400">
            Contact
          </h3>
       <p className="text-gray-500 dark:text-gray-300 text-sm leading-7">
  📧{" "}
  <a
    href="mailto:chandansharma13532@gmail.com"
    className="hover:text-teal-600 dark:hover:text-indigo-300"
  >
   chandansharma13532@gmail.com
  </a>
  <br />

  📞{" "}
  <a
    href="tel:+6399622397"
    className="hover:text-teal-600 dark:hover:text-indigo-300"
  >
    +91 63996 22397
  </a>
  <br />

  📍 India
</p>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="text-center text-gray-400 dark:text-gray-500 text-xs mt-14 tracking-wide">
        © {new Date().getFullYear()} Raman Photography. All rights reserved.
      </div>
    </footer>
  )
}
