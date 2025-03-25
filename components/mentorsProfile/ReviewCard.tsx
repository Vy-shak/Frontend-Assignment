import React from 'react'
import { reviewData } from '@/app/utils/dummyData/Reviewdata'
import Image from 'next/image'
import { Stars } from "../../public/index"
import { ReviewType } from '@/app/@types/state/Reviewtype'

function ReviewCard({ rating, review, profile, author }: ReviewType) {
    return (
        <div className='bg-white w-full border-2 gap-y-6 p-6 rounded-lg border-lg flexStart flex-col'>
            <div className='w-full flexStart gap-y-2 flex-col'>
                <div className='flexSide gap-x-2'>
                    <span className='font-semibold text-UIslate-700 text-lg'>{rating}</span>
                    <Image alt='rating' src={Stars} />
                </div>
                <div className='w-full flexStart'>
                    <p className='font-medium text-UIslate-700 text-sm'>{review}</p>
                </div>
            </div>
            <div className='w-full gap-x-2  flexSide'>
                <Image alt='authorProfile' src={profile} />
                <span className='font-semibold text-UIslate-500 text-sm'>{author}</span>
            </div>
        </div>
    )
}

export default ReviewCard
