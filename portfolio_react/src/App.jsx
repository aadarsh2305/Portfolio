import { useState, useEffect } from "react";
import About from "./components/About/About";
import ContactMe from "./components/ContactMe/ContactMe";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import ScrollToTop from "react-scroll-to-top";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load the saved theme preference from localStorage (if available)
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
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

  return (
    <div
      className={`h-auto w-full overflow-hidden ${
        darkMode ? "bg-[#171d32] text-white" : "bg-[#f4f5f7] text-gray-800"
      }`}
    >
      <button
        onClick={toggleTheme}
        className={`fixed top-4 right-4 p-2 rounded-full shadow-md ${
          darkMode ? "bg-gray-100 text-white" : "bg-gray-800 text-gray-900 border border-gray-300"
        }`}
      >
        {darkMode ? "🌞" : "🌙"}
      </button>

      <Navbar darkMode={darkMode}/>
      <Home />
      <About />
      <Experience />
      <Projects />
      <ContactMe />
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
