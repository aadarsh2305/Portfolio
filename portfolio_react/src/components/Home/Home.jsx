import React from "react";
import avatar from '../../assets/Images/pngtree-user-profile-avatar-png-image_10211467.png'
import Typewriter from "typewriter-effect";
import Resume from '../../assets/Doc/Resume.pdf'

const Home = () => {
  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          Hello, I am Aadarsh
        </h1>
        <p className="px-5 pt-5 text-2xl md:text-4xl font-bold text-white mb-10">
            <Typewriter
              options={{
                strings: [
                  "Full Stack developer !",
                  "Java Developer",
                  "MERN stack developer !",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </p>

        <a className="mt-5 md:mt-10 text-white py-2 px-3 text-sm 
                            md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 
                            hover:scale-105 font-semibold rounded-3xl bg-[#465697]" 
           href={Resume} 
           download="Aadarsh_Resume.pdf"> Resume
        </a>
      </div>
      <div>
        <img className='' src={avatar} alt="profile_pic"/>
      </div>
    </div>
  );
};

export default Home;
