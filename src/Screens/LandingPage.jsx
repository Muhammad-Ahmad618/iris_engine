import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiBeastEye } from "react-icons/gi";
import VortexButton from "../Components/VortexButton";
import Avatar from '../Assets/avatar.png'
import CustomSlider from "../Components/CustomSlider";
import SlickSlider from "../Components/SlickSlider";
import { IoLogoXbox } from "react-icons/io";
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import PopularGames from "../Components/popularGames";
import FreeGameCard from "../Components/FreeGameCard";
import NewsSlider from "../Components/NewsSlider";
import Footer from "../Components/Footer";


export default function LandingPage() {

  const navigate = useNavigate()

   const handleSignIn = ()=> {
        navigate('/SignIn')

   }
  return (
    <div className="min-h-screen bg-custom-gradient">
      <nav className="bg-[#080808] flex justify-between items-center px-7 py-4 shadow-md shadow-black">
        <div className="text-white flex items-center gap-x-2 hover:text-[#c945ce] ease-in-out duration-150 cursor-pointer">
          <GiBeastEye className="text-[2.5rem] lg:text-[3rem]" />
          <h3 className="text-[1.3rem] lg:text-[1.5rem] font-medium">Engine</h3>
        </div>

        <ul className="text-white hidden gap-x-5 text-xs min-[790px]:flex lg:text-sm font-medium lg:gap-x-10 xl:gap-x-12">
          <li className="px-5 py-2 rounded-full hover:bg-white hover:text-[#c945ce] ease-in duration-200">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5 py-2 rounded-full hover:bg-white hover:text-[#c945ce] ease-in duration-200">
            <Link>News</Link>
          </li>
          <li className="px-5 py-2 rounded-full hover:bg-white hover:text-[#c945ce] ease-in duration-200">
            <Link>Community</Link>
          </li>
          <li className="px-5 py-2 rounded-full hover:bg-white hover:text-[#c945ce] ease-in duration-200">
            <Link>Support</Link>
          </li>
          <li className="px-4 py-2 rounded-full hover:bg-white hover:text-[#c945ce] ease-in duration-200">
            <Link>About</Link>
          </li>
        </ul>

        <div>
         <VortexButton label="Sign In" click={handleSignIn}/>
        </div>
      </nav>

    <div className=" mx-8 min-[460px]:mx-12 space-y-10 md:mx-16 xl:mx-44">     
       <div className="flex flex-wrap items-center content-center justify-center sm:justify-between min-h-[23rem] sm:min-h-[25rem] md:min-h-[36rem]">
            <div className="text-white text-center space-y-5 sm:text-start">
            <h1 className=" text-[1.6rem] min-[460px]:text-[1.8rem] md:text-[2.5rem] lg:text-[3.5rem] font-medium text-purple-500">Iris Engine</h1>
            <h3 className="text-[1rem] min-[460px]:text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem]">Unleash the Gamitng Magic: Endless <br/>Titles, One Epic Store! </h3>
            <p className="text-[0.7rem] min-[460px]:text-xs md:text-sm lg:text-base text-wrap">Immerse yourself in a universe of entertainment with just a click</p>
            <button className="px-7 py-1.5 bg-purple-600 font-medium rounded-sm hover:bg-purple-800 ease-in duration-150 text-[0.6rem] min-[460px]:text-xs sm:text-sm md:text-base">
              Explore
            </button>
            </div>

            <div>
              
              <img src={Avatar} alt="avatar" className=" hidden sm:block sm:w-[9rem] md:w-[12rem] lg:w-[15rem]"/>
              
            </div>
      </div>
       
       <div className=" flex flex-col items-center max-w-[63rem] w-full m-auto py-6 min-[460px]:py-10 md:py-16">
           
           <h1 className=" text-[1.2rem] sm:text-[1.6rem] md:text-[2.3rem] text-center text-white font-medium " >Most Anticipated</h1>
          
          <CustomSlider/>

            <div className="bg-custom-black-80 mx-20 rounded-md text-white justify-between flex p-3 gap-x-6 w-full">
               <div>
                <img src='https://images7.alphacoders.com/130/1301536.jpg' alt="Tekken 8" className="hidden sm:block sm:max-w-[16rem] md:max-w-[19rem] h-full rounded-e-md"/>
               </div>
               <div className=" space-y-2 md:space-y-6 max-w-[60rem] w-full">
                <h4 className="text-xs md:text-sm lg:text-base">Get ready for the next chapter in the legendary fighting game franchise,TEKKEN 8</h4>         
                <div className="flex gap-x-5 text-[0.6rem] md:text-[0.7rem] lg:text-sm">
                  <p>Release Date:</p>
                  <p className="text-purple-600">26 January 2024</p>
                </div>
                <div className="flex gap-x-5 text-[0.6rem] md:text-[0.7rem] lg:text-sm">
                  <p>Developers:</p>
                  <p>Bandai Namco Studios.Inc</p>
                </div>
                <div className="flex justify-between flex-wrap gap-x-20 gap-y-5 text-sm lg:text-base">
                  <div className="flex gap-x-5 ">
                  <p className="text-[0.6rem] md:text-[0.7rem] lg:text-sm">Platform:</p>
                  <ul className="text-white flex gap-x-5 text-[1rem] md:text-[1.3rem]">
                    <li><IoLogoXbox/></li>
                    <li><FaSteam/></li>
                    <li><FaPlaystation/></li>
                  </ul>
                  </div>
                  <button className="bg-purple-600 w-[6rem] md:w-[8rem] py-1 min-[460px]:py-1.5 text-[0.6rem] min-[460px]:text-xs font-medium md:text-sm rounded-md self-end hover:bg-purple-800 flex items-center justify-evenly">
                  <IoCart className="text-sm md:text-[1.2rem]"/>
                  Add to Cart</button>
                </div>
                </div>
              
            </div>
       </div>

       <div>
        <h2 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-medium">Categories</h2>
        <SlickSlider/>
       </div>

       <div >
       <h2 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-medium">Most Popular</h2>
       <PopularGames/>
       </div>
      
       <div>
        <h2 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-medium">Free to Play</h2>
        <FreeGameCard/>
      </div>

      <div>
      <h2 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-medium">News</h2>
      <NewsSlider/>
      </div>

     <div className="text-center text-white space-y-7 md:space-y-10 py-10 sm:pt-14 sm:pb-20 ">
      <h2 className="text-[1.3rem] sm:text-[1.3rem] md:text-[1.7rem] xl:text-[2rem] font-semibold">Subscribe to our News Letter</h2>
      <p className="text-[0.7rem] sm:text-xs md:text-sm">Level Up Your Inbox Subscribe to Our Newsletter for Exclusive Game Deals and Exciting Updates!</p>
      <input type="email" name="email" className="p-2 sm:p-3 rounded-3xl text-purple-800 text-[0.7rem] min-[460px]:text-xs sm:text-sm lg:text-base w-full max-w-[30rem] mr-5" placeholder="Email Address"/>
      <button className="bg-white text-purple-800 py-2 sm:py-3 px-4 sm:px-6 md:px-9 rounded-3xl font-medium text-[0.7rem] min-[460px]:text-xs sm:text-sm lg:text-base  w-auto hover:bg-black">Subscribe</button>
      </div> 
      </div>
      <Footer/>
    </div>
  );
}
