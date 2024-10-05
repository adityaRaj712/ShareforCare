import React, { useContext, useEffect } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const ToggleDarkMode = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <button onClick={toggleDarkMode} className="p-2 border rounded">
      {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    </button>
  );
};

export default ToggleDarkMode;
