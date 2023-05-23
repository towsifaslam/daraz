import React from 'react';
import food from'../picture/food.avif';
export default function PicAndVdo() {
  return (
    <div className=' max-w-screen-xl mx-auto mt-7'>
      {/* full box  */}
      <div className=' md:flex gap-2 mx-auto  '>
        {/* left  */}
        <div className='rounde-xl p-2 relative'>
          <img src={food} alt="" />
           
        </div>
        {/* righ  */}
        <div className='space-y-3'>
        <div className='flex justify-center flex-col bg-gray-500 rounded-lg p-2 '>
      <iframe
      
        width="540"
        height=""
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Embedded video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      <div className='pl-4 m-2'>
        <button className='px-3 py-2 border-2 border-orange-500 text-orange-500 font-bold'>TESTIMONY</button>
         <h1 className='text-3xl'>Iftekhar</h1>
         <p>Iftekhar’s dream of owning a fashion
           store that provides trendy clothes at affordable prices came true. With Daraz, he was able to 
          expand his market all over the country.</p>
      </div>
    </div>
    <div className='flex justify-center flex-col bg-gray-500 rounded-lg p-2'>
      <iframe
      
        width="540"
        height=""
        src="https://www.youtube.com/embed/VIDEO_ID"
        title="Embedded video"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      
      <div className='pl-4 m-2'>
        <button className='px-3 py-2 border-2 border-orange-500 text-orange-500 font-bold'>TESTIMONY</button>
         <h1 className='text-3xl'>Iftekhar</h1>
         <p>Iftekhar’s dream of owning a fashion
           store that provides trendy clothes at affordable prices came true. With Daraz, he was able to 
          expand his market all over the country.</p>
      </div>
    </div>
        </div>
      </div>
    </div>
  )
}
