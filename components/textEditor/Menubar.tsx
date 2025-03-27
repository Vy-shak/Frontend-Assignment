import React from 'react'

import { Editor, EditorContent, EditorContentProps, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Image from 'next/image'
import { Boldicon, BulletIcon, NumberListicon, Link, Uploadimg, UploadVideo, ItalicIcon, Underlineicon, StrikeIcon } from '../../public/index'
import { useCallback } from 'react'


const Menubar = ({ editor }: EditorContentProps) => {
    if (!editor) {
        return null
    }

    const addImage = useCallback(() => {
        const url = window.prompt('URL')

        if (url) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }, [editor])

    return (
        <>
            <div className=" bg-white border-2 rounded-t-md border-b-0 outline-none border-UIslate-900  flexSide px-4 py-3 gap-x-3">
                <Image alt='bold icon' src={Boldicon} onClick={() => editor.chain().focus().toggleBold().run()} />
                <Image onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''} alt='italic icon' src={ItalicIcon} />
                <Image alt='strikeicon' src={StrikeIcon} onClick={() => editor.chain().focus().toggleStrike().run()} />
                <Image alt='bulletlist' src={BulletIcon} onClick={() => editor.chain().focus().toggleBulletList().run()} />
                <Image alt='OrderedList' src={NumberListicon} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
                <Image alt='OrderedList' src={Uploadimg} onClick={addImage} />
            </div>
        </>
    )
}

export default Menubar
