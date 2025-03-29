"use client"

import React, { useState } from 'react'
import MentorCard from './MentorCard'
import Controlspage from './pagination/Controlspage'
import { data } from 'motion/react-client'

interface page {
    mentorsData: any[]
}

const pageSize = 2

function Pagination({ mentorsData }: page) {
    const [currentPage,setCurrentPage] = useState(1);

    const startPage = (currentPage-1)*pageSize;

    const endPage = startPage+pageSize;

    const visibleData = mentorsData.slice(startPage,endPage)
    return (
        <div className='w-full flexCenter pb-12 gap-y-4 lg:gap-y-8 flex-col'>
            <div className='w-full pt-8  flexSide gap-y-4 flex-col'>
                {visibleData.map((item) => (
                    <MentorCard key={item.id} rating={item.rating} description={item.description} verified={item.verified} reviews={item.reviews} role={item.role} Name={item.Name} profileImg={item.profileImg} />
                ))}
            </div>
            <Controlspage setCurrentpage={setCurrentPage} currentPage={currentPage}/>
        </div>
    )
}

export default Pagination
