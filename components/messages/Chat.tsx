"use client"
import { mentorsList } from '@/app/utils/dummyData/Messages'
import InboxMobile from './Inboxmobile'
import Chatbox from './Chatbox'
import React, { useState } from 'react'

function Chat() {
    const [isOpen,setIsopen] = useState(false)
    return (
        <section className='w-full    h-full flexStart lg:border-r-2 flex-col  lg:fixed lg:max-w-80'>
            {isOpen&&<InboxMobile/>}
            <div className='w-full md:pl-16 z-20 lg:pl-4 py-4 px-4 bg-white border-b-2 flexSide'>
                <span className='text-UIslate-700 font-semibold text-lg'>PriorityDms</span>
            </div>
            <div className='w-full px-4 z-20 md:pl-16 lg:pl-4 flex-col gap-y-3 h-full  bg-white border-b-2 p-3 flexStart'>
                {mentorsList.map((item, index) => (
                    <Chatbox setisOpen={setIsopen} key={index} role={item.role} Lastmessage={item.lastMessage} verified={item.verified} Name={item.Name} Profile={item.Profile} notifications={item.notifications} />
                ))}
            </div>
        </section>
    )
}

export default Chat
