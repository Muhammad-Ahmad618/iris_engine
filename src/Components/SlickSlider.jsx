import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function SlickSlider() {


    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
     
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    const data = [
        { image: require("../Assets/Slider2/Survival.png"), text: "SURVIVAL" },
        { image: require("../Assets/Slider2/Horror.png"), text: "HORROR" },
        { image: require("../Assets/Slider2/Action.png"), text: "ACTION" },
        { image: require("../Assets/Slider2/Sports.png"), text: "SPORTS" },
        { image: require("../Assets/Slider2/Adventure.png"), text: "ADVENTURE" },
        { image: require("../Assets/Slider2/Simulation.png"), text: "SIMULATION" },
        { image: require("../Assets/Slider2/Open World.png"), text: "OPEN-WORLD" },
        { image: require("../Assets/Slider2/Racing.png"), text: "RACING" },
        { image: require("../Assets/Slider2/Cooperative.png"), text: "COOPERATIVE" },
        { image: require("../Assets/Slider2/Strategy.png"), text: "STRATEGY" },
        { image: require("../Assets/Slider2/Story Rich.png"), text: "STORY RICH" },
        { image: require("../Assets/Slider2/Role Playing.png"), text: "ROLE PLAYING" },
      ];

  return (
    <div className=' text-center py-10 md:py-16'>
    <Slider {...settings}>
     {data.map((category, index) =>
     (
        <div key={index} className='group relative max-w-[8rem] sm:max-w-[10rem] lg:max-w-[13rem] w-full cursor-pointer overflow-hidden'>
            <img src={category.image} alt="categoryImage" />
             <div className='absolute bottom-0 md:bottom-1 bg-black w-full p-3 rounded-b-lg transform translate-y-80 transition-transform duration-500 group-hover:translate-y-0'>
                <h4 className='text-xs sm:text-sm lg:text-base text-white font-medium'>{category.text}</h4>
             </div>
        </div>

    ))}   
    </Slider>    
    </div>
  )
}
