"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { selectImg, uploadFromdevice } from './utils/selectImg'
import HeadingComp from './minor/Headings'
import { useRef } from 'react'
import { Editor, EditorContent, EditorContentProps, } from '@tiptap/react'
import Image, { StaticImageData } from 'next/image'
import { Boldicon, BulletIcon, NumberListicon, Link, ImojiIcon, Uploadimg, UploadVideo, ItalicIcon, Underlineicon, Quoteicon, StrikeIcon } from '../../public/index'
import { QuoteIcon, VideoIcon } from 'lucide-react'
import { div } from 'motion/react-client'

type Level = 1 | 2 | 3 | 4 | 5 | 6

export interface headingLevel {
    heading: string,
    level: Level
}

interface toolbar {
    id:number
    icon: StaticImageData,
    command: (editor: Editor) => void,
    type: string
}

const toolbarItems: toolbar[] = [
    { id: 1, icon: Boldicon, command: (editor) => editor.chain().focus().toggleBold().run(), type: 'bold' },
    { id: 2, icon: ItalicIcon, command: (editor) => editor.chain().focus().toggleItalic().run(), type: 'italic' },
    { id: 3, icon: Underlineicon, command: (editor) => editor.chain().focus().toggleUnderline().run(), type: 'underline' },
    { id: 4, icon: StrikeIcon, command: (editor) => editor.chain().focus().toggleStrike().run(), type: 'strike' },
    { id: 5, icon: Quoteicon, command: (editor) => editor.chain().focus().toggleBlockquote().run(), type: 'blockquote' },
    { id: 6, icon: BulletIcon, command: (editor) => editor.chain().focus().toggleBulletList().run(), type: 'bulletList' },
    { id: 7, icon: NumberListicon, command: (editor) => editor.chain().focus().toggleOrderedList().run(), type: 'orderedList' },
    { id: 8, icon: Link, command: () => {}, type: 'link' }, // Added Link Icon
    { id: 9, icon: UploadVideo, command: () => {}, type: 'video' }, // Added Video Icon
    { id: 10, icon: ImojiIcon, command: () => {}, type: 'emoji' } // Moved Emoji Icon to the end
];



const Menubar = ({ editor }: EditorContentProps) => {
    const ImageRef = useRef<HTMLInputElement>(null);
    const [imgUrl, setimgUrl] = useState<string>("")
    const [Heading, setHeading] = useState<headingLevel>({ heading: "Heading 1", level: 1 })


    useEffect(() => {
        if (!editor || !imgUrl) return;

        editor.chain().focus().insertContent(<div className='flex'><img src="${imgUrl}" /></div>).setImage({ src: imgUrl }).run();
    }, [editor, imgUrl]);

    useEffect(() => {
        if (!editor) {
            return
        }
        editor.chain().focus().toggleHeading({ level: Heading.level }).run()
    }, [Heading])


    if (!editor) {
        return null;
    }


    return (
        <>
            <div className=" bg-white border-2 rounded-t-md border-b-0 outline-none border-UIslate-900  flexSide px-4 py-3 gap-x-3">
                <HeadingComp setHeading={setHeading} heading={Heading} />
                {toolbarItems.map(({ icon, command, type ,id}) => (
                    <div key={id} className={` px-4 cursor-pointer  rounded py-1 ${editor.isActive(type) ? 'bg-UIblue-50 ' : 'bg-none'}`}>
                        <Image
                        alt={type}
                        src={icon}
                        onClick={() => editor && command(editor)}
                    />
                    </div>
                ))}
                <div className='cursor-pointer' onClick={() => uploadFromdevice(ImageRef)} >
                    <Image alt='fileUpload' src={Uploadimg} />
                    <input onChange={() => selectImg(ImageRef, setimgUrl)} ref={ImageRef} className='hidden' type='file' />
                </div>
            </div>
        </>
    )
}

export default Menubar
