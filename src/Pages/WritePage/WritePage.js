import React, { useState } from 'react';
import { style } from './WritePageStyle';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const WritePage = () => {
  const [postContent, setPostContent] = useState({
    title: '',
    content: '',
    tag: '',
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value,
    });
  };

  console.log(postContent);

  return (
    <WriteContainer>
      <WriteHeader>
        <WriteTitle onChange={getValue}></WriteTitle>
        <WriteLine></WriteLine>
        <WriteTagContainer>
          <WriteTag onChange={getValue}></WriteTag>
        </WriteTagContainer>
      </WriteHeader>
      <EditorContainer>
        <CKEditor
          editor={ClassicEditor}
          data="당신의 이야기를 적어보세요..."
          onReady={(editor) => {}}
          onChange={(event, editor) => {
            const data = editor.getData();
            setPostContent({
              ...postContent,
              content: data,
            });
          }}
          onBlur={(event, editor) => {}}
          onFocus={(event, editor) => {}}
        />
      </EditorContainer>
      <WriteFooter></WriteFooter>
    </WriteContainer>
  );
};

export default WritePage;

const {
  WriteContainer,
  WriteHeader,
  WriteTitle,
  WriteLine,
  WriteTagContainer,
  WriteTag,
  EditorContainer,
  WriteFooter,
} = style;
