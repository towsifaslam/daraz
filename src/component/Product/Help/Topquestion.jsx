import React from 'react'

export default function Topquestion() {
  return (
    <div className='max-w-screen-xl bg-gray-300 mx-auto  p-7'>
       <h1 className=' text-center font-serif text-xl'>Top Questions</h1>
       <div className='mt-10 grid lg:grid-cols-3 md:grid-cols-2 ml-20 w-full mx-auto space-y-5  sm:grid-cols-1'>
        <div className='flex flex-col space-y-2 text-gray-500 '>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
           
        </div>
        <div className='flex flex-col space-y-2 text-gray-500'>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
           
        </div>
        <div className='flex flex-col space-y-2 text-gray-500'>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
          <a className=' hover:text-orange-500' href="">What are they Delivery Timelines ?</a>
           
        </div>
       </div>
    </div>
  )
}
