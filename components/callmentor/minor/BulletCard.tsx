import { div } from 'motion/react-client'
import React from 'react'

interface bulletcard {
    bulletpoints:string[]
}

function BulletCard({bulletpoints}:bulletcard) {
  return (
    <div className='w-full flexStart gap-y-2 flex-col'>
      <span className='font-medium text-UIslate-500 text-sm'>Assist you with</span>
      <div className='w-full flexStart flex-col bg-UIblue-50 p-4 rounded-lg'>
        {bulletpoints.map((item,index)=>(
            <div key={index} className='w-full gap-x-2 flexSide'>
                <div className='w-1 h-1 rounded-full bg-UIslate-900'>
                </div>
                <span className='font-medium text-UIslate-700 text-sm'>{item}</span>
            </div>
        ))}
      </div>
    </div>
  )
}

export default BulletCard
