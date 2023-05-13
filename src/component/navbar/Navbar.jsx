import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import{AiOutlineBars}from 'react-icons/ai'
import{GiCancel}from'react-icons/gi'

export default function Navbar() {
  const[nav,setNav] = useState(false)
  // nav Link 
  const links = [
    {
      id: 1,
      link: "SAVE MORE ON APP",
    },
    {
      id: 2,
      link: "SELL ON DARAZ",
    },
    {
      id: 3,
      link: "protfolio",
    },
    {
      id: 4,
      link: "TRACK MY ORDER",
    },
    {
      id: 5,
      link: "LEARNING POINT TRACK'S ACCOUNT",
    },
    {
      id:5,
      link: "ভাষা"
    }
  ];
  return (
    <div className='w-full bg-white'>
    <div className=' max-w-screen-lg mx-auto '>
     <div className="flex justify-between items-center w-full   overflow-hidden ">
       <p>hell</p>
      
       <ul className=' flex text-sm  justify-between items-center'>
         {
          //  nav List 
          links.map((link)=>
          (
            <li
            key={link.id}
            className="px-4 cursor-pointer text-sm  underline capitalize   hover:scale-110 duration-200 hover:text-orange-600"
          >{link.link}  </li>
          ))
         }
       </ul>
        
      </div>
      
     
    </div>
    </div>
  )
}
