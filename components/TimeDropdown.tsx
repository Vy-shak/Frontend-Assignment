import React from 'react'
import { timezones } from '@/app/utils/dummyData/time'
import { Dispatch, SetStateAction } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { div } from 'motion/react-client'

interface dropdown {
    setterfn: Dispatch<SetStateAction<string>>
    setOpen: Dispatch<SetStateAction<boolean>>
    isOpen: boolean
}


function TimeDropdown({ setterfn, setOpen, isOpen }: dropdown) {

    const handleClick = (item: { id: number, label: string }) => {
        setterfn(item.label)
        setOpen((prev) => !prev)
    }
    return (
        <>
            {isOpen && <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{
              duration: 0.3,
              type: "spring",
          }} className='w-fit mb-14 absolute mt-20 flex-col justify-center items-start border-2 border-UIslate300 rounded-lg   gap-y-3 bg-white flex'>
                {timezones.map((item) => (
                    <div className='hover:bg-UIblue-50 rounded-lg hover:duration-400 w-full px-3 py-2' onClick={() => handleClick(item)} key={item.id}>
                        <span>{item.label}</span>
                    </div>
                ))}
            </motion.div>}
        </>
    )
}

export default TimeDropdown
