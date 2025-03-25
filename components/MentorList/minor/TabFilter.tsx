import React from 'react'
import { CloseIcon } from '../../../public/index'
import Image from 'next/image'
import useFilterSelection from '@/lib/states/selectedFilters'

interface tab {
    name:string
}

function TabFilter({name}:tab) {
  const {removeFilter} = useFilterSelection()

  const handleRemove = () =>{
    removeFilter(name)
  }
  return (
    <div className='w-fit h-fit cursor-pointer  flexCenter  outline-1 px-4 py-2 rounded-lg outline-UIslate-300'>
      <span className='text-xs text-UIslate-700 font-semibold'>{name}</span>
      <Image onClick={handleRemove} alt='close icon' src={CloseIcon} />
    </div>
  )
}

export default TabFilter
