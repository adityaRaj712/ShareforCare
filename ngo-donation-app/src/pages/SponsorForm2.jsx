import React from 'react';
import childrenImage from '../assets/children.jpg';
import elderlyImage from '../assets/elderly.jpg';

const SponsorForm2 = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
      {/* Navbar */}
      <nav className="flex justify-center items-center p-4 shadow-md">
        <h1 className="text-2xl font-bold italic text-center">
          Sponsor today and Make a difference
        </h1>
      </nav>

      {/* Form */}
      <div className="max-w-3xl mx-auto p-8">
        <h2 className="text-center text-3xl font-bold mb-3">Sponsor an Elderly to Love</h2>
        <img 
            src={elderlyImage} 
            alt="Image 1" 
            className="mx-auto rounded-md shadow-md max-w-full h-auto mb-3"
        />
        <form className="space-y-6">

          {/* Gender Preference */}
          <div>
            <label className="block text-lg font-semibold">Gender Preference</label>
            <div className="flex gap-4">
              {['Female', 'Male','other', 'Either gender'].map(gender => (
                <label key={gender}>
                  <input type="radio" name="gender" value={gender} /> {gender}
                </label>
              ))}
            </div>
          </div>

          {/* Age Preference */}
          <div>
            <label className="block text-lg font-semibold">Age Preference</label>
            <div className="flex gap-4">
              {['50 - 60 years old', '61-70 years old', '70-80 years old','Any age'].map(age => (
                <label key={age}>
                  <input type="radio" name="age" value={age} /> {age}
                </label>
              ))}
            </div>
          </div>

          {/* Child’s Name */}
          <div>
            <label className="block text-lg font-semibold"> Name (if known)</label>
            <input
              type="text"
              name="childName"
              className="w-full border p-2 bg-white dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter name..."
            />
          </div>

          {/* Sponsorship Amount */}
          <div>
            <label className="block text-lg font-semibold">Sponsorship Amount</label>
            <div className="flex gap-4">
              <label>
                <input type="radio" name="amount" value="$40" /> ₹ 10000
              </label>
              <label>
                <input type="radio" name="amount" value="Other Amount" /> Other Amount
              </label>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-lg font-semibold">Do you have a message for us?</label>
            <textarea
              name="message"
              className="w-full border p-2 bg-white dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              rows="4"
              placeholder="Enter your message..."
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SponsorForm2;
