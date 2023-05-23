import React from 'react'
import LogingPage from '../component/search/LogingPage'
import SlidandLoging from '../component/search/SlidandLoging'
import ReasonSell from '../component/search/ReasonSell'
import PicAndVdo from '../component/PicAndVdo'
import Simple from '../component/Simple'
import Frequently from '../component/Frequently '

export default function Protfolio() {
  return (
    <div>
      <LogingPage />
      <SlidandLoging />
      <ReasonSell />
      <PicAndVdo />
      <Simple />
      <Frequently />
    </div>
  )
}
