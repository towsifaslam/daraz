import React, { useState } from 'react'
import{FaUserFriends}from'react-icons/fa';
import { Link } from 'react-router-dom';
 

export default function Track() {
  const [open, setOpne] = useState(false)
  return (
      ( 
       <>
       <div className='w-full bg-gray-400 h-screen '>
        <div className='bg-orange-500 max-w-screen-sm mx-auto h-screen m-2 p-3 rounded-md flex justify-center items-center'>
          <div className='space-y-7 border-2 p-10 rounded-xl shadow-2xl bg-green-700'>
          <Link to="/helpCenter"> <li className='flex items-center font-semibold text-white text-lg hover:text-green-500'> <FaUserFriends /> <span className='ml-9'>Help Center </span> </li> </Link>
            <li className='flex items-center font-semibold text-white text-lg hover:text-green-500'> <FaUserFriends /> <span className='ml-9'>Chat with us</span> </li>
            <li className='flex items-center font-semibold text-white text-lg hover:text-green-500'> <FaUserFriends /> <span className='ml-9'>Order</span> </li>
            <li className='flex items-center font-semibold text-white text-lg hover:text-green-500'> <FaUserFriends /> <span className='ml-9'>Help Center </span> </li>
            <li className='flex items-center font-semibold text-white text-lg hover:text-green-500'> <FaUserFriends /> <span className='ml-9'>Help Center </span> </li>
               
          </div>
        </div>
        </div>
       </>
      
        )
    
  )
}
