import React from 'react'
import {FaFirstOrderAlt} from'react-icons/fa';

export default function SelfService() {
  return (
    <div className='max-w-screen-xl bg-gray-300 mx-auto  p-7 '>
      <h1 className=' text-center  font-serif text-xl  '>self Service Tool</h1>
       <div  className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 mt-5 gap-4'>
        <div className='border-2 p-10 bg-white flex flex-col justify-center items-center rounded-md'>
           <FaFirstOrderAlt />
           <p>Order Please</p>

        </div>
        <div className='border-2 p-10 bg-white flex flex-col justify-center items-center rounded-md'>
           <FaFirstOrderAlt />
           <p>Order Please</p>

        </div>
        <div className='border-2  p-10 bg-white flex flex-col justify-center items-center rounded-md'>
           <FaFirstOrderAlt />
           <p>Order Please</p>

        </div>
        <div className='border-2  p-10 bg-white flex flex-col justify-center items-center rounded-md'>
           <FaFirstOrderAlt />
           <p>Order Please</p>

        </div>
        <div className='border-2  p-10 bg-white flex flex-col justify-center items-center rounded-md'>
           <FaFirstOrderAlt />
           <p>Order Please</p>

        </div>
        <div className='border-2  p-10 bg-white flex flex-col justify-center items-center rounded-md'>
           <FaFirstOrderAlt />
           <p>Order Please</p>

        </div>
       </div>
    </div>
  )
}
