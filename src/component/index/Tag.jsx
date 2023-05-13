import React from 'react'
import dalivary from'../../picture/dalivary.png';
import {AiOutlineRight} from'react-icons/ai';
export default function Tag() {
  const tags =[
    {
      id:1,
      title:'Free delevary',
      Img: dalivary,
    },
    {
      id:1,
      title:'Free delevary',
      Img: dalivary
    },
    {
      id:1,
      title:'Free delevary',
      Img: dalivary
    },
    {
      id:1,
      title:'Free delevary',
      Img: dalivary
    }
  ]
  return (
    <div className=' max-w-screen-lg mx-auto mt-4 flex justify-between '>
    
      {
        tags.map((tag)=>(
          <div className='flex space-x-7 items-center bg-white w-52 px-2 py-1 rounded-full shadow-2xl'>
        <div className='flex items-center '>
          <div className='flex items-center'>
        <img src={dalivary} className='h-10' alt="" />
        <p>{tag.title}</p>
        </div>
        </div>
        <button> <AiOutlineRight /> </button>
      </div>
          
        ))
      }
      
    </div>
  )
}
