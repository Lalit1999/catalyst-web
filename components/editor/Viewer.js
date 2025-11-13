import { EditorProvider } from '@tiptap/react' ;
import { Color } from '@tiptap/extension-color' ;
import StarterKit from '@tiptap/starter-kit' ;
import ListItem from '@tiptap/extension-list-item' ;
import TextStyle from '@tiptap/extension-text-style' ;

const extensions = [
    Color.configure({ types: [TextStyle.name, ListItem.name] }),
    TextStyle.configure({ types: [ListItem.name] }),
    StarterKit.configure({
        bulletList: { keepMarks: true, keepAttributes: false},
        orderedList: { keepMarks: true, keepAttributes: false},
    }),
]

const Viewer = ({ value, rerender=false }) => {
    return (
        <EditorProvider key={rerender?value:'i'} immediatelyRender={false} editable={false} extensions={extensions} content={value} />
    ) ;
}

export default Viewer ;