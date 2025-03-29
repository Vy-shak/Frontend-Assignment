import React from 'react'
import { sidebarData } from '@/app/utils/dummyData/sidebar'
import SidebarMenu from '@/components/general/SidebarMenu'
import { Dispatch,SetStateAction } from 'react'
import { X } from 'lucide-react'
import {motion,AnimatePresence} from "motion/react"

interface side {
  open:boolean
  setOpen :Dispatch<SetStateAction<boolean>>
}

function SidebarMobile({setOpen,open}:side) {
  return (
    <AnimatePresence>
          {open&&<motion.div           initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ 
            x: "-100%",
            transition: { 
              ease: "easeInOut", 
              duration: 0.5 
            }
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }} className='w-52 lg:hidden  z-50 px-8 border-r-2 pt-8 fixed gap-y-4 flex justify-start items-start flex-col top-0 left-0 h-screen bg-white'>
      <div className='w-full flex justify-end items-center'>
        <X onClick={()=>setOpen(false)}/>
      </div>
      <div className='w-full flexStart flex-col'>
      {sidebarData.map((item)=>(
        <SidebarMenu key={item.id} active={item.active} text={item.text} icon={item.startIcon} />
      ))}
      </div>
    </motion.div>}
    </AnimatePresence>
  )
}

export default SidebarMobile
