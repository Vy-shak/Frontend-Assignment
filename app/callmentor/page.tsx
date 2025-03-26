import React from 'react'
import { Guidance,Backcard } from '../../components/index'
import { guidanceData } from '../utils/dummyData/calldata'

function page() {
    return (
        <section className='w-full flex pb-16 flex-col pl-52 justify-start items-center pt-16 h-full'>
            <div className='w-full flex justify-start border-b-2 border-UIslate-500 py-6 px-18 items-start'>
                <Guidance id={guidanceData.id} details={guidanceData.details} bulletpoints={guidanceData.bulletpoints} serviceType={guidanceData.serviceType} subHeading={guidanceData.subHeading} />
            </div>
        </section>
    )
}

export default page
