import React from "react";
import AboutMe from "../../assets/Images/AboutMe.jpg";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div
      className="text-white md:flex overflow-hidden items-center 
                    md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 
                    bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutMe} alt="About me image" />
          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Developed dynamic user interfaces using React.js, ensuring
                  high-quality, responsive designs. Integrated APIs for seamless
                  data display, focusing on performance optimization and user
                  experience enhancements.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend Developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Engineered robust backend solutions using Java and Spring
                  Boot, ensuring secure and efficient database operations with
                  MySQL. Migrated legacy systems to modern architectures,
                  improving performance and scalability.
                </p>
              </span>
            </div>

            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />
              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database Management
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  Managed and optimized MySQL databases, ensuring reliable data
                  handling and enhancing system performance. Utilized efficient
                  query structures and optimization techniques to handle large
                  datasets.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
