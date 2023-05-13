import React from 'react'
import google from'../../picture/google.png';
import scaner from'../../picture/scaner.jpg';
import apple from'../../picture/apple.png';


export default function Costumer() {
  return (
    <div className=' bg-indigo-900'>
      <div className=' max-w-screen-lg mx-auto pt-4 text-gray-200'>
        {/* one  */}
        <div className='flex justify-between'>
          <div className='flex space-x-14'>
         <div className=' space-y-4'>
          <h1 className='text-xl'>Customer Care</h1>
          <ul className=' space-y-0 ml-3'>
            <li><a href="">Help CenterHelp Center </a></li>
            <li><a href="">How to Buy Help </a></li>
            <li><a href="">Help CenterHelp Center </a></li>
            <li><a href="">How to Buy Help Center</a></li>
            <li><a href="">Help Center</a></li>
            <li><a href="">How to Buy</a></li>

          </ul>

          <h1 className='text-xl'>Customer Care</h1>
          <ul className=' space-y-0 ml-3'>
            <li><a href="">Help CenterHelp Center </a></li>
            <li><a href="">How to Buy Help </a></li>
            <li><a href="">Help CenterHelp Center </a></li>
             

          </ul>
          </div>
          <div className='mt-9'>
          <h1 className='text-xl'>coustore service</h1>
            <ul className='ml-4 '>
             
              <li><a href="">Customer</a></li>
              <li><a href="">Customer kdjf</a></li>
              <li><a href="">Customer</a></li>
              <li><a href="">Customerkj</a></li>
              <li><a href="">Customer</a></li>
              <li><a href="">Customer</a></li>
              <li><a href="">Customer</a></li>
              <li><a href="">Customer</a></li>
              <li><a href="">Customerkj </a></li>
              <li><a href="">Customer</a></li>
              <li><a href="">Customer</a></li>
               

            </ul>
          </div>
         </div>
         {/* tow  */}
         
        {/* three  */}
        <div className='flex flex-col justify-center items-center space-y-3 mr-10' >
          <div>
          <img src={scaner} alt=""  className='w-20'/>
          </div>
          {/* <div className='flex'>
            <img src={apple} alt="" className=''/>
            <img src={google} alt="" className=' w-28 h-auto'/>

          </div> */}
        </div>
        </div>
      </div>
    </div>
  )
}
