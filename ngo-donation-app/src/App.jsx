import React, { useContext } from 'react';
import ThemeContext from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar/> {/* Apply dark class to the root div */}
      <LandingPage />
      <Footer/>
    </div>
  );
};

export default App;
