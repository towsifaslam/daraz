import React from 'react'
import img2 from'../../picture/chategoris2.jpg';
export default function Chategorys() {
  const catagoris =[
    {
      id:1,
      img: img2,
      details: "lens fations"

    },
    {
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },
    ,{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },
    {
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },{
      id:1,
      img: img2,
      details: "lens fations"

    },
    ,{
      id:1,
      img: img2,
      details: "lens fations"

    } 
     
  ]
  return (
    <div className=' max-w-screen-lg mx-auto mt-10 '>
      <h1 className=' text-2xl text-gray-700'>Categories</h1>
      <div className='w-full  mt-6 grid md:grid-cols-8 sm:grid-cols-4 hover:shadow-lg '> 
         { 
         catagoris.map((product)=>{
          return(
            <div className='   flex justify-center items-center flex-col border bg-white hover:scale-105 duration-300'>
          <img src={img2} alt="" />
           <p>lens fatiocn</p>
     
        </div>
            
          )
         })

         }
        

        <div>

        </div>
      </div>
    </div>
  )
}
