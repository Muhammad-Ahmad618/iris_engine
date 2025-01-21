import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdAddCircle } from "react-icons/io";
import axios from 'axios'

export default function NewGamesSlider() {

  const[games, setGames] = useState([])

  useEffect(() => {

    const apikey = 'a82e5a54c5794044a40b36a465e6c265'
    const API_URL = `https://api.rawg.io/api/games?key=${apikey}&dates=2024-01-01,2025-01-20&platforms=4&ordering=-added&page_size=8&exclude_additions=true`

    axios.get(API_URL)
    .then(response => {

      setGames(response.data.results);
    })
    .catch(error => {
      console.error("Error fetching data", error);
    })

  },[])
    
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
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]
      };

  return (
    <div>
        <h3 className='text-[1.8rem] text-white font-medium'>Discover Something New</h3>
        <div className='pt-8 text-center'>
        <div className='text-right text-sm text-white cursor-pointer hover:underline pb-4 font-normal'>Show All</div>
        <Slider {...settings}>
        {games.map(game => (
          <div className='rounded-xl group max-w-[15rem] cursor-pointer' key={game.id}>
           <div className='relative w-full h-[14rem]'>
           <img src={game.background_image} alt={game.name} className='object-cover w-full rounded-lg transition-all duration-150 group-hover:opacity-70 h-full' />
           <IoMdAddCircle className='text-[1.8rem] absolute top-2 right-2 hidden group-hover:block hover:text-[#ffffff]'/>
           </div>
           <div className='flex flex-col justify-between text-white py-3 text-left h-[9rem]'>
          <div className='h-[3rem]'>
           <p className='text-gray-500 font-medium text-sm'>Base Game</p>
           <h3 className='text-[1.05rem] font-medium'>{game.name}</h3>
           </div>
           <h2 className='text-[1rem] font-semibold pt-3 text-gray-300'>Free</h2> 
           </div>       
          </div>
          ))}
          </Slider>
        </div>
      
    </div>
  )
}
//"https://cdn1.epicgames.com/spt-assets/d1147ce48e1046bbb84a41081bd7af81/gran-saga-lyyyf.jpg?resize=1&w=360&h=480&quality=medium"