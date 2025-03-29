import React from 'react'
import { Dispatch,SetStateAction } from 'react'
import usePagination from '@/lib/states/usePagination'

interface pageNum {
    num:number
}

function PageNum({num}:pageNum) {
    const {currentPage,move} = usePagination();


  return (
    <div onClick={()=>move(num)} className={`w-fit ${currentPage==num?"bg-UIslate-700 text-white":" bg-white text-UIslate-700"} h-fit px-2 py-1 rounded flexCenter  border-2`}>
      <span className=' text-sm'>{num}</span>
    </div>
  )
}

export default PageNum
