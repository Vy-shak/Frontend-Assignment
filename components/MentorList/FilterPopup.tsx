import React from 'react'
import { motion, AnimatePresence } from "motion/react"
import useFilterStore from '@/lib/states/useFilterpop'

interface menu {
    id: string,
    text: string,
}

interface popup {
    constant: menu[]
}

function FilterPopup({ constant }: popup) {
    return (
        <AnimatePresence>
        <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ 
                duration: 0.3, 
                type: "spring", 
                stiffness: 200, 
                damping: 10 
            }} 
            className='bg-white absolute mt-12 flexStart p-4 rounded-lg flex-col gap-y-2 outline-2 outline-UIslate-200'
        >
            {constant.map((item) => (
                <div key={item.id} className='flex min-w-40 flexSide gap-x-2'>
                    <input className='rounded-full w-4 h-4' type='checkbox' />
                    <span>{item.text}</span>
                </div>
            ))}
        </motion.div>
    </AnimatePresence>
    )
}

export default FilterPopup
