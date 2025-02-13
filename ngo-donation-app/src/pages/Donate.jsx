import { useContext, useState } from "react";
import Qr from "../assets/QR1.jpeg";
import ThemeContext from "../context/ThemeContext";
import FAQAccordion from "./FaqAcoordion";
import razorpay from "../assets/razorpay.png";
import upi from "../assets/upilogo.png";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const { darkMode } = useContext(ThemeContext);
  const [amount, setAmount] = useState(""); // Store user input amount
  const navigate = useNavigate();

  // 🔹 Razorpay Payment Handler
  const handleRazorpayPayment = async () => {
    if (!amount || isNaN(amount) || amount <= 0) {
      alert("Please enter a valid amount!");
      return;
    }

    const options = {
      key: "YOUR_RAZORPAY_KEY", // Replace with your Razorpay Key ID
      amount: amount * 100, // Convert INR to paise (Razorpay format)
      currency: "INR",
      name: "Your Organization",
      description: "Donation",
      image: razorpay,
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Aditya", // Prefilled User Name
        email: "aditya@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#1D4F91",
      },
    };

    const razorpayInstance = new window.Razorpay(options);
    razorpayInstance.open();
  };

  // 🔹 Dynamic UPI Payment Link
  const upiPaymentLink = `upi://pay?pa=hiitsaditya7369-2@oksbi&pn=Aditya&am=${amount}&cu=INR&url=https://example.com`;


  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="flex justify-center items-center h-screen">
        {/* Left half for QR code */}
        <div className="w-1/2 flex justify-center">
          <div className="text-center">
            <p className="text-2xl mb-4 text-white dark:text-white">Scan QR to Donate</p>
            <img src={Qr} alt="QR Code" className="w-64 h-64 mx-auto rounded-md mb-4" />

            {/* Input for custom amount */}
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount (INR)"
              className="border border-gray-300 p-2 w-full rounded-md mb-4 text-center mt-4"
            />

            {/* Stack buttons vertically */}
            <div className="flex flex-col space-y-4 mt-2">
              {/* 🔹 Razorpay Button */}
              <button
                onClick={handleRazorpayPayment}
                className="flex items-center bg-[#1D4F91] rounded-lg overflow-hidden border border-[#1D4F91] shadow-md"
              >
                <div className="bg-[#1D4F91] p-2">
                  <img src={razorpay} alt="Razorpay Logo" className="h-10 w-12" />
                </div>
                <div className="bg-[#EAF1FC] px-12 py-1">
                  <p className="text-[#1D4F91] font-bold text-lg">Donate ₹{amount || "0"}</p>
                  <p className="text-[#6C86A0] text-sm">Secured by Razorpay</p>
                </div>
              </button>

              {/* 🔹 UPI Payment Button */}
              <a href={upiPaymentLink} target="_blank" rel="noopener noreferrer">
                <button className="flex items-center bg-[#1D4F91] rounded-lg overflow-hidden border border-[#1D4F91] shadow-md">
                  <div className="bg-[#ed902d] p-2">
                    <img src={upi} alt="UPI Logo" className="h-10 w-12" />
                  </div>
                  <div className="bg-[#e1bc85] px-16 py-1">
                    <p className="text-[#1D4F91] font-bold text-lg">Pay via UPI ₹{amount || "0"}</p>
                    <p className="text-[#193450] text-sm">Google Pay, PhonePe</p>
                  </div>
                </button>
              </a>
              <button
                onClick={() => navigate("/donate-items")}
                className="flex items-center bg-[#825de8] rounded-lg overflow-hidden border border-[#4559d9] shadow-md"
              >
                <div className="bg-[#825de8] p-2">
                  <img src={razorpay} alt="Razorpay Logo" className="h-10 w-12" />
                </div>
                <div className="bg-[#EAF1FC] px-14 py-4">
                  <p className="text-[#1D4F91] font-bold text-xl">Donate Items</p>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Vertical line */}
        <div className="h-40 border-l-2 border-gray-300"></div>

        {/* Right half for FAQ accordion */}
        <div className="w-1/2 flex flex-col items-center">
          <FAQAccordion />
        </div>
      </div>
    </div>
  );
};

export default Donate;
