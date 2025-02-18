import React from "react";
import { motion } from "framer-motion";
import AboutMe from "../../assets/Images/AboutMe.png";
import { IoArrowForward } from "react-icons/io5";

const About = ({ darkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      id="About"
      className={`flex flex-col md:flex-row items-center mx-4 md:mx-20 p-8 md:p-12 rounded-2xl shadow-2xl 
        ${darkMode ? "bg-gradient-to-r from-gray-900 to-black text-white" : "bg-gray-100 text-gray-800"}
        mb-12 pb-8
      `}
      style={{
        boxShadow: darkMode
          ? "0px 12px 20px rgba(0, 0, 0, 0.7), 0px -6px 15px rgba(0, 0, 0, 0.5)"
          : "0px 12px 20px rgba(0, 0, 0, 0.15), 0px -6px 15px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Image Section */}
      <div className="md:w-2/5 flex justify-center mb-6 md:mb-0">
        <motion.img
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 md:w-72 rounded-xl shadow-lg border-4 border-gray-700"
          src={AboutMe}
          alt="About Me"
        />
      </div>

      {/* Text & Details Section */}
      <div className="md:w-3/5 md:pl-10 text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold underline decoration-blue-500 decoration-4">
          About Me
        </h2>
        <p className="text-md md:text-lg mt-4 text-gray-500 dark:text-gray-400">
          🚀 Passionate Developer crafting seamless digital experiences. Specialized in **Frontend, Backend & Database Management**.
        </p>

        <div className="mt-6 space-y-6">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-4 p-4 rounded-xl shadow-lg border-l-4 transition duration-300 
              ${darkMode ? "bg-gray-800 border-blue-400" : "bg-white border-blue-500"}
            `}
          >
            <IoArrowForward size={25} className="mt-1 text-blue-500" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Frontend Developer</h3>
              <p className="text-sm md:text-md mt-1 text-gray-600 dark:text-gray-400">
                Transforming designs into engaging user experiences using **React.js, Tailwind CSS, and JavaScript**.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-4 p-4 rounded-xl shadow-lg border-l-4 transition duration-300 
              ${darkMode ? "bg-gray-800 border-green-400" : "bg-white border-green-500"}
            `}
          >
            <IoArrowForward size={25} className="mt-1 text-green-500" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Backend Developer</h3>
              <p className="text-sm md:text-md mt-1 text-gray-600 dark:text-gray-400">
                Building **scalable APIs** with **Java, Spring Boot & Node.js** to ensure seamless data flow.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-4 p-4 rounded-xl shadow-lg border-l-4 transition duration-300 
              ${darkMode ? "bg-gray-800 border-yellow-400" : "bg-white border-yellow-500"}
            `}
          >
            <IoArrowForward size={25} className="mt-1 text-yellow-500" />
            <div>
              <h3 className="text-lg md:text-xl font-semibold">Database Management</h3>
              <p className="text-sm md:text-md mt-1 text-gray-600 dark:text-gray-400">
                Optimizing **MySQL & PostgreSQL** databases for efficient **data storage & retrieval**.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
