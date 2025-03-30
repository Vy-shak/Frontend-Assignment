"use client"
import React from 'react'
import NameRole from '../MentorList/minor/NameRole'
import useChatboxStore from '@/lib/states/useMessages'
import { div } from 'motion/react-client'


function InboxHeader() {
    const { chatbox } = useChatboxStore()
    return (
        <div className='flexStart w-full pl-72  '>
            <div className='w-full pl-8  bg-white flexSide border-b-2'>
                <NameRole verified={chatbox.verified} Name={chatbox.Name} role={chatbox.role} />
            </div>
        </div>
    )
}

export default InboxHeader
