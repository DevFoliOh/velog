import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({ content, loadedContent, setContent }) {
  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        data={
          loadedContent !== undefined
            ? loadedContent
            : content !== undefined
            ? content
            : ''
        }
        onInit={(editor) => {
          console.log('Editor is ready to use!', editor);
        }}
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      ></CKEditor>
    </div>
  );
}
