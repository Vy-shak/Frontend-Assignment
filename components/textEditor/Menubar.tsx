"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import { selectImg,uploadFromdevice } from './utils/selectImg'
import HeadingComp from './minor/Headings'
import { useRef } from 'react'
import { Editor, EditorContent, EditorContentProps, } from '@tiptap/react'
import Image from 'next/image'
import { Boldicon, BulletIcon, NumberListicon, Link, Uploadimg, UploadVideo, ItalicIcon, Underlineicon, StrikeIcon } from '../../public/index'

type Level = 1 | 2 | 3 | 4 | 5 | 6

export interface headingLevel {
    heading:string,
    level:Level
}


const Menubar = ({ editor }: EditorContentProps) => {
    const ImageRef = useRef<HTMLInputElement>(null);
    const [imgUrl,setimgUrl] = useState<string>("")
    const [Heading,setHeading] = useState<headingLevel>({heading:"Heading 1",level:1})


    useEffect(() => {
        if (!editor || !imgUrl) return;
        
        editor.chain().focus().insertContent(<div className='flex'><img src="${imgUrl}" /></div>).setImage({ src: imgUrl }).run();
    }, [editor, imgUrl]);

    useEffect(()=>{
        if (!editor) {
            return 
        }
        editor.chain().focus().toggleHeading({ level: Heading.level }).run()
    },[Heading])


    if (!editor) {
        return null;
    }


    return (
        <>
            <div className=" bg-white border-2 rounded-t-md border-b-0 outline-none border-UIslate-900  flexSide px-4 py-3 gap-x-3">
                <HeadingComp setHeading={setHeading} heading={Heading} />
                <Image alt='bold icon' src={Boldicon} onClick={() => editor.chain().focus().toggleBold().run()} />
                <Image onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''} alt='italic icon' src={ItalicIcon} />
                <Image alt='strikeicon' src={StrikeIcon} onClick={() => editor.chain().focus().toggleStrike().run()} />
                <Image alt='bulletlist' src={BulletIcon} onClick={() => editor.chain().focus().toggleBulletList().run()} />
                <Image alt='OrderedList' src={NumberListicon} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
                <div onClick={()=>uploadFromdevice(ImageRef)} className='w-fit h-fit'>
                    <Image alt='OrderedList' src={Uploadimg}  />
                    <input onChange={()=>selectImg(ImageRef,setimgUrl)} ref={ImageRef} className='hidden' type='file' />
                </div>
                <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
            className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
          >
            H1
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
            className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
          >
            H2
          </button>
          <button
            onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
            className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
          >
            H3
          </button>
            </div>
        </>
    )
}

export default Menubar
