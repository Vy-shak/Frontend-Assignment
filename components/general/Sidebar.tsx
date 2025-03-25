import React from 'react'
import SidebarMenu from './SidebarMenu'
import { MentorIcon,BookingIcon,JobIcon,PriorityIcon} from '../../public/index';

const sidebarData = [
    {
      id: 1,
      text: "Mentor",
      startIcon: MentorIcon,
      active:true
    },
    {
      id: 2,
      text: "Job",
      startIcon: JobIcon,
      active:false
    },
    {
      id: 3,
      text: "Booking",
      startIcon: BookingIcon,
      active:false
    },
    {
      id: 4,
      text: "Priority",
      startIcon: PriorityIcon,
      active:false
    },
  ];


function Sidebar() {
  return (
    <div className='w-52 cursor-pointer fixed top-0 left-0 z-50 px-3 pt-20 h-full gap-y-2 flexStart flex-col bg-UIslate-50  border-r-2 '>
        {sidebarData.map((item)=>(
            <SidebarMenu active={item.active} key={item.id} text={item.text} icon={item.startIcon} />
        ))}
    </div>
  )
}

export default Sidebar
