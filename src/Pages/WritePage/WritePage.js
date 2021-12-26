import React, { useState, useEffect, useCallback } from 'react';
import { style } from './WritePageStyle';
import { Grid, Button, Icon } from 'Common';
import Editor from 'Components/Editor';
import ImgUpload from 'Components/ImgUpload';
import Modal from 'Components/Modal/Modal';
import MenuApi from 'lib/api';
import { removeHTMLTagFromString } from 'lib/removeHTMLTag';

const WritePage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [url, setUrl] = useState();

  const [exitModal, setExitModal] = useState(false);
  const [saveModal, setSaveModal] = useState(false);
  const [command, setCommand] = useState('');

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
    try {
      await MenuApi.createPost(title, content, url, hashTagArr);
      history.push('/');
      console.log('POST 성공!');

      localStorage.removeItem('posts');
    } catch (error) {
      alert(error);
    }
  };

  const onAddLocalStorage = () => {
    const post = {
      title,
      body: removeHTMLTagFromString(content),
      tags: hashTagArr,
      thumbnail: url,
    };

    localStorage.setItem('posts', JSON.stringify(post));
  };

  const onToggleModal = useCallback((text) => {
    setExitModal(false);
    setSaveModal(false);

    if (text === 'goToBack') {
      setCommand(text);
      setExitModal(true);
    }

    if (text === 'saveLocalStorage') {
      setCommand(text);
      setSaveModal(true);
    }
  }, []);

  useEffect(() => {
    const post = JSON.parse(localStorage.getItem('posts'));

    if (!post) {
      return;
    } else {
      setTitle(post.title);
      setContent(post.body);
      setHashTagArr(post.tags);
      setUrl(post.thumbnail);
    }
  }, []);

  return (
    <Container>
      <WriteContainer>
        <WriteHeader>
          <div>
            <WriteTitle
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
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
              <WriteTag
                type="text"
                name="tag"
                placeholder="태그를 입력하세요"
                onKeyPress={handleKeyEnter}
              />
            </WriteTagContainer>
          </div>
          <ImgUpload url={url} setUrl={setUrl} />
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
              _onClick={() => onToggleModal('goToBack')}
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
              _onClick={() => {
                onToggleModal('saveLocalStorage');
                onAddLocalStorage();
              }}
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
          </div>
        </WriteFooter>
      </WriteContainer>

      <PreviewContainer>
        <div>
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </PreviewContainer>

      {exitModal && (
        <Modal
          title="포스트 작성 취소"
          content="정말 페이지를 벗어나시겠습니까?"
          modalLink="/"
          command={command}
          history={history}
          onToggleModal={onToggleModal}
        />
      )}

      {saveModal && (
        <Modal
          title="포스트 임시 저장"
          content="작성중인 포스트를 임시저장하였습니다."
          command={command}
          onToggleModal={onToggleModal}
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
