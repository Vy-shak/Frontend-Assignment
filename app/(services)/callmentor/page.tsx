import React from 'react'
import { Guidance, Backcard, MentorName, Slot,Timezone } from '../../../components/index'
import { guidanceData } from '../../utils/dummyData/calldata'
import { Button } from '../../../components/index'


function page() {
    return (
        <section className='w-full pl-18    flex pb-16 flex-col      justify-start items-center pt-16 h-full'>
            <div className='w-full flex pr justify-start border-b-2 border-UIslate-500 py-6 pr-18 items-start'>
                <Backcard />
                <div className='w-full flexStart gap-y-4 flex-col'>
                    <MentorName />
                    <Guidance id={guidanceData.id} details={guidanceData.details} bulletpoints={guidanceData.bulletpoints} serviceType={guidanceData.serviceType} subHeading={guidanceData.subHeading} />
                </div>
            </div>
            <div className='w-full flex-col gap-y-4 pl-26 pr-18 pb-6 flexStart'>
                    <Slot />
            </div>
            <div className='w-full flex px-26 justify-end items-center'>
                <Button>Confirm details</Button>
            </div>
        </section>
    )
}

export default page
