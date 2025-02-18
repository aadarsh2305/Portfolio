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

const Experience = ({ darkMode }) => {
  return (
    <div
      id="Experience"
      className={`p-6 md:p-12 flex flex-col ${
        darkMode ? "bg-[#171d32] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Left-Aligned Heading */}
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-left">
        Experience
      </h1>

      <div className="flex flex-col md:flex-row w-full gap-8">
        {/* Skills Section */}
        <div className="w-full md:w-2/3 grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-4 p-4">
          {[
            { icon: <FaJava size={32} color="#5382A1" />, name: "Java" },
            { icon: <FaHtml5 size={32} color="#E34F26" />, name: "HTML5" },
            { icon: <FaCss3 size={32} color="#1572B6" />, name: "CSS3" },
            { icon: <FaReact size={32} color="#61DAFB" />, name: "ReactJS" },
            { icon: <FaJs size={32} color="#F7DF1E" />, name: "JavaScript" },
            { icon: <FaLeaf size={32} color="#005A2D" />, name: "Thymeleaf" },
            { icon: <FaDatabase size={32} color="#336791" />, name: "SQL" },
            { icon: <SiMongodb size={32} color="#47A248" />, name: "MongoDB" },
            { icon: <FaJenkins size={32} color="#D24939" />, name: "Jenkins" },
            {
              icon: <SiPostgresql size={32} color="#336791" />,
              name: "PostgreSQL",
            },
            { icon: <SiPostman size={32} color="#FF6C37" />, name: "Postman" },
            {
              icon: <SiTailwindcss size={32} color="#06B6D4" />,
              name: "TailwindCSS",
            },
            {
              icon: <SiHibernate size={32} color="#59666C" />,
              name: "Hibernate",
            },
            {
              icon: <SiSpring size={32} color="#6DB33F" />,
              name: "Spring Boot",
            },
            { icon: <SiMysql size={32} color="#4479A1" />, name: "MySQL" },
            { icon: <FaDocker size={32} color="#2496ED" />, name: "Docker" },
            { icon: <FaNodeJs size={32} color="#339933" />, name: "Node.js" },
          ].map(({ icon, name }) => (
            <div key={name} className="flex flex-col items-center">
              <span
                className={`w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-lg shadow-md transition-transform hover:scale-110 ${
                  darkMode ? "bg-zinc-900" : "bg-gray-300"
                }`}
              >
                {icon}
              </span>
              <p className="text-xs md:text-sm mt-1 font-semibold text-gray-800 dark:text-white transition duration-300 hover:text-blue-500">
                {name}
              </p>
            </div>
          ))}
        </div>

        {/* Experience Cards Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-6">
          <div
            className={`flex gap-4 items-center p-4 rounded-lg shadow-md ${
              darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white"
            }`}
          >
            <img
              src={ProlificsLogo}
              alt="Prolifics Logo"
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h2 className="font-semibold text-lg">
                Associate Software Engineer
              </h2>
              <p className="text-sm text-gray-500">
                Prolifics | July 2023 - Present
              </p>
              <ul className="text-sm text-gray-400 mt-2">
                <li>- Developing backend systems</li>
                <li>- Working with Spring Boot & Java</li>
              </ul>
            </div>
          </div>

          <div
            className={`flex gap-4 items-center p-4 rounded-lg shadow-md ${
              darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white"
            }`}
          >
            <img
              src={AixtorLogo}
              alt="Aixtor Logo"
              className="w-16 h-16 rounded-md"
            />
            <div>
              <h2 className="font-semibold text-lg">Java Developer</h2>
              <p className="text-sm text-gray-500">
                Aixtor | Dec 2022 - May 2023
              </p>
              <ul className="text-sm text-gray-400 mt-2">
                <li>- Worked on Liferay & Spring Framework</li>
                <li>- Backend development with Java</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
