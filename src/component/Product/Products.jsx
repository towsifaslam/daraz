import React from 'react'
import light from'../../picture/light.jpg';
 

export default function Products() {
  const products1 = [
    {
      id:1,
      Img1 : light,
      title: `China Stylist Men's Boxer underwear For man No Ratings`,
      price: 100, 
      discount: 75,
    },
    {
      id:1,
      Img1 : light,
      title: `China Stylist Men's Boxer underwear For man No Ratings`,
      price: 100, 
      discount: 75,
    },
    {
      id:1,
      Img1 : light,
      title: `China Stylist Men's Boxer  underwear For man No Ratings`,
      price: 100, 
      discount: 75,
    },
    {
      id:1,
      Img1 : light,
      title: `China Stylist Men's Boxer  underwear For man No Ratings`,
      price: 100, 
      discount: 75,
    }, 
    {
      id:1,
      Img1 : light,
      title: `China Stylist Men's Boxer  underwear For man No Ratings`,
      price: 100, 
      discount: 75,
    },
    {
      id:1,
      Img1 : light,
      title: `China Stylist Men's Boxer  underwear For man No Ratings`,
      price: 100, 
      discount: 75,
    } 
  ]
  return (
    <div className='   max-w-screen-lg mx-auto bg-white'>
    <div className='w-full  text-center py-8 p-2' >
       <div className=" flex justify-center items-center gap-2 shadow-md  ">
             {
              products1.map((product)=>{
                return(
                  <div className=' border-2 border-gray-400 rounded-lg text-start overflow-hidden w-56 shadow-[#840c16] hover:scale-110 duration-500 '>
               
                  <img className="w-40 mx-auto" src={product.Img1} alt=" c programmimng" />
                  <div className='ml-2'>
                  <p className="my-4">{product.title}</p>
                   <p className='text-orange-600'> BD {product.price}</p>
                   <div className='flex space-x-2'>
                   <p className='line-through text-gray-400  '>{product.discount}</p>
                   <p>-{product.price}</p>
                   </div>
                   
                   </div>
                  </div>
                )
              })
             }
            </div>
    </div>
    
    </div>
  )
}
