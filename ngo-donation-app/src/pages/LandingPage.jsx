import React, { useContext } from 'react';
import HeroComponent from '../components/HeroComponent';
import CardComponent from '../components/CardComponent';
import ThemeContext from '../context/ThemeContext';

const LandingPage = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    // Apply dark:bg-black to ensure the background is black in dark mode
    <div className={`${darkMode ? 'dark' : ''} min-h-screen`}>
      <div className=" dark:bg-glossy-black bg-white">
        <HeroComponent />
        <div className="container mx-auto py-12">
          {/* Mission Section */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-green-400">Our Mission</h2>
            <p className="mt-4 font-bold text-gray-700 dark:text-black-900">
              We aim to make the world a better place by providing the most essential items to those in need, ensuring their well-being and dignity.
            </p>
          </section>

          {/* How It Works Section */}
          <section className="text-center mb-16">
            <h2 className="text-3xl font-bold text-blue-600 dark:text-green-400 mb-8">How It Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <CardComponent
                step="1"
                title="Choose Items"
                description="Browse the list of items required by NGOs and select what you want to donate."
              />
              <CardComponent
                step="2"
                title="Find Nearby NGOs"
                description="Find the nearest NGO or old age home that needs your donations using our location-based services."
              />
              <CardComponent
                step="3"
                title="Donate!"
                description="Donate your items and make a difference in someone's life."
              />
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
