import React from 'react'
import { Bellicon, ProfileImg } from "../../public/index"
import Image from 'next/image'
import ProfileTab from './ProfileTab'
import { Menu } from "lucide-react"

function Navbar() {
  return (
    <div className="w-full z-40 fixed top-0 right-0 gap-x-4 h-16 border-b-2 border-UIslate-200 bg-white flex justify-between items-center ">
      <div className="md:hidden flex items-center">
        <Menu />
      </div>
      <div className="w-fit shadow h-fit p-2 rounded-lg bg-white outline-2 outline-UIslate-200">
        <Image alt="bellicon" src={Bellicon} />
      </div>
      <div className="hidden md:flex">
        <ProfileTab name="yshak" profileImage={ProfileImg} />
      </div>
    </div>

  )
}

export default Navbar
