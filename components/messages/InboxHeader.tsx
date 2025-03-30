"use client"
import React from 'react'
import NameRole from '../MentorList/minor/NameRole'
import useChatboxStore from '@/lib/states/useMessages'


function InboxHeader() {
    const {chatbox} = useChatboxStore()
  return (
    <div className='w-full pl-4 flexSide border-b-2'>
      <NameRole verified={chatbox.verified} Name={chatbox.Name} role={chatbox.role} />
    </div>
  )
}

export default InboxHeader
