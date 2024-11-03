import React from "react";

const ProjectCard = ({ title, main, ProjectLogo, DemoLink, SourceCode, darkMode }) => {
  return (
    <div
      className={`p-3 md:p-6 flex flex-col w-80 shadow-xl rounded-2xl ${
        darkMode ? "bg-[#0c0e19] shadow-slate-900 text-white" : "bg-white shadow-md text-gray-800"
      }`}
    >
      <img className="p-4" src={ProjectLogo} alt={`${title} Logo`} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 md:p-4 flex gap-2 md:gap-4">
        <a href={DemoLink} target="_blank" rel="noopener noreferrer">
          <button
            className={`md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl transition-all duration-300 ${
              darkMode
                ? "bg-[#465697] text-white hover:opacity-85 hover:scale-105"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            }`}
          >
            Demo
          </button>
        </a>
        <a href={SourceCode} target="_blank" rel="noopener noreferrer">
          <button
            className={`md:mt-10 py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 font-semibold rounded-3xl transition-all duration-300 ${
              darkMode
                ? "bg-[#465697] text-white hover:opacity-85 hover:scale-105"
                : "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105"
            }`}
          >
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
