import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { SunIcon, MoonIcon, MenuIcon } from '@heroicons/react/solid';

const Navbar = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  
  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const handleSponsorClick = () =>{
    navigate('/sponsor');
  }

  return (
    <nav className="bg-transparent p-4 shadow-md dark:bg-black m-0 ml-5 mr-5"> 
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold font-mono tracking-widest text-blue-600 dark:text-pink-300">
          ShareForCare
        </Link>
        
        <div className="md:hidden">
          <button onClick={toggleDrawer(true)}>
            <MenuIcon className="h-6 w-6 text-black dark:text-white" />
          </button>
        </div>

        {drawerOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={toggleDrawer(false)}>
            <div className="bg-white dark:bg-gray-900 fixed right-0 top-0 h-full w-64 z-50">
              <ul className="flex flex-col p-4 space-y-4">
                <li><Link to="/" onClick={toggleDrawer(false)} className="text-black dark:text-white">Home</Link></li>
                <li><Link to="/about" onClick={toggleDrawer(false)} className="text-black dark:text-white">About</Link></li>
                <li><Link to="/contact" onClick={toggleDrawer(false)} className="text-black dark:text-white">Contact</Link></li>
                <li><Link to="/blog" onClick={toggleDrawer(false)} className="text-black dark:text-white">Blogs</Link></li>
                <li><Link to="/donate" onClick={toggleDrawer(false)} className="text-black dark:text-white">Donate</Link></li>
                <li><Link to="/sponsor" onClick={toggleDrawer(false)} className="text-black dark:text-white">Sponsor</Link></li>
              </ul>
            </div>
          </div>
        )}

        <div className="hidden md:flex space-x-4 items-center">
          <Link to="/" className="text-black dark:text-white">Home</Link>
          <Link to="/about" className="text-black dark:text-white">About</Link>
          <Link to="/contact" className="text-black dark:text-white">Contact</Link>
          <Link to="/blog" className="text-black dark:text-white">Blogs</Link>
          <button
            type="button"
              onClick={() => window.location.href = '/donate'}
              className="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Donate
          </button>
          <button type="button" onClick={handleSponsorClick} class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Sponsor</button>
          <button 
              onClick={toggleDarkMode} 
              className="ml-4 flex items-center"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              >
              {darkMode 
                ? <SunIcon className="h-6 w-6 text-yellow-400" /> 
                : <MoonIcon className="h-6 w-6 text-gray-900 dark:text-gray-200" />
              }
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
