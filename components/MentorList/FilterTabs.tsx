"use client"
import React, { use } from 'react'
import useFilterSelection from '@/lib/states/selectedFilters'

function FilterTabs() {
    const {selectedFilter} = useFilterSelection();
    console.log(selectedFilter)
  return (
    <div>
      
    </div>
  )
}

export default FilterTabs
