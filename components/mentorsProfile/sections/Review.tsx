import { Stars } from '../../../public/index'
import React from 'react'
import ReviewCard from '../ReviewCard'
import { reviewData } from '@/app/utils/dummyData/Reviewdata'
import Image from 'next/image'

function Review() {
    return (
        <section className='w-full  flex-col gap-y-7 flexStart'>
            <div className='w-full flexStart flex-col gap-y-2'>
                <span className='text-xl text-UIslate-900 font-medium'>Reviews</span>
                <div className='w-full flexSide gap-x-2'>
                    <span className='text-md text-UIslate-500 font-semibold'>{`${reviewData.length} Reviews |`}</span>
                    <div className='flexCenter gap-x-1'>
                        <span className='text-md text-UIslate-500 font-semibold'>{"5.0"}</span>
                        <Image alt='star icon' src={Stars} />
                    </div>
                </div>
            </div>
            <div className='w-full flexStart flex-col gap-y-4'>
                {reviewData.map((item) => (
                    <ReviewCard rating={item.rating} id={item.id} review={item.review} profile={item.profile} key={item.id} author={item.author} />
                ))}
            </div>
        </section>
    )
}

export default Review
