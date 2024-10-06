import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import childrenImage from '../assets/children.jpg';
import elderlyImage from '../assets/elderly.jpg';
import dog from '../assets/dog.png';

const Sponsor = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <section className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-600 font-semibold tracking-wide uppercase">Defend • Rescue • Deliver</h2>
            <p className="mt-4 max-w-2xl text-xl leading-8 text-gray-600 dark:text-gray-300 lg:mx-auto">
              Sponsor a Child to Love
            </p>
          </div>

          <div className="mt-10">
            <Slider {...settings}>
              <div>
                <img 
                  src={childrenImage} 
                  alt="Image 1" 
                  className="mx-auto rounded-md shadow-md max-w-full h-auto"
                />
              </div>
              <div>
                <img 
                  src={elderlyImage}
                  alt="Image 2" 
                  className="mx-auto rounded-md shadow-md max-w-full h-auto"
                />
              </div>
              <div>
                <img 
                  src={dog} 
                  alt="Image 3" 
                  className="mx-auto rounded-md shadow-md max-w-full h-auto"
                />
              </div>
            </Slider>
            <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 text-center">
              Relationships are a key component of Children to Love and what we stand for. Help support the growth and
              development of a child in need in a tangible way!
            </p>
          </div>

          <div className="mt-16 bg-gray-100 dark:bg-gray-800 p-6 rounded-md shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Make a Difference Through Sponsorship
            </h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              At Shareforcare, we believe that meaningful relationships are at the heart of creating positive change. Are you ready to make a personal connection and directly impact a life in need? Through our sponsorship program, you can support the growth and development of children, elderly individuals, or animals in a tangible way.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Sponsor a Child, Elder, or Animal
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              For just $40 per month, you can help us provide essential care and support:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>For Children: Education, nutritious meals, healthcare, and mentorship</li>
              <li>For Elderly: Medical care, companionship, and dignified living assistance</li>
              <li>For Animals: Food, shelter, veterinary care, and loving attention</li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Your sponsorship covers the cost of these vital services, ensuring that those under our care receive the support they need to thrive.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Building Connections
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Many Shareforcare sponsors have formed deep, lasting connections with their sponsored individuals or animals. Depending on the circumstances, you may have the opportunity to:
            </p>
            <ul className="mt-2 list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Exchange letters or cards</li>
              <li>Send birthday or holiday greetings</li>
              <li>Receive updates and photos</li>
              <li>In some cases, arrange in-person visits</li>
            </ul>
            <p className="mt-4 text-gray-700 dark:text-gray-300">
              Whether through correspondence or direct interaction, being a Shareforcare sponsor allows you to create a meaningful bond while making a significant difference in a life.
            </p>
            <h3 className="mt-4 text-lg font-semibold text-gray-800 dark:text-gray-100">
              Get Started Today
            </h3>
            <p className="mt-2 text-gray-700 dark:text-gray-300">
              Ready to begin your sponsorship journey? Click the button below to explore available sponsorship opportunities and start changing a life today.
            </p>
            <div className="mt-4 flex justify-center">
              <a
                href="#"
                className="px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-md shadow-md hover:bg-blue-500 transition">
                Explore Sponsorship Opportunities
              </a>
            </div>
          </div>

          <div className="mt-8 flex flex-col items-center">
            <a
              href="#"
              className="mb-4 px-6 py-3 bg-red-600 text-white font-medium text-sm rounded-md shadow-md hover:bg-red-500 transition">
              Sponsorship FAQ
            </a>
            <a
              href="#"
              className="mb-4 px-6 py-3 bg-green-600 text-white font-medium text-sm rounded-md shadow-md hover:bg-green-500 transition">
              Sponsor a Child Today
            </a>
            <a
              href="#"
              className="mb-4 px-6 py-3 bg-blue-600 text-white font-medium text-sm rounded-md shadow-md hover:bg-blue-500 transition">
              Sponsor an Elderly
            </a>
            <a
              href="#"
              className="px-6 py-3 bg-yellow-600 text-white font-medium text-sm rounded-md shadow-md hover:bg-yellow-500 transition">
              Sponsor an Animal
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Address</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                ShareForCare Intl.<br />
                P.O. Box 12345<br />
                Your City, Your Country
              </p>
            </div>
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Stay Connected</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Follow us on social media</p>
              <div className="mt-4 space-x-4">
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>
            <div className="col-span-1">
              <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100">Contact Us</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Email: contact@shareforcare.org<br />
                Phone: +1 (234) 567-8900
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Sponsor;
