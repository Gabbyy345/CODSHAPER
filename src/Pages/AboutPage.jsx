import React from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <div className='bg-gray-100 w-full   pt-[50px] mb-6 p-6 md:p-10 flex justify-center'>
      <div className='flex flex-col md:px-15 md:flex-row md:items-start items-center gap-10 w-full max-w-7xl'>
        {/* First card */}
        <div className='flex flex-col gap-5 text-center md:text-left'>
          <h1 className='text-3xl md:text-5xl font-bold'>
            WHAT THEY <br /> ARE TALKING <br /> ABOUT?
          </h1>
          <p className='text-sm font-bold text-gray-400 mt-2'>
            Trusted by more than 4,200 customers
          </p>
          <div className='mt-4 flex justify-center md:justify-start gap-3'>
            <button className='bg-white p-3 rounded-full text-black text-xl cursor-pointer'>
              <FaArrowLeft />
            </button>
            <button className='bg-white p-3 rounded-full text-black text-xl cursor-pointer'>
              <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Second card */}
        <div className='flex flex-col md:flex-row gap-4 mt-10 md:mt-0'>
          {/* card 1 */}
          <div className='bg-white w-full md:w-[350px] h-[auto] border-2 border-gray-200 rounded-md relative'>
            <div className='w-full h-full text-left p-6 rounded-md'>
              <p className='text-gray-400 text-sm font-semibold'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
                laudantium veritatis voluptate sapiente deleniti rem voluptatibus, a,
                quaerat dicta debitis ipsa, voluptas et expedita incidunt quia vero
                numquam suscipit accusantium.
              </p>
              <h1 className='text-sm font-bold text-blue-400 mt-4'>TODD HIGGINS</h1>
              <p className='text-gray-400 text-sm'>CUSTOMER</p>
            </div>
          </div>

          {/* card 2 */}
          <div className='bg-white w-full md:w-[350px] h-[auto] border-2 border-gray-200 rounded-md relative'>
            <div className='w-full h-full text-left p-6 rounded-md'>
              <p className='text-gray-400 text-sm font-semibold'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem
                laudantium veritatis voluptate sapiente deleniti rem voluptatibus, a,
                quaerat dicta debitis ipsa, voluptas et expedita incidunt quia vero
                numquam suscipit accusantium.
              </p>
              <h1 className='text-sm font-bold text-blue-400 mt-4'>TODD HIGGINS</h1>
              <p className='text-gray-400 text-sm'>CUSTOMER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
