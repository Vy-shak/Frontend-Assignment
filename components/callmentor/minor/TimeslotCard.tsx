import { useSelectedDate } from '@/lib/states/useSelectedDate'
import React from 'react'

interface slot {
    time:string
}

function TimeslotCard({time}:slot) {
    const {updatetime,events} = useSelectedDate();

    const handleClick = ()=>{
        updatetime({type:"time",val:time})
    };
  return (
    <div onClick={handleClick} className={`w-full border-2 ${events.time==time?"!border-UIslate-500 ":"!border-UIslate-200"} rounded flexCenter`}>
      <span className='font-medium text-UIslate-700 py-1.5 text-xs'>{time}</span>
    </div>
  )
}

export default TimeslotCard
