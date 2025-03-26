"use client"
import React from 'react'
import { BlueClock } from '@/public'
import TimeslotCard from './minor/TimeslotCard'
import Image from 'next/image'
import { useSelectedDate } from '@/lib/states/useSelectedDate'
import { formatDate } from '@/lib/utils'
import { timeSlots } from '@/app/utils/dummyData/time'


function Timeslot() {
    const { events } = useSelectedDate();
    const newDate = formatDate(events.date)
    console.log(events.date)
    return (
        <div className='w-full h-full cursor-pointer gap-y-2 flex-col flexStart'>
            <div className='w-full gap-x-1.5 flexSide'>
                <Image alt='calendericon' src={BlueClock} />
                <span className='text-lg text-UIslate-900 font-medium'>Date</span>
            </div>
            <div className='w-full gap-y-6 h-full rounded-lg flex-col flexStart px-6 py-3 bg-UIslate-50 border-2 border-slate-300'>
                <span className='text-md text-UIslate-900 font-medium'>{newDate}</span>
                <div className='w-full overflow-y-scroll h-72'>
                    <div className='w-full gap-x-3 py-2 px-1 gap-y-4 grid grid-cols-2'>
                        {timeSlots.map((item) => (
                            <TimeslotCard key={item.id} time={item.time} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeslot
