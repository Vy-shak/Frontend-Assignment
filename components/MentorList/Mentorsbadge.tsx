import React from 'react'
import { Button } from '../ui/button'

function Mentorsbadge() {
  return (
    <div className='w-full h-18 flex justify-between items-center bg-UIblue-100 py-5 pl-22 pr-20'>
      <span className='text-2xl  font-medium text-UIslate-900'>Mentors</span>
      <Button  variant={"small"}    >Become the mentor</Button>
    </div>
  )
}

export default Mentorsbadge
