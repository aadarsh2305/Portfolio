import React from "react";
import Instagram from '../../assets/Social_Logo/Instagram.png';
import Linkedin from '../../assets/Social_Logo/Linkedin.png';
import Twitter from '../../assets/Social_Logo/Twitter.png';
import Github from '../../assets/Social_Logo/Github.png';

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div className="mb-4 md:mb-0">
        <p className="text-lg md:mr-4 mb-4 md:mb-0"><b>Reach out to me:</b></p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a
            href="https://www.linkedin.com/in/aadarshgupta2305/"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={Linkedin}
              alt="Linkedin"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:shadow-lg"
            />
          </a>
          <a
            href="https://x.com/Aadarsh_Gupta91"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={Twitter}
              alt="Twitter"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:shadow-lg"
            />
          </a>
          <a
            href="https://instagram.com/aadarsh_gupta91"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={Instagram}
              alt="Instagram"
              className="h-8 w-8 md:h-10 md:w-10 rounded-full hover:shadow-lg"
            />
          </a>
          <a
            href="https://github.com/aadarsh2305"
            target="_blank"
            rel="noopener noreferrer"
            className="transform transition-transform duration-300 hover:scale-110"
          >
            <img
              src={Github}
              alt="Github"
              className="h-8 w-8 md:h-10 md:w-10 bg-white p-1 rounded-full hover:shadow-lg"
            />
          </a>
        </div>
      </div>
      <p className="text-sm mt-4 md:mt-0">
        <i>© {new Date().getFullYear()} My Portfolio. Powered by Aadarsh Gupta.</i>
      </p>
    </div>
  );
};

export default Footer;
