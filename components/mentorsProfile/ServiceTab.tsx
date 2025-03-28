"use client"
import React  from 'react'
import Servicebtn from './minor/Servicebtn';
import { serviceTypes } from '@/app/@types/state/Service';

const serviceTabs = [
    {
        id: 1,
        name: serviceTypes.all,
    },
    {
        id: 2,
        name: serviceTypes.call,
    },
    {
        id: 3,
        name: serviceTypes.dm,
    },
    {
        id: 4,
        name: serviceTypes.package,
    },
    {
        id: 5,
        name: serviceTypes.webinar,
    },
    {
        id: 6,
        name: serviceTypes.product,
    },
];

function ServiceTab() {

    return (
        <div className='w-full flexSide'>
            <div className='w-fit flexSide flex-wrap md:gap-x-4 py-1 gap-x-2 max-sm:gap-y-3 bg-UIslate-100 px-4 rounded-md  md:py-1 '>
                {serviceTabs.map((item) => (
                    <Servicebtn  key={item.id} text={item.name} />
                ))}
            </div>
        </div>
    )
}

export default ServiceTab
