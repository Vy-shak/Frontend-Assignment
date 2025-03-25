import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../ui/button'
import { VerifyIcon } from '../../public/index'


interface mentorCard {
  profileImg: StaticImageData,
  rating: number,
  reviews: number,
  Name: string,
  role: string,
  verified: boolean,
  description: string
}

function MentorCard({ profileImg, rating, reviews, Name, role, verified, description}: mentorCard) {
  return (
    <div className='w-full flex justify-between items-stretch bg-white outline-1 outline-UIslate-300 rounded-lg px-6 py-6'>
      <div className='flex gap-x-5 justify-between items-start w-full'>
         <Image alt='profileImg' className='h-full  rounded-lg object-contain ' src={profileImg} />
        <div className='flex justify-stretch items-center w-full h-full gap-y-3  flex-col'>
          <div className='w-full flex justify-between items-start '>
            <div className='flexStart gap-y-1 flex-col w-full'>
              <div className='flexCenter gap-x-2 w-fit'>
                <span className='font-semibold text-UIslate-900 text-xl'>{Name}</span>
                {verified&&<Image alt='verify icon' src={VerifyIcon} />}
              </div>
              <span className='font-medium text-UIslate-700 text-lg'>{role}</span>
            </div>
            <Button variant={"primary"}>View profile</Button>
          </div>
          <div className='w-full h-full flex justify-stretch flex-col items-start  bg-UIslate-100 rounded-lg p-2'>
            <p className='font-semibold text-UIslate-700 text-sm'>{description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MentorCard
