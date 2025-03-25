import React from 'react'
import { MentorsPcard } from '../../components/index'


const page = () => {
  return (
    <section className='w-full flex flex-col pl-52 justify-start items-center pt-16 h-full'>
        <section className='w-full gap-y-10  scroll-smooth flex px-18 flex-col justify-start items-center'>
            <MentorsPcard/>
        </section>
    </section>
  )
}

export default page
