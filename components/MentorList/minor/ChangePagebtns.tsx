import React from 'react'
import Image from 'next/image'
import { CheveronRight } from '@/public'

interface btns {
    type:"Back"|"Next",
}

function ChangePagebtns({type}:btns) {
  return (
    <div className={`w-fit ${type=="Back"?"flex-row-reverse":"flex-row"} bg-white h-fit flexCenter px-3 py-1 border-2 rounded-md`}>
      <span className='text-UIslate-700 hidden md:flex text-sm font-medium'>{type}</span>
      {type=="Back"&&<Image className='rotate-180' alt='chevron' src={CheveronRight}/>}
      {type=="Next"&&<Image  alt='chevron' src={CheveronRight}/>}
    </div>
  )
}

export default ChangePagebtns
