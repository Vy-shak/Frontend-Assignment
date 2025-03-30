"use client"
import React from 'react'
import SidebarMenu from './SidebarMenu'
import Image from 'next/image';
import { sidebarData } from '@/app/utils/dummyData/sidebar';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



function Sidebar() {
  const activeRoute = usePathname()
  return (
    <div className='w-fit gap-y-6 hidden md:flex cursor-pointer pt-24 fixed top-0 left-0 z-50 px-2  h-full justify-start items-start flex-col bg-UIslate-50  border-r-2 '>
        {sidebarData.map((item)=>(
          <Link key={item.id} className='flexStart w-full' href={item.route}>
                        <div key={item.id} className={`w-fit h-fit px-3 py-2  rounded-md ${item.route==activeRoute?"bg-UIslate-300":null}`}>
                <Image key={item.id} alt='sidebar icons' src={item.startIcon} />
            </div>
          </Link>
        ))}
    </div>
  )
}

export default Sidebar