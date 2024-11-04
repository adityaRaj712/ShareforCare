import React from 'react';

const CardComponent = ({ step, title, description }) => {
  return (
    <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
      <h3 className="text-lg font-semibold text-secondary dark:text-pink-300">
        {`Step ${step}: ${title}`}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mt-2">{description}</p>
    </div>
  );
};

export default CardComponent;
