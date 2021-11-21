import React, { useState } from 'react';
import { style } from './WritePageStyle';
import Button from 'Components/Button/Button';
import * as axios from 'axios';
import Editor from 'Components/Editor/Editor';
import uuid from 'react-uuid';
import parse from 'html-react-parser';
import Input from 'Components/Input/Input';
import Modal from 'Components/Modal/Modal';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [viewContent, setViewContent] = useState([]);
  const id = uuid();
  const [url, setUrl] = useState('');
  const date = new Date();
  const [showModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);

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

  const addPostLocalStorage = () => {
    const postTitle = {
      title: title.title,
      body: content.body,
      tags: hashTagArr,
      thumbnail: url,
    };
    localStorage.setItem('posts', JSON.stringify(postTitle));
  };

  const getPostLocalStorage = () => {
    const post = JSON.parse(localStorage.getItem('posts'));
    setTitle(post.title);
    setContent(post.body);
    setHashTagArr(post.tags);
    setUrl(post.thumbnail);
    setCheck(true);
    console.log(post.body);
    console.log(typeof post.body);
  };

  const registerPost = async () => {
    try {
      const response = await axios.post(
        'https://limitless-sierra-67996.herokuapp.com/v1/posts',
        {
          id,
          title: title.title,
          body: content.body,
          tags: hashTagArr,
          thumbnail: url,
          createdAt: date,
        },
      );
    } catch (error) {
      alert(error);
    }
    console.log('POST 성공!');
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <Container>
      <>
        <WriteContainer>
          <WriteHeader>
            <div>
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
            </div>
            <Input url={url} setUrl={setUrl} value={url} />
          </WriteHeader>
          <EditorContainer>
            <Editor content={content} setContent={setContent} />
          </EditorContainer>
          <WriteFooter>
            <div>
              <Button
                _style={{
                  background: '#fff',
                  color: 'rgb(73, 80, 87)',
                }}
                _onClick={openModal}
                _text="🔙 뒤로가기"
              />
            </div>
            <div>
              <Button
                _text="임시저장"
                _onClick={addPostLocalStorage}
                _style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
              />
              <Button
                _text="불러오기"
                _onClick={getPostLocalStorage}
                _style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
              />
              <Button
                _text="미리보기"
                _onClick={previewPost}
                _style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
              />
              <Button _text="출간하기" _onClick={registerPost} _link="/" />
            </div>
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
      </>
      {showModal && (
        <Modal
          title="포스트 작성 취소"
          description="정말 페이지를 벗어나시겠습니까?"
          modalLink="/"
        />
      )}
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
