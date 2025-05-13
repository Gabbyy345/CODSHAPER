import React from 'react';
import Logo from '../assets/logo/Rectangle.png';

const Market = () => {
  return (
    <div className="bg-white text-black font-semibold px-4 sm:px-8 md:px-12 lg:px-20 py-10  ">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
        {/* Logo */}
        <div className="sm:w-1/3 flex justify-center sm:justify-start">
          <img src={Logo} alt="Logo" className="w-32 sm:w-40" />
        </div>

        {/* Text Content */}
        <div className="text-center w-[400px] sm:text-left sm:w-2/3 flex item-right sm:items-start flex-col">
          <h1 className="font-jost text-3xl sm:text-4xl font-bold mb-4">
            WE'RE LEADING IN <br /> THE MARKET
          </h1>
          <p className="text-gray-500 w-[400px] text-sm sm:text-base mb-6">
            Lorem ipsum is simply free text dolor sit amet, consectetur noted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem andhn.
          </p>
          <p className="text-blue-600 w-[400px] text-sm sm:text-base font-medium">
            We have 35+ years of experience. We offer marketing and consulting services
          </p>
        </div>
      </div>

      {/* Progress Bars */}
      <div className="mt-8 w-[300px] sm:w-[600px]  ">
        <div className="mb-4">
          <p className="text-sm font-medium mb-2">CONSULTING</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium mb-2">ADVICES</p>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="mt-10 flex items-center gap-4 bg-blue-50 p-4 rounded-md">
        <div className="bg-blue-600 text-white p-4 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10l1.664 1.664a8.001 8.001 0 0011.314 0L21 10m-9 4v6m0-6a4 4 0 100-8 4 4 0 000 8z"
            />
          </svg>
        </div>
        <div className='w-[400px]'>
          <p className="text-sm text-gray-500">Have any question? Give us a call</p>
          <p className="text-lg font-bold">+92 666 888 0000</p>
        </div>
      </div>
    </div>
  );
};

export default Market;