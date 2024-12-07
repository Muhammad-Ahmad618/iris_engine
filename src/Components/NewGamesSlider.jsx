import React, {useState, useEffect} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoMdAddCircle } from "react-icons/io";
import axios from 'axios'

export default function NewGamesSlider() {

  const[game, setGame] = useState([])

  useEffect(() => {

    const apikey = 'a82e5a54c5794044a40b36a465e6c265'
    const url = `https://api.rawg.io/api/games?key=${apikey}&page_size=8`

    axios.get(url)
    .then(response => {

      setGame(response.data.results);
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
        <div className='pt-10 text-center'>
        <div className='text-right text-sm text-white cursor-pointer hover:underline pb-4 font-normal'>Show All</div>
        <Slider {...settings}>
        {game.map(game => (
          <div className='rounded-xl group max-w-[13rem] cursor-pointer' key={game.id}>
           <div className='relative w-full h-[16rem]'>
           <img src={game.background_image} alt={game.name} className='object-cover w-full rounded-lg transition-all duration-150 group-hover:opacity-70 h-full' />
           <IoMdAddCircle className='text-[1.8rem] absolute top-2 right-2 hidden group-hover:block hover:text-[#ffffff]'/>
           </div>
           <div className='text-white py-3 text-left'>
           <p className='text-gray-500 font-medium text-sm'>Base Game</p>
           <h3 className='text-[1.2rem] font-medium'>{game.name}</h3>
           <h2 className='text-[1.3rem] font-semibold pt-3 text-blue-500'>Free</h2> 
           </div>       
          </div>
          ))}
          </Slider>
        </div>
      
    </div>
  )
}
//"https://cdn1.epicgames.com/spt-assets/d1147ce48e1046bbb84a41081bd7af81/gran-saga-lyyyf.jpg?resize=1&w=360&h=480&quality=medium"