import NameRole from '../MentorList/minor/NameRole'
import { StaticImageData } from 'next/image'
import { CheveronRight, VerifyIcon } from '../../public/index'
import Image from 'next/image'
import React from 'react'
import NotificationIcon from './NotificationIcon'

interface chatbox {
    Profile: StaticImageData,
    Name: string,
    role: string,
    verified: boolean,
    notifications: number,
    Lastmessage: string
}

function Chatbox({ Profile, Name,  verified, notifications, Lastmessage }: chatbox) {
    return (
        <div className='w-full cursor-pointer border-2 flex rounded-md p-2 justify-between bg-white  items-center border-rounded'>
            <div className='w-fit flexStart gap-x-3'>
                <Image className='w-16 rounded' alt='profile' src={Profile} />
                <div className='flexStart flex-col'>
                    <div className='flexCenter gap-x-2 w-fit'>
                        <span className='font-semibold text-UIslate-700 sm:text-lg text-sm'>{Name}</span>
                        {verified && <Image alt='verify icon' src={VerifyIcon} />}
                    </div>
                    <span className={`${notifications?' text-UIslate-900':"text-UIslate-500"} text-xs font-medium`}>{Lastmessage}</span>
                </div>
            </div>
            <div className='w-fit h-full flex flex-col justify-between items-center'>
                {notifications?<NotificationIcon count={notifications} />:null}
                <Image alt='chevronRight' src={CheveronRight} />
            </div>
        </div>
    )
}

export default Chatbox
