import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Blogs from './pages/Blogs';
import QRCodePage from './pages/QRCodePage';
import ThankYou from './pages/Thankyou';

 // Optional: 404 Not Found page

const App = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar /> {/* Navbar will be present on all routes */}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/sponsor-child" element={<SponsorForm />} />
        <Route path="/sponsor-elderly" element={<SponsorForm2 />} />
        <Route path="/qr" element={<QRCodePage/>} />
        <Route path="/thank-you" element={<ThankYou/>} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/sponsor" element={<Sponsor />} />
        <Route path="/sponsorform" element={<SponsorForm />} />
        <Route path="/sponsorform2" element={<SponsorForm2 />} />
        <Route path="/sponsorform3" element={<SponsorForm3 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
