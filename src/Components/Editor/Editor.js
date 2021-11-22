import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.bubble.css';
import styled from 'styled-components';
import Responsive from 'Common/Responsive';

const Editor = ({ setContent, loadedContent }) => {
  const quillElement = useRef(null);
  const quillInstance = useRef(null);

  console.log(loadedContent);
  console.log(typeof loadedContent);

  useEffect(() => {
    let quill = new Quill(quillElement.current, {
      theme: 'bubble',
      placeholder: '텍스트 스타일을 바꾸려면 드래그하세요.',
      modules: {
        toolbar: [
          [{ header: '1' }, { header: '2' }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bubble' }],
          ['blockquote', 'code-block', 'link', 'image'],
        ],
      },
    });
    console.log(quill.setContents);
    quill.setContents(loadedContent);

    // onChange 시 content 안에 quill 내용이 들어가게 하기
    // quill.on('text-change', setContent(quill.getContents()));
  }, []);

  // let text = quill.getText();

// import React, { useState, useEffect } from 'react';
// import { CKEditor } from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

  return (
    <EditorBlock>
      <QuillWrapper>
        <div ref={quillElement} />
      </QuillWrapper>
    </EditorBlock>

    // <div className="form-wrapper">
    //   <CKEditor
    //     className="editor"
    //     config={{}}
    //     data=""
    //     editor={ClassicEditor}
    //     onReady={() => {}}
    //     onBlur={(event, editor) => {}}
    //     onFocus={(event, editor) => {}}
    //     onChange={(event, editor) => {
    //       const data = editor.getData();
    //       setContent({
    //         ...content,
    //         body: data,
    //       });
    //     }}
    //   ></CKEditor>
    // </div>
  );
};

const EditorBlock = styled(Responsive)`
  margin-top: 2rem;
  width: 700px;
  height: 500px;
  background: #fff;
  border: 1px solid #ccc;
`;

const QuillWrapper = styled.div`
  .ql-editor {
    padding: 0;
    min-height: 320px;
    font-size: 1.125rem;
    line-height: 1.5;
  }
  .ql-editor.ql-black::before {
    left: 0px;
  }
`;

export default Editor;
