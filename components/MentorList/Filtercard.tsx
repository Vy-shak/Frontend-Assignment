import React from 'react'
import { CheveronDown } from '../../public/index'
import Image from 'next/image'

interface filtercard {
    type:string,
}

function Filtercard({type}:filtercard) {
  return (
    <div className='bg-white cursor-pointer px-3 py-1.5 outline-1 rounded-sm flexCenter w-fit h-fit gap-x-2  outline-UIslate-300'>
      <span className='text-xs text-UIslate-900 font-medium'>{type}</span>
      <Image alt='cheveron' src={CheveronDown} />
    </div>
  )
}

export default Filtercard
