import React from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3,
  FaReact,
  FaJs,
  FaJenkins,
  FaDocker,
  FaNodeJs,
  FaLeaf,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiPostgresql,
  SiPostman,
  SiTailwindcss,
  SiHibernate,
  SiSpring,
  SiMysql,
} from "react-icons/si";
import AixtorLogo from "../../assets/Images/AixtorLogo.png";
import ProlificsLogo from "../../assets/Images/ProlificsLogo.jfif";

const Experience = ({darkMode}) => {
  return (
    <div
      id="Experience"
      className={`p-10 md:p-24 ${darkMode ? "bg-[#171d32] text-white" : "bg-gray-100 text-gray-800"}`}
    >
      <h1 className="text-2xl md:text-4xl font-bold">Experience</h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap md:w-2/5 gap-8 md:p-12 py-10">
        {/* Skill Icons */}
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaJava color="#5382A1" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaCss3 color="#1572B6" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaReact color="#61DAFB" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaLeaf color="#005A2D" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaDatabase color="#336791" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <SiMongodb color="#47A248" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaJenkins color="#D24939" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <SiPostgresql color="#336791" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <SiPostman color="#FF6C37" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <SiTailwindcss color="#06B6D4" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <SiHibernate color="#59666C" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <SiSpring color="#6DB33F" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <SiMysql color="#4479A1" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaDocker color="#2496ED" size={50} />
          </span>
          <span className={`p-3 flex items-center rounded-2xl ${darkMode ? "bg-zinc-900" : "bg-gray-300"}`}>
            <FaNodeJs color="#339933" size={50} />
          </span>
        </div>

        {/* Experience Cards */}
        <div>
          <div className={`flex gap-10 ${darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white shadow-md"} mt-4 rounded-lg p-4 items-center`}>
            <img src={ProlificsLogo} alt="Prolifics Logo" className="w-12 h-12" />
            <span>
              <h2 className="leading-tight font-semibold">Associate Software Engineer, Prolifics</h2>
              <p className="text-sm font-thin">July 2023 - Present</p>
              <ul className="text-sm p-2">
                <li>- Working as software engineer</li>
                <li>- SDE-developer</li>
              </ul>
            </span>
          </div>
          <div className={`flex gap-10 ${darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white shadow-md"} mt-4 rounded-lg p-4 items-center`}>
            <img src={AixtorLogo} alt="Aixtor Logo" className="w-12 h-12" />
            <span>
              <h2 className="leading-tight font-semibold">Java Developer, Aixtor</h2>
              <p className="text-sm font-thin">Dec 2022 - May 2023</p>
              <ul className="text-sm p-2">
                <li>- Worked as java developer</li>
                <li>- Liferay and Spring Framework</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
