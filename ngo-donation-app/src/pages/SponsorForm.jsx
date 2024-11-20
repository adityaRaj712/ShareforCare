import {React, useState} from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import childrenImage from '../assets/children.jpg';

const FormPage = () => {

  const [formData, setFormData] = useState({
    gender: "",
    age: "",
    childName: "",
    amount: "",
    message: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/submit-sponsor-child", formData);
      navigate("/qr");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

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
        <h2 className="text-center text-3xl font-bold mb-3">Sponsor a Child to Love</h2>
        <img 
            src={childrenImage} 
            alt="Image 1" 
            className="mx-auto rounded-md shadow-md max-w-full h-auto mb-3"
        />
        <form className="space-y-6" onSubmit={handleSubmit}>

          {/* Gender Preference */}
          <div>
            <label className="block text-lg font-semibold">Gender Preference</label>
            <div className="flex gap-4">
              {['Girl', 'Boy', 'Either gender'].map(gender => (
                <label key={gender}>
                  <input type="radio" name="gender" value={gender} onChange={handleInputChange} /> {gender}
                </label>
              ))}
            </div>
          </div>

          {/* Age Preference */}
          <div>
            <label className="block text-lg font-semibold">Age Preference</label>
            <div className="flex gap-4">
              {['0 - 10 years old', '11 - 18 years old', 'College Student', 'Any age'].map(age => (
                <label key={age}>
                  <input type="radio" name="age" value={age} onChange={handleInputChange}/> {age}
                </label>
              ))}
            </div>
          </div>

          {/* Child’s Name */}
          <div>
            <label className="block text-lg font-semibold">Child’s Name (if known)</label>
            <input
              type="text"
              name="name"
              className="w-full border p-2 bg-white dark:bg-gray-700 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              placeholder="Enter name..."
              onChange={handleInputChange}
            />
          </div>

          {/* Sponsorship Amount */}
          <div>
            <label className="block text-lg font-semibold">Sponsorship Amount</label>
            <div className="flex gap-4">
              <label>
                <input type="radio" name="amount" value="$40" onChange={handleInputChange}/> ₹ 10000
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
              onChange={handleInputChange}
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

export default FormPage;
