"use client"
import React from 'react'
import Image, { StaticImageData } from 'next/image'
import useChatboxStore from '@/lib/states/useMessages'

interface messageBox {
    sender: "You" | "Mentor"
    Profile: StaticImageData,
    content: string
}

function MessageBox({ Profile, content,sender}: messageBox) {
    const {chatbox} = useChatboxStore()
    return (
        <div className={`w-full flex items-start ${sender=="You"?"justify-end":"justify-start"}`}>
            <div className={`w-fit gap-x-2 ${sender=="You"?"flex-row":"flex-row-reverse"} h-fit flex justify-center items-end`}>
                <div className='p-2 max-w-72 rounded border-2 flexStart'>
                    <p>{content}</p>
                </div>
                {sender=="You"?<Image  className='rounded w-8' alt='profile' src={Profile} />:<Image className='rounded w-8' alt='profile' src={chatbox.Profile} />}
            </div>
        </div>
    )
}

export default MessageBox
