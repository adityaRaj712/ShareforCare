import React from 'react'
import '../App.css';
import childrenImage from '../assets/children.jpg';
import elderlyImage from '../assets/elderly.jpg';
import dog from '../assets/dog.png';
import hero from '../assets/hero.jpeg';

const Blogs = () => {
  return (
    <>
      <div className="container">
          <div className="heading dark:text-white">
              <h1>Our Blogs</h1>
              <p>Explore stories and insights about our journey and impact.</p>
          </div>

          <div className="cards-container">
              <div className="card">
                  <img src={childrenImage} alt="Blog 1"/>
                  <div className="card-content">
                      <h3>Making a Difference</h3>
                      <p>Discover how our sponsors are changing lives by supporting children, the elderly, and animals.</p>
                      <a href="#" className="read-more">Read More</a>
                  </div>
              </div>

              
              <div className="card">
                  <img src={dog} alt="Blog 2"/>
                  <div className="card-content">
                      <h3>Empowering Communities</h3>
                      <p>Learn about our efforts in creating sustainable and supportive environments for those in need.</p>
                      <a href="#" className="read-more">Read More</a>
                  </div>
              </div>

              <div className="card">
                  <img src={elderlyImage} alt="Blog 3"/>
                  <div className="card-content">
                      <h3>The Power of Giving</h3>
                      <p>Explore inspiring stories of kindness and generosity that have touched countless lives.</p>
                      <a href="#" className="read-more">Read More</a>
                  </div>
              </div>

              <div className="card">
                  <img src={hero} alt="Blog 4"/>
                  <div className="card-content">
                      <h3>Hope and Healing</h3>
                      <p>Read about the transformative impact of medical care and emotional support on vulnerable communities.</p>
                      <a href="#" className="read-more">Read More</a>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Blogs
