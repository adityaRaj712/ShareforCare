import React from "react";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-gray-700 text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
      <p className="text-lg">
        Your message has been received. We'll get back to you soon!
      </p>
      <a href="/" className="mt-4 text-blue-500 hover:underline">
        Go to Home
      </a>
    </div>
  );
};

export default ThankYou;
