import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const SendMail = ({ darkMode }) => {
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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setError(null);

    if (!validateEmail(formData.email)) {
      setError('Please enter a valid email address.');
      setIsSending(false);
      return;
    }

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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-8 rounded-2xl shadow-2xl backdrop-blur-md ${
        darkMode
          ? 'bg-gradient-to-br from-[#1e3c72] to-[#2a5298] text-white'
          : 'bg-gradient-to-br from-[#ffffff] to-[#f0f4ff] text-gray-800'
      }`}
    >
      <form onSubmit={sendEmail} className="space-y-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col"
        >
          <label htmlFor="name" className="font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            className={`p-3 rounded-lg border-2 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              darkMode
                ? 'bg-[#1e3c72] border-[#2a5298] text-white'
                : 'bg-white border-gray-300 text-black'
            }`}
            value={formData.name}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col"
        >
          <label htmlFor="email" className="font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            className={`p-3 rounded-lg border-2 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              darkMode
                ? 'bg-[#1e3c72] border-[#2a5298] text-white'
                : 'bg-white border-gray-300 text-black'
            }`}
            value={formData.email}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex flex-col"
        >
          <label htmlFor="message" className="font-semibold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            className={`p-3 rounded-lg border-2 focus:outline-none focus:border-blue-500 transition-all duration-300 ${
              darkMode
                ? 'bg-[#1e3c72] border-[#2a5298] text-white'
                : 'bg-white border-gray-300 text-black'
            }`}
            value={formData.message}
            onChange={handleChange}
            required
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex justify-center"
        >
          <button
            type="submit"
            className={`py-3 px-8 rounded-lg font-bold transition-all duration-300 ${
              darkMode
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-blue-500 text-white hover:bg-blue-600'
            }`}
            disabled={isSending}
          >
            {isSending ? 'Sending...' : 'Send'}
          </button>
        </motion.div>

        {isSent && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-green-500 mt-4 text-center"
          >
            Message sent successfully!
          </motion.p>
        )}

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-red-500 mt-4 text-center"
          >
            Error: {error}
          </motion.p>
        )}
      </form>
    </motion.div>
  );
};

export default SendMail;