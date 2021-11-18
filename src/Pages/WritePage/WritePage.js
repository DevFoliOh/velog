import React, { useState } from 'react';
import { style } from './WritePageStyle';
import Button from 'Components/Button/Button';
import * as axios from 'axios';
import Editor from 'Components/Editor/Editor';
import uuid from 'react-uuid';
import parse from 'html-react-parser';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [viewContent, setViewContent] = useState([]);
  const id = uuid();

  const getTitle = (e) => {
    const { value } = e.target;
    setTitle({ ...title, title: value });
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

  const previewPost = () => {
    setViewContent(viewContent.concat({ ...title, ...content, hashTagArr }));
  };

  const registerPost = async () => {
    try {
      const response = await axios.post(
        'https://limitless-sierra-67996.herokuapp.com/v1/posts',
        {
          id: id,
          title: title.title,
          body: content.body,
          tags: hashTagArr,
          thumbnail:
            'https://cdn.imweb.me/upload/S201712205a3a0910b89f5/a2470afad8a92.jpg',
        },
      );
    } catch (error) {
      alert(error);
    }
    console.log('POST 성공!');
  };

  return (
    <Container>
      <WriteContainer>
        <WriteHeader>
          <WriteTitle onChange={getTitle} />
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
          <Button
            text="미리보기"
            _onClick={previewPost}
            _style={{
              background: 'rgb(233, 236, 239)',
              color: 'rgb(73, 80, 87)',
            }}
          />
          <Button text="출간하기" _onClick={registerPost} />
        </WriteFooter>
      </WriteContainer>
      <PreviewContainer>
        {viewContent.map((element, idx) => (
          <div key={idx}>
            <h2>{element.title}</h2>
            <p>{parse(element.body)}</p>
          </div>
        ))}
      </PreviewContainer>
    </Container>
  );
};

export default WritePage;

const {
  Container,
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
