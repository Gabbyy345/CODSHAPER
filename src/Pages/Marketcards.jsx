import React from 'react';


const Marketcards = () => {
  return (
   
      <div className="flex justify-center w-full md:flex-row flex-col gap-4 items-stretch md:gap-0 max-w-6xl mx-auto">
        {/* Card 1 */}
        <div className="bg-white shadow-lg md:w-[450px] h-[142px] p-6 w-full flex gap-4 items-center">
          <span className="bg-blue-50 text-blue-600 p-4 font-bold text-2xl rounded-full">
            01
          </span>
          <div>
            <h3 className="text-1xl font-bold">GET PROFESSIONAL ADVICE</h3>
            <p className="text-gray-400 text-sm">
              There are many variations of available but the <br /> majority
              have suffered alteration.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg  md:w-[450px] h-[142px] p-6 w-full flex gap-4 items-center">
          <span className="bg-blue-50 text-blue-600 p-4 font-bold text-2xl rounded-full">
            02
          </span>
          <div>
            <h3 className="text-1xl font-bold">TRUSTED & PROFESSIONAL</h3>
            <p className="text-gray-400 text-sm">
              There are many variations of available but the <br /> majority
              have suffered alteration.
            </p>
          </div>
        </div>
      </div>
    
  
   
  );
};

export default Marketcards;