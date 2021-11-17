import React, { useState, useCallback } from 'react';
import { style } from './WritePageStyle';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Button from 'Components/Button/Button';
import { Axios } from 'axios';

const WritePage = () => {
  const [hashTagArr, setHashTagArr] = useState([]);
  const [postContent, setPostContent] = useState({
    id: '',
    title: '',
    body: '',
  });

  const getValue = (e) => {
    const { name, value } = e.target;
    setPostContent({
      ...postContent,
      [name]: value,
    });
  };

  const handleKeyEnter = (e) => {
    if (e.code === 'Enter') {
      setHashTagArr([...hashTagArr, e.target.value]);
      e.target.value = '';
    }
  };

  const removeHashTag = (hashtag) => {
    setHashTagArr(hashTagArr.filter((element) => hashtag !== element));
  };

  const registerPost = async () => {
    await Axios.post('https://limitless-sierra-67996.herokuapp.com/v1/posts', {
      id: postContent.id,
      title: postContent.title,
      body: postContent.body,
      tags: hashTagArr,
    }).then(() => {
      alert('포스트 등록 완료!');
      console.log('test');
    });
  };

  return (
    <>
      <WriteContainer>
        <WriteHeader>
          <WriteTitle onChange={getValue} />
          <WriteLine />
          <WriteTagContainer>
            <WriteTagContent>
              {hashTagArr.map((hashtag, idx) => {
                return (
                  <div key={idx}>
                    <span>{hashtag}</span>
                  </div>
                );
              })}
            </WriteTagContent>
            <WriteTag onKeyPress={handleKeyEnter} />
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
                body: data,
              });
            }}
            onBlur={(event, editor) => {}}
            onFocus={(event, editor) => {}}
          />
        </EditorContainer>
        <WriteFooter>
          <Button text="출간하기" onClick={registerPost} />
        </WriteFooter>
      </WriteContainer>
      <PreviewContainer></PreviewContainer>
    </>
  );
};

export default WritePage;

const {
  WriteContainer,
  WriteHeader,
  WriteTitle,
  WriteLine,
  WriteTagContainer,
  WriteTagContent,
  WriteTag,
  EditorContainer,
  WriteFooter,
  PreviewContainer,
} = style;
