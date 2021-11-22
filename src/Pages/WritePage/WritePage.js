import React, { useCallback, useState } from 'react';
import { style } from './WritePageStyle';
import Button from 'Components/Button/Button';
import * as axios from 'axios';
import Editor from 'Components/Editor/Editor';
import uuid from 'react-uuid';
import parse from 'html-react-parser';
import Input from 'Components/Input/Input';
import Modal from 'Components/Modal/Modal';
import { useSelector } from 'react-redux';

const WritePage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [viewContent, setViewContent] = useState([]);
  const id = uuid();
  const [url, setUrl] = useState('');
  const date = new Date();
  const [showModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [clickComponent, setClickComponent] = useState('');
  const [imgData, setImgData] = useState();
  // const thumbnail = useSelector((state) => state.getImageReducer.thumbnail);

  const getTitle = (e) => {
    const { value } = e.target;
    setTitle(value);
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

  console.log(url);

  const addPostLocalStorage = () => {
    const postTitle = {
      title: title,
      body: content,
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
    console.log(url);
  };

  const registerPost = async () => {
    try {
      const response = await axios.post(
        'https://limitless-sierra-67996.herokuapp.com/v1/posts',
        {
          id,
          title: title,
          body: content,
          tags: hashTagArr,
          thumbnail: url,
          createdAt: date,
        },
      );
      console.log('POST 성공!');
    } catch (error) {
      alert(error);
    }
  };

  const onToggleModal = useCallback((click) => {
    setShowModal(false);
    if (click) {
      setClickComponent(click);
      setShowModal(true);
    }
  }, []);

  const onOpenModal = () => {
    onToggleModal('goToBack');
  };

  return (
    <Container>
      <>
        <WriteContainer>
          <WriteHeader>
            <div>
              <WriteTitle onChange={getTitle} value={title} />
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
            <Input
              url={url}
              setUrl={setUrl}
              imgData={imgData}
              setImgData={setImgData}
            />
          </WriteHeader>
          <EditorContainer>
            <Editor data={content} setContent={setContent} />
          </EditorContainer>
          <WriteFooter>
            <div>
              <Button
                _style={{
                  background: '#fff',
                  color: 'rgb(73, 80, 87)',
                }}
                _onClick={onOpenModal}
                _text="🔙 뒤로가기"
                _link="/write"
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
                _link="/write"
              />
              <Button
                _text="불러오기"
                _onClick={getPostLocalStorage}
                _style={{
                  background: 'rgb(233, 236, 239)',
                  color: 'rgb(73, 80, 87)',
                  marginRight: '10px',
                }}
                _link="/write"
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
          onToggleModal={onToggleModal}
          clickComponent={clickComponent}
          history={history}
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
