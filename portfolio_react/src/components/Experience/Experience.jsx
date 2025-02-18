import React from "react";
import { motion } from "framer-motion";
import AixtorLogo from "../../assets/Images/AixtorLogo.png";
import ProlificsLogo from "../../assets/Images/ProlificsLogo.jfif";

const Experience = ({ darkMode }) => {
  const experiences = [
    {
      name: "Associate Software Engineer",
      logo: ProlificsLogo,
      duration: "Prolifics | July 2023 - Present",
      responsibilities: ["Developing backend systems", "Working with Spring Boot & Java"],
    },
    {
      name: "Java Developer",
      logo: AixtorLogo,
      duration: "Aixtor | Dec 2022 - May 2023",
      responsibilities: ["Worked on Liferay & Spring Framework", "Backend development with Java"],
    },
  ];

  return (
    <div
      id="Experience"
      className={`p-6 md:p-12 flex flex-col items-center ${
        darkMode ? "bg-[#171d32] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-6 text-center">Experience</h1>
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-center space-y-6">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex flex-col items-center p-6 rounded-lg shadow-md ${
                darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white"
              }`}
              style={{ width: "100%", maxWidth: "400px" }}
            >
              <img
                src={experience.logo}
                alt={`${experience.name} Logo`}
                className="w-16 h-16 rounded-md mb-4"
              />
              <h2 className="font-semibold text-lg text-center">{experience.name}</h2>
              <p className="text-sm text-gray-500 text-center">{experience.duration}</p>
              <ul className="text-sm text-gray-400 mt-2 text-center">
                {experience.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;  