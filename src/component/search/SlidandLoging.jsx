import React from 'react'

export default function SlidandLoging() {
  return (
    <div className='bg-orange-500 w-full'>
      <div className=' lg:flex mx-auto   max-w-screen-xl   justify-between items-center pb-9'>
        <div className='mt-10 flex-col flex space-y-3  '>
           <h1 className=' text-7xl font-bold text-white'>Bangladesh's #1 <br></br> Marketplace</h1>
         <p className='text-white font-bold'>Create a Daraz seller account in 5 minutes and reach millions <br></br> of customers today!</p>
        </div>
        <div className=' flex flex-col'>
          <div className='text-white flex space-x-2 mt-5'>
            <p>Want to sell from overseas to Bangladesh?</p>
            <button className='px-2 py-1 bg-white text-orange-600 rounded-lg'>Regestion</button>
          </div>
          <div className='mt-10 mx-5 flex text-center p-3 bg-white rounded-lg flex-col'>
            <div className='flex space-y-3 flex-col justify-center items-center'>
            <h1 className=' text-center text-5xl mx-auto' >Create an Account</h1>
             <p className='text-gray-500'>Welcome! Millions of Daraz users are waiting to buy your product.</p>
             </div>
               <div className='flex p-3 flex-col text-gray-700 justify-start'>
                <label htmlFor="" className='text-start text-xl text-gray-500'>Phone</label>
                <input type="text" className='w-full border-2 p-2 rounded-md' name="" id="" />
                <label htmlFor="" className='mt-5 text-start text-xl text-gray-500'>Phone</label>
                <input type="text" className='w-full border-2 p-2 rounded-md' name="" id="" />
                 <button className='mt-6 p-2 rounded-lg text-white font-bold bg-orange-500 '>create acoutn</button>
               </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}
