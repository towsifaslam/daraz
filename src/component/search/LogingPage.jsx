import React from 'react'
import logo from'../../picture/bfe8de2c-b737-42ab-b1f1-576042ab0412.png';
import {GrLanguage} from'react-icons/gr';
import {FaFlagUsa} from'react-icons/fa';
export default function LogingPage() {
  return (
     <div className='w-full bg-gray-100'>
    <div className='py-2 space-y-2 max-w-screen-xl mx-auto  lg:flex justify-between'>
      <div className='space-x-2 flex justify-center items-center'>
        <img className='w-28' src={logo} alt="" />
        <div className='flex justify-center items-center space-x-1'>
          <GrLanguage />
          <p>English</p>
        </div>
        <div className='ml-2 flex justify-center items-center space-x-1'>
          <FaFlagUsa />
          <p>Bangladesh</p>
        </div>
      </div>
      <div className=''>
        <form action="">
          <div className='flex space-x-1 justify-center items-center '>
            <div className='flex flex-col'>
          <label htmlFor="" className='text-gray-600'>Email</label>
          <input type="text" placeholder='Email' className='p-2 rounded-md' />
          </div>
          <div className='flex flex-col'>
            <label htmlFor="" className='text-gray-600'>PassWord</label>
            <input type="password" placeholder='******' className='p-2 rounded-lg'/>
          </div>
           
          <button className=' p-2 bg-orange-600 mt-5  rounded-xl text-white '>Submit</button>
           
          </div>
          <p className='mt-2 text-center text-[12px] text-gray-600 underline'>forgot your password</p>
        </form>
      </div>
    </div>
    </div>
  )
}

