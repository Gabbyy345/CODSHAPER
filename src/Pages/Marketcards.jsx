import React from 'react';
import CasePage from './CasePage';

const Marketcards = () => {
  return (
    <div className="bg-white text-black font-semibold mt-5 ">
      <div className="flex items-center justify-center ">
        {/* Card 1 */}
        <div className="bg-white shadow-lg w-[350px] h-[200px] p-6 flex gap-4 items-center">
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
        <div className="bg-white shadow-lg w-[350px] h-[200px] p-6 flex gap-4 items-center">
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
    
    </div>
   
  );
};

export default Marketcards;