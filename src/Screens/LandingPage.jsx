import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Category from '../Components/SlickSlider'
import Avatar from "../Assets/avatar.png";
import CustomSlider from "../Components/CustomSlider";
import { IoLogoXbox } from "react-icons/io";
import { FaSteam } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa6";
import PopularGames from "../Components/popularGames";
import FreeGameCard from "../Components/FreeGameCard";
import NewsSlider from "../Components/NewsSlider";
import Footer from "../Components/Footer";
import CartBtn from "../Components/Add_to_cart_Btn";
import { FaMoneyBill,FaDownload,FaTrophy  } from "react-icons/fa6";
import { MdAccessAlarm } from "react-icons/md";




export default function LandingPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/SignIn");
  };


  const SellingPoints = [
    
    {
      heading: 'Competitive Prices',
      icon: <FaMoneyBill/>,
      body:"Get your favorite games, offering unbeatable prices and regular discounts"
    }
    ,
    {
      heading: 'Fast Downloads',
      icon: <FaDownload/>,
       body:"Enjoy instant access to your favorite games with our seamless digital downloads "
    }
    ,
    {
      heading: 'Early Access',
      icon: <MdAccessAlarm/>,
       body:"Be the first to experience exclusive titles and early access releases. "
    }
    ,
    {
      heading: 'Rewards',
      icon: <FaTrophy/>,
       body:"Earn as you play! Join our rewards program and collect loyalty points with every purchase"
    }
    ,
  ]

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar handleSignIn={handleSignIn} />
      <div className="max-w-screen-2xl mx-auto px-28">

        {/* Cover Section */}
        <div className="flex flex-wrap items-center content-center justify-center sm:justify-between min-h-[23rem] sm:min-h-[25rem] md:min-h-[36rem]">
          <div className="text-white text-center space-y-5 sm:text-start">
            <h1 className="text-[1.8rem] md:text-[2.5rem] lg:text-[3.5rem] 2xl:text-[4rem] font-semibold bg-custom-gradient3 bg-clip-text text-transparent">
              Iris Engine
            </h1>
            <h3 className="text-[1.1rem] md:text-[1.3rem] lg:text-[1.6rem] 2xl:text-[2rem] font-medium">
              Unleash the Gamitng Magic: Endless <br />
              Titles, One Epic Store!{" "}
            </h3>
            <p className="text-xs md:text-sm lg:text-base text-wrap">
              Immerse yourself in a universe of entertainment with just a click
            </p>
            <button className="px-8 py-1.5 bg-purple-600 font-medium rounded-sm hover:bg-purple-800 ease-in duration-150 text-xs sm:text-sm md:text-base">
              Explore
            </button>
          </div>

          <div className="max-w-[40%] w-full relative flex justify-center">
           <div className="absolute w-full h-full bg-custom-gradient3 rounded-full inset-0 blur-3xl"></div> 
            <img
              src={Avatar}
              alt="avatar"
              className=" hidden sm:block sm:w-[9rem] md:w-[12rem] lg:w-[15rem] 2xl:w-[16rem] z-10"
            />
          </div>
        </div>

        {/* <div className=" flex flex-col items-center sm:max-w-[90%] w-full  m-auto py-6 min-[460px]:py-10 md:py-16">
          <h1 className=" text-[1.2rem] sm:text-[1.6rem] md:text-[2.3rem] text-center text-white font-medium ">
            Most Anticipated
          </h1>

          <CustomSlider />

          <div className="bg-custom-black-80 mx-20 rounded-md text-white flex p-3 gap-x-6 w-full">
            <div className="hidden sm:block">
              <img
                src="https://images7.alphacoders.com/130/1301536.jpg"
                alt="Tekken 8"
                className="hidden sm:block sm:max-w-[16rem] h-full md:max-w-[19rem] rounded-e-md object-fit"
              />
            </div>
            <div className=" space-y-2 md:space-y-6  w-full">
              <h4 className="text-xs md:text-sm lg:text-base font-medium line-clamp-2 md:line-clamp-1">
                Get ready for the next chapter in the legendary fighting game
                franchise,TEKKEN 8
              </h4>
              <div className="flex gap-x-5 text-[0.6rem] md:text-[0.7rem] lg:text-sm">
                <p>Release Date:</p>
                <p className="text-[#43d60d] font-medium">26 January 2024</p>
              </div>
              <div className="flex gap-x-5 text-[0.6rem] md:text-[0.7rem] lg:text-sm">
                <p>Developers:</p>
                <p>Bandai Namco Studios.Inc</p>
              </div>
              <div className="flex justify-between flex-wrap gap-x-20 gap-y-5 text-sm lg:text-base">
                <div className="flex gap-x-5 ">
                  <p className="text-[0.6rem] md:text-[0.7rem] lg:text-sm">
                    Platform:
                  </p>
                  <ul className="text-white flex gap-x-5 text-[1rem] md:text-[1.2rem]">
                    <li>
                      <IoLogoXbox />
                    </li>
                    <li>
                      <FaSteam />
                    </li>
                    <li>
                      <FaPlaystation />
                    </li>
                  </ul>
                </div>
                <CartBtn/>
              </div>
            </div>
          </div>
        </div> */}

        <div className="text-center pt-36">
          <div className="pb-10 ">
          <h2 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[2.5rem] font-medium ">
            Featured Games
          </h2>
          <div className="bg-custom-gradient2 h-1 w-[22rem] mx-auto rounded-full mt-2"></div>
          </div>
          <PopularGames />
        </div>
        
        <div className="py-10">
        <Category/>
        </div>

       <div className="h-[70vh]">

        <div>
         
          
        </div>

        <div>
          
          
        </div>    
      
      </div>  

     {/* Why Choose Us */}
      <div className="h-[72vh] bg-custom-gradient rounded-2xl my-20 shadow-md shadow-black">
        
        <div className="text-center py-10 space-y-5">
        <div className="text-center">    
        <h1 className="text-white text-[2.2rem] font-semibold">Why Choose Us</h1>
        <div className="bg-custom-gradient2 h-1 w-[21rem] mx-auto rounded-full mt-2"></div>
        </div>
        <p className="text-white">From the latest AAA titles to hidden indie gems, we offer an unbeatable selection of games, consoles, and accessories</p>
        </div>

        <div className=" flex justify-evenly py-5">
       {SellingPoints.map((data,index) => (
          <div key={index} className="bg-[#0f0e0e96] max-w-[16rem] h-[15rem] p-3 w-full shadow-md shadow-black rounded-xl flex flex-col items-center justify-center gap-y-4 ">
            <span className="text-[2.1rem] text-white w-[4rem] flex items-center justify-center h-[4rem] bg-custom-gradient2 rounded-full overflow-hidden">{data.icon}</span>
            <h3 className="text-white text-[1.2rem] font-semibold">{data.heading}</h3>
            <p className="text-white text-center text-sm">{data.body}</p>
          </div>
         ))}
        </div>

      </div>

 
 {/* News Section */}
        <div>
          <h2 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-medium">
            News
          </h2>
          <NewsSlider />
        </div>

        <div className=" flex items-center justify-around text-white space-y-7 md:space-y-10 bg-custom-black-80 rounded-xl my-20">
           
          <div className="space-y-7"> 
          <h2 className="text-[1.3rem] sm:text-[1.3rem] md:text-[1.7rem] xl:text-[2rem] font-semibold bg-custom-gradient3 bg-clip-text text-transparent">
            Subscribe to our News Letter
          </h2>
          <p className="text-[0.7rem] sm:text-xs md:text-base">
            Level Up Your Inbox Subscribe to Our Newsletter for Exclusive Game
            Deals and Exciting Updates!
          </p>
          <input
            type="email"
            name="email"
            className="p-2 sm:p-3 rounded-3xl text-purple-800 text-[0.7rem] min-[460px]:text-xs sm:text-sm lg:text-base w-full max-w-[30rem] mr-5"
            placeholder="Email Address"
          />
          <button className="bg-white text-purple-800 py-2 sm:py-3 px-4 sm:px-6 md:px-9 rounded-3xl font-medium text-[0.7rem] min-[460px]:text-xs sm:text-sm lg:text-base  w-auto hover:bg-black hover:text-white">
            Subscribe
          </button>
          </div>
         
          <div className="max-w-[22rem]">
          <img src="/Spiderman2.png" alt="spiderman" className="w-full h-full object-cover"/>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
