import { mentorsList } from '@/app/utils/dummyData/Messages'
import Chatbox from './Chatbox'
import React from 'react'
import useChatboxStore from '@/lib/states/useMessages'

function Chat() {
    return (
        <section className='w-full  h-full flexStart border-r-2 flex-col  fixed lg:max-w-80'>
            <div className='w-full bg-white border-b-2 p-4 flexSide'>
                <span className='text-UIslate-700 font-semibold text-lg'>PriorityDms</span>
            </div>
            <div className='w-full  flex-col gap-y-3 h-full px-4  bg-white border-b-2 p-3 flexStart'>
                {mentorsList.map((item, index) => (
                    <Chatbox key={index} role={item.role} Lastmessage={item.lastMessage} verified={item.verified} Name={item.Name} Profile={item.Profile} notifications={item.notifications} />
                ))}
            </div>
        </section>
    )
}

export default Chat
