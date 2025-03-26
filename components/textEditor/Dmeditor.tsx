'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Menubar from './Menubar'

const DmEditor = () => {
    const editor = useEditor({
        extensions: [StarterKit],
        content: '<p>Hello World! 🌎️</p>',
        editorProps: {
            attributes: {
                class: "bg-UIslate-50 border-2 border-UIslate-300 rounded-xl w-2xl h-72 p-4"
            }
        }
    })

    return (<>
    <Menubar editor={editor} />
<EditorContent editor={editor} />
    </>)
}

export default DmEditor
