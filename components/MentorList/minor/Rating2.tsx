import React from 'react'
import { Stars } from '../../../public/index'
import Image from 'next/image'

interface rating {
    rating: number,
    reviews: number
}

function Rating2({ rating, reviews }: rating) {
    const RatingArray = Array.from({ length: 5 }, (_, i) => i + 1);
    return (
        <div  className='w-full relative flex md:hidden gap-x-2   py-1 z-10  justify-start items-center '>
            <div className='flexSide space-x-1'>
                {RatingArray.map((item) => {
                    if (item <= rating) {
                        return (
                                <Image key={item} alt='starsIcon' src={Stars} />
                        )
                    }
                })}
            </div>
            <span className='text-UIslate-700 font-semibold text-xs whitespace-nowrap'>| {reviews} Reviews</span>
        </div>
    )
}

export default Rating2