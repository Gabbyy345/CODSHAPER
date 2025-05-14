import React from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Marketcards from './Marketcards';

const Market = () => {
  return (
    <div className="bg-white text-black font-semibold px-6 md:px-12 lg:px-20 py-10 relative pb-[100px]">
      
      {/* Section Header */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        
        {/* Logo */}
        <div className="hidden md:flex md:w-1/3 justify-start">
          <div className='bg-blue-500 text-white text-2xl rounded p-2 w-[100px] h-[100px] flex items-center justify-center'>
            <FaPlay />
          </div>
        </div>

        {/* Text & Progress Section */}
        <div className='flex flex-col   gap-10 md:w-1/3  w-full'>

          {/* Text Content */}
          <div className="w-full md:w-[400px] items-center">
            <h1 className="font-jost text-3xl sm:text-4xl font-bold mb-4">
              WE'RE LEADING <br /> IN THE MARKET
            </h1>
            <p className="text-gray-500 text-sm sm:text-base mb-6">
              Lorem ipsum is simply free text dolor sit amet, consectetur noted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem andhn.
            </p>
            <p className="text-blue-600 text-sm sm:text-base font-medium">
              We have 35+ years of experience. We offer marketing and consulting services
            </p>
          </div>
    

          {/* Progress Bars */}
          <div className="flex flex-col gap-6">

            <div>
              <div className="w-full md:w-[400px] bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
              </div>
              <p className="text-sm font-medium mt-2">CONSULTING <span className='md:ml-60'>88%</span></p>
            </div>

            <div>
              <div className="w-full md:w-[300px] bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
              </div>
              <p className="text-sm font-medium mt-2">ADVICES <span className="md:ml-30">68%</span></p>
            </div>

          </div>

          {/* Contact Section */}
          <div className='flex items-center gap-3 mt-4'>
            <div className="bg-blue-50 text-blue-600 p-4 rounded-full">
              <MdOutlinePhoneInTalk size={20} />
            </div>
            <div>
              <p className="text-sm text-gray-500">Have any question? Give us a call</p>
              <p className="text-lg font-bold">+92 666 888 0000</p>
            </div>
          </div>

        </div>
      </div>

      {/* Cards Section */}
      <div className='md:absolute -bottom-20 w-full'>
        <Marketcards />
      </div>
    </div>
  );
};

export default Market;



