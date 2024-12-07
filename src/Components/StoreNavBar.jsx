import React, {useState} from "react";
import { LuMenu } from "react-icons/lu";
import { GiBeastEye } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { BsBellFill } from "react-icons/bs";
import { IoIosSearch } from "react-icons/io";
import { RiCoupon2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { IoLogOut } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import SideMenu from "./SideMenu";

export default function StoreNavBar() {

  const [UserMenu, ShowUserMenu] = useState(false)
  const [sideMenu, setSideMenu] = useState(false)


  const toggleSideMenu = () => {
    setSideMenu(!sideMenu)
  }

  const toggleUserMenu =() => {
    ShowUserMenu(!UserMenu)
  }

   const PopUpContent = [
     {icon: <FaUser/>, label:"SensitiveMetal99x0"},
     {icon: <RiCoupon2Fill/>, label:"Coupon"},
     {icon: <IoMdSettings/>, label:"Settings"},
     {icon: <IoLogOut/>, label:"Sign Out"},
    ]

  return (
    <div className="bg-black shadow-sm shadow-black p-4 flex items-center justify-between fixed w-full z-10">
        
      <LuMenu className="text-white text-[1.7rem] hover:text-[#c945ce] cursor-pointer" onClick={toggleSideMenu} />

      <div className="px-10 flex items-center justify-between w-full">

        <div className="text-white flex items-center gap-x-2 hover:text-[#c945ce] ease-in-out duration-150 cursor-pointer">
          <GiBeastEye className="text-[2rem] sm:text-[2.5rem]" />
          <h3 className="text-[1.2rem] sm:text-[1.3rem] font-medium">
            Engine
          </h3>
        </div>
        
        <div className="w-full flex bg-[#262626] max-w-[24rem] justify-between items-center py-2 px-2 rounded-full">
        <IoIosSearch className="text-gray-400 text-[1.2rem] hover:text-gray-800 mr-3"/>
          <input type="search" name="Search" className="max-w-[22rem] w-full bg-[#262626] text-gray-400 text-sm font-medium outline-none" placeholder="Search Store"/>
        </div>
         
        <div className="flex items-center gap-x-8 relative">
          
        <BsBellFill className="text-[1.4rem] text-white hover:text-[#c945ce]"/>  
        <FaUserCircle className="text-[1.8rem] text-white hover:text-[#c945ce] cursor-pointer" onClick={toggleUserMenu}/>

        <div className={`bg-[#262626] absolute w-[17rem] z-10 top-10 right-0 py-2 rounded-lg shadow-sm shadow-black ${UserMenu ? "block" :"hidden" } `}>
         <ul className="text-white">
            {PopUpContent.map((item,index) => (
            <li key={index} className="flex items-center gap-x-4 px-4 text-[1.3rem] rounded-lg py-4 cursor-pointer hover:bg-[#727272]">{item.icon}<p className="text-base font-medium">{item.label}</p></li>
        ))}
         </ul>

        </div>
                
        </div>

       <SideMenu SideMenu={sideMenu}/>
      </div>
    </div>
  );
}
