import React from 'react'
import { Guidance,Backcard,MentorName } from '../../components/index'
import { guidanceData } from '../utils/dummyData/calldata'

function page() {
    return (
        <section className='w-full flex pb-16 flex-col pl-52 justify-start items-center pt-16 h-full'>
            <div className='w-full flex justify-start border-b-2 border-UIslate-500 py-6 pr-18 items-start'>
                <Backcard/>
                <div className='w-full flexStart gap-y-4 flex-col'>
                <MentorName/>
                <Guidance id={guidanceData.id} details={guidanceData.details} bulletpoints={guidanceData.bulletpoints} serviceType={guidanceData.serviceType} subHeading={guidanceData.subHeading} />
                </div>
            </div>
        </section>
    )
}

export default page
