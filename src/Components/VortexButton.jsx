import React from 'react'
import { GiAtomicSlashes } from "react-icons/gi"

export default function VortexButton({label, click, type, width}) {
        
  const baseStyle = 'group flex items-center px-4 gap-x-2 py-1.5 bg-purple-600 rounded-md text-white text-[0.6rem] min-[460px]:text-xs lg:text-sm min-[460px]:rounded-lg font-semibold shadow-sm shadow-purple-400 hover:bg-purple-500 lg:px-6  ';

  const Varient = 'group flex items-center m-auto text-sm justify-center border border-white gap-x-2 py-[0.4rem] bg-transparent text-white font-medium rounded-lg font-semibold shadow-lg hover:bg-purple-600'

  const AppliedStyle = type === 'varient' ? Varient : baseStyle 

  return (
    <>
     <button className={ `${AppliedStyle} ${width}`} onClick={click}>
            <GiAtomicSlashes className="group-hover:text-white group-hover:rotate-180 ease-in duration-300 text-sm min-[460px]:text-lg lg:text-xl text-white" />
            {label}
          </button>
    </>
  )
}
