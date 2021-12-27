import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export const Editor = ({ content, setContent }) => {
  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        data={content !== undefined ? content : ''}
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
        }}
      ></CKEditor>
    </div>
  );
};
