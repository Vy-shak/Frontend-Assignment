"use client"
import React, { useState } from 'react'
import { Backcard, Guidance, MentorName, Errorpop, Button } from '../../../components/index'
import { ResumeData } from '../../utils/dummyData/calldata'
import DmEditor from '@/components/textEditor/Dmeditor'
import { div } from 'motion/react-client'
import { error } from 'console'

function page() {
    const [isError,setisError] = useState(false);

    const handleClick = ()=>{
        setisError(true);

        setTimeout(() => {
            setisError(false)
        }, 1500);
    }
       return ( <section className='w-full pt-16  flex pb-16 flex-col  justify-start items-center  h-full'>
            {isError&&<Errorpop />}
            <div className='w-full pl-18 pr-28  flex  justify-start border-b-2 border-UIslate-500 py-6  items-start'>
                <Backcard />
                <div className='w-full flexStart gap-y-4 flex-col'>
                    <MentorName />
                    <Guidance id={ResumeData.id} details={ResumeData.details} bulletpoints={ResumeData.bulletpoints} serviceType={ResumeData.serviceType} subHeading={ResumeData.subHeading} />
                </div>
            </div>
            <div className='w-full pl-44 pr-28 gap-y-5 pt-6 flexStart  flex-col'>
                <span className='text-xl whitespace-nowrap font-medium text-UIslate-900'>Your question</span>
                <div className='w-full flexStart'>
                    <DmEditor />
                </div>
                <div className='w-full flex justify-end items-center'>
                    <Button className='px-8' onClick={handleClick} variant={"primary"}>Next</Button>
                </div>
            </div>
        </section>
    )
}

export default page
