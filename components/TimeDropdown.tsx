import React  from 'react'
import { timezones } from '@/app/utils/dummyData/time'
import { Dispatch,SetStateAction } from 'react'
import { AnimatePresence,motion } from 'motion/react'

interface dropdown {
    setterfn:Dispatch<SetStateAction<string>>
    setOpen:Dispatch<SetStateAction<boolean>>
}


function TimeDropdown({setterfn,setOpen}:dropdown) {

    const handleClick = (item:{id:number,label:string})=>{
        setterfn(item.label)
        setOpen((prev)=>!prev)
        oep
    }
  return (
    <div className='w-full absolute flex-col justify-center items-start   gap-y-3 bg-white flex'>
      {timezones.map((item)=>(
        <motion.div className='hover:bg-UIblue-50 rounded-lg hover:duration-400 w-full px-3 py-2' initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ 
            duration: 0.5, 
            exit: { duration: 1 }
          }} onClick={()=>handleClick(item)} key={item.id}>
            <span>{item.label}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default TimeDropdown
