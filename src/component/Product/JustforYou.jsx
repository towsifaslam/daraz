import React from 'react'
import bag from'../../picture/bag.webp';
import mony from'../../picture/mony.webp';

import {AiOutlineStar} from'react-icons/ai';

export default function JustforYou() {
  const justFOrProduct = [
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },{
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },{
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },{
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },{
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },{
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    {
    
      id:1,
      details:"Stainless Steel Chronograph Watch for Men black",
      img: mony,
      price: 455,
      lower: 34555,
      discount: 35,
    },
    

  ]
  return (
    <div className=' max-w-screen-lg mx-auto mt-10 b'>
      <h1 className='text-2xl text-gray-500 mb-2'>Just For You</h1>
      <div className='grid md:grid-cols-5 grid-cols-3  space-y-2'>
        {/* jj  */}
        {
          justFOrProduct.map((product)=>{
            return(
              <div className=' w-[200px] overflow-hidden p-2 bg-white hover:scale-105 duration-300'>
              <img src={product.img} alt="" />
              <p className=' text-md'>Stainless Steel Chronograph Watch for Men black</p>
              <p className='text-xl text-orange-600'>Tk 999</p>
              <div className='flex text-gray-400'>
                <p className=' line-through'>13444</p>
                <p>-34%</p>
              </div>
              <div className='flex text-yellow-600'>
              <AiOutlineStar /> 
              <AiOutlineStar /> 
              <AiOutlineStar /> 
              <AiOutlineStar /> 
              <AiOutlineStar /> 
      
              </div>
              
             </div>
             
            )
          })
        }
     
  
      </div>
      <div className='flex justify-center items-center p-2'>
       <button className='p-2 bg-orange-600 px-4 py-2 font-medium rounded-full hover:scale-105 duration-150'>Load More</button>

      </div>
    </div>
  )
}
