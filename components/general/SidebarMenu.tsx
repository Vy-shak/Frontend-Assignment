import Image, { StaticImageData } from 'next/image'
import React  from 'react'

interface sidebarMenu {
    icon:StaticImageData,
    text:string
}

function SidebarMenu({icon,text}:sidebarMenu) {
  return (
    <div className='flexSide cursor-pointer gap-x-2 px-4 py-3 w-full bg-UIslate-200 font-medium rounded-md h-fit'>
        <Image alt='sidebarIcon' src={icon}/>
        <span className='text-sm text-UIslate-900 font-medium'>{text}</span>
    </div>
  )
}

export default SidebarMenu
