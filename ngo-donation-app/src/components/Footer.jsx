import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-indigo-800 text-black dark:text-gray-300 pt-8 pb-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
         
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold text-blue-600 dark:text-pink-300 mb-2">
              ShareForCare
            </h1>
            <p className="text-sm">
              Bringing communities together to help those in need.
            </p>
          </div>


          <div className="flex space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 dark:hover:text-pink-300"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 dark:hover:text-pink-300"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 dark:hover:text-pink-300"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-blue-600 dark:hover:text-pink-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-700" />

        <div className="text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} ShareForCare. All rights reserved.
          </p>
          <p className="mt-1">
            Made with ❤️ by ShareForCare Team
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
