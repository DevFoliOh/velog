import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function Editor({ content, setContent }) {
  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        config={{}}
        data="게시글을 작성해주세요"
        editor={ClassicEditor}
        onReady={(editor) => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent({
            ...content,
            body: data,
          });
        }}
      />
    </div>
  );
}
