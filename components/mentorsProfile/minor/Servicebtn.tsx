import React from 'react'
import { Dispatch,SetStateAction } from 'react'
import {motion} from "motion/react"
import { useActiveServicesStore } from '@/lib/states/activeServices'
import { serviceTypes } from '@/app/@types/state/Service'

interface btn {
    text:serviceTypes,
}

function Servicebtn({text}:btn) {
    const {activeService,setActiveService} = useActiveServicesStore()
    const handleClick = ()=>{
        setActiveService(text)
    };

  return (
    <motion.div 
    onClick={handleClick} 
    className={`${activeService==text?"bg-white":null} w-40 h-fit  cursor-pointer py-2 flexCenter rounded-md`}
    whileHover={{ 
        scale: 1.03,
        transition: { 
            type: "spring", 
            stiffness: 300, 
            damping: 10 
        }
    }}
    whileTap={{ 
        scale: 0.97,
        transition: { 
            duration: 0.2 
        }
    }}
>
    <span className={`${activeService==text?"text-UIslate-700":"text-UIslate-500"} text-sm whitespace-nowrap font-medium`}>
        {text}
    </span>
</motion.div>
  )
}

export default Servicebtn
