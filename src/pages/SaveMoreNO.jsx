import React from 'react'
import Navbar from '../component/navbar/Navbar'
import SeacrchBar from '../component/search/SeacrchBar'
import slide1 from'../picture/slide1.jpg';
import slide2 from'../picture/slide2.jpg';
import slide3 from'../picture/slide3.jpg';
import slide4 from'../picture/slide4.jpg';
import slide5 from'../picture/slide5.jpg';
import slide6 from'../picture/slide6.jpg';
import slide7 from'../picture/slide7.jpg';
import slide8 from'../picture/slide8.jpg';
import slide9 from'../picture/slide9.jpg';
import slide10 from'../picture/slide10.jpg';
import Costumer from '../component/Product/Costumer';
import Daraz2023 from '../component/Product/Daraz2023';
 


export default function SaveMoreNO() {
  return (
    <div>
      <Navbar />
      <div className='mb-6'>
      <SeacrchBar />
      <div className=' max-w-screen-lg mx-auto mt-4 space-y-3 mb-6'>
        <img src={slide1} alt="" />
        <img src={slide2} alt="" />
        <img src={slide3} alt="" />
        <img src={slide4} alt="" />
        <img src={slide5} alt="" />
        <img src={slide6} alt="" />
        <img src={slide7} alt="" />
        <img src={slide8} alt="" />
        <img src={slide9} alt="" />
        <img src={slide10} alt="" />


       <div className=''>
        <a href="" className='text-blue-600 underline'>View Page in Bengali </a>
         <h1 className='text-xl text-black mt-4 mb-4 font-medium'> Daraz Online Shopping App In Bangladesh - Download Apk Now!</h1>
       <p className='text-[12px] text-gray-700'>Daraz Mobile App for Online Shopping lets 
        you buy anything from comfort of your home. Download
         Daraz App on your smartphones and browse through the 
         latest trends under a single roof. The Daraz Online App
          can easily be downloaded on your iPhone or an Android 
          Phone leaving you with the most fascinating experience.
           Daraz Shopping App allows you to get product details and 
           reviews instantly and make a smooth and secure purchase. 
           Furthermore, you get additional benefits of convenience,
            safety and product assortment with Daraz Online Shopping 
            App in Bangladesh. Never miss a deal by enabling the push 
            notifications and get access to everything, anytime and anywhere! Simply place your orders with best online shopping app and get them delivered right at your doorstep with the facility of secured payment methods and easy return facility as well. Daraz app download on your phones and avail Daraz App Discount
         with Latest Daraz App Offer, Coupon & daraz voucher code.</p>
         <h1 className='text-xl font-bold text-gray-900 mb-2 mt-4'><a href="">Is Daraz Having an App for PC or Desktop?</a></h1>
        <p className='text-[12px] text-gray-700'>No, Daraz has no .exe app for pc/desktop now. If you want to use daraz online shopping app, you can download daraz mobile app on your android/ios/huawei phone.

</p>
      <p className='mt-3'><span className='font-bold underline '> Keep Eyes On Campaigns:</span> Anniversary sale | 11.11 Sale | Fatafati Friday | 12.12 Sale </p>
      <p className='mt-3'><span className='font-bold underline '> Other Daraz Services:</span> Anniversary sale | 11.11 Sale | Fatafati Friday | 12.12 Sale </p>
      <p className='mt-3'><span className='font-bold underline '> Other Daraz Services:</span> Anniversary sale | 11.11 Sale | Fatafati Friday | 12.12 Sale </p>
     
  
       </div>

        

      </div>
      <Costumer />
      <Daraz2023 />
      </div>
    </div>
  )
}
