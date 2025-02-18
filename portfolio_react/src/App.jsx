import { useState, useEffect } from "react";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "react-scroll-to-top";
import Skills from "./components/Skills/Skills";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  // Load the saved theme preference and tooltip visibility from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || !savedTheme) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }

    const tooltipShown = localStorage.getItem("tooltipShown");
    if (!tooltipShown) {
      setShowTooltip(true);
    }
  }, []);

  // Toggle the theme and save the preference in localStorage
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleTooltipClose = () => {
    setShowTooltip(false);
    localStorage.getItem("tooltipShown", "true");
  };

  return (
    <div
      className={`h-auto w-full overflow-hidden ${
        darkMode ? "bg-[#171d32] text-white" : "bg-[#f4f5f7] text-gray-800"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-full shadow-md ${
          darkMode
            ? "bg-gray-100 text-white"
            : "bg-gray-800 text-gray-900 border border-gray-300"
        }`}
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      {/* Tooltip with upward-pointing arrow */}
      {showTooltip && (
        <div className="fixed top-20 right-4 bg-gray-800 text-white p-3 rounded-lg shadow-lg animate-bounce-in z-50">
          <div className="text-sm">You can change the theme from here</div>
          <button
            onClick={handleTooltipClose}
            className="px-2 py-1 text-xs font-semibold text-gray-800 bg-blue-400 rounded-lg hover:bg-blue-500 transition duration-200"
          >
            Got it
          </button>
          {/* Upward-pointing arrow */}
          <div
            className="absolute -top-2 right-8 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rotate-45 dark:bg-white"
            style={{ clipPath: "polygon(30% 0%, 0% 100%, 100% 100%)" }}
          />
        </div>
      )}

      <Navbar darkMode={darkMode} />
      <Home darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <ContactMe darkMode={darkMode} />
      <Footer />

      <ScrollToTop
        smooth
        className={`rounded-full mr-[-20px] p-1.5 items-center justify-center shadow-md transition-all duration-300 hover:scale-105 ${
          darkMode ? "hover:bg-gray-700" : "hover:bg-[#e0e0e0]"
        }`}
        style={{
          backgroundColor: darkMode ? "#1395ff" : "#3b82f6",
          color: "#ffffff",
          borderRadius: "50%",
        }}
      />
    </div>
  );
}

export default App;
