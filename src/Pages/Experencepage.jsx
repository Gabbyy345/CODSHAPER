import React from 'react';
import logo from '../assets/logo/logo.png';
import Carousel from './Carousel';

const Experencepage = () => {
  return (
   <section className="bg-gray-900 text-white py-16 px-4 sm:px-6 md:px-8 lg:px-16">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-2xl sm:text-4xl font-bold mb-2 mt-10">REAL-WORLD EXPERIENCE</h2>
    <p className="text-base sm:text-lg text-gray-400 mb-20">
      The best business consulting firm you can count on!
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10">
      {/* Card 1 */}
      <div className="bg-black rounded-lg p-6 sm:p-8 md:p-16 flex flex-col sm:flex-row sm:items-start sm:justify-between h-full text-center sm:text-left">
        <div className="flex-1">
          <h3 className="text-xs sm:text-xl md:text-2xl font-semibold mb-1 lg:mb-6">WEALTH MANAGEMENT</h3>
          <p className="text-sm sm:text-base text-gray-400 lg:mt-8">Read More</p>
        </div>
        <div className="mt-10 sm:mt-0 sm:ml-6 flex justify-center sm:justify-end">
          <img
            src={logo}
            alt="WEALTH MANAGEMENT"
            className="w-full max-w-[40px] sm:max-w-[80px] md:max-w-[100px] h-auto object-contain lg:mt-14"
          />
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-black rounded-lg p-6 sm:p-8 md:p-16 flex flex-col sm:flex-row sm:items-start sm:justify-between h-full text-center sm:text-left">
        <div className="flex-1">
          <h3 className="text-xs sm:text-xl md:text-2xl font-semibold mb-1 lg:mb-6">WEALTH MANAGEMENT</h3>
          <p className="text-sm sm:text-base text-gray-400 lg:mt-8">Read More</p>
        </div>
        <div className="mt-10 sm:mt-0 sm:ml-6 flex justify-center sm:justify-end">
          <img
            src={logo}
            alt="WEALTH MANAGEMENT"
            className="w-full max-w-[40px] sm:max-w-[80px] md:max-w-[100px] h-auto object-contain lg:mt-14"
          />
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-black rounded-lg p-6 sm:p-8 md:p-16 flex flex-col sm:flex-row sm:items-start sm:justify-between h-full text-center sm:text-left">
        <div className="flex-1">
          <h3 className="text-xs sm:text-xl md:text-2xl font-semibold mb-1 lg:mb-6">WEALTH MANAGEMENT</h3>
          <p className="text-sm sm:text-base text-gray-400 lg:mt-8">Read More</p>
        </div>
        <div className="mt-10 sm:mt-0 sm:ml-6 flex justify-center sm:justify-end">
          <img
            src={logo}
            alt="WEALTH MANAGEMENT"
            className="w-full max-w-[40px] sm:max-w-[80px] md:max-w-[100px] h-auto object-contain lg:mt-14"
          />
        </div>
      </div>
    </div>
    {/* Divider with text */}
    <div className="flex items-center justify-center w-full my-8 mt-20">
      <div className="flex-grow border-t border-gray-700 mx-4"></div>
      <span className="text-lg font-semibold text-gray-400 uppercase tracking-wider whitespace-nowrap">
        MEET THE PARTNERS
      </span>
      <div className="flex-grow border-t border-gray-700 mx-4"></div>
    </div>
    {/* Carousel */}
     <div>
        <Carousel />
      </div>
  </div>
</section>
  );
};

export default Experencepage;

