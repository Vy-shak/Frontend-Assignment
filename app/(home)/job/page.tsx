"use client"

import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Underconstruct from "../../../public/Images/error/Underconstruction.png"
import Link from 'next/link'
import { useRouter } from 'next/navigation'


function ErrPage() {
    const Router = useRouter()
    return (
        <section className="flex flex-col items-center justify-center w-full h-screen px-4 sm:px-6 md:px-8 lg:px-12 max-w-3xl mx-auto text-center">
        <Image className="w-32 sm:w-40 md:w-52 lg:w-72 rounded-md" alt="Error image" src={Underconstruct} />
  
  <h2 className="font-Montserrat font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-4">
    {`Page is Under construction`}
  </h2>
  
  <h5 className="text-neutral-500 text-sm sm:text-base font-semibold font-Montserrat mt-2">
    I am working on this application.this work will be completeted in few days
  </h5>
  
    <Button onClick={()=>Router.back()}  variant={"primary"} size="lg" className="mt-4 sm:mt-6 md:mt-8  lg:mt-10">Go back </Button>
</section>

    )
}

export default ErrPage
