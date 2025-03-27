import React from 'react'
import { Arrowback } from '../../../public/index'
import Image from 'next/image'
import Link from 'next/link'

interface page {
    page:"profile" |"call"|"dm"
}



function Backcard() {
    return (
        <Link href={"/mentorProfile"} className='w-fit'>
            <div className='w-18 gap-x-2 cursor-pointer pt-2 flex justify-center items-center h-full'>
                <Image alt='backarrow' src={Arrowback} />
                <span className='text-xs text-UIslate-500 font-medium'>Back</span>
            </div>
        </Link>
    )
}

export default Backcard
