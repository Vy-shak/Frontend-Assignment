import Image from 'next/image'
import React from 'react'
import { StaticImageData } from 'next/image'

interface block {
    type: string,
    icon: StaticImageData,
    text: string
}

function Serviceblock({ type, icon, text }: block) {
    return (
        <div className='w-full min-w-28 gap-y-3 px-2 py-2 bg-UIindigo-50 rounded-lg flexStart flex-col'>
            <span className='text-sm whitespace-nowrap text-UIslate-500 font-medium'>{type}</span>
            <div className='flexSide w-full flex-wrap gap-x-1  h-fit'>
                <Image alt='icon' src={icon} />
                <span className='sm:text-sm text-xs  whitespace-nowrap text-UIslate-900 font-semibold'>{text}</span>
            </div>
        </div>
    )
}

export default Serviceblock
