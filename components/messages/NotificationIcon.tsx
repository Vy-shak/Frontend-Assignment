import React from 'react'

interface Notify {
    count:number
}

function NotificationIcon({count}:Notify) {
  return (
    <div className='w-2 h-2 flexCenter rounded-full bg-red-600'>
      <span>{count}</span>
    </div>
  )
}

export default NotificationIcon
