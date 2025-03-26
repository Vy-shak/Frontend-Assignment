"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CheveronRight } from '../../public/index';

function Calender() {
    const [currentDate,setCurrentDate] = useState(new Date());
    const realDate = new Date()
    useEffect(()=>{

    },[currentDate])

    const moveNextmonth = ()=>{
        const currentMonth = currentDate.getMonth()
        setCurrentDate(new Date(currentDate.setMonth(currentMonth+1)))
    }

    const movePrevmonth = ()=>{
        const currentMonth = currentDate.getMonth();
        if (currentMonth==realDate.getMonth()) {
            console.log("you can't time travel");
            return
        }
        setCurrentDate(new Date(currentDate.setMonth(currentMonth-1)))
    }
    
  return (
    <div className='w-full bg-slate-50 flex justify-between items-center'>
      <span>{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
      <div className='flexCenter gap-x-2'>
        <Image onClick={movePrevmonth}  className={`rotate-180 ${realDate.getMonth()==currentDate.getMonth()?"opacity-50":"opacity-100"} cursor-pointer`} alt='cheveron' src={CheveronRight}/>
        <Image onClick={moveNextmonth} className='cursor-pointer' alt='cheveron ' src={CheveronRight}/>
      </div>
    </div>
  )
}

export default Calender
