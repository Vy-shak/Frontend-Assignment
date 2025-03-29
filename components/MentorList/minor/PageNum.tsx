import React from 'react'

interface pageNum {
    num:number
}

function PageNum({num}:pageNum) {
  return (
    <div className='w-fit h-fit px-2 py-1 rounded flexCenter bg-white border-2'>
      <span className='text-UIslate-700 text-sm'>{num}</span>
    </div>
  )
}

export default PageNum
