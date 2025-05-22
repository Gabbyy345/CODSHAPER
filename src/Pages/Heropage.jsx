import React from 'react';

const Heropage = () => {
  return (
    <div className="bg-[#3b3b3b] text-white px-6 sm:px-10 md:px-16 lg:px-24 pt-24 md:pt-32 pb-20 md:pb-28">
      <div className='max-w-7xl mx-auto text-center lg:text-left'>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-white/60 mb-6 sm:mb-8">
          Welcome To CODESHAPER
        </p>
        <h1 class="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 sm:mb-8">
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
