import React from 'react'
import { useState } from 'react';
import { FaCheck } from "react-icons/fa";

const QuestionPage = () => {
    const [expanded, setExpanded] = useState(null);
    const questions = [
        {
            id:1,
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
        "Nsectetur cing elit.",
        "Suspe ndisse suscipit sagittis leo.",
        "Entum estibulum dignissim posuere.",
        "If you are going to use a passage.",
        "If you are going to use a passage test data.",
      ];

    const toggleExpand = (id) => {
        setExpanded(expanded === id ? null : id);
      };
  return (
    <div className='bg-[#ffffff] text-black px-6 md:px-15 py-12 '>
 {/* Header */}
    <div className='text-black text-4xl font-bold text-center py-10'>
        <h1 className='font-semi-bold' >QUESTION ANSWERS</h1>
        <p className='text-sm text-gray-300'>We help our client renew their bussiness</p>
    </div>
    {/* Question section */}
 
    <div className='flex flex-col md:flex-row gap-10'>

        {/* Left question */}
        <div className='flex-1 space-y-4 md:w-1/2 w-full'>
        {questions.map((item) => (
            <div
              key={item.id}
              className={`border ${
                expanded === item.id ? "border-blue-500" : "border-gray-300"
              } rounded-md p-4 transition-all duration-300`}
            >
              <div className="flex justify-between items-center">
                <h2
                  className={`font-bold ${
                    expanded === item.id ? "text-blue-500" : "text-black"
                  }`}
                >
                  {item.id}. {item.question}
                </h2>
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="text-blue-500 font-bold text-xl"
                >
                  {expanded === item.id ? "-" : "+"}
                </button>
              </div>
              {expanded === item.id && (
                <p className="text-gray-500 mt-4">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
        <div className='md:w-1/2 w-full flex md:flex-row flex-col gap-10 md:items-end'>
 {/* checklist */}
            <ul className="space-y-2 items-end">
            {checklist.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-300 font-bold text-sm"><FaCheck /></span>
                <p className="text-gray-500">{item}</p>
              </li>
            ))}
          </ul>

        {/* Right image */}
        <div className=" flex items-center justify-center ">
          <div className="bg-blue-500 text-white p-12 md:rounded-md flex flex-col items-center justify-center">
            <h1 className="text-5xl font-bold">30</h1>
            <p className="text-center text-sm md:text-base">Years of Experience</p>
          </div>
        </div>
        </div>
           
    </div>
    </div>

  )
}

export default QuestionPage



 
