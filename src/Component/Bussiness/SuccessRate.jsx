import React from 'react'
import { FiCheckCircle } from "react-icons/fi";

const SuccessRate = () => {
  return (
    <div className='bg-[#FFFFF] text-white font-semibold p-12 px-4 sm:px-8 md:px-12 lg:px-20 mt-20'>
        <div className='flex flex-col  lg:flex-row'>
    {/* First box */}
      <div className='gap-4 flex flex-col w-full md:w-1/3  '>
          {/* Section 1 */}
        <div  className='flex flex-col md:flex-row gap-4 items-start'>
            <div className='bg-blue-50 text-blue-600 p-4 rounded-md'>
            <FiCheckCircle />
            </div>
            <div>
                <h1 className='text-xl font-bold text-black'>HIGHEST SUCCESS RATE</h1>
                <p className='text-gray-400 text-sm'>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                </p>
            </div>

         </div>
         {/* section 2 */}
         <div>
            <div className='flex flex-col md:flex-row gap-4 items-start'>
                <div className='bg-blue-50 text-blue-600 p-4 rounded-md'>
                <FiCheckCircle />
                </div>
                <div>
                    <h1 className='text-xl font-bold text-black'>WE BUILD EXPERIENCE</h1>
                    <p className='text-gray-400 text-sm'>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
                    </p>
                </div>

             </div>
         </div>
      </div>
        {/* Second box */}

        <div className='gap-4 flex flex-col w-full mt-3 md:w-1/3'>
        <div className='text-gray-400'>
            <p> There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
        </div>
            <div>
                <p className='text-gray-400 text-sm'><span className='text-blue-300'>-</span>if you are going to use a passage</p>
                <p className='text-gray-400 text-sm'><span className='text-blue-300' >-</span>Lorem Ipsum you need to be sure</p>
                <p className='text-gray-400 text-sm'><span className='text-blue-300' >-</span>There isn't anything embarrassing</p>
                <p className='text-gray-400 text-sm'><span className='text-blue-300' >-</span>Hidden in the middle of text</p>
            </div>
        </div>


        </div>        
    </div>
  )
}

export default SuccessRate