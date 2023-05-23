import React, { useState } from 'react'
import{AiOutlineDown} from'react-icons/ai';
export default function Frequently () {
  const [toggole,setToggle] = useState(false);
  const [toggole1,setToggle1] = useState(false);
  const [toggole2,setToggle2] = useState(false);
  const [toggole3,setToggle3] = useState(false);
  const [toggole4,setToggle4] = useState(false);

  // const handel =()=>{
  //   setToggle(!toggole)
  // }
  return (
    <>
    <div className=' max-w-screen-xl mx-auto mt-10'>
       <h1 className='text-5xl '>
       Frequently Asked Questions

       </h1>


       <div className='mt-4'>
         <div className='flex justify-between items-center border-2 p-2 mx-5'>
         <h1 className='text-2xl  '>What categories can I sell on Daraz?</h1>
            <button onClick={()=>setToggle(!toggole)}> <AiOutlineDown/></button>
         </div>
        {
          toggole &&  <p className='border-2 mx-5 p-3 text-[15px] text-gray-600'>Opening a shop on Daraz is completely free. However, Daraz does deduct a small percentage of commission from the payment of your orders. Each product commission depends on the type of category it falls under.</p>

        }
       </div>
       <div className='mt-4'>
         <div className='flex justify-between items-center border-2 p-2 mx-5'>
         <h1 className='text-2xl  '>What categories can I sell on Daraz?</h1>
            <button onClick={()=>setToggle1(!toggole1)}> <AiOutlineDown/></button>
         </div>
        {
          toggole1 &&  <p className='border-2 mx-5 p-3 text-[15px] text-gray-600'>Opening a shop on Daraz is completely free. However, Daraz does deduct a small percentage of commission from the payment of your orders. Each product commission depends on the type of category it falls under.</p>

        }
       </div>
       <div className='mt-4'>
         <div className='flex justify-between items-center border-2 p-2 mx-5'>
         <h1 className='text-2xl  '>What categories can I sell on Daraz?</h1>
            <button onClick={()=>setToggle2(!toggole2)}> <AiOutlineDown/></button>
         </div>
        {
          toggole2 &&  <p className='border-2 mx-5 p-3 text-[15px] text-gray-600'>Opening a shop on Daraz is completely free. However, Daraz does deduct a small percentage of commission from the payment of your orders. Each product commission depends on the type of category it falls under.</p>

        }
       </div>
       <div className='mt-4'>
         <div className='flex justify-between items-center border-2 p-2 mx-5'>
         <h1 className='text-2xl  '>What categories can I sell on Daraz?</h1>
            <button onClick={()=>setToggle3(!toggole3)}> <AiOutlineDown/></button>
         </div>
        {
          toggole3 &&  <p className='border-2 mx-5 p-3 text-[15px] text-gray-600'>Opening a shop on Daraz is completely free. However, Daraz does deduct a small percentage of commission from the payment of your orders. Each product commission depends on the type of category it falls under.</p>

        }
       </div>
       <div className='mt-4'>
         <div className='flex justify-between items-center border-2 p-2 mx-5'>
         <h1 className='text-2xl  '>What categories can I sell on Daraz?</h1>
            <button onClick={()=>setToggle4(!toggole4)}> <AiOutlineDown/></button>
         </div>
        {
          toggole4 &&  <p className='border-2 mx-5 p-3 text-[15px] text-gray-600'>Opening a shop on Daraz is completely free. However, Daraz does deduct a small percentage of commission from the payment of your orders. Each product commission depends on the type of category it falls under.</p>

        }
       </div>
        
       </div>
       <div className='bg-orange-500 mt-10'>
        <div className=' max-w-screen-xl mx-auto flex justify-between items-center'>
          <h1 className='text-4xl text-white p-5 font-bold'>What are you waiting for? Start 
           <br /> selling with Daraz today.</h1>
           <button className='p-2 border-2 border-white text-white mr-3'>Get start</button>
        </div>
       </div>
       </>
  )
}
