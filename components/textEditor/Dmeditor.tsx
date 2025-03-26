'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'

const Dmeditor = () => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    editorProps:{
        attributes:{
            class:"bg-UIslate-50 w-2xl border-2 border-UIslate-300 p-4 h-72  rounded-lg"
        }
    }
  })

  return <>
  <Dmeditor/>
  </>
}

export default Dmeditor
