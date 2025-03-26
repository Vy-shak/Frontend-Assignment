import { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Serviceblock from './minor/Servicebloc'
import Image from 'next/image'
import { serviceTypes,Servicecardtype } from '@/app/@types/state/Service'



function ServiceCard({ serviceHead, profileImg, description, details }: Servicecardtype) {
    return (
        <div className='bg-white h-fit  flexStart gap-y-6 flex-col  outline-1 p-6 outline-UIslate-300 rounded-lg'>
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
    )
}

export default ServiceCard
