import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";

const Navbar = ({ darkMode }) => {
  const [menu, setMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);

  const toggleMenu = () => {
    setMenu(!menu);
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={`flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 ${
        darkMode ? "text-white" : "text-gray-800 bg-white"
      }`}
    >
      <span className="text-xl font-bold tracking-wide">Portfolio</span>
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold md:mt-5 ${
          darkMode ? "bg-black bg-opacity-30" : "bg-gray-100 bg-opacity-90"
        } px-2 rounded-xl text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <a href="#About">
          <li
            className={`text-md transition-all duration-300 p-1 md:p-0 ${
              darkMode ? "hover:text-gray-300" : "hover:text-blue-600"
            }`}
          >
            About
          </li>
        </a>
        <a href="#Experience">
          <li
            className={`text-md transition-all duration-300 p-1 md:p-0 ${
              darkMode ? "hover:text-gray-300" : "hover:text-blue-600"
            }`}
          >
            Experience
          </li>
        </a>
        <a href="#Skills">
          <li
            className={`text-md transition-all duration-300 p-1 md:p-0 ${
              darkMode ? "hover:text-gray-300" : "hover:text-blue-600"
            }`}
          >
            Skills
          </li>
        </a>
        <a href="#Projects">
          <li
            className={`text-md transition-all duration-300 p-1 md:p-0 ${
              darkMode ? "hover:text-gray-300" : "hover:text-blue-600"
            }`}
          >
            Projects
          </li>
        </a>
        <a href="#ContactMe">
          <li
            className={`text-md transition-all duration-300 p-1 md:p-0 ${
              darkMode ? "hover:text-gray-300" : "hover:text-blue-600"
            }`}
          >
            Contact
          </li>
        </a>
        <a href="#Footer">
          <li
            className={`text-md transition-all duration-300 p-1 md:p-0 ${
              darkMode ? "hover:text-gray-300" : "hover:text-blue-600"
            }`}
          >
            Footer
          </li>
        </a>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className={`md:hidden absolute right-10 top-6 transition-all duration-300 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          onClick={toggleMenu}
        />
      ) : (
        <RiCloseLine
          size={30}
          className={`md:hidden absolute right-10 top-6 transition-all duration-300 ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
