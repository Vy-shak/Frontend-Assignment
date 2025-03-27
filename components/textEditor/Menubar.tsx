"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { selectImg,uploadFromdevice } from './utils/selectImg'
import { useRef } from 'react'
import { Editor, EditorContent, EditorContentProps, } from '@tiptap/react'
import Image from 'next/image'
import { Boldicon, BulletIcon, NumberListicon, Link, Uploadimg, UploadVideo, ItalicIcon, Underlineicon, StrikeIcon } from '../../public/index'


const Menubar = ({ editor }: EditorContentProps) => {
    const ImageRef = useRef<HTMLInputElement>(null);
    const [imgUrl,setimgUrl] = useState<string>("")
    const [Heading,setHeading] = useState<string>("")


    useEffect(() => {
        if (!editor || !imgUrl) return;
        
        editor.chain().focus().insertContent(<div className='flex'><img src="${imgUrl}" /></div>).setImage({ src: imgUrl }).run();
    }, [editor, imgUrl]);


    if (!editor) {
        return null;
    }


    return (
        <>
            <div className=" bg-white border-2 rounded-t-md border-b-0 outline-none border-UIslate-900  flexSide px-4 py-3 gap-x-3">
                <Image alt='bold icon' src={Boldicon} onClick={() => editor.chain().focus().toggleBold().run()} />
                <Image onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''} alt='italic icon' src={ItalicIcon} />
                <Image alt='strikeicon' src={StrikeIcon} onClick={() => editor.chain().focus().toggleStrike().run()} />
                <Image alt='bulletlist' src={BulletIcon} onClick={() => editor.chain().focus().toggleBulletList().run()} />
                <Image alt='OrderedList' src={NumberListicon} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
                <div onClick={()=>uploadFromdevice(ImageRef)} className='w-fit h-fit'>
                    <Image alt='OrderedList' src={Uploadimg}  />
                    <input onChange={()=>selectImg(ImageRef,setimgUrl)} ref={ImageRef} className='hidden' type='file' />
                </div>
            </div>
        </>
    )
}

export default Menubar
