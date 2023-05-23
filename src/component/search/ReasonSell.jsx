import React from 'react'
import {BsShop} from'react-icons/bs';
export default function ReasonSell() {
  return (
    <div className=' max-w-screen-xl mx-auto mt-9 ' >
      <h1 className='text-5xl'>Why Sell on Daraz?</h1>
      <div className='grid md:grid-cols-3 gap-3 grid-cols-2'>
        {/* one box  */}
        <div className='flex space-x-3 mt-6 '>
          <button ><BsShop /> </button>
          <div className='flex flex-col'>
            <p className='text-5xl'>Reach</p>
            <p>Millions of customers on Daraz, Bangladesh's most visited shopping destination</p>
          </div>
        </div>

          {/* one box  */}
          <div className='flex space-x-3 mt-6'>
          <button><BsShop /> </button>
          <div className='flex flex-col'>
            <p className='text-5xl'>Reach</p>
            <p>Millions of customers on Daraz, Bangladesh's most visited shopping destination</p>
          </div>
        </div>
          {/* one box  */}
          <div className='flex space-x-3 mt-6'>
          <button><BsShop /> </button>
          <div className='flex flex-col'>
            <p className='text-5xl'>Reach</p>
            <p>Millions of customers on Daraz, Bangladesh's most visited shopping destination</p>
          </div>
        </div>
          {/* one box  */}
          <div className='flex space-x-3 mt-6'>
          <button><BsShop /> </button>
          <div className='flex flex-col'>
            <p className='text-5xl'>Reach</p>
            <p>Millions of customers on Daraz, Bangladesh's most visited shopping destination</p>
          </div>
        </div>
          {/* one box  */}
          <div className='flex space-x-3 mt-6'>
          <button><BsShop /> </button>
          <div className='flex flex-col'>
            <p className='text-5xl'>Reach</p>
            <p>Millions of customers on Daraz, Bangladesh's most visited shopping destination</p>
          </div>
        </div>
          {/* one box  */}
          <div className='flex space-x-3 mt-6'>
          <button><BsShop /> </button>
          <div className='flex flex-col'>
            <p className='text-5xl'>Reach</p>
            <p>Millions of customers on Daraz, Bangladesh's most visited shopping destination</p>
          </div>
        </div>

      </div>
    </div>
  )
}
