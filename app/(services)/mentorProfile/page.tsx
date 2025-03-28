import React from 'react'
import { MentorsPcard, Backcard, Services, Review } from '../../../components/index'


const page = () => {
  return (
    <section className='w-full   flex pb-16 flex-col  justify-start items-center pt-16 h-full'>
      <div className='w-full px-4 flex-col flex justify-start border-b-2 border-UIslate-500  items-start'>
        <Backcard />
        <MentorsPcard />
      </div>
      {/* <section className='w-full gap-y-10  scroll-smooth flex  flex-col justify-start items-center'>
        <div className='w-full pt-6  flexStart '>
          <Services />
        </div>
        <div className='w-full  pt-4 flexStart border-t-2'>
          <Review />
        </div>
      </section> */}
    </section>
  )
}

export default page
