"use client"
import React from 'react'
import useMentorStore from '@/lib/states/useMentordata'
import { VerifyIcon } from '../../../public/index'
import Image from 'next/image'

function MentorName() {
    const {mentor} = useMentorStore()
    console.log(mentor)
  return (
    <div className='flexSide gap-x-2 w-full'>
      <span  className='text-xl text-UIslate-700 font-medium'>{mentor?.Name}</span>
      {mentor?.verified&&<Image alt='verified icon' src={VerifyIcon}/>}
    </div>
  )
}

export default MentorName
