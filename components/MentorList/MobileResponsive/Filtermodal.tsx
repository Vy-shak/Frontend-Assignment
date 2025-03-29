"use client"

import React from 'react'
import useFilterModal from '@/lib/states/useFiltermodal'
import {X } from "lucide-react"

function Filtermodal() {
    const{isOpen,setClose} = useFilterModal();


  return (
    <>
    {isOpen&&<div className='w-full px-2 z-50 fixed bottom-0'>
        <div className='w-full md:hidden   rounded-t-lg bg-white border-2 h-72'>
        <div className='w-full flex px-2 justify-between pt-2 items-center'>
            <span>FILTERS</span>
            <X onClick={()=>setClose()} />
        </div>
      </div>
        </div>}
    </>
  )
}

export default Filtermodal
