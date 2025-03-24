import { Mentorsbadge,SearchBar} from '../components/index'
import React from 'react'

function page() {
  return (
    <section className='w-full flex flex-col justify-start items-center pt-16 h-full'>
      <Mentorsbadge />
      <section className='w-full flex px-18 flex-col justify-start items-center'>
        <SearchBar />
      </section>
    </section>
  )
}

export default page

