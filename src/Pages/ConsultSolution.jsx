import React from 'react'
import Solution from "../assets/logo/Solution.png"
import BussinessCards from '../Component/Bussiness/BussinessCards'

const ConsultSolution = () => {
  return (
    <div className='bg-[#07122D] text-white font-semibold p-12 px-4 sm:px-8 md:px-12 lg:px-20 relative'>
                <div className='flex md:flex-row flex-col w-full items-center gap-4 py-20 px-4 '>
                    {/* card1 */}
                  <div className='flex flex-col items-center justify-center gap-4  md:border-r border-white/13 pr-20 mr-12'>
                      <div className='bg-black p-12 rounded-md'>
                        <img src={Solution} alt="" />       
                    </div>
                       <h1 className='text-4xl font-bold'>420</h1>
                        <p className='text-sm'>CONSULTING SOLUTIONS</p>
                  </div>

                    {/* card2 */}
                  <div className='flex flex-col items-center justify-center gap-4 border-r border-white/20 pr-20 mr-12'>
                      <div className='bg-black p-12 rounded-md'>
                        <img src={Solution} alt="" />
                    </div>
                      <h1 className='text-4xl font-bold'>420</h1>
                        <p className='text-sm'>CONSULTING SOLUTIONS</p>
                  </div>

                    {/* card 3 */}

                    <div className='flex flex-col items-center justify-center gap-4 border-r border-white/20 pr-20 mr-12'>
                        <div className='bg-black p-12 rounded-md'>
                         <img src={Solution} alt="" />
                    </div>
                             <h1 className='text-4xl font-bold'>420</h1>
                        <p className='text-sm'>CONSULTING SOLUTIONS</p>
                    </div>

                    {/* card 4 */}
                   <div className='flex flex-col items-center justify-center gap-4 ' > 
                     <div className='bg-black p-12 rounded-md'>
                            <img src={Solution} alt="" />
                    </div>
                        <h1 className='text-4xl font-bold'>420</h1>
                        <p className='text-sm'>CONSULTING SOLUTIONS</p>
                   </div>
             </div>
             <div className=' md:absolute -bottom-20 left-0 w-full flex items-center justify-center md:px-12 lg:px-20 '>    
                <BussinessCards/>
             </div>
    </div>
  )
}

export default ConsultSolution