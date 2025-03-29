"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { CheveronRight, CalenderIcon } from '../../public/index';
import { useSelectedDate } from '@/lib/states/useSelectedDate';

function Calender() {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [daysInmonth, setDaysinMonth] = useState<Date[]>([]);
    const {events,updatetime} = useSelectedDate()
    const [startDay, setStartDay] = useState(0);


    const realDate = new Date();
    const emptyDates = new Array(startDay).fill(0)
    const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


    useEffect(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const dayDate = new Date(year, month, 1);
        const days = [];

        while (dayDate.getMonth() === month) {
            days.push(new Date(dayDate));
            dayDate.setDate(dayDate.getDate() + 1)
        };
        setDaysinMonth(days);
        setStartDay(new Date(year, month, 1).getDay());
    }, [currentDate]);



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
        <div className='w-full flex-col h-fit min-h-48  gap-y-2 flexStart'>
            <div className='w-full gap-x-1.5 flexSide'>
                <Image alt='calendericon' src={CalenderIcon} />
                <span className='text-lg text-UIslate-900 font-medium'>Date</span>
            </div>
            <div className='w-full rounded-md flex-col flexStart p-3 bg-UIslate-50 border-2 border-slate-300'>
                <div className='w-full bg-slate-50 flex justify-between items-center'>
                    <span className='text-md text-UIslate-900 font-medium'>{currentDate.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</span>
                    <div className='flexCenter gap-x-2'>
                        <Image onClick={movePrevmonth} className={`rotate-180 ${realDate.getMonth() == currentDate.getMonth() ? "opacity-50" : "opacity-100"} cursor-pointer`} alt='cheveron' src={CheveronRight} />
                        <Image onClick={moveNextmonth} className='cursor-pointer' alt='cheveron ' src={CheveronRight} />
                    </div>
                </div>
                <div className='grid w-full gap-3 cursor-pointer grid-rows-6 grid-cols-7'>
                    {weekDays.map((item) => (
                        <div className='text-md whitespace-nowrap text-UIslate-500 font-medium' key={item}>{item}</div>
                    ))}
                    {startDay && emptyDates.map((item, index) => (
                        <div className='w-full h-full' key={index}></div>
                    ))}
                    {daysInmonth.map((item, index) => (
                        <div onClick={()=>updatetime({type:"date",val:item})}  className={`text-md ${events.date==item?"bg-UIslate-700 hover:bg-none  cursor-pointer text-white":""} text-UIslate-500 hover:bg-UIslate-300  font-medium w-4 h-4 rounded p-4 flexCenter`} key={index + ""}>{item.getDate()}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calender
