import React from 'react'
import { Stars } from '../../../public/index'
import Image from 'next/image'

interface rating {
    rating: number,
    reviews: number
}

function Rating({ rating, reviews }: rating) {
    const RatingArray = Array.from({ length: 5 }, (_, i) => i + 1);
    return (
        <div style={{ backgroundColor: "hsla(215, 22%, 27%, 0.4)" }} className='w-full relative hidden gap-x-2 px-4 -mt-6 py-1 z-10  justify-start items-center rounded-t-0  rounded-b-lg'>
            <div className='flexSide space-x-1'>
                {RatingArray.map((item) => {
                    if (item <= rating) {
                        return (
                                <Image key={item} alt='starsIcon' src={Stars} />
                        )
                    }
                })}
            </div>
            <span className='text-white font-semibold text-xs whitespace-nowrap'>| {reviews} Reviews</span>
        </div>
    )
}

export default Rating
