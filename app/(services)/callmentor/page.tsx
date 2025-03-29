import React from 'react'
import { Guidance, Backcard, MentorName, Slot, Timezone, MiniSidebar } from '../../../components/index'
import { guidanceData } from '../../utils/dummyData/calldata'
import { Button } from '../../../components/index'


function page() {
    return (
        <section className='w-full    flex pb-16 flex-col      justify-start items-center pt-16 h-full'>
            <div className='w-full px-4 md:pr-10 md:pl-24 lg:pr-16 lg:pl-32 xl:pr-20 xl:pl-36  flex flex-col  justify-start border-b-2 pb-3 md:pb-6 border-UIslate-500  gap-y-3 pt-3  items-start'>
                <MiniSidebar />
                <Backcard />
                <div className='w-full flexStart gap-y-3 flex-col'>
                    <MentorName />
                    <Guidance id={guidanceData.id} details={guidanceData.details} bulletpoints={guidanceData.bulletpoints} serviceType={guidanceData.serviceType} subHeading={guidanceData.subHeading} />
                </div>
            </div>
            <div className='w-full  px-4 md:pr-10 md:pl-24 lg:pr-16 lg:pl-32 xl:pr-20 xl:pl-36  gap-y-4 pb-6 flexStart'>
                <Slot />
            </div>
            <div className='w-full flex px-4 md:pr-10 md:pl-24 lg:pr-16 lg:pl-32 xl:pr-20 xl:pl-36  justify-end items-center'>
                <Button>Confirm details</Button>
            </div>
        </section>
    )
}

export default page
