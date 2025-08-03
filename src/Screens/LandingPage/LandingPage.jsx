import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Category from "../../Components/CategoriesSlider";
import News from "../../Components/VideoGamesNews";
import Avatar from "../../Assets/avatar.png";
import PopularGames from "../../Components/popularGames";
import Footer from "../../Components/Footer";
import { FaMoneyBill, FaDownload, FaTrophy } from "react-icons/fa6";
import { MdAccessAlarm } from "react-icons/md";

export default function LandingPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/SignIn");vatar
  };

  const SellingPoints = [
    {
      heading: "Competitive Prices",
      icon: <FaMoneyBill />,
      body: "Get your favorite games, offering unbeatable prices and regular discounts",
    },
    {
      heading: "Fast Downloads",
      icon: <FaDownload />,
      body: "Enjoy instant access to your favorite games with our seamless digital downloads ",
    },
    {
      heading: "Early Access",
      icon: <MdAccessAlarm />,
      body: "Be the first to experience exclusive titles and early access releases. ",
    },
    {
      heading: "Rewards",
      icon: <FaTrophy />,
      body: "Earn as you play! Join our rewards program and collect loyalty points with every purchase",
    },
  ];

  return (
    <div className="min-h-screen bg-[#121212]">
      <Navbar handleSignIn={handleSignIn} />
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-14 lg:px-28">
        {/* Cover Section */}
        <div className="flex flex-wrap items-center content-center justify-center sm:justify-between h-[90vh]">
          <div className="text-white space-y-5 ">
            <h1 className="text-[3.5rem] 2xl:text-[4rem] font-semibold bg-custom-gradient3 bg-clip-text text-transparent">
              Iris Engine
            </h1>
            <h3 className="text-[1.6rem] 2xl:text-[2rem] font-medium">
              Unleash the Gamitng Magic: Endless <br />
              Titles, One Epic Store!{" "}
            </h3>
            <p className=" lg:text-base text-wrap">
              Immerse yourself in a universe of entertainment with just a click
            </p>
            <button className="px-8 py-1.5 bg-purple-600 font-medium rounded-sm hover:bg-purple-800 ease-in duration-150 text-base">
              Explore
            </button>
          </div>

          <div className="max-w-[40%] w-full relative flex justify-center">
            <div className="absolute w-full h-full bg-custom-gradient3 rounded-full inset-0 blur-3xl"></div>
            <img
              src={Avatar}
              alt="avatar"
              className=" hidden min-[830px]:block w-[12rem] lg:w-[15rem] 2xl:w-[16rem] z-10"
            />
          </div>
        </div>

        <div className="text-center pt-36">
          <div className="pb-10 ">
            <h2 className="text-white text-[2.2rem] sm:text-[2.5rem] font-medium ">
              Featured Games
            </h2>
            <div className="bg-custom-gradient2 h-1 max-w-[22rem] w-full mx-auto rounded-full mt-2"></div>
          </div>
          <PopularGames />
        </div>

        <div className="py-10">
          <Category />
        </div>

        <div className="relative h-[65vh] rounded-xl w-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 bg-[url('https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/7u0o3i84kn2M0zywawe5fA/1418252c9f25b687b9054e8dc8683e66/Ubidotcom-FullBleed_Ubisoft__AC-Shadows_Dec24_1920x680_desk_no-logo.jpg')] bg-cover bg-right"></div>

          <div className="absolute block xl:hidden w-full inset-0 bg-black bg-opacity-70 md:bg-opacity-50"></div>

          <div className="relative flex w-full h-full items-center px-7 sm:px-14 xl:px-24">
            <div className="text-white max-w-[30rem] w-full text-center md:text-start">
              <h1 className="text-[2.1rem] font-bold">
                Assassin's Creed Shadow
              </h1>
              <h4 className="text-[1.2rem] text-white sm:text-purple-600 font-semibold py-3">
                Pre-Order Now and Save Big !
              </h4>
              <p className="leading-6">
                Secure your copy today and enjoy an exclusive discount. Be the
                first to experience the thrill!
              </p>
              <button className="py-2 border-2 border-purple-600 transition-all duration-500 ease-in-out rounded-full w-[10rem] font-semibold hover:bg-purple-600 mt-8">
                Pre-Order Now
              </button>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="relative h-auto py-16 bg-custom-gradient rounded-2xl my-20 shadow-md shadow-black px-4">
          <div className="text-center py-10 space-y-5">
            <div className="text-center">
              <h1 className="text-white text-[2rem] sm:text-[2.2rem] font-semibold">
                Why Choose Us
              </h1>
              <div className="bg-custom-gradient2 h-1 max-w-[21rem] w-full mx-auto rounded-full mt-2"></div>
            </div>
            <p className="text-white">
              From the latest AAA titles to hidden indie gems, we offer an
              unbeatable selection of games, consoles, and accessories
            </p>
          </div>

          <div className=" flex justify-evenly flex-wrap gap-x-5 gap-y-10 py-5 sm:px-5">
            {SellingPoints.map((data, index) => (
              <div
                key={index}
                className="bg-[#0f0e0e96]  min-[685px]:max-w-[16rem] h-[15rem] p-3 w-full shadow-md shadow-black rounded-xl flex flex-col items-center justify-center gap-y-4 "
              >
                <span className="text-[2.1rem] text-white w-[4rem] flex items-center justify-center h-[4rem] bg-custom-gradient2 rounded-full overflow-hidden">
                  {data.icon}
                </span>
                <h3 className="text-white text-[1.2rem] font-semibold">
                  {data.heading}
                </h3>
                <p className="text-white text-center text-sm">{data.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* News Section */}
        <div>
          <h2 className="text-white text-[1.8rem] font-semibold">
            Latest News
          </h2>

          <News />
        </div>

        {/* NewsLetter Section */}
        <div className=" flex items-center justify-center lg:justify-around h-[60vh] text-white space-y-7 md:space-y-10 bg-custom-black-80 rounded-xl my-20 px-10 py-10 ">

          <div className="space-y-7 lg:max-w-[60%] w-full text-center lg:text-start">
            <h2 className="text-[1.7rem] xl:text-[2rem] font-semibold bg-custom-gradient3 bg-clip-text text-transparent">
              Subscribe to our News Letter
            </h2>
            <p className="text-xs md:text-base leading-6">
              Level Up Your Inbox Subscribe to Our Newsletter for Exclusive Game
              Deals and Exciting Updates!
            </p>
            <input
              type="email"
              name="email"
              className="py-2 px-4 sm:py-3 sm:px-6 rounded-3xl text-purple-800 text-sm lg:text-base w-full max-w-[30rem] mr-5"
              placeholder="Email Address"
            />
            <button className="bg-white text-purple-800 py-2 sm:py-3 px-4 transition-all duration-500 ease-in-out sm:px-6 md:px-9 rounded-3xl font-medium text-sm lg:text-base  w-auto hover:bg-purple-600 hover:text-white">
              Subscribe
            </button>
          </div>

          <div className="hidden lg:block max-w-[22rem] w-full">
            <img
              src="/Spiderman2.webp"
              alt="spiderman"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
