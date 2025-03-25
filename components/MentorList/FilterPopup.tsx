"use client"
import React from 'react'
import { motion, AnimatePresence } from "motion/react"
import { useRef } from 'react'
import Filtermenu from './Filtermenu'

interface menu {
    id: string,
    text: string,
}

interface popup {
    constant: menu[]
}

function FilterPopup({ constant }: popup) {
    const filterRef = useRef<HTMLInputElement>(null);

    const handleCheck = () => {
        if (filterRef.current) {
          console.log("Checkbox value:", filterRef.current.name);
        }
      };


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
                <Filtermenu key={item.id} text={item.text} />
            ))}
        </motion.div>
    </AnimatePresence>
    )
}

export default FilterPopup
