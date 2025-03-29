import React from 'react'
import { Button } from '../ui/button'

function Mentorsbadge() {
  return (
    <div className='w-full h-fit px-4 flex justify-between items-center bg-UIblue-100 py-2 '>
      <span className='text-xl  font-medium text-UIslate-900'>Mentors</span>
      <Button  variant={"small"}    >Become the mentor</Button>
    </div>
  )
}

export default Mentorsbadge
