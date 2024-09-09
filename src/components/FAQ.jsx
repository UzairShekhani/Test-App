import React, { useState } from "react";
import User1 from "../assets/user1.jpeg";
import User2 from "../assets/user2.jpeg";
import User3 from "../assets/user3.jpeg";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" min-h-screen p-8">
      {/* FAQ Header */}
      <section className="text-center py-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Frequently asked questions
        </h2>
        <p className="text-gray-600 mt-4">
          Everything you need to know about the product and billing.
        </p>
      </section>

      {/* FAQ List */}
      <section className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}>
              <h3 className="text-lg font-medium text-gray-800">
                {faq.question}
              </h3>
              <span>
                {activeIndex === index ? (
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 15l7-7 7 7"></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"></path>
                  </svg>
                )}
              </span>
            </div>
            {/* FAQ Answer */}
            {activeIndex === index && (
              <p className="text-gray-600 mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>

      {/* Contact Section */}
      <section className="text-center py-12">
        <div className="flex justify-center mb-6">
          {/* Display avatars (dummy) */}
          <div className="flex -space-x-4">
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src={User1}
              alt="Avatar 1"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src={User2}
              alt="Avatar 2"
            />
            <img
              className="w-12 h-12 rounded-full border-2 border-white"
              src={User3}
              alt="Avatar 3"
            />
          </div>
        </div>
        <h3 className="text-lg font-medium text-gray-800">
          Still have questions?
        </h3>
        <p className="text-gray-600 mt-2">
          Can’t find the answer you’re looking for? Please chat to our friendly
          team.
        </p>
        <button className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-lg hover:bg-purple-700">
          Get in touch
        </button>
      </section>
    </div>
  );
};

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time, and your plan will be active until the end of the billing cycle.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional details to your invoices from your account settings.",
  },
  {
    question: "How does billing work?",
    answer:
      "Billing is processed automatically each month based on the plan you've selected.",
  },
  {
    question: "How do I change my account email?",
    answer: "You can update your email in your account settings at any time.",
  },
];

export default FAQ;
