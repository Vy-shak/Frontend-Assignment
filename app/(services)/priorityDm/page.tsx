import React from 'react'
import { Backcard, Guidance, MentorName } from '../../../components/index'
import { guidanceData } from '../../utils/dummyData/calldata'
import DmEditor from '@/components/textEditor/Dmeditor'

function page() {
    return (
        <section className='w-full   flex pb-16 flex-col pl-52 justify-start items-center pt-16 h-full'>
            <div className='w-full flex  justify-start border-b-2 border-UIslate-500 py-6 pr-18 items-start'>
                <Backcard />
                <div className='w-full flexStart gap-y-4 flex-col'>
                    <MentorName />
                    <Guidance id={guidanceData.id} details={guidanceData.details} bulletpoints={guidanceData.bulletpoints} serviceType={guidanceData.serviceType} subHeading={guidanceData.subHeading} />
                </div>
            </div>
            <div className='w-full gap-y-5 pt-6 flexStart px-18 flex-col'>
                    <span className='text-xl whitespace-nowrap font-medium text-UIslate-900'>Your question</span>
                    <div className='w-full flexStart'>
                        <DmEditor />
                    </div>
                </div>
        </section>
    )
}

export default page
