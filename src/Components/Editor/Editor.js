import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { removeHTMLTagFromString } from 'Common/removeHTMLTag';
export default function Editor({ content, loadedContent, setContent }) {
  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        data={
          loadedContent !== undefined
            ? loadedContent
            : content !== ''
            ? content
            : '게시글을 입력하세요'
        }
        editor={ClassicEditor}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(removeHTMLTagFromString(data));
        }}
      ></CKEditor>
    </div>
  );
}
