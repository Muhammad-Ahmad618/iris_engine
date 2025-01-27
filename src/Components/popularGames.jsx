import React from "react";
import { IoMdAddCircleOutline } from "react-icons/io";


export default function popularGames() {
  const GamesImage = [
    {
      url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1245620/header.jpg?t=1721682743",
      title: "Elden Ring",
    },
    {
      url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/730/header.jpg?t=1719426374",
      title: "Counter Strike 2",
    },
    {
      url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2074920/header.jpg?t=1722399088",
      title: "First Descendent",
    },
    {
      url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2344520/header.jpg?t=1721311623",
      title: "Diablo IV",
    },
    {
      url: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2731870/header.jpg?t=1729875676",
      title: "Ys X:Nordics",
    },

    {
      url: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/252490/header.jpg?t=1715591843",
      title: "RUST",
    },
  ];

  return (
    <div className="py-14 flex flex-wrap justify-evenly gap-x-5 gap-y-10">
      {GamesImage.map((images, index) => (
        <div
          key={index}
          className="flex flex-col flex-wrap text-white max-w-[22rem] min-[565px]:max-w-[14rem] sm:max-w-[16rem] md:max-w-[18rem] lg:max-w-[22rem] 2xl:max-w-[25rem] min-[1910px]:max-w-[30rem] cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg"
        >
          <img src={images.url} alt="Games_Image" className="rounded-t-lg" />
          <div className="px-2 sm:px-5 py-2 md:py-3 bg-custom-black-80 rounded-b-lg flex justify-between">
            <div className="space-y-2 sm:space-y-3">
            <h1 className="font-medium text-[0.8rem] md:text-base">{images.title}</h1>
            <p className="font-medium  text-sm md:text-sm lg:text-base">
              <span className="line-through text-gray-400 pr-5">$79.99</span>
              <span className="text-[#43d60d]">$49.99</span>
            </p>
            </div>
            <IoMdAddCircleOutline className="text-2xl hover:text-[#43d60d]"/>
          </div>
          
        </div>
      ))}
    </div>
  );
}
