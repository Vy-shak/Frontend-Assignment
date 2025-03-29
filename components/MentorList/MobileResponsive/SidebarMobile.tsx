import React from 'react'
import { sidebarData } from '@/app/utils/dummyData/sidebar'
import SidebarMenu from '@/components/general/SidebarMenu'

function SidebarMobile() {
  return (
    <div className='w-screen fixed top-0 left-0 h-screen bg-white'>
      {sidebarData.map((item)=>(
        <SidebarMenu active={item.active} text={item.text} icon={item.startIcon} />
      ))}
    </div>
  )
}

export default SidebarMobile
