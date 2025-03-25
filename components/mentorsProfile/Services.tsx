import React from 'react'
import ServiceTab from './ServiceTab'
import { dummyServices } from '@/app/utils/dummyData'
import ServiceCard from './ServiceCard'
import { it } from 'node:test'

function Services() {
  return (
    <section className='w-full flexStart flex-col'>
        <span className='text-xl text-UIslate-900 font-medium'>Services</span>
        <ServiceTab/>
        <div className='w-full'>
            {dummyServices.map((item)=>(
                <ServiceCard  key={item.id} details={item.details} description={item.description} serviceHead={item.serviceHead} type={item.type}/>
            ))}
        </div>
    </section>
  )
}

export default Services
