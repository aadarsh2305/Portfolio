import React, { useState } from 'react';
import axios from 'axios';

const SendMail = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);
  
    try {
      const response = await axios.post('https://aadarsh-folio-backend.vercel.app/send', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 200) {
        setIsSending(false);
        setIsSent(true);
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      setIsSending(false);
      setError(error.response?.data?.message || error.message);
    }
  };
  

  return (
    <form onSubmit={sendEmail} className="bg-[#465697] p-6 rounded-lg shadow-md space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="text-white font-semibold mb-2">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="text-white font-semibold mb-2">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="message" className="text-white font-semibold mb-2">Message</label>
        <textarea
          id="message"
          name="message"
          rows="4"
          placeholder="Enter your message"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black text-black"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-700 transition-all duration-300"
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </div>

      {isSent && <p className="text-green-500 mt-4">Message sent successfully!</p>}
      {error && <p className="text-red-500 mt-4">Error: {error}</p>}
    </form>
  );
};

export default SendMail;
