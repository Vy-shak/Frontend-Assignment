import { Mentorsbadge,SearchBar,MentorCard,FilterTabs,Sidebar,Pagination} from '../../../components/index'
import React  from 'react'
import {Filtermodal} from "../../../components/index"
import { mentorsData } from '../../utils/dummyData/mentorsData';


function page() {
  return (
    <section className='w-full  pt-16  flex flex-col justify-start items-center  h-full'>
      <Sidebar />
      <Filtermodal/>
      <Mentorsbadge />
      <section className='w-full md:pr-10 md:pl-16 lg:pr-14 lg:pl-56 xl:pr-20 xl:pl-64 px-4 pt-4  flex flex-col justify-start items-center'>
        <div className='w-full'>
        <SearchBar />
        <FilterTabs/>
        </div>
        <Pagination mentorsData={mentorsData} />
      </section>
    </section>
  )
}

export default page

