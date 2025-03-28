"use client"
import React from 'react'
import ServiceTab from './ServiceTab'
import { dummyServices } from '@/app/utils/dummyData/serviceData'
import { serviceTypes } from '@/app/@types/state/Service'
import ServiceCard from './ServiceCard'
import { useActiveServicesStore } from '@/lib/states/activeServices'

function Services() {
    const { activeService } = useActiveServicesStore()
    return (
        <section className='w-full flexStart  gap-y-6 flex-col'>
            <span className='text-xl text-UIslate-900 font-medium'>Services</span>
            <div className='w-full flexStart flex-col gap-y-9'>
                <ServiceTab />
                <div className='w-full grid grid-cols-2 gap-6'>
                    {dummyServices.map((item) => {
                        if (activeService===serviceTypes.all) {
                            return (
                                <ServiceCard id={item.id} key={item.id} details={item.details} description={item.description} profileImg={item.profileImg}  serviceHead={item.serviceHead} type={item.type} />
                            )
                        }
                        else if (activeService===item.type) {
                            return (
                                <ServiceCard id={item.id} key={item.id} details={item.details} description={item.description} profileImg={item.profileImg} serviceHead={item.serviceHead} type={item.type} />
                            )
                        }
                    })}
                </div>
            </div>
        </section>
    )
}

export default Services
