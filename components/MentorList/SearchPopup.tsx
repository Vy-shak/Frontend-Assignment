import React from 'react'
import Trending from './minor/Trending'
import { motion, AnimatePresence } from "motion/react"

const companies = [
    { id: 1, text: 'google' },
    { id: 2, text: 'microsoft' },
    { id: 3, text: 'amazon' },
    { id: 4, text: 'slack' },
];

interface searchref {
    history: string[]
}


function SearchPopup({ history }: searchref) {
    console.log(history)
    return (
        <AnimatePresence>
            <motion.div className='bg-white absolute w-72 ml-4  mt-10 flexStart p-4 rounded-lg flex-col gap-y-2 border-2 border-UIslate-100'
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{
                    duration: 0.3,
                    type: "spring",
                    stiffness: 200,
                    damping: 10
                }}>
                <div className='flexStart gap-y-3 w-full flex-col'>
                    {history.length > 0 && <div className='w-full flex-col gap-y-2  flexStart'>
                        <span className='text-sm text-UIslate-900 font-semibold'>Recent search</span>
                        {history.map((item, index) => {
                            if (index <= 2) {
                                return <Trending type='recent' key={index} text={item} />;
                            }
                            return null;
                        })}
                    </div>}
                    <div className='w-full flexStart gap-y-2 flex-col'>
                        <span className='text-sm text-UIslate-900 font-semibold'>Trending search</span>
                        <div className='flex justify-center items-start flex-col w-fit gap-y-2'>
                            {companies.map((item) => (
                                <Trending type='trending' key={item.id} text={item.text} />
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default SearchPopup
