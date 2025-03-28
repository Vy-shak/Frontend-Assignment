import { Image } from '@tiptap/extension-image';

const CustomImage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      src: { default: null },
      alt: { default: '' },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div.custom-image-container img',
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ['div', { class: 'custom-image-container' }, ['img', HTMLAttributes]];
  },
});

export default CustomImage;