"use client"
import React from 'react'
import NameRole from '../MentorList/minor/NameRole'
import useChatboxStore from '@/lib/states/useMessages'
import Backcard from '../mentorsProfile/minor/Backcard'
import { div } from 'motion/react-client'


function InboxHeader() {
    const { chatbox } = useChatboxStore()
    return (
        <div className='flexStart w-full py-3 lg:pl-72'>
            <div className='w-full lg:pl-8 max-md:pb-4 bg-white flexSide border-b-2'>
                <NameRole verified={chatbox.verified} Name={chatbox.Name} role={chatbox.role} />
            </div>
        </div>
    )
}

export default InboxHeader
