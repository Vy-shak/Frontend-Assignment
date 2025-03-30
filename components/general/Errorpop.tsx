
import { Erroricon } from '@/public'
import React from 'react'
import Image from 'next/image'
import {motion} from "motion/react"

function Errorpop() {
    return (
        <motion.div 
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className='w-full fixed md:ml-20  gap-x-2 md:w-xl bg-white flexSide p-4 rounded-lg border-b-4 !border-b-red-500 border-t-2 border-x-2 !border-t-slate-200'
      >
        <Image alt='error icon' src={Erroricon} />
        <span className='text-UIslate-900 font-medium text-sm'>Failed to upload it</span>
      </motion.div>
    )
}

export default Errorpop
