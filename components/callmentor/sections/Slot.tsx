import React from 'react'
import Calender from '../Calender'
import Timeslot from '../Timeslot'
import { div } from 'motion/react-client'

function Slot() {
    return (
        <section className='w-full flexStart gap-y-6 pt-6 flex-col'>
            <span className='text-2xl text-UIslate-900 font-medium'>Slot</span>
            <div className='w-full gap-x-6 flex justify-start items-stretch p-4 border-2 rounded-xl bg-white border-UIslate-300'>
                <Calender />
                <Timeslot />
            </div>
        </section>
    )
}

export default Slot
