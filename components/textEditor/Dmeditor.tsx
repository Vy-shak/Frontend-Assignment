'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './Menubar'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'
import Image from '@tiptap/extension-image'
import "./styless.css"
import Underline from '@tiptap/extension-underline'

const DmEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit,BulletList,ListItem,Image,Underline],
        content: '<p>The editor is fully working check it out</p>',
        editorProps: {
            attributes: {
                class: "bg-UIslate-50 outline-2 outline-black w-2xl h-72 p-4 rounded-b-xl border-t-0 border border-transparent"
            }
        }
    })

    return (<div className='w-full flex justify-center items-start flex-col'>
    <Menubar editor={editor} />
<EditorContent editor={editor} />
    </div>)
}

export default DmEditor
