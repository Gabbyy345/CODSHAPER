import React from 'react'
import Image1 from '../assets/Partners/Image1.png'
import Image2 from '../assets/Partners/Image2.png'
import Image3 from '../assets/Partners/Image3.png'
import Image4 from '../assets/logo/Navlogo.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
    
    const data =[
        { img:Image1 },
        { img:Image2 },
        { img:Image3  },
        {img:Image4},
       
     ]

     const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    //   responsive
    //  const settings = {
    //     dots: true,
    //     infinite: false,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     initialSlide: 0,
    //     responsive: [
    //       {
    //         breakpoint: 1024,
    //         settings: {
    //           slidesToShow: 4,
    //           slidesToScroll: 4,
    //           infinite: true,
    //           dots: true
    //         }
    //       },
    //       {
    //         breakpoint: 600,
    //         settings: {
    //           slidesToShow: 3,
    //           slidesToScroll: 3,
    //           initialSlide: 3
    //         }
    //       },
    //       {
    //         breakpoint: 480,
    //         settings: {
    //           slidesToShow: 2,
    //           slidesToScroll: 2
    //         }
    //       }
    //     ]
    //   };
    // fixed
    //  const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 3,
    //     slidesToScroll: 3
    //   };
  return (
   <div >

 <Slider {...settings}>
        {data.map((item, index) => (
            <div key={index} className=' px-15  py-15 my-2 font-jost'>
                <img src={item.img} alt={`Carousel item $ {index + 1}`} className=' w-[100px] h-[100px]' />   
                </div>
                   ))}
        
 </Slider>
   </div>
  )
}

export default Carousel