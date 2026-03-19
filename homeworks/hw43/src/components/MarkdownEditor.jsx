import React, {useEffect, useRef} from 'react';
import Editor from '@toast-ui/editor';

const MarkdownEditor = ({height = '500px', onContentChange}) => {
    const ref = useRef(null);

    useEffect(() => {
        const editor = new Editor({
                el: ref.current,
                initialEditType: 'markdown',
                previewStyle: 'vertical',
                height: height
            }
        );
        editor.addHook('change', () => {
            onContentChange(editor.getMarkdown());
        })
        return () => {
            editor.destroy();
        };
    }, []);


    return (
        <div className='editor' ref={ref}></div>
    );
};

export default MarkdownEditor;
