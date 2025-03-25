import React from 'react'
import { Dispatch,SetStateAction } from 'react'
import {motion} from "motion/react"

interface btn {
    id:number,
    text:string,
    setActiveTab:Dispatch<SetStateAction<number>>,
    activeTab:number
}

function Servicebtn({text,id,setActiveTab,activeTab}:btn) {
    const handleClick = ()=>{
        setActiveTab(id)
    };

  return (
    <motion.div 
    onClick={handleClick} 
    className={`${activeTab==id?"bg-white":null} w-40 h-fit cursor-pointer py-2 flexCenter rounded-md`}
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
    <span className={`${activeTab==id?"text-UIslate-700":"text-UIslate-500"} text-sm whitespace-nowrap font-medium`}>
        {text}
    </span>
</motion.div>
  )
}

export default Servicebtn
