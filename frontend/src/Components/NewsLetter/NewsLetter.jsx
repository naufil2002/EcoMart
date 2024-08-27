import React from 'react';
import './NewsLetter.css'

const NewsLetter = () => {
  return (
    <div className="flex container newsletter flex-col items-center justify-center py-16 px-4 ">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
        Get Exclusive Offers On Your Email
      </h2>
      <p className="text-gray-600 fs-5 text-center mb-8">
        Subscribe to our newsletter and stay updated
      </p>
      <div className="flex flex-col md:flex-row items-center w-full md:max-w-xl space-y-4 md:space-y-0 md:space-x-4">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-full md:flex-grow p-4 text-gray-800 bg-white border border-gray-300 rounded-full outline-none  focus:to-black"
        />
        <button className="w-full md:w-auto px-8 py-4 bg-black text-white font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
