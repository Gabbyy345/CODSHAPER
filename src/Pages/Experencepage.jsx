import React from 'react';
import logo from '../assets/logo/logo.png';
import Carousel from './Carousel';

const Experencepage = () => {
  return (
    <div className="bg-slate-900 text-white font-semibold p-12 px-4 sm:px-8 md:px-12 lg:px-20">
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center font-jost text-white gap-2 text-center">
        REAL-WORLD EXPERIENCE
      </h1>
      <p className="text-sm sm:text-lg text-gray-300 flex items-center justify-center font-jost text-center">
        The best business consulting firm you can count on!
      </p>
    </div>


      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row gap-5 py-10">
        <div className="bg-black text-white font-semibold h-[296px] w-full sm:w-[467px] mt-10 rounded-md p-4">
         <div className='p-5'>
         <h1 className="text-xl sm:text-2xl font-bold mb-6 font-jost text-white text-center sm:text-left">
            WEALTH <br /> MANAGEMENT
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 font-jost text-center  sm:text-left">Read more</p>
         </div>
          <div className="flex items-center justify-center sm:justify-end mt-4">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="bg-black text-white font-semibold h-[296px] w-full sm:w-[467px] mt-10 rounded-md p-4">
          <div className='p-5'>
          <h1 className="text-xl sm:text-2xl font-bold mb-6 font-jost  text-white text-center sm:text-left">
            WEALTH <br /> MANAGEMENT
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 font-jost text-center sm:text-left">Read more</p>
          </div>
          <div className="flex items-center justify-center sm:justify-end mt-4">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="bg-black text-white font-semibold h-[296px] w-full sm:w-[467px] mt-10 rounded-md p-4">
          <div className='p-5'>
          <h1 className="text-xl sm:text-2xl font-bold mb-6 font-jost  text-white text-center sm:text-left">
            WEALTH <br /> MANAGEMENT
          </h1>
          <p className="text-sm sm:text-lg text-gray-300 font-jost text-center sm:text-left">Read more</p>
          </div>
          <div className="flex items-center justify-center sm:justify-end mt-4">
            <img src={logo} alt="Logo"  />
          </div>
        </div>
      </div>

      {/* Carousel Section */}   
            <div> 
            <div className="flex gap-2 items-center justify-center px-15 py-15 my-2 font-jost">
                <hr className="w-[500px] sm:w-[500px] border-gray-200" />
                <h1 className="sm:text-xl font-bold text-center sm:mx-4 whitespace-nowrap">
                Meet The Partners
                </h1>
                <hr className="w-[500px] sm:w-[500px] border-gray-200" />
            </div>
            </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Experencepage;