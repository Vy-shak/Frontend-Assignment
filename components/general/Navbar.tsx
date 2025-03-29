"use client"
import React, { useState } from 'react'
import { Bellicon, ProfileImg} from "../../public/index"
import SidebarMobile from '../MentorList/MobileResponsive/SidebarMobile'
import Image from 'next/image'
import ProfileTab from './ProfileTab'
import { Menu } from "lucide-react"

function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <div className="w-full z-40 fixed  px-4 top-0 right-0 gap-x-4 h-16 border-b-2 border-UIslate-200 bg-white flex md:justify-end justify-between items-center ">
      <div className="md:hidden flex items-center">
        <SidebarMobile open={open} setOpen={setOpen}  />
        <Menu className='cursor-pointer' onClick={()=>setOpen(true)} />
      </div>
      <div className='w-fit gap-x-3 flexSide'>
        <div className="w-fit shadow h-fit p-1 md:p-2 rounded-lg bg-white outline-2 outline-UIslate-200">
          <Image alt="bellicon" src={Bellicon} />
        </div>
        <div className="">
          <ProfileTab name="yshak" profileImage={ProfileImg} />
        </div>
      </div>
    </div>

  )
}

export default Navbar
