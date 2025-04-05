import React from 'react'
import { MiniSidebar,Inbox,Chat,} from '../../../components/index'

function page() {
  return (
    <section className='w-full pt-16   flex flex-col justify-start items-center  h-full'>
      <MiniSidebar/>
      <div className='w-full flex h-screen   lg:pr-0  lg:pl-16   justify-start'>
          <Chat/>
          <Inbox />
      </div>
    </section>
  )
}

export default page
