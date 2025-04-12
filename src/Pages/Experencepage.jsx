import React from 'react'
import logo from '../assets/logo/logo.png'

const Experencepage = () => {

    const data =[
       {
        img:'/assets/Partners/Image1.png',
       },
       {
        img:"/assets/Partners/Image2.png",

       },
       {
        img:"/assets/Partners/Image3.png",
       },
      
    ]
  return (
    <div className='bg-slate-900 text-white font-semibold '>
        <div className=''>
            <h1 className='text-4xl font-bold mb-4  flex item-center justify-center font-jost text-white'>
                REAL-WORLD EXPIRENCE
            </h1>
            <p className='text-1xl text-gray-300 flex item-center justify-center font-jost '>The best business consulting firm you can count on!</p>
        </div>
        {/* DIv for the cards */}
        <div className='flex gap-5 items-center justify-center px-15  py-15 my-2'>
            <div className='bg-black text-white font-semibold h-[296px] w-[467px] mt-10 border-rouded-md '>
                        
                    <h1 className='text-2xl font-bold mt-15 px-15  mb-6 font-jost text-white'>
                        WEALTH <br/> MANAGEMENT
                    </h1>
                    <p className='text-1xl text-gray-300 px-15 font-jost '>Read more</p>

                    {/* bucket image */}
                    <div className='flex items-right justify-end px-5 '>
                        <img src={logo} alt="" />
                    </div>
            </div>

            <div className='bg-black text-white font-semibold h-[296px] w-[467px] mt-10 border-rouded-md '>
            <h1 className='text-2xl font-bold mt-15 px-15  mb-6 font-jost text-white'>
                        WEALTH <br/> MANAGEMENT
                    </h1>
                    <p className='text-1xl text-gray-300 px-15 font-jost '>Read more</p>
                    {/* bucket image */}
                    <div className='flex items-right justify-end px-5 '>
                
                        <img src={logo} alt="" />
                    </div>

            </div>

            <div className='bg-black text-white font-semibold h-[296px] w-[467px] mt-10 border-rouded-md '>
            <h1 className='text-2xl font-bold mt-15 px-15  mb-6 font-jost text-white'>
                        WEALTH <br/> MANAGEMENT
                    </h1>
                    <p className='text-1xl text-gray-300 px-15 font-jost '>Read more</p>
                     {/* bucket image */}
                    <div className='flex items-right justify-end px-5 '>
                        <img src={logo} alt="" />
                    </div>
            </div>
        </div>
        {/* carousel  */}
        <div>
           <div className='flex gap-2 items-center justify-center px-15  py-15 my-2 font-jost'>
           <hr className='w-[500px] gray-200' />
            <h1>Meet The Parterns</h1>
            <hr className='w-[500px] gray-200' />
           </div>
        </div>
        {/* main caruosel */}
        <div>
    <div>
        {data.map((item, index) => (
            <div key={index} className='flex gap-2 items-center justify-center px-15  py-15 my-2 font-jost'>
                <img src={item.img} alt="image" className='w-[200px] h-[200px]' />
               
            </div>
        ))}
    </div>
        </div>
    </div>
  )
}

export default Experencepage