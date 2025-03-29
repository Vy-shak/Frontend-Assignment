import React from 'react'
import Calender from '../Calender'
import Timeslot from '../Timeslot'
import { div } from 'motion/react-client'
import Timezone from '@/components/Timezone'

function Slot() {
    return (
        <section className='w-full  flexStart  gap-y-3 pt-3 flex-col'>
            <span className='text-2xl text-UIslate-900 font-medium'>Slot</span>
            <div className='w-full flex-col gap-y-3 flex justify-start items-stretch p-4 border-2 rounded-xl bg-white border-UIslate-300'>
                <div className='w-full md:flex-row gap-y-3 flex-col md:gap-x-3  lg:gap-x-6 flexStart'>
                    <Calender />
                    <Timeslot />
                </div>
                <Timezone />
            </div>
        </section>
    )
}

export default Slot
