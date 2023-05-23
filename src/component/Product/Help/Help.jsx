import React from 'react'
import Navbar from '../../navbar/Navbar'
import SeacrchBar from '../../search/SeacrchBar'
import{AiOutlineSearch}from'react-icons/ai';
import SelfService from './SelfService';
import Topquestion from './Topquestion';
import Costumer from '../Costumer';
import Daraz2023 from '../Daraz2023';

export default function Help() {
  return (
    <div>
      <Navbar />
      <SeacrchBar />
      <div className='mt-auto max-w-screen-xl bg-gray-300 mx-auto rounded-md  '>
        <h1 className='text-3xl font-serif'>Help Center</h1>
         
         <div className='rounded-md bg-orange-500 flex pb-5 justify-center items-center mt-5 flex-col '>
          <h1 className='text-white text-4xl text-center  flex justify-center'>Hi,How can i we help ?</h1>
           <div className=' bg-white px-20 p-3 py-3 rounded-lg shadow-lg sm:flex '>
            <div>
            <input type="text" className='px-5 py-3 border-none' placeholder='Search for a question Like: How to Use Daraz collection Pooint ?'/>
            </div>
            <div>
            <button className='mt-2 bg-orange-500 py-3 px-5 rounded-md text-white ml-9 '>
              <AiOutlineSearch />
            </button>

            </div>
           </div>
         </div>

      </div>
      <SelfService />
      <Topquestion />
      <div className=' max-w-screen-xl bg-gray-300 mx-auto '>
       
         <SelfService />

      </div>
     
     <Costumer />
     <Daraz2023 />
      <div>

      </div>
    </div>
  )
}
