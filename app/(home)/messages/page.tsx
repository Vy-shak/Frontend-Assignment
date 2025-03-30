import React from 'react'
import {Sidebar,Chatbox} from '../../../components/index'
import { mentorsList } from '../../utils/dummyData/Messages'
import { it } from 'node:test'

function page() {
  return (
    <section className='w-full pt-16   flex flex-col justify-start items-center  h-full'>
        <Sidebar/>
        <div className='w-full h-12  bg-white border-b-2 p-4 md:pr-10 md:pl-16 lg:pr-14 lg:pl-56 xl:pr-20 xl:pl-64 flexSide'>
            <span className='text-UIslate-700 font-semibold text-lg'>PriorityDms</span>
        </div>
        <div className='w-full flex-col gap-y-3  l px-4 md:pr-10 md:pl-16 lg:pr-14 lg:pl-56 xl:pr-20 xl:pl-64 h-16 bg-white border-b-2 p-3 flexStart'>
            {mentorsList.map((item,index)=>(
                <Chatbox Lastmessage={item.lastMessage} key={index} verified={item.verified} role={item.role} Name={item.Name} Profile={item.Profile} notifications={item.notifications} />
            ))}
        </div>
    </section>
  )
}

export default page
