"use client"
import Image, { StaticImageData } from 'next/image'
import { usePathname } from 'next/navigation'
import React  from 'react'

interface sidebarMenu {
    icon:StaticImageData,
    text:string
    active:boolean
    route:string
}

function SidebarMenu({icon,text,route}:sidebarMenu) {
  const pathname = usePathname();
  console.log(pathname)
  return (
    <div className={`flexSide cursor-pointer gap-x-2 px-2 ${pathname==route?"bg-UIslate-200":null} py-2 w-full font-medium rounded h-fit`}>
        <Image alt='sidebarIcon' src={icon}/>
        <span className='text-sm flex  text-UIslate-900 font-medium'>{text}</span>
    </div>
  )
}

export default SidebarMenu
