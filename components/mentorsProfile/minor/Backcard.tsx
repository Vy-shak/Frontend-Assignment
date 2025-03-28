"use client"
import React from 'react'
import { Arrowback } from '../../../public/index'
import Image from 'next/image'
import { useRouter } from 'next/navigation'



function Backcard() {
    const Router = useRouter()
    return (
        <div onClick={()=>Router.back()} className='w-28 gap-x-2 cursor-pointer pt-2 flex justify-start pl-5 items-center h-full'>
        <Image alt='backarrow' src={Arrowback} />
        <span className='text-xs text-UIslate-500 font-medium'>Back</span>
    </div>
    )
}

export default Backcard
