import {React, useState} from 'react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
      name: "",
      age: "",
      occupation: "",
      mobile_no: "",
      email: "",
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
          await axios.post("http://localhost:3000/submit-contact", formData);
          alert("Contact form submitted successfully!");
          navigate("/thank-you");
      } catch (error) {
          console.error("Error submitting form", error);
      }
  };
  return (
    <>
      <div className="min-h-screen bg-gray-700 w-4/5 ml-36 text-white rounded-md">
          <nav className="flex justify-center items-center p-4 shadow-md">
              <h1 className="text-2xl font-bold italic text-center">
                  Contact Us
              </h1>
          </nav>

          <div className="max-w-3xl mx-auto p-8">
              <h2 className="text-center text-3xl font-bold mb-3">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">

                  <div>
                      <label className="block text-lg font-semibold">Name</label>
                      <input
                          type="text"
                          name="name"
                          className="w-full border p-2 bg-gray-200 text-black rounded-md placeholder-gray-500"
                          placeholder="Enter your name..."
                          onChange={handleInputChange}
                      />
                  </div>

                  <div>
                      <label className="block text-lg font-semibold">Age</label>
                      <input
                          type="text"
                          name="age"
                          className="w-full border p-2 bg-gray-200 text-black rounded-md placeholder-gray-500"
                          placeholder="Enter your age..."
                          onChange={handleInputChange}
                      />
                  </div>

                  <div>
                      <label className="block text-lg font-semibold">Occupation</label>
                      <input
                          type="text"
                          name="occupation"
                          className="w-full border p-2 bg-gray-200 text-black rounded-md placeholder-gray-500"
                          placeholder="Enter your occupation..."
                          onChange={handleInputChange}
                      />
                  </div>

                  <div>
                      <label className="block text-lg font-semibold">Mobile Number</label>
                      <input
                          type="text"
                          name="mobile_no"
                          className="w-full border p-2 bg-gray-200 text-black rounded-md placeholder-gray-500"
                          placeholder="Enter your mobile number..."
                          onChange={handleInputChange}
                      />
                  </div>

                  <div>
                      <label className="block text-lg font-semibold">Email</label>
                      <input
                          type="email"
                          name="email"
                          className="w-full border p-2 bg-gray-200 text-black rounded-md placeholder-gray-500"
                          placeholder="Enter your email..."
                          onChange={handleInputChange}
                      />
                  </div>

                  <div>
                      <label className="block text-lg font-semibold">Message</label>
                      <textarea
                          name="message"
                          className="w-full border p-2 bg-gray-200 text-black rounded-md placeholder-gray-500"
                          rows="4"
                          placeholder="Enter your message..."
                          onChange={handleInputChange}
                      ></textarea>
                  </div>

                  <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                      Submit
                  </button>
              </form>
          </div>
      </div>
    </>
  )
}

export default Contact
