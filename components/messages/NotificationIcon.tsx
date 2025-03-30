import React from 'react'

interface Notify {
    count:number
}

function NotificationIcon({count}:Notify) {
  return (
    <div className='w-fit h-fit flexCenter px-2 py-1 rounded-full bg-red-600'>
      <span className='text-white font-medium text-xs'>{count}</span>
    </div>
  )
}

export default NotificationIcon
