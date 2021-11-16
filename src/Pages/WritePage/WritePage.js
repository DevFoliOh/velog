import React from 'react';
import { style } from './WritePageStyle';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const WritePage = () => {
  return (
    <WriteContainer>
      <WriteHeader>
        <WriteTitle></WriteTitle>
        <WriteLine></WriteLine>
        <WriteTagContainer>
          <WriteTag></WriteTag>
        </WriteTagContainer>
      </WriteHeader>
      <EditorContainer>
        <CKEditor
          editor={ClassicEditor}
          data="당신의 이야기를 적어보세요..."
          onReady={(editor) => {}}
          // onChange={(event, editor) => {
          //   const data = editor.getData();
          //   setPostContent({
          //     ...postContent,
          //     content: data,
          //   });
          // }}
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
