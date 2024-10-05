import React from 'react';
import heroImage from '../assets/hero2.jpg';

const HeroComponent = () => {
  return (
    <div
      className="h-[80vh] bg-cover bg-center flex items-center justify-center rounded-lg mx-auto m-0 p-0" // Removed my-10
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-black dark:text-white">
          Help Us Make a Difference
        </h1>
        <p className="text-lg sm:text-xl text-black dark:text-gray-300 mt-4">
          Join hands with us to donate food, clothes, and essentials to those in need.
        </p>
        <button
          type="button"
          onClick={() => window.location.href = '/donate'}
          className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-3"
        >
          Get Involved
        </button>

      </div>
    </div>
  );
};

export default HeroComponent;
