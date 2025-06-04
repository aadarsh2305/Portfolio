import React from "react";
import { motion } from "framer-motion";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";

const DSASection = ({ darkMode }) => {
  const buttonClasses =
    "mt-3 px-4 py-2 rounded-md text-sm font-medium border-2 transition duration-300";

  return (
    <div
      id="DSA"
      className={`p-6 md:p-12 flex flex-col items-center ${
        darkMode ? "bg-[#171d32] text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <h1 className="text-2xl md:text-4xl font-bold mb-8 text-center">
        🧠 Data Structures and Algorithms
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 w-full max-w-6xl">
        {/* LeetCode */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`flex flex-col items-center p-6 rounded-lg shadow-md ${
            darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white"
          }`}
        >
          <SiLeetcode size={40} color="#FFA116" className="mb-4" />
          <img
            src="https://leetcard.jacoblin.cool/aadarsh9111"
            alt="LeetCode Stats"
            className="rounded-md w-72 md:w-80"
          />
          <a
            href="https://leetcode.com/u/aadarsh9111/"
            target="_blank"
            rel="noreferrer"
            className={`${buttonClasses} border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black`}
          >
            View LeetCode Profile
          </a>
        </motion.div>

        {/* HackerRank */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`flex flex-col items-center p-6 rounded-lg shadow-md ${
            darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white"
          }`}
        >
          <SiHackerrank size={40} color="#2EC866" className="mb-4" />
          <p className="text-lg font-semibold text-center">3⭐ Java</p>
          <p className="text-sm text-gray-400 mb-2 text-center">Certified Problem Solver</p>
          <a
            href="https://www.hackerrank.com/profile/adarshgupta91111"
            target="_blank"
            rel="noreferrer"
            className={`${buttonClasses} border-green-500 text-green-500 hover:bg-green-500 hover:text-black`}
          >
            View HackerRank Profile
          </a>
        </motion.div>

        {/* GeeksforGeeks */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`flex flex-col items-center p-6 rounded-lg shadow-md ${
            darkMode ? "bg-slate-950 bg-opacity-45" : "bg-white"
          }`}
        >
          <FaUniversity size={40} color="#28a745" className="mb-4" />
          <p className="text-lg font-semibold text-center">Solved 250+ DSA Questions</p>
          <p className="text-sm text-gray-400 mb-2 text-center">Active Contributor on GFG</p>
          <a
            href="https://www.geeksforgeeks.org/user/adarshgupxk6y/"
            target="_blank"
            rel="noreferrer"
            className={`${buttonClasses} border-green-600 text-green-600 hover:bg-green-600 hover:text-black`}
          >
            View GFG Profile
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default DSASection;
