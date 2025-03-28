import React from 'react'
import { LinkdinIcon,Xicon,InstagramIcon,Mediumicon,ShareIcon } from '../../../public/index'
import Image from 'next/image'

const social = [
    { id: 1, media: LinkdinIcon, alt: "LinkedIn" },
    { id: 2, media: Xicon, alt: "Twitter (X)" },
    { id: 3, media: InstagramIcon, alt: "Instagram" },
    { id: 4, media: Mediumicon, alt: "Medium" },
    { id: 5, media: ShareIcon, alt: "Share" },
  ];


function SocialHandle() {
  return (
    <div className='flexCenter gap-x-2'>
      {social&&social.map((item)=>(
        <Image key={item.id} alt={item.alt} src={item.media}/>
      ))}
    </div>
  )
}

export default SocialHandle
