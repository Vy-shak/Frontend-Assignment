import React from 'react'
import SidebarMenu from './SidebarMenu'
import Image from 'next/image';
import { MentorIcon,BookingIcon,JobIcon,PriorityIcon} from '../../public/index';

const sidebarData = [
    {
      id: 1,
      startIcon: MentorIcon,
      active:true
    },
    {
      id: 2,
      startIcon: JobIcon,
      active:false
    },
    {
      id: 3,
      startIcon: BookingIcon,
      active:false
    },
    {
      id: 4,
      startIcon: PriorityIcon,
      active:false
    },
  ];


function Sidebar() {
  return (
    <div className='w-fit gap-y-6 hidden md:flex cursor-pointer pt-24 fixed top-0 left-0 z-50 px-2  h-full justify-start items-start flex-col bg-UIslate-50  border-r-2 '>
        {sidebarData.map((item)=>(
            <div key={item.id} className={`w-fit h-fit px-3 py-2  rounded-md ${item.active?"bg-UIslate-200":null}`}>
                <Image key={item.id} alt='sidebar icons' src={item.startIcon} />
            </div>
        ))}
    </div>
  )
}

export default Sidebar