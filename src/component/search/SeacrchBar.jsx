import React from 'react'
import Logo from'../../picture/bfe8de2c-b737-42ab-b1f1-576042ab0412.png'
import {BsSearch} from'react-icons/bs';
import {AiOutlineShoppingCart} from'react-icons/ai';
import img1 from'../../picture/d998019b-9b34-44be-b747-1e6d5a892e2c.png';
export default function SeacrchBar() {
  return (
    <div className='mt-2 max-w-screen-lg mx-auto  '>
      <div className='flex justify-between items-center'>
       <div>
        <img src={Logo} alt=""  className='h-14'/>
       </div>
       <div className='flex space-x-4'>
        <div className='  border  mx-7 '>
          <div className=' bg-gray-200 px-2'>
        <input type="text" className='border-none bg-gray-300 rounded-md'  />
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
