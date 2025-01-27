import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Category from '../Components/SlickSlider'
import Avatar from "../Assets/avatar.png";
import PopularGames from "../Components/popularGames";
import Footer from "../Components/Footer";
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

       <div className="h-[65vh] rounded-xl bg-[url('https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7u0o3i84kn2M0zywawe5fA/1418252c9f25b687b9054e8dc8683e66/Ubidotcom-FullBleed_Ubisoft__AC-Shadows_Dec24_1920x680_desk_no-logo.jpg')] object-cover bg-no-repeat w-full bg-right">
       <div className=" flex w-full h-full items-center px-24">
        <div className="text-white max-w-[30rem] w-full">
         <h1 className="text-[2.1rem] font-bold">Assassin's Creed Shadow</h1>
         <h4 className="text-[1.2rem] text-purple-600 font-semibold py-3">Pre-Order Now and Save Big !</h4>
         <p className="leading-6">Secure your copy today and enjoy an exclusive discount. Be the first to experience the thrill!</p>   
         <button className="py-2 border-2 border-purple-600 transition-all duration-500 ease-in-out rounded-full w-[10rem] font-semibold hover:bg-purple-600 mt-8">Pre-Order Now</button>
        </div>   
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
          <h2 className="text-white text-[1.1rem] sm:text-[1.4rem] md:text-[1.8rem] font-semibold">
           Latest News
          </h2>
         
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
            className="py-2 px-4 sm:py-3 sm:px-6 rounded-3xl text-purple-800 text-[0.7rem] min-[460px]:text-xs sm:text-sm lg:text-base w-full max-w-[30rem] mr-5"
            placeholder="Email Address"
          />
          <button className="bg-white text-purple-800 py-2 sm:py-3 px-4 transition-all duration-500 ease-in-out sm:px-6 md:px-9 rounded-3xl font-medium text-[0.7rem] min-[460px]:text-xs sm:text-sm lg:text-base  w-auto hover:bg-purple-600 hover:text-white">
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
