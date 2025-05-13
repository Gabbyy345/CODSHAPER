import React from 'react'
import { FaCarRear } from "react-icons/fa6";

const CasePage = () => {
  return (
    <div className='bg-gray-100 max-w-full'>
      <div className='flex flex-col items-center justify-center  gap-4 py-20'>
        <h1 className='font-bold text-5xl'>NEW CASE STUDIES</h1>
        <p className='text-gray-400 font-bold'>we help our client review there business</p>
      </div>
      <div className='px-12 py-15 flex gap-3 items-center justify-center '>
        {/* {card1} */}
        <div className=' transiction-transform duration-300 ease-in-out cursor-pointer bg-gray-400 w-[350px] h-[350px] border-2 border-gray-200 rounded-md px-10 py-45 '>
        <FaCarRear  className='text-4xl text-white '/>
        <p className=' text-white font-semibold'>THOUGHT LEADERSHIP</p>
        <span className='text-white font-bold text-3xl'>BUSSINESS <br />GROWTH</span>
        </div>
        {/* {card2} */}
        <div className='bg-gray-400 w-[350px] h-[350px] border-2 border-gray-200 rounded-md px-10 py-45 '>
        <FaCarRear  className='text-4xl text-white '/>
        <p className=' text-white font-semibold'>THOUGHT LEADERSHIP</p>
        <span className='text-white font-bold text-3xl'>BUSSINESS <br />GROWTH</span>
        </div>
        {/* card3 */}
        <div className='bg-gray-400 w-[350px] h-[350px] border-2 border-gray-200 rounded-md px-10 py-45  '>
        <div className=' '>
        <FaCarRear  className='text-4xl text-white '/>
        <p className=' text-white font-semibold'>THOUGHT LEADERSHIP</p>
        <span className='text-white font-bold text-3xl'>BUSSINESS <br />GROWTH</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CasePage
