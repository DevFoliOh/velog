import React, { useState } from 'react';
import { style } from './WritePageStyle';
import Button from 'Components/Button/Button';
import { Axios } from 'axios';
import Editor from 'Components/Editor/Editor';

const WritePage = () => {
  const [postContent, setPostContent] = useState({
    id: '',
    title: '',
  });
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);

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
                  <div key={idx} onClick={() => removeHashTag(hashtag)}>
                    <span>{hashtag}</span>
                  </div>
                );
              })}
            </WriteTagContent>
            <WriteTag onKeyPress={handleKeyEnter} />
          </WriteTagContainer>
        </WriteHeader>
        <EditorContainer>
          <Editor setContent={setContent} data={content} />
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
