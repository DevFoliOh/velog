import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

export default function Editor({
  content,
  loadedContent,
  setContent,
  setLoadedContent,
}) {
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
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(data);
          setLoadedContent && setLoadedContent(data);
        }}
      ></CKEditor>
    </div>
  );
}
