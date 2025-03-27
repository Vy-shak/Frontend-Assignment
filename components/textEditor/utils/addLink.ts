import { Editor } from "@tiptap/react";

const addLink = (editor:Editor) => {
    const url = prompt("Enter the URL:");
  
    if (url && editor) {
      editor
        .chain()
        .focus()
        .setLink({ href: url, target: "_blank" })
        .run();
    }
  };

export {addLink}