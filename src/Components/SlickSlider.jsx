import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import survivalImg from "../Assets/Slider2/Survival.png";
import horrorImg from "../Assets/Slider2/Horror.png";
import actionImg from "../Assets/Slider2/Action.png";
import sportsImg from "../Assets/Slider2/Sports.png";
import adventureImg from "../Assets/Slider2/Adventure.png";
import simulationImg from "../Assets/Slider2/Simulation.png";
import openWorldImg from "../Assets/Slider2/Open World.png";
import racingImg from "../Assets/Slider2/Racing.png";
import coopImg from "../Assets/Slider2/Cooperative.png";
import strategyImg from "../Assets/Slider2/Strategy.png";
import storyRichImg from "../Assets/Slider2/Story Rich.png";
import rpgImg from "../Assets/Slider2/Role Playing.png";


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
        { image: survivalImg, text: "SURVIVAL" },
        { image: horrorImg, text: "HORROR" },
        { image: actionImg, text: "ACTION" },
        { image: sportsImg, text: "SPORTS" },
        { image: adventureImg, text: "ADVENTURE" },
        { image: simulationImg, text: "SIMULATION" },
        { image: openWorldImg, text: "OPEN-WORLD" },
        { image: racingImg, text: "RACING" },
        { image: coopImg, text: "COOPERATIVE" },
        { image: strategyImg, text: "STRATEGY" },
        { image: storyRichImg, text: "STORY RICH" },
        { image: rpgImg, text: "ROLE PLAYING" },
      ];
      

  return (
    <div className='text-center py-10 md:py-16'>
       <h2 className="text-white text-[1.8rem] font-semibold pb-14 text-left">
            Categories
      </h2>
    <Slider {...settings}>
     {data.map((category, index) =>
     (
        <div key={index} className='group relative max-w-[10rem] lg:max-w-[14rem]  w-full cursor-pointer overflow-hidden'>
            <img src={category.image} alt="categoryImage" className='transition-all duration-150 group-hover:opacity-70 ' />
             <div className='absolute bottom-0 md:bottom-1 bg-black w-full p-3 rounded-b-lg transform translate-y-80 transition-transform duration-500 group-hover:translate-y-0'>
                <h4 className='text-xs sm:text-sm lg:text-base text-white font-medium'>{category.text}</h4>
             </div>
        </div>

    ))}   
    </Slider>    
    </div>
  )
}
