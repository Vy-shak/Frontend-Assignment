import React from 'react'
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
    className={`${activeService==text?"bg-white":null} w-fit h-fit px-4  cursor-pointer lg:py-3 py-2 flexCenter rounded-sm`}
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
    <span className={`${activeService==text?"text-UIslate-700":"text-UIslate-500"} text-sm min-w-24 xl:w-32 flex justify-center items-center  whitespace-nowrap font-medium`}>
        {text}
    </span>
</motion.div>
  )
}

export default Servicebtn
