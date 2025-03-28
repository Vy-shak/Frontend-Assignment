
import React from 'react'
import { Button } from '../ui/button'
import Serviceblock from './minor/Servicebloc'
import Image from 'next/image'
import { Servicecardtype } from '@/app/@types/state/Service'
import Link from 'next/link'


const path = {
    "1:1 Call":"/callmentor",
    "Priority DM":"/priorityDm",
    "Package":"/priorityDm",
    "Webinar":"/priorityDm",
    "Digital Product":"/priorityDm"
}



function ServiceCard({ serviceHead, profileImg, description, type, details }: Servicecardtype) {
    return (
        //@ts-ignore
        <Link href={`${path[type]}`} className='w-full flexStart'>
                <div className='bg-white cursor-pointer h-fit  flexStart gap-y-6 flex-col  outline-1 p-6 outline-UIslate-300 rounded-lg'>
            <div className='w-full flex-col flexStart gap-y-8'>
                {profileImg&&<Image className='w-full' alt='profileimg' src={profileImg}/>}
                <div className='w-full flex justify-between items-center'>
                    <div className='flexStart max-w-60'>
                    <span className='text-xl text-UIslate-700 font-semibold'>{serviceHead}</span>
                    </div>
                    <Button variant={"primary"}>View details</Button>
                </div>
                <div className='w-full flexStart'>
                    <p className='text-sm text-UIslate-700 font-semibold'>{description}</p>
                </div>
            </div>
            <div className='flexSide w-full gap-x-3'>
                {details.map((item) => (
                    <Serviceblock key={item.id} text={item.text} icon={item.icon} type={item.type} />
                ))}
            </div>
        </div>
        </Link>
    )
}

export default ServiceCard
