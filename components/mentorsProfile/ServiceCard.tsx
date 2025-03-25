import { StaticImageData } from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import Serviceblock from './minor/Servicebloc'
import { serviceTypes } from '@/app/@types/state/Service'

interface ServiceDetail {
    id: string
    type: string;
    icon: StaticImageData
    text: string
}

interface ServiceCard {
    type: serviceTypes;
    serviceHead: string;
    description: string;
    details: ServiceDetail[];
}

function ServiceCard({ serviceHead, description, details }: ServiceCard) {
    return (
        <div className='bg-white flexStart gap-y-6 flex-col  outline-1 p-3 outline-UIslate-300 rounded-lg'>
            <div className='w-full flex-col flexStart gap-y-8'>
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
            <div className='flexSide gap-x-3'>
                {details.map((item) => (
                    <Serviceblock key={item.id} text={item.text} icon={item.icon} type={item.type} />
                ))}
            </div>
        </div>
    )
}

export default ServiceCard
