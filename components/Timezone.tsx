import React from 'react'
import { CheveronDown } from '../public/index'
import Image from 'next/image'

function Timezone() {
    return (
        <section className='w-full flexStart'>
            <div className='w-full flex justify-between items-center rounded bg-white border-2 border-UIslate-300'>
                <span></span>
                <Image alt='cheveron down' src={CheveronDown} />
            </div>

        </section>
    )
}

export default Timezone
