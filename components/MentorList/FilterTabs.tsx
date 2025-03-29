"use client"
import React, { use } from 'react'
import useFilterSelection from '@/lib/states/selectedFilters'
import TabFilter from './minor/TabFilter';

function FilterTabs() {
    const {selectedFilter} = useFilterSelection();
  return (
    <section className='w-full hidden flexStart flex-wrap gap-y-4 gap-x-4 outline-y-2 gap-x-y'>
        {selectedFilter.map((item,index)=>(
            <TabFilter key={index} name={item}/>
        ))}
    </section>
  )
}

export default FilterTabs
