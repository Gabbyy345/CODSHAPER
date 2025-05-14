import React from 'react';
import CasePage from './CasePage';

const Marketcards = () => {
  return (
   
      <div className="flex items-center justify-center w-full md:flex-row flex-col gap-4 md:gap-0">
        {/* Card 1 */}
        <div className="bg-white shadow-lg md:w-[450px] h-[142px] p-6 w-full flex gap-4 items-center">
          <span className="bg-blue-50 text-blue-600 p-4 font-bold text-2xl rounded-full">
            01
          </span>
          <div>
            <h6 className="text-1xl font-bold">GET PROFESSIONAL ADVICE</h6>
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
            <h6 className="text-1xl font-bold">TRUSTED & PROFESSIONAL</h6>
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