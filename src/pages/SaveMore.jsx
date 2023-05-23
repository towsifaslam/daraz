import React from 'react'
import Navbar from '../component/navbar/Navbar'
import SeacrchBar from '../component/search/SeacrchBar'
import Slide from'../picture/thridSlid1.png';
import slide2 from'../picture/thirdSlide2.jpg';
import img1 from'../picture/arrSlide1.jpg';
import img2 from'../picture/arraySlide2.jpg';

import img3 from'../picture/arraSlide3.jpg';
import img4 from'../picture/arrSlide4.jpg';
import img5 from'../picture/arrSlide5.jpg';
import img6 from'../picture/arrSlide6.jpg';
import title from'../picture/title.png';
import arr2img from'../picture/arr2.jpg';
import write from'../picture/write.png';
import arr3Img from'../picture/arr3Img.png';
import more from'../picture/more.png';
import arra4 from'../picture/arra4.webp';
import left1 from'../picture/left1.png';
 
export default function SaveMore() {
  const arrSlide =[
    {
      id:1,
      Img: img1,
    },
    {
      id:1,
      Img: img2,
    },{
      id:1,
      Img: img3,
    },{
      id:1,
      Img: img4,
    },{
      id:1,
      Img: img5,
    },{
      id:1,
      Img: img6,
    } 
  ]
  const arr2Slide =[
    {
      id:1,
      Img: arr2img,
    },
    {
      id:1,
      Img: arr2img,
    },{
      id:1,
      Img: arr2img,
    },{
      id:1,
      Img: arr2img,
    },{
      id:1,
      Img: arr2img,
    },{
      id:1,
      Img: arr2img,
    } ,
    {
      id:1,
      Img: arr2img,
    } 
  ]
  
  const array4 = [
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
     
  ]
  const array5 = [
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    },
    {
      id:1,
      img4:arra4,
      detail: 'Donate food for 20 people',
      tk:500,
    }
  ]
  return (
    <div className='bg-gray-200'> 
      <Navbar />
      <SeacrchBar />
      <div className=' max-w-screen-lg mx-auto mt-6'>
        <div className='space-y-3'>
          <img src={Slide} alt="" />
          <img src={slide2} alt="" />

          <div className='mt-5 grid  md:grid-cols-3 gap-2 grid-cols-2 '>
            {
              arrSlide.map((arrImg)=>{
                return(
                    <div>
                      <img src={arrImg.Img} alt="" />
                    </div>
                  
                )
              })
            }
             
          </div>

           <img src={title} alt="" />
           <div className=' gap-2 flex overflow-auto'>
            {
              arr2Slide.map((img2)=>{
                return(
                  <img src={img2.Img} alt="" />
                  
                )
              })

            }
           </div>
           <img src={write} alt="" />
           <div className='grid md:grid-cols-3 gap-1 grid-cols-2'>
            <img src={arr3Img} alt="" />
            <img src={arr3Img} alt="" />
            <img src={arr3Img} alt="" />

           </div>
            <img src={more} alt="" />
            <div className='md:flex flex-cols-2 justify-center items-center'>
              <div className=' md:m-0 m-20'><img src={left1} alt="" /></div>
              <div className=' flex overflow-auto'>
                {
                  array4.map((item)=>{
                    return( 
                      <div className='   border-red-300 border-2 p-2 rounded-lg ml-1'>
                      <img src={arra4} alt="" />
                      <p className='text-gray-700 mt-2 mb-7'>Donate food for 20 people</p>
                      <h1 className='text-xl text-orange-600'>Tk 500</h1>
                    </div>
                    )
                  })
                }
                
              </div>

            </div>
            <div className='flex justify-start '>
              <div className='w-full h-full'><img src={left1} alt="" /></div>
              <div className='  '>
                {
                  array5.map((item)=>{
                    return( 
                      <div className='  border-red-300 border-2 p-2 rounded-lg ml-1'>
                      <img src={arra4} alt="" />
                      <p className='text-gray-700 mt-2 mb-7'>Donate food for 20 people</p>
                      <h1 className='text-xl text-orange-600'>Tk 500</h1>
                    </div>
                    )
                  })
                }
                
              </div>

            </div>
        </div>
      </div>
    </div>
  )
}
