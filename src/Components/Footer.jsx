import React from 'react'
import { GiBeastEye } from "react-icons/gi";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { BsTwitch } from "react-icons/bs";


export default function Footer() {
  return (
    <div className='bg-black py-5 md:py-10 min-h-[28rem] flex flex-col justify-between mt-14 h-full'>
        
        <div className='flex justify-around items-start gap-y-12 flex-col md:flex-row pt-0 md:pt-10 h-full'>
        <div className='pt-10 min-[408px]:space-x-0  space-x-5 md:pt-0 md:space-y-10 flex justify-between flex-wrap gap-y-5 min-[500px]:gap-y-0 items-center w-full px-5 md:px-8 lg:px-14 md:w-auto md:block xl:px-20'>

        <div className="text-white flex items-center gap-x-2 hover:text-[#c945ce] ease-in-out duration-150 cursor-pointer">
          <GiBeastEye className=" text-[2.2rem] md:text-[2.8rem] lg:text-[3.5rem]" />
          <h3 className="text-[1.4rem] lg:text-[1.8rem] font-medium">Engine</h3>
        </div>
         
        <div className='flex items-center gap-x-5 md:space-y-5 md:block'> 
        <h4 className='text-white text-sm md:text-[1.2rem] font-medium'>Follow Us</h4>
        <ul className='flex text-white gap-x-7 text-lg md:text-xl xl:text-2xl' >
            <li><FaFacebook className='cursor-pointer' /></li>
            <li><FaXTwitter className='cursor-pointer'/></li>
            <li><FaDiscord className='cursor-pointer'/></li>
            <li><BsTwitch  className='cursor-pointer'/></li>
        </ul>
        </div>
        </div>

        <div className='text-white flex justify-start gap-y-5 flex-wrap px-5 min-h-[26rem] min-[556px]:min-h-[0]  min-[408px]:justify-evenly gap-x-10 md:gap-x-8 w-full lg:gap-x-20 h-full'>

            <div className='space-y-5'>
                <h4 className=' text-base md:text-[1.2rem] lg:text-[1.4rem] font-bold text-purple-500'>Explore</h4>
                <ul className=' space-y-5 lg:space-y-6 text-[0.7rem] lg:text-sm'>
                    <li><a href='/'>Career Oppertunitie1s</a></li>
                    <li><a href='/'>Our Team</a></li>
                    <li><a href='/'>About Us</a></li>
                    <li><a href='/'>Blogs</a></li>
                </ul>
            </div>

            <div className='space-y-5'>
                <h4 className=' text-base md:text-[1.2rem] lg:text-[1.4rem]  font-bold text-purple-500'>Discover</h4>
                <ul  className='space-y-5 lg:space-y-6 text-[0.7rem] lg:text-sm'>
                    <li><a href='/'>Latest Release</a></li>
                    <li><a href='/'>Comming Soon</a></li>
                    <li><a href='/'>Best Seller</a></li>
                    <li><a href='/'>Most Popular</a></li>
                </ul>
            </div>


            <div className='space-y-5'>
                <h4 className=' text-base md:text-[1.2rem] lg:text-[1.4rem] font-bold text-purple-500'>Support</h4>
                <ul  className='space-y-5 lg:space-y-6 text-[0.7rem] lg:text-sm'>
                    <li><a href='/'>Customer Support</a></li>
                    <li><a href='/'>Contact Us</a></li>
                    <li><a href='/'>FAQs</a></li>
                </ul>
            </div>


            <div className='space-y-5'>
                <h4 className=' text-base md:text-[1.2rem] lg:text-[1.4rem]  font-bold text-purple-500'>Connect</h4>
                <ul  className='space-y-5 lg:space-y-6 text-[0.7rem] lg:text-sm'>
                    <li><a href='/'>Events and Tournaments</a></li>
                    <li><a href='/'>Community Forum</a></li>
                </ul>
            </div>

        </div>

        </div>

        <h3 className='text-white  text-center cursor-pointer hover:text-purple-500 hover:underline text-[0.5rem] sm:text-[0.6] md:text-[0.7rem] lg:text-sm'>© 2024, Iris Engine, Inc. All rights reserved.</h3>
       
      
    </div>
  )
}
