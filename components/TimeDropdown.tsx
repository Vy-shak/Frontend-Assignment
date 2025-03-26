import React from 'react'
import { timezones } from '@/app/utils/dummyData/time'
import { div } from 'motion/react-client'



function TimeDropdown() {
  return (
    <div className='w-full bg-white flexSide'>
      {timezones.map((item)=>(
        <div>
            <span>{item.label}</span>
        </div>
      ))}
    </div>
  )
}

export default TimeDropdown
