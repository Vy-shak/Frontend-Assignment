"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CheveronRight } from '../../public/index';
import { div } from 'motion/react-client';
import { Key } from 'lucide-react';

function Calender() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInmonth,setDaysinMonth] = useState<Date[]>([]);
    const [startDay,setStartDay] = useState(0)
    const realDate = new Date();
    const emptyDates = new Array(startDay).fill(0)
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const dayDate = new Date(year,month,1);
        const days = [];

        while(dayDate.getMonth()===month) {
            days.push(new Date(dayDate));
            dayDate.setDate(dayDate.getDate()+1)
        };
        console.log(days);
        setDaysinMonth(days);
        setStartDay(new Date(year,month,1).getDay());
    }, [currentDate]);
    console.log(startDay)




    const moveNextmonth = () => {
        const currentMonth = currentDate.getMonth()
        setCurrentDate(new Date(currentDate.setMonth(currentMonth + 1)))
    }

    const movePrevmonth = () => {
        const currentMonth = currentDate.getMonth();
        if (currentMonth == realDate.getMonth()) {
            console.log("you can't time travel");
            return
        }
        setCurrentDate(new Date(currentDate.setMonth(currentMonth - 1)))
    }

    return (
        <div className='w-full flex-col flexStart'>
            <div className='w-full bg-slate-50 flex justify-between items-center'>
                <span>{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
                <div className='flexCenter gap-x-2'>
                    <Image onClick={movePrevmonth} className={`rotate-180 ${realDate.getMonth() == currentDate.getMonth() ? "opacity-50" : "opacity-100"} cursor-pointer`} alt='cheveron' src={CheveronRight} />
                    <Image onClick={moveNextmonth} className='cursor-pointer' alt='cheveron ' src={CheveronRight} />
                </div>
            </div>
            <div className='grid gap-x-6 grid-cols-7'>
                {weekDays.map((item) => (
                    <div key={item}>{item}</div>
                ))}
                {startDay&&emptyDates.map((item,index)=>(
                    <div key={index }>0</div>
                ))}
                  {daysInmonth.map((item,index)=>(
                    <div key={index+""}>{item.getDate()}</div>
                ))}

            </div>
        </div>
    )
}

export default Calender
