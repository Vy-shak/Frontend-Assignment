import React from 'react'
import Image from 'next/image'
import {VerifyIcon} from "../../../public/index"

interface namerole {
    Name:string,
    role:string,
    verified:boolean
}

function NameRole({Name,role,verified}:namerole) {
  return (
    <div className='flexStart gap-y-1 pl-3 flex-col w-full'>
    <div className='flexCenter gap-x-2 w-fit'>
      <span className='font-semibold text-UIslate-900 sm:text-xl text-lg'>{Name}</span>
      {verified && <Image alt='verify icon' src={VerifyIcon} />}
    </div>
    <span className='font-medium text-UIslate-700 sm:text-lg text-sm'>{role}</span>
</div>
  )
}

export default NameRole
