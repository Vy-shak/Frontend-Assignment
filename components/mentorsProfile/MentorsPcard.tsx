"use client"
import React, { useEffect } from 'react'
import SessionNo from './minor/SessionNo'
import SocialHandle from './minor/SocialHandle'
import Image from 'next/image'
import { VerifyIcon } from '../../public/index'
import useMentorStore from '@/lib/states/useMentordata'
import Rating from '../MentorList/minor/Rating'


function MentorsPcard() {
    const { mentor } = useMentorStore();


    return (
        <div className='w-full cursor-pointer flex justify-between items-stretch bg-white py-6'>
            <div className='flex flex-col md: md:flex-row gap-y-3 gap-x-6 justify-between items-start w-full'>
                <div className='flexStart min-w-52 flex-col'>
                    {mentor?.profileImg && <Image alt='profileImg' className='h-full w-full  rounded-lg object-contain ' src={mentor.profileImg} />}
                    {mentor?.rating && mentor.reviews && <Rating reviews={mentor?.reviews} rating={mentor?.rating} />}
                </div>
                <div className='flex justify-start items-center w-full h-full gap-y-4  flex-col'>
                    <div className='w-full flex justify-between items-start '>
                        <div className='flex justify-between w-full md:flex-row  flex-col gap-y-2'>
                            <div className='flex flex-col  justify-start items-start w-fit  '>
                                <div className='flexSide gap-x-2 w-fit'>
                                    <span className='font-semibold text-UIslate-900 text-xl'>{mentor?.Name}</span>
                                    {mentor?.verified && <Image alt='verify icon' src={VerifyIcon} />}
                                </div>
                                <span className='font-medium text-UIslate-700 text-lg'>{mentor?.role}</span>
                            </div>
                            <div className='flex flex-col gap-y-3 justify-start md:items-end items-start'>
                                <SessionNo />
                                <SocialHandle />
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-full flex justify-stretch flex-col items-start  bg-UIslate-100 rounded-lg p-2'>
                        <p className='font-semibold text-UIslate-700 text-sm'>{mentor?.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MentorsPcard
