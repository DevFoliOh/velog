import React, { useState, useEffect } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { removeHTMLTagFromString } from 'Common/removeHTMLTag';

export default function Editor({ loadedContent, setContent }) {
  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        config={{}}
        data=""
        editor={ClassicEditor}
        onReady={() => {}}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
        onChange={(event, editor) => {
          const data = editor.getData();
          setContent(removeHTMLTagFromString(data));
          // setContent({
          //   ...loadedContent,
          //   body: data,
          // });
        }}
      ></CKEditor>
    </div>
  );
}
