import React, { useCallback, useState } from 'react';
import { style } from './WritePageStyle';
import * as axios from 'axios';
import { Button, Grid, Icon } from 'Common';
import Editor from 'Components/Editor';
import Input from 'Components/ImgUpload/ImgUpload';
import Modal from 'Components/Modal/Modal';
import MenuApi from 'lib/api';
import parse from 'html-react-parser';
import { removeHTMLTagFromString } from 'lib/removeHTMLTag';

const WritePage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [viewContent, setViewContent] = useState([]);
  const [url, setUrl] = useState();
  const [showModal, setShowModal] = useState(false);
  const [check, setCheck] = useState(false);
  const [clickComponent, setClickComponent] = useState('');
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
    setViewContent({ title: title, body: content, hashTagArr: hashTagArr });
  };

  const addPostLocalStorage = () => {
    const postTitle = {
      title: title,
      content: content,
      tags: hashTagArr,
      thumbnail: url,
    };
    localStorage.setItem('posts', JSON.stringify(postTitle));
  };

  const getPostLocalStorage = () => {
    const post = JSON.parse(localStorage.getItem('posts'));
    setTitle(post.title);
    setContent(post.content);
    setHashTagArr(post.tags);
    setUrl(post.thumbnail);
    setCheck(true);
  };

  const registerPost = async () => {
    try {
      await MenuApi.createPost(title, content, url, hashTagArr);
      history.push('/');
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

  console.log(typeof viewContent.body);

  return (
    <Container>
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
          <Input url={url} setUrl={setUrl} />
        </WriteHeader>

        <EditorContainer>
          <Editor content={content} setContent={setContent} />
        </EditorContainer>

        <WriteFooter>
          <div>
            <Button
              bg="#fff"
              color="rgb(73, 80, 87)"
              padding="8px 4px"
              _onClick={onOpenModal}
            >
              <Icon icon="exitArrow" width={20} height={20} />
              &nbsp; 나가기
            </Button>
          </div>
          <div>
            <Button
              width="112px"
              bold
              bg="rgb(233, 236, 239)"
              color="rgb(73, 80, 87)"
              _onClick={addPostLocalStorage}
            >
              임시저장
            </Button>
            <Button
              width="112px"
              bold
              bg="rgb(18, 184, 134)"
              margin="0 0 0 12px"
              _onClick={registerPost}
            >
              출간하기
            </Button>
            {/* <Button
              text="불러오기"
              _onClick={getPostLocalStorage}
              style={{
                background: 'rgb(233, 236, 239)',
                color: 'rgb(73, 80, 87)',
                marginRight: '10px',
              }}
            >
              불러오기
            </Button> */}
            {/* <Button
              text="미리보기"
              _onClick={previewPost}
              style={{
                background: 'rgb(233, 236, 239)',
                color: 'rgb(73, 80, 87)',
                marginRight: '10px',
              }}
            /> */}
          </div>
        </WriteFooter>
      </WriteContainer>

      <PreviewContainer>
        <div>
          <h2>{viewContent.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: viewContent.body }}></div>
        </div>
      </PreviewContainer>
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
