'use client';
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "What is the duration of the Spoken English course?",
    answer:
      "Our Spoken English course lasts for 3 months, including regular practice and personality development sessions.",
  },
  {
    question: "Do you offer online classes as well?",
    answer:
      "Yes, we offer both online and offline batches. You can attend from the comfort of your home.",
  },
  {
    question: "Will I receive a certificate after the course?",
    answer:
      "Yes! On successful completion, every student gets a course completion certificate from our institute.",
  },
  {
    question: "How can I enroll in the course?",
    answer:
      "You can enroll by filling out our contact form or visiting our center. We'll guide you through the rest.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Frequently Asked Questions</h2>
        <p className="mt-3 text-gray-600">Common queries from our learners</p>
      </div>

      <div className="mt-12 max-w-4xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow-sm p-5 transition"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium text-gray-800">{faq.question}</span>
              <FaChevronDown
                className={`w-5 h-5 text-blue-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            {openIndex === index && (
              <div className="mt-4 text-gray-600 transition duration-300">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
