import React from 'react'
import { TrendingIcon,ClockIcon } from '../../../public/index'
import Image from 'next/image'

interface trending {
    text:string
    type:"trending"|"recent"
}

function Trending({text,type}:trending) {
  return (
    <div className='flexSide w-fit gap-x-2'>
      {type=="recent"&&<Image alt='trending icon' src={ClockIcon} />}
      {type=="trending"&&<Image alt='trending icon' src={TrendingIcon} />}
      <span className='text-sm text-UIslate-700 font-medium'>{text}</span>
    </div>
  )
}

export default Trending
