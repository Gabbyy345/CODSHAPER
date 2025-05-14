import React from 'react'
import { FaCarRear } from "react-icons/fa6";

const CasePage = () => {
  return (
    <div className='bg-gray-100 max-w-full pt-[50px]'>
      {/* Header */}
      <div className='flex flex-col items-center justify-center gap-4 py-20 px-4'>
        <h1 className='font-bold text-4xl md:text-5xl'>NEW CASE STUDIES</h1>
        <p className='text-gray-400 font-bold text-sm md:text-base'>
          We help our clients review their business
        </p>
      </div>

      {/* Cards Section */}
      <div className='flex flex-col md:flex-row gap-6 md:gap-3 items-center justify-center px-6 md:px-12 py-10'>

        {/* Card 1 */}
        <div className='transition-transform duration-300 ease-in-out cursor-pointer bg-gray-400 md:w-[350px] w-full  h-[350px] border-2 border-gray-200 rounded-md px-10 py-45'>
          <FaCarRear className='text-4xl text-white' />
          <p className='text-white font-semibold'>THOUGHT LEADERSHIP</p>
          <span className='text-white font-bold text-3xl'>BUSINESS <br />GROWTH</span>
        </div>

        {/* Card 2 */}
        <div className='bg-gray-400 md:w-[350px] w-full  h-[350px] border-2 border-gray-200 rounded-md px-10 py-45 '>
          <FaCarRear className='text-4xl text-white' />
          <p className='text-white font-semibold'>THOUGHT LEADERSHIP</p>
          <span className='text-white font-bold text-3xl'>BUSINESS <br />GROWTH</span>
        </div>

        {/* Card 3 with overlay */}
        <div className='bg-gray-400  md:w-[350px] w-full  h-[350px] border-2 px-10 py-45 border-gray-200 rounded-md relative overflow-hidden'>
          <div className='bg-blue-500  md:w-[300px] w-full h-[178px] text-left p-6 rounded-md absolute bottom-0 left-0 flex flex-col justify-between'>
            <FaCarRear className='text-4xl text-white font-semibold' />
            <p className='text-white font-semibold'>THOUGHT LEADERSHIP</p>
            <span className='text-white font-bold text-3xl'>BUSINESS <br />GROWTH</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CasePage;
