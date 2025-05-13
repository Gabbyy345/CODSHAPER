import React from 'react';
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { FaPlay } from "react-icons/fa";
import Marketcards from './Marketcards';




const Market = () => {
  return (
    <div className="bg-white text-black font-semibold  sm:px-8 md:px-12 lg:px-20 py-10  ">
      {/* Section Header */}
      <div className="  flex items-end gap-6 sm:flex-row  sm:items-start ">
        {/* Logo */}
        <div className="sm:w-1/3 sm:justify-start">
          <div className='bg-blue-500 text-white text-2xl border-rounded-full p-2 w-[100px] h-[100px] flex items-center justify-center'>
          <FaPlay  className=''/>
          </div>
        </div>

        <div className='px-12  gap-10 '>
           {/* Text Content */}
        <div className=" w-[400px]  px-12  sm: flex-col">
          <h1 className="font-jost text-3xl sm:text-4xl font-bold mb-4">
            WE'RE LEADING <br/> IN  THE MARKET
          </h1>
          <p className="text-gray-500 w-[400px] text-sm sm:text-base mb-6">
            Lorem ipsum is simply free text dolor sit amet, consectetur noted adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem andhn.
          </p>
          <p className="text-blue-600 w-[400px] text-sm sm:text-base font-medium">
            We have 35+ years of experience. We offer marketing and consulting services
          </p>
        </div>

        {/* Progress Bars */}
        <div className="mt-8 w-[300px] sm:w-[600px]  px-12 sm:text-left  sm:items-start flex-col ">
        <div className="mb-4">
          
          <div className="w-[400px] bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '88%' }}></div>
            <p className="text-sm font-medium mb-2 ">CONSULTING <span className='p-34 '>88%</span></p>
          </div>
        </div>
        <div className='mt-8 w-[400px] sm:w-[600px]'>
         
          <div className="w-[300px] bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full " style={{ width: '68%' }}></div>
          </div>
          <p className="text-sm font-medium mb-2">ADVICES <span className=" px-34">68%</span></p>
        </div>
      </div>
      
      {/* Contact Section */}
      <div  className=' flex gap-3  mt-4 px-12 '>
        <div className=" bg-blue-50 text-blue-600 p-4 ">
        <MdOutlinePhoneInTalk />
        </div>
        <div className='w-[400px]'>
          <p className="text-sm text-gray-500">Have any question? Give us a call</p>
          <p className="text-lg font-bold">+92 666 888 0000</p>
        </div> 
      </div> 
      </div>
        </div>   
        <div>
          <Marketcards/>
          </div> 
    </div>
  );
};

export default Market;
