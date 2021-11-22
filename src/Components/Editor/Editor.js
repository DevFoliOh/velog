import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { removeHTMLTagFromString } from 'Common/removeHTMLTag';

export default function Editor({ loadedContent, setContent }) {
  console.log(typeof loadedContent);
  console.log(loadedContent);

  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        config={{}}
        data={loadedContent}
        editor={ClassicEditor}
        onReady={() => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(removeHTMLTagFromString(data));
        }}
      ></CKEditor>
    </div>
  );
}
