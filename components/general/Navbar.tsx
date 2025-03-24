import React from 'react'
import {Bellicon, ProfileImg} from "../../public/index"
import Image from 'next/image'
import ProfileTab from './ProfileTab'

function Navbar() {
  return (
    <div className='w-full z-40 fixed top-0 right-0 pr-6 gap-x-4 h-16 border-b-2 border-UIslate-200 bg-white flex justify-end items-center'>
      <div className='w-fit shadow h-fit p-2 rounded-lg bg-white border-2 border-UIslate-200'>
        <Image  alt='bellicon' src={Bellicon} />
      </div>
      <ProfileTab name='Jimmy' profileImage={ProfileImg}/>
    </div>
  )
}

export default Navbar
