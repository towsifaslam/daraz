import React from 'react'
import Logo from'../../picture/bfe8de2c-b737-42ab-b1f1-576042ab0412.png'
import {BsSearch} from'react-icons/bs';
import {AiOutlineShoppingCart} from'react-icons/ai';
import img1 from'../../picture/d998019b-9b34-44be-b747-1e6d5a892e2c.png';
import { Link } from 'react-router-dom';
export default function SeacrchBar() {
  return (
    <div className='mt-5 max-w-screen-lg mx-auto  '>
      <div className='flex justify-between items-center'>
       <div>
         <Link to="/">
         <img src={Logo} alt=""  className='h-14'/>
         </Link>
       
        
       
       </div>
       <div className='flex space-x-4'>
        <div className='  border  mx-7 '>
          <div className='px-2 bg-white rounded-md'>
        <input type="text" className='border-none bg-gray-300 rounded-md px-7'  />
        <button className='bg-orange-600 p-3 text-white m-2'>
          <BsSearch />
        </button>
        </div>
       
        </div>
        <button className='p-3'><AiOutlineShoppingCart size={30}/> </button>
       </div>
       <div>
        <img src={img1} alt="" className='h-14'/>
       </div>
       </div>
    </div>
  )
}
