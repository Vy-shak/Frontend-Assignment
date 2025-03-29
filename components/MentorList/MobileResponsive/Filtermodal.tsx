"use client"

import React, { useState } from 'react'
import useFilterModal from '@/lib/states/useFiltermodal'
import { X } from "lucide-react"
import { filterData } from '@/app/utils/dummyData/filter'
import Filtermenu from '../Filtermenu'
import { Button } from '@/components/ui/button'
import {motion,AnimatePresence} from "motion/react"


const initialVal = [
    { id: "se-sde", text: "SE/SDE" },
    { id: "ds-ai-ml", text: "DS/AI/ML" },
    { id: "product-management", text: "Product Management" },
    { id: "project-management", text: "Project Management" },
    { id: "consulting", text: "Consulting" },
    { id: "quantitative-finance", text: "Quantitative Finance" }
]

function Filtermodal() {
    const [FilterItems, setFilterItems] = useState(filterData[0])
    const { isOpen, setClose } = useFilterModal();


    return (
        <>
        <AnimatePresence>
        {isOpen && <motion.div initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ duration: 0.5, ease: "easeInOut" }} className='w-full px-2  z-50 fixed bottom-0'>
                <div className='w-full md:hidden   rounded-t-2xl bg-white border-2 h-fit pb-6'>
                    <div className='w-full flex px-4 border-b-2 pb-2 justify-between pt-4 items-center'>
                        <span>FILTERS</span>
                        <X onClick={() => setClose()} />
                    </div>
                    <div className='w-full px-4 border-b-2 flex justify-start items-stretch'>
                        <div className='flex justify-start pr-4 h-full pt-6 gap-y-4 items-start flex-col border-r'>
                            {filterData.map((item) => (
                                <span className={`${FilterItems.type==item.type?"bg-UIslate-700 text-white":"text-UIslate-700 hover:bg-UIblue-50"} cursor-pointer px-3 rounded font-medium  w-full py-1`} onClick={() => setFilterItems(item)} key={item.id}>{item.type}</span>
                            ))}
                        </div>
                        <div className='flex gap-y-4 pl-4 pb-3 pt-6 justify-start items-start flex-col'>
                            {FilterItems.menus.map((item) => (
                                <Filtermenu key={item.id} text={item.text} />
                            ))}
                        </div>
                    </div>
                    <div className='w-full pt-4 px-4 flex justify-end items-center'>
                        <Button onClick={() => setClose()}>Finish</Button>
                    </div>
                </div>
            </motion.div>}
        </AnimatePresence>
        </>
    )
}

export default Filtermodal
