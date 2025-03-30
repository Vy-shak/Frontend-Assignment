"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import { Button } from '../ui/button'
import { VerifyIcon } from '../../public/index'
import Rating from './minor/Rating'
import Rating2 from './minor/Rating2'
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
      <div onClick={handleClick} className='w-full z-10 cursor-pointer flex justify-between items-stretch bg-white outline-1 outline-UIslate-300 rounded-lg p-3'>
        <div className='flex gap-y-3 flex-col gap-x-5 justify-between items-start w-full'>
          <div className='flex w-full gap-x-3 justify-start items-start'>
            <div className='flexStart w-40  md:w-60 flex-col'>
              <Image alt='profileImg' className='h-full w-full md:w-60   rounded-lg object-contain ' src={profileImg} />
              <Rating reviews={reviews} rating={rating} />
            </div>
            <div className='flex gap-y-3 w-full h-full flex-col justify-start items-start'>
              <div className='w-full flex-col flex flex-start items-start'>
                <div className='flex w-full justify-between items-center'>
                  <NameRole verified={verified} Name={Name} role={role} />
                  <Button className='md:flex hidden'>View details</Button>
                </div>
                <Rating2 reviews={reviews} rating={rating} />
              </div>
              <div className='w-full md:flex hidden  h-full overflow-hidden justify-stretch flex-col items-start  bg-UIslate-100 rounded-lg p-2'>
                <p className='font-semibold text-UIslate-700 text-sm'>{description}</p>
              </div>
            </div>
          </div>
          <div className='w-full md:hidden  h-fit overflow-hidden flex justify-stretch flex-col items-start  bg-UIslate-100 rounded-lg  p-2'>
            <p className='font-semibold text-UIslate-700  text-xs'>{description}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MentorCard
