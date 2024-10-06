import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom'; // No need to import BrowserRouter here
import ThemeContext from './context/ThemeContext';
import LandingPage from './pages/LandingPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import NotFound from './pages/Notfound';
import Sponsor from './pages/sponsor';
import SponsorForm from './pages/SponsorForm';
import SponsorForm2 from './pages/SponsorForm2';
import SponsorForm3 from './pages/SponsorForm3';

 // Optional: 404 Not Found page

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar /> {/* Navbar will be present on all routes */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/sponsor" element={<Sponsor/>} />
        <Route path="/sponsorform" element={<SponsorForm/>}/>
        <Route path="/sponsorform2" element={<SponsorForm2/>}/>
        <Route path="/sponsorform3" element={<SponsorForm3/>}/>
        {/* Optional catch-all route for undefined paths */}
        <Route path="*" element={<NotFound/>} />
      </Routes>

      <Footer /> {/* Footer will also be present on all routes */}
    </div>
  );
};

export default App;
