import React from 'react'

const BussinessCards = () => {
  return (
    <div className="flex items-center justify-center w-full md:flex-row flex-col gap-4 md:gap-0">
        {/* Card 1 */}
           <div className="bg-white shadow-lg md:w-[450px] h-[142px] p-6 w-full flex gap-4 items-center font-semibold">
          <h1 className=" text-blue-600 p-4 font-bold text-xl rounded-full ">
            BUSINESS GROWTH
          </h1>
          </div>
        {/* Card 2 */}
            <div className="bg-gray-200 shadow-lg  md:w-[450px] h-[142px] p-6 w-full flex gap-4 items-center font-semibold">
            <h1 className=" text-black p-4  font-bold text-xl rounded-full">
                BUSINESS GROWTH
            </h1>
            </div>
            {/* Card 3 */}
            <div className="bg-gray-200 shadow-lg  md:w-[450px] h-[142px] p-6 w-full flex gap-4 items-center font-semibold">
            <h1 className=" text-black p-4 font-bold text-xl rounded-full">
                BUSINESS GROWTH
            </h1>
            </div>
          
    </div>
  )
}

export default BussinessCards