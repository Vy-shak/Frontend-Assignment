import React from 'react'
import { CheveronDown } from '../../public/index'
import Image from 'next/image'
import useFilterStore from '@/lib/states/useFilterpop'

interface filtercard {
    type:string,
}

function Filtercard({type}:filtercard) {
  const  {setFilter,filterType} = useFilterStore()

  const handleClick = ()=>{
      setFilter(type)
  }

  return (
    <div onClick={handleClick} className='bg-white cursor-pointer px-3 py-1.5 outline-1 rounded-sm flexCenter w-fit h-fit gap-x-2  outline-UIslate-300'>
      <span className='text-xs text-UIslate-900 font-medium'>{type}</span>
      <Image className={`${filterType===type?"rotate-180":null}`} alt='cheveron' src={CheveronDown} />
    </div>
  )
}

export default Filtercard
