import React, { useState, useEffect, useCallback } from 'react';
import styled from 'styled-components';
import { Grid, Button, Icon, Text, Input } from 'Common';
import { Editor, ImgUpload, Modal, Tag } from 'Components';
import MenuApi from 'lib/api';
import { removeHTMLTagFromString } from 'lib/removeHTMLTag';

export const WritePage = ({ history }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [hashTagArr, setHashTagArr] = useState([]);
  const [url, setUrl] = useState();
  const [command, setCommand] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onToggleModal = useCallback((text) => {
    setShowModal(false);

    if (text) {
      setCommand(text);
      setShowModal(true);
    }
  }, []);

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

  const addLocalStorage = () => {
    const post = {
      title,
      body: content,
      tags: hashTagArr,
      thumbnail: url,
    };

    localStorage.setItem('posts', JSON.stringify(post));
  };

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

  const handleKeyEnter = (e) => {
    if (e.code === 'Enter') {
      setHashTagArr([...hashTagArr, e.target.value]);
      e.target.value = '';
    }
  };

  const removeHashTag = useCallback(
    (hashtag) => {
      setHashTagArr(hashTagArr.filter((element) => hashtag !== element));
    },
    [hashTagArr],
  );

  return (
    <Grid is_flex height="100vh">
      <Grid is_flex column>
        <Grid is_flex justify="space-between" padding="30px 50px 0">
          <div>
            <TitleInput
              type="text"
              name="title"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <Grid
              width="64px"
              height="6px"
              bg="rgb(133, 133, 133)"
              margin="1.5rem 0 1rem"
            />
            <Grid is_flex flexWrap="wrap">
              <Grid is_flex margin="0 0 10px">
                {hashTagArr.map((hashtag, idx) => {
                  return (
                    <Tag
                      key={idx}
                      tagContent={hashtag}
                      _onClick={() => removeHashTag(hashtag)}
                    >
                      {hashtag}
                    </Tag>
                  );
                })}
              </Grid>
              <TagInput
                type="text"
                name="tag"
                placeholder="태그를 입력하세요"
                onKeyPress={handleKeyEnter}
              />
            </Grid>
          </div>
          <ImgUpload url={url} setUrl={setUrl} />
        </Grid>

        <EditorContainer>
          <Editor content={content} setContent={setContent} />
        </EditorContainer>

        <Grid
          width="100%"
          height="4rem"
          is_flex
          align="center"
          justify="space-between"
          padding="0 50px"
          bg="gba(255, 255, 255, 0.85)"
          shadow="rgb(0 0 0 / 10%) 0px 0px 8px"
        >
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

          <Grid is_flex>
            <Button
              width="112px"
              bold
              bg="rgb(233, 236, 239)"
              color="rgb(73, 80, 87)"
              _onClick={() => {
                addLocalStorage();
                onToggleModal('saveLocalStorage');
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
          </Grid>
        </Grid>
      </Grid>

      <PreviewContainer>
        <div>
          <H1>{title}</H1>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        </div>
      </PreviewContainer>

      {showModal && command === 'goToBack' && (
        <Modal
          title="포스트 작성 취소"
          content="정말 페이지를 벗어나시겠습니까?"
          history={history}
          command={command}
          onToggleModal={onToggleModal}
        />
      )}

      {showModal && command === 'saveLocalStorage' && (
        <Modal
          title="포스트 임시 저장"
          content="작성중인 포스트를 임시저장하였습니다."
          command={command}
          onToggleModal={onToggleModal}
        />
      )}
    </Grid>
  );
};

const H1 = styled.h1`
  font-size: 3rem;
  line-height: 1.5;
  letter-spacing: -0.004em;
  margin: 0 0 2rem;
  font-weight: 800;
  color: rgb(52, 58, 64);
  word-break: keep-all;

  @media (max-width: 1024px) {
    font-size: 2.25rem;
  }
`;

const TitleInput = styled.input`
  width: 100%;
  height: 66px;
  font-size: 30px;
  font-weight: 700;
  color: rgb(133, 133, 133);
  border: none;
  padding-left: 0;
`;

const TagInput = styled.input`
  width: 100%;
  height: 30px;
  font-size: 20px;
  border: none;
  padding-left: 0;
  margin-bottom: 12px;
`;

const EditorContainer = styled.div`
  display: flex;
  width: 100%;
  padding: 0 50px 14px;

  .ck.ck-editor {
    max-width: 700px;
  }
  .ck-editor__editable {
    min-height: 400px;
  }
`;
const PreviewContainer = styled.div`
  width: 100%;
  display: flex;
  padding: 100px 50px;
  background: #fafafa;

  h2 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 30px;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }
`;
