import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import{AiOutlineBars}from 'react-icons/ai'
import{GiCancel}from'react-icons/gi'
import { Link } from 'react-router-dom';

export default function Navbar() {
  const[nav,setNav] = useState(false)
  // nav Link 
  const links = [
    {
      id: 1,
      link: "SAVE MORE ON APP",
      route: "/SaveMoreNo"
    },
    {
      id: 2,
      link: "SELL ON DARAZ",
      route: "/SaveMore"
    },
    {
      id: 3,
      link: "protfolio",
      route: "/Protfolio"


    },
    {
      id: 4,
      link: "TRACK MY ORDER",
      route: "/Track"

    },
    {
      id: 5,
      link: "LEARNING POINT TRACK'S ACCOUNT",
      route: "/Leaning"

    },
    {
      id:5,
      link: "ভাষা",
      route: "/Langugease"

    }
  ];
  return (
    <div className='w-full bg-gray-200'>
    <div className=' max-w-screen-lg mx-auto '>
     <div className="flex justify-between items-center w-full   overflow-hidden ">
       <p>hell</p>
      
       <ul className=' flex text-sm  justify-between items-center  '>
         {
          //  nav List 
          links.map((link)=>
          (
            
            <li
            key={link.id}
            className="px-4 cursor-pointer text-sm  underline capitalize   hover:scale-110 duration-200 hover:text-orange-600"
          ><Link to={link.route}>
            {link.link} 
            </Link>
             </li>
          
          ))
         }
       </ul>
        
      </div>
      
     
    </div>
    </div>
  )
}
