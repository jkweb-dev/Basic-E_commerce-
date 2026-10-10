import { useState } from "react";

export const FAQ = () => {
  const faq = [
    {
      question: "How long does shipping take?",
      answer: "It takes 3 to 10 days depending on your location",
    },
    {
      question: "What is your return policy?",
      answer: "You can return any item within 30 days of purchase",
    },
    {
      question: "How can I track my order?",
      answer:
        "After placing your order, we will send you a tracking link via email or SMS",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-4 sm:px-6 md:px-10 lg:px-20 py-8 sm:py-12 max-w-5xl mx-auto">

      {/* Title */}
      <h1 className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-sans mb-6 sm:mb-10 text-center">
        Frequently Asked Questions
      </h1>

      {/* FAQ Items */}
      <div className="space-y-3 sm:space-y-4">

        {faq.map((item, index) => (
          <div key={index} className="w-full">

            {/* Question Button */}
            <button
              onClick={() => toggle(index)}
              className="w-full bg-gray-100 py-3 sm:py-4 px-4 sm:px-6 text-left flex justify-between items-center rounded"
            >
              <span className="text-sm sm:text-base md:text-lg font-medium">
                {item.question}
              </span>

              <span className="text-xl sm:text-2xl font-bold">
                {openIndex === index ? "-" : "+"}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <p className="text-gray-700 text-sm sm:text-base md:text-lg font-medium py-3 sm:py-4 px-4 sm:px-6 text-center">
                {item.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};