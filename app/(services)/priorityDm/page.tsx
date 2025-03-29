"use client"
import React, { useState } from 'react'
import { Backcard, Guidance, MentorName, Errorpop, MiniSidebar, Button } from '../../../components/index'
import { ResumeData } from '../../utils/dummyData/calldata'
import DmEditor from '@/components/textEditor/Dmeditor'

function page() {
    const [isError,setisError] = useState(false);

    const handleClick = ()=>{
        setisError(true);

        setTimeout(() => {
            setisError(false)
        }, 1500);
    }
       return ( <section className='w-full  pt-16  flex pb-16 flex-col  justify-start items-center  h-full'>
            {isError&&<Errorpop />}
            <div className='w-full px-4 md:pr-10 md:pl-24 lg:pr-16 lg:pl-32 xl:pr-20 xl:pl-36  flex flex-col  justify-start border-b-2 pb-3 md:pb-6 border-UIslate-500  gap-y-3 pt-3  items-start'>
                <MiniSidebar />
                <Backcard />
                <div className='w-full flexStart gap-y-3 flex-col'>
                    <MentorName />
                    <Guidance id={ResumeData.id} details={ResumeData.details} bulletpoints={ResumeData.bulletpoints} serviceType={ResumeData.serviceType} subHeading={ResumeData.subHeading} />
                </div>
            </div>
                {/* <div className='w-full  gap-y-5 pt-6 flexStart  flex-col'>
                    <span className='text-xl whitespace-nowrap font-medium text-UIslate-900'>Your question</span>
                    <div className='w-full flexStart'>
                        <DmEditor />
                    </div>
                    <div className='w-full flex justify-end items-center'>
                        <Button className='px-8' onClick={handleClick} variant={"primary"}>Next</Button>
                    </div>
                </div> */}
        </section>
    )
}

export default page
