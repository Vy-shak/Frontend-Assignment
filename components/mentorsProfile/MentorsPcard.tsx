"use client"
import React, { useEffect } from 'react'
import SessionNo from './minor/SessionNo'
import SocialHandle from './minor/SocialHandle'
import Image from 'next/image'
import { VerifyIcon } from '../../public/index'
import useMentorStore from '@/lib/states/useMentordata'
import useDataMissing from '@/app/hooks/DataMissing'


function MentorsPcard() {
    const { mentor } = useMentorStore();
    useDataMissing(mentor)

    
    return (
        <div className='w-full cursor-pointer flex justify-between items-stretch bg-white py-6'>
            <div className='flex gap-x-5 justify-between items-start w-full'>
                {mentor?.profileImg && <Image alt='profileImg' className='h-full  rounded-lg object-contain ' src={mentor.profileImg} />}
                <div className='flex justify-stretch items-center w-full h-full gap-y-3  flex-col'>
                    <div className='w-full flex justify-between items-start '>
                        <div className='flexStart gap-y-1 flex-col w-full'>
                            <div className='flex justify-between items-center w-full'>
                                <div className='flexCenter gap-x-2 w-fit'>
                                    <span className='font-semibold text-UIslate-900 text-xl'>{mentor?.Name}</span>
                                    {mentor?.verified && <Image alt='verify icon' src={VerifyIcon} />}
                                </div>
                                <SessionNo />
                            </div>
                            <div className='flex justify-between items-center w-full'>
                                <span className='font-medium text-UIslate-700 text-lg'>{mentor?.role}</span>
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
