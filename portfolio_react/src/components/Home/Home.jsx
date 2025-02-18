import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import avatar from "../../assets/Images/ProfilePic.jpg";
import Resume from "../../assets/Doc/Resume.pdf";

const Home = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col md:flex-row w-full justify-between items-center md:items-start p-10 md:p-20
        ${darkMode ? "text-white" : "text-gray-900 bg-gray-100"}
      `}
    >
      {/* Left Side - Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-2/4 md:pt-10 text-center md:text-left"
      >
        <h1 className="text-3xl md:text-6xl font-bold leading-tight">
          Hello, I am{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Aadarsh
          </span>
        </h1>

        {/* Typewriter Effect with Hover Animation */}
        <div
          className={`px-5 pt-5 text-2xl md:text-4xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          style={{ minHeight: "70px" }} // Fixed height for mobile
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer!",
                "Java Developer",
                "MERN Stack!",
              ],  
              autoStart: true,
              loop: true,
              delay: 75,
            }}
            onInit={(typewriter) => {
              const words = document.querySelectorAll(".typewriter-text span");
              words.forEach((word, i) => {
                word.addEventListener("mouseover", () => {
                  word.style.fontSize = "1.3em";
                  if (words[i - 1]) words[i - 1].style.fontSize = "1.15em";
                  if (words[i + 1]) words[i + 1].style.fontSize = "1.15em";
                });
                word.addEventListener("mouseout", () => {
                  words.forEach((w) => (w.style.fontSize = "1em"));
                });
              });
            }}
          />
        </div>

        {/* Resume Button with Animation */}
        <motion.a
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={`mt-5 md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl transition-all duration-300 shadow-lg
            ${
              darkMode
                ? "bg-[#465697] text-white hover:bg-[#3b4a80]"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }
          `}
          href={Resume}
          download="Aadarsh Gupta CV.pdf"
        >
          Download Resume
        </motion.a>
      </motion.div>

      {/* Right Side - Profile Picture */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-40 h-40 sm:w-48 sm:h-48 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden flex justify-center items-center shadow-xl border-4 border-gray-300"
      >
        <img
          className="w-full h-full object-cover rounded-full"
          src={avatar}
          alt="profile_pic"
        />
      </motion.div>
    </motion.div>
  );
};

export default Home;
