import React from 'react'

export default function Head() {
  return (
    <div className=' max-w-screen-lg mx-auto mt-16'>
      <div>
        <h1 className='text-3xl text-gray-500 mb-3'>FlashSale</h1>
       <div className='flex justify-between  bg-white p-3  border-b-2 border-gray-600 items-center'>
        <div className='flex space-x-20'>
        <p className=' text-orange-600 text-xl'>
        On Sale Now
        </p>
        <div className='flex space-x-2 items-center'>
          <p>Ending in</p>
          <p className=' p-2 px-3 bg-orange-600 text-white'>10</p>
          <p className='p-2 px-3 bg-orange-600 text-white'>20</p>
          <p className='p-2 px-3 bg-orange-600 text-white'>30</p>
        </div>
        </div>
        <div><button className='bg-orange-600 text-white p-2 rounded-lg'>SHOPE MORE</button></div>
       </div>
       </div>
    </div>
  )
}
