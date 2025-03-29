"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../ui/button'
import { VerifyIcon } from '../../public/index'
import Rating from './minor/Rating'
import NameRole from './minor/NameRole'
import Link from 'next/link'
import useMentorStore from '@/lib/states/useMentordata'

interface mentorCard {
  profileImg: StaticImageData,
  rating: number,
  reviews: number,
  Name: string,
  role: string,
  verified: boolean,
  description: string
}

function MentorCard({ profileImg, rating, reviews, Name, role, verified, description }: mentorCard) {
  const { setMentor } = useMentorStore();

  const handleClick = () => {
    setMentor({
      profileImg,
      rating,
      reviews,
      Name,
      role,
      verified,
      description
    })
  }

  return (
    <Link href={"/mentorProfile"} className='w-full'>
      <div onClick={handleClick} className='w-full cursor-pointer flex justify-between items-stretch bg-white outline-1 outline-UIslate-300 rounded-lg p-3'>
        <div className='flex gap-y-3 flex-col gap-x-5 justify-between items-start w-full'>
          <div className='flex w-full gap-x-3 justify-start items-start'>
            <div className='flexStart w-32 flex-col'>
              <Image alt='profileImg' className='h-full w-full  rounded-lg object-contain ' src={profileImg} />
              <Rating reviews={reviews} rating={rating} />
            </div>
            <NameRole verified={verified} Name={Name} role={role} />
          </div>
          <div className='w-full  h-fit overflow-hidden flex justify-stretch flex-col items-start  bg-UIslate-100 rounded-lg p-2'>
            <p className='font-semibold text-UIslate-700 text-xs'>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MentorCard
