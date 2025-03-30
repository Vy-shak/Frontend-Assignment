import React from 'react'
import SidebarMenu from './SidebarMenu'
import { MentorIcon,BookingIcon,JobIcon,PriorityIcon} from '../../public/index';
import { sidebarData } from '@/app/utils/dummyData/sidebar';
import Link from 'next/link';


function Sidebar() {
  return (
    <div className='w-46 lg:flex hidden cursor-pointer fixed top-0 left-0 z-50 px-4 pt-20 h-full gap-y-2 justify-start items-start flex-col bg-UIslate-50  border-r-2 '>
        {sidebarData.map((item)=>(
            <Link key={item.id} className='w-full flexStart' href={item.route}>
            <SidebarMenu active={item.active}  text={item.text} icon={item.startIcon} />
            </Link>
        ))}
    </div>
  )
}

export default Sidebar
