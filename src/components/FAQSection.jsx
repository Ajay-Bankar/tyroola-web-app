import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What types of tyres do you offer?",
      answer: "We offer a wide variety of tyres including all-season, mud, and performance tyres for cars, SUVs, and trucks.",
    },
    {
      question: "How can I find the right tyre for my vehicle?",
      answer: "Use our search bar to enter your vehicle details, and we'll recommend the perfect tyres for your needs.",
    },
    {
      question: "Do you provide installation services?",
      answer: "Yes, we provide quick and professional tyre installation services at your convenience.",
    },
    {
      question: "Can I get expert advice on tyre selection?",
      answer: "Absolutely! Our team of experts is available to guide you in choosing the best tyres for your vehicle.",
    },
  ];

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-sm bg-white"
            >
              {/* Question */}
              <button
                onClick={() => toggleAnswer(index)}
                className="flex justify-between items-center w-full p-4 text-left"
              >
                <span className="text-lg font-semibold text-gray-800">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {/* Answer */}
              {activeIndex === index && (
                <div className="p-4 text-gray-600 border-t bg-gray-50">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
