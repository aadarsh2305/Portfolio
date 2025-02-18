import React from 'react';
import SendMail from './SendMail';

const ContactMe = ({ darkMode }) => {
  return (
    <div
      className={`flex items-center justify-center p-6 md:p-12 ${
        darkMode ? 'bg-[#0a192f] text-white' : 'bg-gray-100 text-gray-800'
      }`}
      id="ContactMe"
    >
      <div className="w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Contact Me
        </h2>
        <SendMail darkMode={darkMode} />
      </div>
    </div>
  );
};

export default ContactMe;