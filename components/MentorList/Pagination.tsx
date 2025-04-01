"use client"

import React, { useEffect, useState } from 'react'
import MentorCard from './MentorCard'
import Controlspage from './pagination/Controlspage'
import usePagination from '@/lib/states/usePagination'
import { useRouter } from 'next/navigation'

interface page {
    mentorsData: any[]
}

const pageSize = 4

function Pagination({ mentorsData }: page) {
    const {currentPage} = usePagination()
    const Router = useRouter();

    useEffect(()=>{
        Router.push("#top")
    },[currentPage])

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
            <Controlspage />
        </div>
    )
}

export default Pagination
