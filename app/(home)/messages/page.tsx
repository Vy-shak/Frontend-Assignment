import React from 'react'
import { Sidebar, Chatbox,MiniSidebar,Inbox,Chat,Header } from '../../../components/index'
import { mentorsList } from '../../utils/dummyData/Messages'

function page() {
  return (
    <section className='w-full pt-16   flex flex-col justify-start items-center  h-full'>
      <MiniSidebar/>
      <div className='w-full flex h-screen  px-4 lg:pr-0  lg:pl-16   justify-start'>
          <Chat/>
          <Inbox />
      </div>
    </section>
  )
}

export default page
