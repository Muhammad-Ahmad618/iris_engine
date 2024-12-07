import { useState } from "react";
import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function CustomSlider() {
    
    const [currentIndex , setCurrentIndex] = useState(0)
     
    const CustomeSliderContent = [
         
        'https://images7.alphacoders.com/130/1301536.jpg',
        'https://static0.hardcoregamerimages.com/wordpress/wp-content/uploads/2023/03/tekken815.jpg',
        'https://gamingtrend.com/wp-content/uploads/2022/12/law.jpg',
        'https://static.bandainamcoent.eu/high/tekken/tekken-8/02-characters/new-gallery/Screenshots_V1/Panda/Panda-screenshot-2.jpg',
        'https://gamingbolt.com/wp-content/uploads/2024/01/Tekken-8-Reina.jpg'
        
     ]


    const handleNextClick = ()=>{
       
        const isLastSlide = currentIndex === CustomeSliderContent.length-1 ;
        const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
        setCurrentIndex(newIndex)
 
    }

    const handlePrevClick = () =>{
         
        const isFirstIndex = currentIndex === 0;
        const newIndex = isFirstIndex ? CustomeSliderContent.length-1 : currentIndex - 1;
        setCurrentIndex(newIndex)
    }

    const handleThunmNailClick = (index) => {
        
        setCurrentIndex(index)
    }


  return (

        <div className='flex flex-wrap md:flex-nowrap gap-x-5 pt-10 sm:pt-20 pb-0 sm:pb-4'>
           
           <div className='relative'>

            <div className='max-w-[54rem] w-full'>
            <img src={CustomeSliderContent[currentIndex]} alt={`Slide ${currentIndex}`} className='rounded-lg'/>
            </div>

            <button className='bg-[#f6f5f5b2] rounded-full p-2 absolute top-1/2 left-10 hover:bg-white'>
            <IoIosArrowBack className='text-xs sm:text-sm lg:text-xl '
            onClick={handlePrevClick} />
            </button>

            <button className='bg-[#f6f5f5b2] rounded-full p-2 absolute top-1/2 right-10 hover:bg-white'>
            <IoIosArrowForward className='text-xs sm:text-sm lg:text-xl ' 
            onClick={handleNextClick}/>
            </button>
            </div>

            <div className='hidden sm:flex flex-row justify-between pt-5 md:pt-0 md:max-w-[10rem] 2xl:pt-0 md:flex-col gap-y-0 gap-x-4 md:gap-y-2.5'>
           { CustomeSliderContent.map((image, index) => ( 
            
            <div key={index} className='max-w-[9rem] w-full' onClick={()=>handleThunmNailClick(index)}>

                <img src={image}
                alt={`Thumbnail ${index}`} 
                className={`rounded-md cursor-pointer ${currentIndex === index ? 'border-2 border-white' : ''}`}
                />
            </div>
            ))}
           </div>


        </div>
      
  )
}
