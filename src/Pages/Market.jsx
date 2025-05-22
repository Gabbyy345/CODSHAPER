import React from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Marketcards from './Marketcards';

const Market = () => {
  return (
    <div className="bg-white text-black py-20 px-6 md:mt-10 relative pb-[100px]">
      
      {/* Section Header */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* Logo */}
        <div className="hidden md:flex  justify-center  md:justify-start">
          <div className="w-24 h-24 bg-blue-600 flex items-center justify-center rounded">
            <FaPlay className='w-10 h-10 text-white' />
          </div>
        </div>

        {/* Text & Progress Section */}
        <div className='flex flex-col   gap-10 md:w-1/3  w-full'>

          {/* Text Content */}
          <div className="w-full md:w-[400px] items-center">
            <h1 className="font-jost text-3xl sm:text-4xl font-bold mb-4">
              WE'RE LEADING <br /> IN THE MARKET
            </h1>
            <p className="text-gray-600 text-[18px] sm:text-base mb-6">
              Lorem ipsum is simply free text dolor sit amet, consectetur noted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem andhn.
            </p>
            <p className="text-blue-600 text-[20px] sm:text-base font-medium">
              We have 35+ years of experience. We offer marketing and consulting services
            </p>
          </div>
    

          {/* Progress Bars */}
          <div className="space-y-4 mb-6">

            <div>
              <div className="w-full md:w-[400px] bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
              <p className="text-sm font-medium mt-2">CONSULTING</p>
            </div>

            <div>
              <div className="w-full md:w-[300px] bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-sm font-medium mt-2">ADVICES </p>
            </div>

          </div>

          {/* Contact Section */}
          <div className='flex items-center gap-3 py-3'>
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full">
              <MdOutlinePhoneInTalk size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Have any question? Give us a call</p>
              <p className="text-[18px] font-bold">+92 666 888 0000</p>
            </div>
          </div>

        </div>
      </div>

      {/* Cards Section */}
      <div className='md:absolute -bottom-20 w-full md:px-12 lg:px-20'>
        <Marketcards />
      </div>
    </div>
  );
};

export default Market;



