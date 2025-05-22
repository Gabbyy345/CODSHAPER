import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const questions = [
  {
    id: 1,
    question: "THINK AHEAD AND BOOST YOUR BUSINESS?",
    answer: "There are many variations of passages the majority have suffered alteration in some form, injected humour, or randomised words believable.",
  },
  {
    id: 2,
    question: "HOW CONSULTANCY EXPERTS WORK?",
    answer: "Consultancy experts provide tailored advice to help businesses grow and overcome challenges.",
  },
  {
    id: 3,
    question: "WHAT IS THE BEST ADVICE FOR GROWTH?",
    answer: "Focus on innovation, customer satisfaction, and strategic planning for sustainable growth.",
  },
  {
    id: 4,
    question: "HOW TO IMPROVE YOUR BUSINESS?",
    answer: "Analyze your market, improve your product or service, and invest in marketing and customer support.",
  },
];

const checklist = [
  "Nectetur cing elit.",
  "Suspe ndisse suscipit sagittis leo.",
  "Entum estibulum dignissim posuere.",
  "If you are going to use a passage.",
  "If you are going to use a passage test data.",
];

const QuestionPage = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-2">QUESTION ANSWERS</h2>
        <p className="text-center text-gray-500 mb-12">We help our clients renew their business</p>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Questions */}
          <div className="lg:w-2/3 space-y-6">
            {questions.map((item) => (
              <div
                key={item.id}
                className="border bg-[#F2F4F8] border-gray-200 rounded-md overflow-hidden"
              >
                <div
                  className="flex justify-between items-center p-6 cursor-pointer"
                  onClick={() => toggleExpand(item.id)}
                >
                  <div className="flex items-center gap-8">
                    <span className="text-blue-600 font-medium">{item.id}.</span>
                    <h3 className="font-bold text-sm">{item.question}</h3>
                  </div>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`lucide lucide-plus text-blue-600 transition-transform duration-200 ${expanded === item.id ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                {expanded === item.id && (
                  <div className="px-6 pb-6 text-gray-600 text-sm animate-fade-in">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
          {/* Checklist and Experience */}
          <div className=" md:w-1/2 w-full flex md:flex-row flex-col gap-10 md:items-end">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Checklist */}
              <div className="lg:w-8/12 space-y-3">
                {checklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2">
                    <div className="mt-1 text-blue-500">
                      <FaCheck size={16} />
                    </div>
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              {/* Experience Box */}
              <div className="lg:w-7/12">
                <div className="bg-blue-500 text-white p-12 text-center h-full flex flex-col justify-center rounded-md">
                  <div className="text-5xl font-bold">30</div>
                  <div className="text-sm mt-1">Years of Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestionPage;