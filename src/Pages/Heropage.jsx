import React from 'react';

const Heropage = () => {
  return (
    <div>
      <div className="bg-gray-500 text-white font-semibold h-screen font-jost px-4 sm:px-8 md:px-12 lg:px-20">
        <p className="text-lg sm:text-xl mb-4 mt-4 my-2 text-center sm:text-left">
          Welcome To CODESHAPER
        </p>
        <h1 className="text-4xl sm:text-7xl md:text-6xl lg:text-7xl font-bold mb-4 flex flex-col sm:flex-row py-10 my-2 text-center sm:text-left">
          CONSULTING <br className="hidden sm:block" /> FOR EVERY <br className="hidden sm:block" /> BUSINESS
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start justify-center sm:justify-start my-2">
          <button className="bg-blue-600 text-white p-4 rounded-md hover:bg-blue-700 transition">
            Discover More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
