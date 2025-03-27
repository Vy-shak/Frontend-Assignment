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
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}>
                    H1
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}>
                    H2
                </button>
                <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}>
                    H3
                </button>
                {/* <Image alt='bulletlist' src={BulletIcon} onClick={() => editor.chain().focus().toggleBulletList().run()} /> */}
                <button onClick={() => editor.chain().focus().setParagraph().run()} className={editor.isActive('paragraph') ? 'is-active' : ''}>
                    Paragraph
                </button>
                <Image alt='bold icon' src={Boldicon} onClick={() => editor.chain().focus().toggleBold().run()} />
                <Image onClick={() => editor.chain().focus().toggleItalic().run()} className={editor.isActive('italic') ? 'is-active' : ''} alt='italic icon' src={ItalicIcon} />
                <Image alt='strikeicon' src={StrikeIcon} onClick={() => editor.chain().focus().toggleStrike().run()} />
                <Image alt='bulletlist' src={BulletIcon} onClick={() => editor.chain().focus().toggleBulletList().run()} />
                <Image alt='OrderedList' src={NumberListicon} onClick={() => editor.chain().focus().toggleOrderedList().run()} />
                <Image alt='OrderedList' src={Uploadimg} onClick={addImage} />
                className={editor.isActive('orderedList') ? 'is-active' : ''}}
                className={editor.isActive('bulletList') ? 'is-active' : ''}/>
                <button onClick={() => editor.chain().focus().toggleHighlight().run()} className={editor.isActive('highlight') ? 'is-active' : ''}>
                    Highlight
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('left').run()} className={editor.isActive({ textAlign: 'left' }) ? 'is-active' : ''}>
                    Left
                </button>
                <button
                    onClick={() => editor.chain().focus().splitListItem('listItem').run()}
                    disabled={!editor.can().splitListItem('listItem')}
                >
                    Split list item
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('center').run()} className={editor.isActive({ textAlign: 'center' }) ? 'is-active' : ''}>
                    Center
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('right').run()} className={editor.isActive({ textAlign: 'right' }) ? 'is-active' : ''}>
                    Right
                </button>
                <button onClick={() => editor.chain().focus().setTextAlign('justify').run()} className={editor.isActive({ textAlign: 'justify' }) ? 'is-active' : ''}>
                    Justify
                </button>
            </div>
        </>
    )
}

export default Menubar
