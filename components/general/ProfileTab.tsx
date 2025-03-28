import React from 'react'
import {CheveronDown} from "../../public/index"
import Image, { StaticImageData } from 'next/image'

interface profile {
    profileImage:StaticImageData,
    name:string,
}

function ProfileTab({profileImage,name}:profile) {
  return (
    <div className='w-fit h-fit shadow rounded-full   flexCenter outline-2 outline-UIslate-300  gap-x-2 rounnded-md bg-white'>
      <Image className='w-8  h-8 rounded-full' alt='profileimage' src={profileImage}/>
      <span className='text-md hidden text-UIslate-500 font-medium'>{name}</span>
      <Image className='object-fill hidden'  alt='profileimage' src={CheveronDown}/>
    </div>
  )
}

export default ProfileTab
