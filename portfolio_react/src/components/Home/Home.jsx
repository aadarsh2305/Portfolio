import React from "react";
import avatar from '../../assets/Images/ProfilePic.jpg';
import Typewriter from "typewriter-effect";
import Resume from '../../assets/Doc/Resume.pdf';

const Home = ({ darkMode }) => {
  return (
    <div
      className={`flex w-full justify-between items-start p-10 md:p-20 ${
        darkMode ? "text-white" : "text-gray-900 bg-gray-100"
      }`}
    >
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hello, I am Aadarsh
        </h1>
        <p
          className={`px-5 pt-5 text-2xl md:text-4xl font-bold mb-10 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          style={{ minWidth: "250px", maxWidth: "100%", overflow: "hidden" }}
        >
          <Typewriter
            options={{
              strings: [
                "Full Stack Developer!",
                "Java Developer",
                "MERN Stack Developer!",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </p>

        <a
          className={`mt-5 md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl transition-all duration-300 ${
            darkMode
              ? "bg-[#465697] text-white hover:bg-[#3b4a80]"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
          href={Resume}
          download="Aadarsh_Resume.pdf"
        >
          Resume
        </a>
      </div>
      <div className="w-30 h-30 sm:w-40 sm:h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 rounded-full overflow-hidden flex justify-center items-center">
        <img
          className="w-full h-full object-cover rounded-full border-2 border-gray-300 shadow-lg"
          src={avatar}
          alt="profile_pic"
        />
      </div>
    </div>
  );
};

export default Home;
