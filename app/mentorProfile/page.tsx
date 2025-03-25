import React from 'react'
import { MentorsPcard,Backcard,Services } from '../../components/index'


const page = () => {
  return (
    <section className='w-full flex flex-col pl-52 justify-start items-center pt-16 h-full'>
        <div className='w-full flex justify-start border-b-2 border-UIslate-500 py-6 pr-18 items-start'>
        <Backcard/>
        <MentorsPcard/>
        </div>
        <section className='w-full gap-y-10  scroll-smooth flex px-18 flex-col justify-start items-center'>
            <Services/>
        </section>
    </section>
  )
}

export default page
