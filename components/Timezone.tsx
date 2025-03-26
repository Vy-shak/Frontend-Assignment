"use client"

import React, { useEffect } from 'react'
import { CheveronDown } from '../public/index'
import Image from 'next/image'
import TimeDropdown from './TimeDropdown'
import { useState } from 'react'

function Timezone() {
    const [selectedZone,setselectedZone] = useState<string>("(GMT + 5:30) Chennai, Kolkata, Mumbai, New Delhi(IST)")
    const [isOpen,setIsOpen] = useState(false);
    return (
        <section className='w-full flex-col flexStart'>
            <div onClick={()=>setIsOpen((prev)=>!prev)} className='w-full flex h-12 justify-between items-center rounded-lg px-3 bg-white border-2 border-UIslate-300'>
                <span>{selectedZone}</span>
                <Image alt='cheveron down' src={CheveronDown} />
            </div>
            {<TimeDropdown setOpen={setIsOpen} setterfn={setselectedZone} />}
        </section>
    )
}

export default Timezone
