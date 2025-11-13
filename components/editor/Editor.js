import { EditorProvider, useCurrentEditor } from '@tiptap/react' ;
import { Color } from '@tiptap/extension-color' ;
import StarterKit from '@tiptap/starter-kit' ;
import ListItem from '@tiptap/extension-list-item' ;
import TextStyle from '@tiptap/extension-text-style' ;
import { useRef, useCallback } from "react";

import { formattingIcons } from '@icons';
import ToolTip from '@c/toolTip/ToolTip.js';
import styles from './editor.module.css' ;

const MenuBar = () => {
    const { editor } = useCurrentEditor()
    
    if (!editor) {
        return null
    }
    
    const buttonsData = [
        {   name: 'bold', text: 'Bold', 
            onClick : () => editor.chain().focus().toggleBold().run(), 
            isActive: editor.isActive('bold'),
            isDisabled: !editor.can().chain().focus().toggleBold().run()
        }, {
            name: 'italic', text: 'Italic', 
            onClick : () => editor.chain().focus().toggleItalic().run(), 
            isActive: editor.isActive('italic'),
            isDisabled: !editor.can().chain().focus().toggleItalic().run()
        }, {
            name: 'strike', text: 'Strikethrough', 
            onClick : () => editor.chain().focus().toggleStrike().run(), 
            isActive: editor.isActive('strike'),
            isDisabled: !editor.can().chain().focus().toggleStrike().run()
        }, {
            name: 'code', text: 'Code', 
            onClick : () => editor.chain().focus().toggleCode().run(), 
            isActive: editor.isActive('code'),
            isDisabled: !editor.can().chain().focus().toggleCode().run()
        }, {
            name: 'clear', text: 'Clear Formatting', 
            onClick : () => editor.chain().focus().unsetAllMarks().run(), 
            isActive: false,
            isDisabled: false
        }, {
            name: 'paragraph', text: 'Paragraph', 
            onClick : () => editor.chain().focus().setParagraph().run(), 
            isActive: editor.isActive('paragraph'),
            isDisabled: false
        }, {
            name: 'h1', text: 'Heading Level 1', 
            onClick : () => editor.chain().focus().toggleHeading({ level: 1 }).run(), 
            isActive: editor.isActive('heading', { level: 1 }),
            isDisabled: false
        }, {
            name: 'h2', text: 'Heading Level 2', 
            onClick : () => editor.chain().focus().toggleHeading({ level: 2 }).run(), 
            isActive: editor.isActive('heading', { level: 2 }),
            isDisabled: false
        }, {
            name: 'h3', text: 'Heading Level 3', 
            onClick : () => editor.chain().focus().toggleHeading({ level: 3 }).run(), 
            isActive: editor.isActive('heading', { level: 3 }),
            isDisabled: false
        }, {
            name: 'h4', text: 'Heading Level 4', 
            onClick : () => editor.chain().focus().toggleHeading({ level: 4 }).run(),
            isActive: editor.isActive('heading', { level: 4 }),
            isDisabled: false
        }, {
            name: 'ul', text: 'Bullet list', 
            onClick : () => editor.chain().focus().toggleBulletList().run(), 
            isActive: editor.isActive('bulletList'),
            isDisabled: false
        }, {
            name: 'ol', text: 'Numbered list', 
            onClick : () => editor.chain().focus().toggleOrderedList().run(), 
            isActive: editor.isActive('orderedList'),
            isDisabled: false
        }, {
            name: 'clearList', text: 'Clear list', 
            onClick : () => editor.chain().focus().clearNodes().run(), 
            isActive: false,
            isDisabled: false
        }, {
            name: 'codeBlock', text: 'Code block', 
            onClick : () => editor.chain().focus().toggleCodeBlock().run(), 
            isActive: editor.isActive('codeBlock'),
            isDisabled: false
        }, {
            name: 'quote', text: 'Quote', 
            onClick : () => editor.chain().focus().toggleBlockquote().run(), 
            isActive: editor.isActive('blockquote'),
            isDisabled: false
        }, {
            name: 'hr', text: 'Horizontal Spacing', 
            onClick : () => editor.chain().focus().setHorizontalRule().run(), 
            isActive: false,
            isDisabled: false
        }, {
            name: 'br', text: 'Next Line', 
            onClick : () => editor.chain().focus().setHardBreak().run(), 
            isActive: false,
            isDisabled: false
        }, {
            name: 'undo', text: 'Undo', 
            onClick : () => editor.chain().focus().undo().run(), 
            isActive: false,
            isDisabled: false
        }, {
            name: 'redo', text: 'Redo', 
            onClick : () => editor.chain().focus().redo().run(), 
            isActive: false,
            isDisabled: false
        }, {
            name: 'purple', text: 'Purple', 
            onClick : () => editor.chain().focus().setColor('#693EFE').run(),
            isActive: editor.isActive('textStyle', { color: '#693EFE' }),
            isDisabled: false
        }
    ]

    return (
        <div className={styles.buttonsCon}>
        {   buttonsData.map(({onClick, isActive, isDisabled, name, text}, i) => (
                <ToolTip key={i} text={text} item={<div onClick={onClick} disabled={isDisabled} className={`${styles.editorButton} ${isActive?styles.active:''}`}>{formattingIcons[name]}</div>} />
            ))
        }
        </div>
    )
}

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: { keepMarks: true, keepAttributes: false},
        orderedList: { keepMarks: true, keepAttributes: false},
    }),
]

const fn = () => {}

const Editor = ({label, value, setValue=fn}) => {
    /* Can Add 
        1. Highlighting
        2. Floating Menus
        3. Select Menu
        4. Link
        5. Text Decoration (underline, subscript, superscript)
        6. Font Family
        7. Text Color
        8. Text Alignment

    */

    const debounceTimer = useRef(null);

    const onEditorUpdate = useCallback(({ editor }) => {
        if (debounceTimer.current) {
            clearTimeout(debounceTimer.current); // Clear previous timeout
        }

        debounceTimer.current = setTimeout(() => {
            setValue(editor.getHTML()); // Update after delay
        }, 1000); // Adjust delay as needed

    }, [setValue]);
    
    return (
        <div className={styles.editorMain}>
            {label?.length > 1 && <label>{label}</label>}
            <div className={styles.editorCon}>
                <EditorProvider immediatelyRender={false} onUpdate={onEditorUpdate} slotBefore={<MenuBar />} extensions={extensions} content={value} />
            </div>
        </div>
    ) ;
}

export default Editor ;