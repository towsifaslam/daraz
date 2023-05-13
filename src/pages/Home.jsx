import React from 'react'
import Navbar from '../component/navbar/Navbar'
import SeacrchBar from '../component/search/SeacrchBar'
import Index from '../component/index/Index'
import Head from '../component/Product/Head'
 
import Products from '../component/Product/Products'
import Chategorys from '../component/Product/Chategorys'
import JustforYou from '../component/Product/JustforYou'
import Costumer from '../component/Product/Costumer'
import Daraz2023 from '../component/Product/Daraz2023'
 

export default function Home() {
  return (
     <div className='bg-gray-200 h-auto'>
     
      <Navbar />
      <SeacrchBar />
      <Index />
      <Head />
       <Products />
       <Chategorys />
       <JustforYou />
       <Costumer />
       <Daraz2023 />
        
     </div>
  )
}
