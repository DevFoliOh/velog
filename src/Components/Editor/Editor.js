import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const API_URL = 'https://limitless-sierra-67996.herokuapp.com/v1';
const UPLOAD_ENDPOINT = 'posts';

export default function Editor({ content, setContent }) {
  function uploadAdapter(loader) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file) => {
            body.append('files', file);
            let headers = new Headers();
            headers.append(
              'Origin',
              'https://limitless-sierra-67996.herokuapp.com/v1',
            );
            fetch(`${API_URL}/${UPLOAD_ENDPOINT}`, {
              method: 'POST',
              body: body,
              mode: 'no-cors',
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: `${API_URL}/${res.filename}`,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }

  function uploadPlugin(editor) {
    editor.plugins.get('FileRepository').createUploadAdapter = (loader) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <div className="form-wrapper">
      <CKEditor
        className="editor"
        config={{
          extraPlugins: [uploadPlugin],
        }}
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
