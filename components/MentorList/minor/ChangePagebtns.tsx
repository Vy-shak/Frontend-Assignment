import React from 'react'
import {ChevronDown} from "lucide-react"
import Image from 'next/image'

interface btns {
    type:"Back"|"Next"
}

function ChangePagebtns({type}:btns) {
  return (
    <div className='w-fit bg-white h-fit flexCenter px-3 py-1 border-2 rounded-md '>
      <span className='text-UIslate-700 text-sm font-medium'>{type}</span>
      <ChevronDown  />
    </div>
  )
}

export default ChangePagebtns
