import React from 'react';
import SendMail from './SendMail';

const ContactMe = () => {
  return (
    <div
      className="text-white md:flex overflow-hidden items-center 
                    md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 
                    bg-opacity-30 rounded-lg p-12"
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
