import React from 'react'
import { GiBeastEye } from "react-icons/gi";
import { Link } from "react-router-dom";
import VortexButton from "../Components/VortexButton";

export default function Navbar({handleSignIn}) {
  return (
    <nav className="bg-[#080808] flex justify-between items-center px-7 py-4 shadow-md shadow-black">
    <div className='flex items-center gap-x-10'>   
    <div className="text-white flex items-center gap-x-2 hover:text-[#c945ce] ease-in-out duration-150 cursor-pointer">
      <GiBeastEye className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem]" />
      <h3 className="text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] font-medium">Engine</h3>
    </div>

    <ul className="text-white hidden gap-x-5 text-xs min-[790px]:flex lg:text-sm 2xl:text-base lg:gap-x-5">
      <li className="px-5 py-2  hover:text-[#c945ce] ease-in duration-200">
        <Link>Community</Link>
      </li>
      <li className="px-5 py-2  hover:text-[#c945ce] ease-in duration-200">
        <Link>Support</Link>
      </li>
      <li className="px-4 py-2  hover:text-[#c945ce] ease-in duration-200">
        <Link>About</Link>
      </li>
    </ul>
    </div> 
    <div className='flex gap-x-5 items-center'>
     <VortexButton label="Sign In" click={handleSignIn}/>
     <button className='bg-gray-600 px-5 py-2 rounded-md text-white font-medium hover:bg-gray-500 text-xs lg:text-sm 2xl:text-base  hidden sm:block'>Download</button>
    </div>
  </nav>
  )
}
