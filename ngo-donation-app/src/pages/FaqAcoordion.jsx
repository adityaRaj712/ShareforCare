import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const { darkMode } = useContext(ThemeContext);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'Can I pay using a credit card?',
      answer: 'Yes! Once you enter the amount you would like to donate, you will have the option to pay via credit card to the left which is processed by Stripe.',
    },
    {
      question: 'Can I pay by check?',
      answer: 'Yes, you can pay by check. Please contact us for the mailing address.',
    },
    {
      question: 'Are my donations tax-deductible?',
      answer: 'Yes, donations are tax-deductible to the extent allowed by law.',
    },
    {
      question: 'Can I donate if I live outside the India?',
      answer: 'Yes, we accept donations from all countries.',
    },
    {
      question: 'How much of my donation will go directly toward programs?',
      answer: 'A majority of your donation goes directly to the programs. Admin costs are kept minimal.',
    },
    {
      question: 'What is my donation used for?',
      answer: 'Your donation helps fund important programs and services.',
    },
  ];

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h1 className='text-center text-2xl mb-4'>FAQs</h1>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b">
          <button
            onClick={() => toggleFAQ(index)}
            className="flex justify-between w-full p-4 text-left text-gray-800 font-medium rounded-sm bg-gray-100 hover:bg-gray-200 focus:outline-none"
          >
            <span>{faq.question}</span>
            <span>{openIndex === index ? '-' : '+'}</span>
          </button>
          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openIndex === index ? 'max-h-40' : 'max-h-0'
            }`}
          >
            <div className="p-4 text-gray-600 bg-white rounded-sm">
              {faq.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;
