import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Footer from "./components/Footer";
import Navbar from "./components/ Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Profile from "./pages/Profile";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("darkMode") === "true";
    setDarkMode(stored);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => {
      localStorage.setItem("darkMode", !prev);
      return !prev;
    });
  };

  return (
    <div className={darkMode ? "dark" : "light"}>
      <div className="bg-lightBg dark:bg-darkBg text-black dark:text-white transition-colors duration-500 min-h-screen">
        <BrowserRouter>
        <ScrollToTop/>
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/profile" element={<Profile/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </div>
  );
}
