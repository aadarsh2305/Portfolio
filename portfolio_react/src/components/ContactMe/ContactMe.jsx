import React from 'react';
import SendMail from './SendMail';

const ContactMe = ({ darkMode }) => {
  return (
    <div
      className={`md:flex overflow-hidden items-center md:flex-wrap md:justify-center rounded-lg p-12 mx-0 md:mx-20 ${
        darkMode 
          ? "bg-black text-white shadow-xl" 
          : "bg-gray-200 text-gray-800 shadow-md"
      }`}
      id="ContactMe"
    >
      <div className="w-full md:w-2/4">
        <h2 className="text-2xl md:text-4xl font-bold mb-6">Contact Me</h2>
        <SendMail />
      </div>
    </div>
  );
};

export default ContactMe;
