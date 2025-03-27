import React, { useState } from 'react'
import { CheveronDown } from '@/public'
import { Dispatch, SetStateAction } from 'react'
import Image from 'next/image'
import { Heading } from '@/app/@types/state/editor'
import { headingLevel } from '../Menubar'
import {motion} from "motion/react"

type Level = 1 | 2 | 3 | 4 | 5 | 6

interface headingdata {
    heading:headingLevel ,
    setHeading: Dispatch<SetStateAction<headingLevel>>
}

const HeadingLevel: Heading[] = [
    { id: 1, heading: "Heading 1",level:1 },
    { id: 2, heading: "Heading 2",level:2 },
    { id: 3, heading: "Heading 3",level:3  },
    { id: 4, heading: "Paragraph",level:4 },
  ];

function HeadingComp({ heading, setHeading }: headingdata) {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = (item:Heading)=>{
        setHeading(item)
        setIsOpen(false)
    }
    return (
        <div className='flex flex-col gap-y-2 justify-start items-center'>
            <div onClick={()=>setIsOpen((prev)=>!prev)} className='w-full cursor-pointer gap-x-6 flex justify-between items-center bg-white'>
                <span className='font-semibold text-UIslate-500 text-md'>{heading.heading}</span>
                <Image className={`${isOpen?"rotate-180":null}`} alt='cheveron down' src={CheveronDown} />
            </div>
            {isOpen&&<motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
              duration: 0.3,
              type: "spring",
          }} className='flex z-50 px-3 mt-10 gap-y-1 py-4 border-2 border-neutral-400 rounded-md items-start  absolute flex-col justify-start bg-white '>
                {HeadingLevel.map((item)=>(
                    <span  className='w-full cursor-pointer font-semibold text-UIslate-500 text-md hover:bg-UIblue-50 px-4 py-2 rounded' onClick={()=>handleClick(item)} key={item.id}>{item.heading}</span>
                ))}
            </motion.div>}
        </div>
    )
}

export default HeadingComp
