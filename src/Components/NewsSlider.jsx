import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function NewsSlider() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const SliderContent = [
    {
      img: require("../Assets/News Images/image 4.png"),
      description: `Anticipated Release of Grand Theft Auto VI Poised to Break Revenue Records!`,
    },
    {
      img: require("../Assets/News Images/image 5.png"),
      description: `Tis the season for festive bounties, cookies, gifts, and snowball fights, of course. Open to all!`,
    },
    {
      img: require("../Assets/News Images/image 6.png"),
      description: `Call of Duty Fails to Halt November's Decline in Video Game Sales`,
    },
    {
      img: require("../Assets/News Images/image 7.png"),
      description: `Marvel's Spider-Man 2 Developer Delays New Game+ Update`,
    },
    {
      img: require("../Assets/News Images/image 8.png"),
      description: `Valorant Mobile: Expected release date and the latest rumors`,
    },
    {
      img: require("../Assets/News Images/image 9.png"),
      description: `Assassin's Creed Mirage free download includes AC Origins DLC`,
    },
  ];

  return (
    <div className="slider-container text-center py-14 space-x-5">
      <Slider {...settings}>
        {SliderContent.map((content, index) => (
          <div
            key={index}
            className="relative hover:scale-[1.03] duration-500 hover:cursor-pointer max-w-[16rem] min-[460px]:max-w-[20rem] min-[600px]:max-w-[16rem] min-[860px]:max-w-[19rem] lg:max-w-[22rem] xl:max-w-[25rem] 2xl:max-w-[30rem] w-full "
          >
            <img src={content.img} alt="News_images" className="rounded-lg"/>
            <div className="absolute bottom-0 backdrop-blur-sm backdrop-brightness-50 min-h-[5rem] min-[860px]:min-h-[7rem] flex items-center w-full justify-center rounded-b-lg ">
            <h2 className="text-white font-normal p-2 text-xs md:font-medium min-[860px]:text-sm xl:text-base ">
              {content.description}
            </h2>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
