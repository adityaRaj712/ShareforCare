import React from 'react';
import qr from '../assets/QR1.jpeg';

const QRCodePage = () => {
  return (
    <div className="min-h-screen bg-gray-700 text-white flex flex-col justify-center rounded-md items-center">
      <h2 className="text-2xl font-bold mb-4">Thank you for your sponsorship!</h2>
      <p className="mb-4">Scan the QR code below to complete your sponsorship process.</p>
      <img src={qr} alt="QR Code" className="rounded-md shadow-md max-w-xs h-auto mb-4" />
      <a href="/" className="text-blue-500 hover:underline">Return to Home</a>
    </div>
  );
};

export default QRCodePage;
