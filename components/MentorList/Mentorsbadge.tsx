import React from 'react'
import { Button } from '../ui/button'

function Mentorsbadge() {
  return (
    <div className='w-full h-16 flex justify-between items-center bg-UIblue-100 px-16'>
      <span className='text-2xl  font-medium text-UIslate-900'>Mentors</span>
      <Button  variant={"small"} size={'sm'}>Become the mentor</Button>
    </div>
  )
}

export default Mentorsbadge
