import React from 'react'
import SidebarMenu from './SidebarMenu'
import { MentorIcon,BookingIcon,JobIcon,PriorityIcon} from '../../public/index';

const sidebarData = [
    {
      id: 1,
      text: "Mentor",
      startIcon: MentorIcon,
    },
    {
      id: 2,
      text: "Job",
      startIcon: JobIcon,
    },
    {
      id: 3,
      text: "Booking",
      startIcon: BookingIcon,
    },
    {
      id: 4,
      text: "Priority",
      startIcon: PriorityIcon,
    },
  ];


function Sidebar() {
  return (
    <div className='w-56 px-2 pt-20 h-full gap-y-2 flexStart flex-col bg-UIslate-50 fixed top-0 left-0 border-r-2 '>
        {sidebarData.map((item)=>(
            <SidebarMenu key={item.id} text={item.text} icon={item.startIcon} />
        ))}
    </div>
  )
}

export default Sidebar
