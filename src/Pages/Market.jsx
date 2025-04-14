import React from 'react'
import Logo from '../assets/logo/Rectangle.png'

const Market = () => {
  return (
    <div className='bg-white text-black font-semibold'>
        <div className='gap-2  px-15  py-15 my-2 font-jost'>
           <div>
           <img src={Logo} alt="" />
           </div>
           <div>
            <h1 className='font-jost text-3xl font-bold'>WE'RE LEADING IN THE MARKET</h1>
           </div>
        </div>
    </div>
  )
}

export default Market