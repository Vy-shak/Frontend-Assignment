"use client"
import React, { useState } from 'react'
import { useRef } from 'react';
import Servicebtn from './minor/Servicebtn';
import { div } from 'motion/react-client';

const serviceTabs = [
    {
        id: 1,
        name: "All",
    },
    {
        id: 2,
        name: "1:1 Call",
    },
    {
        id: 3,
        name: "Priority DM",
    },
    {
        id: 4,
        name: "Package",
    },
    {
        id: 5,
        name: "Webinar",
    },
    {
        id: 6,
        name: "Digital Product",
    },
];

function ServiceTab() {
    const [activeTab, setActivetab] = useState(1);
    return (
        <div className='w-full flexSide'>
            <div className='w-fit flexSide gap-x-2 bg-UIslate-100 px-2 rounded-md py-1'>
                {serviceTabs.map((item) => (
                    <Servicebtn activeTab={activeTab} id={item.id} setActiveTab={setActivetab} key={item.id} text={item.name} />
                ))}
            </div>
        </div>
    )
}

export default ServiceTab
