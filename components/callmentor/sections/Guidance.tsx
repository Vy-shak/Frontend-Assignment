import React from 'react'
import { guidance } from '@/app/@types/state/call'
import BulletCard from '../minor/BulletCard'
import Serviceblock from '@/components/mentorsProfile/minor/Servicebloc'

function Guidance({ subHeading, serviceType, bulletpoints, details }: guidance) {
    return (
        <div className='w-full shadow p-3 flexStart flex-col  bg-white border-2 rounded-xl border-slate-300'>
            <div className='w-full flex-col flexStart gap-y-4'>
                <span className='text-lg  w-f whitespace-nowrap text-UIslate-700 font-semibold'>{serviceType}</span>
                <p className='text-sm font-medium text-UIslate-500'>{subHeading}</p>
                <BulletCard  bulletpoints={bulletpoints} />
                <div className='w-full sm:flex-row sm:gap-x-3 flex-col gap-y-2 flexSide'>
                    {details.map((item) => (
                        <Serviceblock key={item.id} icon={item.icon} text={item.text} type={item.type} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Guidance
